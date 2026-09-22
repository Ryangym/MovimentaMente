import { useEffect, useState } from "react";
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

  useEffect(() => {
    document.documentElement.dataset.fontsize = fonte;
  }, [fonte]);

  useEffect(() => {
    document.documentElement.dataset.movimento = movimento;
  }, [movimento]);

  return (
    <header className="site-topo sticky top-0 z-40 border-b border-petroleo-100 bg-white/95 backdrop-blur">
      <a href="#conteudo" className="saltar-link">
        Pular para o conteúdo principal
      </a>
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-petroleo-600 text-lg font-bold text-white"
          >
            M
          </span>
          <span>
            <span className="block text-lg leading-tight font-bold text-ink">MovimentaMente</span>
            <span className="block text-xs text-ink-soft">
              Práticas corporais acessíveis e acolhedoras
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="navegacao order-3 w-full sm:order-2 sm:w-auto">
          <ul className="flex flex-wrap gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block rounded-lg px-3 py-2 text-sm font-semibold text-petroleo-800 hover:bg-petroleo-50"
                >
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="order-2 ml-auto flex items-center gap-2 sm:order-3">
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
          <button
            type="button"
            onClick={() => setMovimento(movimento === "normal" ? "reduzido" : "normal")}
            aria-pressed={movimento === "reduzido"}
            className="min-h-10 cursor-pointer rounded-lg border-2 border-petroleo-200 bg-white px-3 text-sm font-semibold text-petroleo-800 hover:bg-petroleo-50"
          >
            {movimento === "reduzido" ? "Animações: reduzidas" : "Animações: normais"}
          </button>
        </div>
      </div>
    </header>
  );
}
