import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

const FONTES = [
  { id: "normal", rotulo: "A", descricao: "Fonte normal" },
  { id: "medio", rotulo: "A+", descricao: "Fonte maior" },
  { id: "grande", rotulo: "A++", descricao: "Fonte muito maior" },
] as const;

const LINKS = [
  { href: "#inicio", texto: "Início" },
  { href: "#planejador", texto: "Planejar" },
  { href: "#fundamentacao", texto: "Fundamentação" },
  { href: "#cuidados", texto: "Ética e limites" },
];

export default function Topo() {
  const [fonte, setFonte] = useState<"normal" | "medio" | "grande">("normal");
  const [movimento, setMovimento] = useState<"normal" | "reduzido">("normal");
  const [menuAberto, setMenuAberto] = useState(false);
  const botaoMenuRef = useRef<HTMLButtonElement>(null);
  const painelMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dataset.fontsize = fonte;
  }, [fonte]);

  useEffect(() => {
    document.documentElement.dataset.movimento = movimento;
  }, [movimento]);

  // Fecha o menu quando a janela chega à largura do layout de mesa.
  useEffect(() => {
    const consulta = window.matchMedia("(min-width: 1024px)");
    const aoMudar = (evento: MediaQueryListEvent) => {
      if (evento.matches) setMenuAberto(false);
    };
    consulta.addEventListener("change", aoMudar);
    return () => consulta.removeEventListener("change", aoMudar);
  }, []);

  // Fecha o menu ao clicar ou tocar fora dele.
  useEffect(() => {
    if (!menuAberto) return;
    const aoApontarFora = (evento: PointerEvent) => {
      const alvo = evento.target as Node;
      if (painelMenuRef.current?.contains(alvo) || botaoMenuRef.current?.contains(alvo)) return;
      setMenuAberto(false);
    };
    document.addEventListener("pointerdown", aoApontarFora);
    return () => document.removeEventListener("pointerdown", aoApontarFora);
  }, [menuAberto]);

  // Fecha o menu com a tecla Esc e devolve o foco ao botão.
  useEffect(() => {
    if (!menuAberto) return;
    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key !== "Escape") return;
      setMenuAberto(false);
      botaoMenuRef.current?.focus();
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [menuAberto]);

  const alternarMovimento = () =>
    setMovimento((atual) => (atual === "normal" ? "reduzido" : "normal"));

  const grupoFonte = (
    <div
      role="group"
      aria-label="Tamanho da fonte"
      className="flex overflow-hidden rounded-lg border-2 border-petroleo-200"
    >
      {FONTES.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => setFonte(item.id)}
          aria-pressed={fonte === item.id}
          title={item.descricao}
          className={cn(
            "min-h-10 w-11 cursor-pointer text-sm font-bold transition-colors",
            fonte === item.id
              ? "bg-petroleo-600 text-white"
              : "bg-white text-petroleo-800 hover:bg-petroleo-50",
          )}
        >
          {item.rotulo}
        </button>
      ))}
    </div>
  );

  return (
    <header className="site-topo sticky top-0 z-40 border-b border-petroleo-100 bg-white/95 backdrop-blur">
      <a href="#conteudo" className="saltar-link">
        Pular para o conteúdo principal
      </a>

      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center gap-x-4 gap-y-3 px-4 py-3 sm:px-6 lg:gap-x-4 xl:gap-x-5">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-petroleo-600 text-lg font-bold text-white"
          >
            M
          </span>
          <span className="min-w-0">
            <span className="block truncate text-lg leading-tight font-bold text-ink">
              MovimentaMente
            </span>
            <span className="hidden text-xs text-ink-soft xl:block">
              Práticas corporais acessíveis e acolhedoras
            </span>
          </span>
        </a>

        {/* Navegação — visível apenas em telas largas */}
        <nav
          aria-label="Navegação principal"
          className="navegacao hidden lg:ml-2 lg:block xl:ml-4"
        >
          <ul className="flex flex-wrap gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block rounded-lg px-2.5 py-2 text-sm font-semibold text-petroleo-800 hover:bg-petroleo-50"
                >
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Controles de acessibilidade — visíveis apenas em telas largas */}
        <div className="ml-auto hidden items-center gap-2 lg:flex">
          {grupoFonte}
          <button
            type="button"
            onClick={alternarMovimento}
            aria-pressed={movimento === "reduzido"}
            className="min-h-10 cursor-pointer rounded-lg border-2 border-petroleo-200 bg-white px-2.5 text-sm font-semibold whitespace-nowrap text-petroleo-800 hover:bg-petroleo-50"
          >
            {movimento === "reduzido" ? "Animações: reduzidas" : "Animações: normais"}
          </button>
        </div>

        {/* Botão do menu hamburguer — telas menores */}
        <button
          ref={botaoMenuRef}
          type="button"
          onClick={() => setMenuAberto((aberto) => !aberto)}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          className={cn(
            "ml-auto flex min-h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg border-2 transition-colors lg:hidden",
            menuAberto
              ? "border-petroleo-600 bg-petroleo-600 text-white"
              : "border-petroleo-200 bg-white text-petroleo-800 hover:bg-petroleo-50",
          )}
        >
          <span aria-hidden="true" className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200",
                menuAberto ? "top-[7px] rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute top-[7px] left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200",
                menuAberto && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200",
                menuAberto ? "top-[7px] -rotate-45" : "top-[14px]",
              )}
            />
          </span>
        </button>
      </div>

      {/* Painel do menu — telas menores */}
      <div
        id="menu-mobile"
        ref={painelMenuRef}
        className={cn(
          "max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-petroleo-100 bg-white lg:hidden",
          menuAberto ? "animar-menu" : "hidden",
        )}
      >
        <nav
          aria-label="Navegação principal"
          className="navegacao mx-auto max-w-[1100px] px-4 pt-3 pb-2 sm:px-6"
        >
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuAberto(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-petroleo-800 hover:bg-petroleo-50"
                >
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-auto max-w-[1100px] border-t border-petroleo-100 px-4 py-4 sm:px-6">
          <p className="mb-2 text-xs font-bold tracking-widest text-petroleo-600 uppercase">
            Tamanho da fonte
          </p>
          {grupoFonte}

          <p className="mt-4 mb-2 text-xs font-bold tracking-widest text-petroleo-600 uppercase">
            Animações
          </p>
          <button
            type="button"
            onClick={alternarMovimento}
            aria-pressed={movimento === "reduzido"}
            className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 rounded-lg border-2 border-petroleo-200 bg-white px-3.5 text-sm font-semibold text-petroleo-800 transition-colors hover:bg-petroleo-50"
          >
            <span>Reduzir animações</span>
            <span
              aria-hidden="true"
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-bold",
                movimento === "reduzido"
                  ? "bg-petroleo-600 text-white"
                  : "bg-petroleo-50 text-petroleo-700",
              )}
            >
              {movimento === "reduzido" ? "Ativada" : "Desativada"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
