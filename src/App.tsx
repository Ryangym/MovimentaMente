import { useCallback, useEffect, useRef, useState } from "react";
import DesafioAdaptacao from "@/components/DesafioAdaptacao";
import EtapaPublico from "@/components/EtapaPublico";
import Formulario from "@/components/Formulario";
import PlanoGerado from "@/components/Plano";
import Topo from "@/components/Topo";
import { Cuidados, Fundamentacao } from "@/components/Conteudo";
import { Card, Chip } from "@/components/ui";
import heroPraticas from "@/assets/hero-praticas.jpg";
import { CONTEXTOS, ORGANIZACOES, PUBLICOS, OBJETIVOS, rotuloDe } from "@/data/taxonomia";
import { FORM_INICIAL, gerarPlano, type FormState, type Plano } from "@/lib/gerador";
import { cn } from "@/utils/cn";

const PASSOS = [
  { id: 1, rotulo: "Público" },
  { id: 2, rotulo: "Planejamento" },
  { id: 3, rotulo: "Resultado" },
];

export default function App() {
  const [etapa, setEtapa] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<FormState>(FORM_INICIAL);
  const [plano, setPlano] = useState<Plano | null>(null);
  const resultadoRef = useRef<HTMLDivElement>(null);

  const atualizar = useCallback((parcela: Partial<FormState>) => {
    setForm((atual) => ({ ...atual, ...parcela }));
  }, []);

  const escolherPublico = (publico: FormState["publico"]) => {
    setForm((atual) => ({
      ...atual,
      publico,
      contexto: CONTEXTOS[publico][0].id,
      adaptacoes: [],
    }));
    setEtapa(2);
    window.setTimeout(() => {
      document.getElementById("planejador")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  const gerar = () => {
    const novo = gerarPlano(form);
    setPlano(novo);
    setEtapa(3);
    window.setTimeout(() => {
      resultadoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const voltarPublico = () => {
    setEtapa(1);
    window.setTimeout(() => {
      document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  useEffect(() => {
    if (etapa !== 3) return;
    document.title = `MovimentaMente — ${plano?.nome ?? "Plano gerado"}`;
  }, [etapa, plano]);

  const publicoSelecionado = PUBLICOS.find((item) => item.id === form.publico) ?? PUBLICOS[0];
  const objetivoSelecionado = OBJETIVOS.find((item) => item.id === form.objetivo) ?? OBJETIVOS[0];

  return (
    <div className="min-h-screen">
      <Topo />

      <main id="conteudo">
        {/* 1. INÍCIO */}
        <section id="inicio" className="scroll-mt-24 bg-gradient-to-b from-white to-petroleo-50/70 py-12 sm:py-16">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            {etapa === 1 ? (
              <>
                <div className="mx-auto max-w-3xl text-center">
                  <Chip tone="amarelo" className="mb-5">
                    Gerador de práticas corporais inclusivas
                  </Chip>
                  <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-5xl">
                    MovimentaMente
                  </h1>
                  <p className="mt-4 text-lg text-ink-soft sm:text-xl">
                    Planejador de práticas corporais acessíveis e acolhedoras para crianças com TEA
                    e adultos com transtornos mentais graves acompanhados em serviços de atenção
                    psicossocial.
                  </p>
                </div>

                <figure className="mt-10 overflow-hidden rounded-2xl border border-petroleo-100 bg-white sombra-suave">
                  <img
                    src={heroPraticas}
                    alt="Ilustração de um salão comum: uma criança caminha sobre pegadas feitas com fita, um professor demonstra um movimento, e um grupo de adultos faz exercícios de mobilidade, alguns sentados em cadeiras."
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="border-t border-petroleo-100 px-5 py-3 text-sm text-ink-soft">
                    Uma mesma sessão pode ter caminhos diferentes de participação: em pé, sentado,
                    observando primeiro ou com apoio.
                  </figcaption>
                </figure>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      titulo: "Problema",
                      texto:
                        "Atividades rígidas, competitivas, imprevisíveis ou excessivamente estimulantes reduzem a participação, a autonomia e a percepção de competência.",
                    },
                    {
                      titulo: "O que o site faz",
                      texto:
                        "Transforma princípios de Psicologia e Educação Física em orientações rápidas de planejamento: sessão completa, adaptações e cuidados profissionais.",
                    },
                    {
                      titulo: "Questão norteadora",
                      texto:
                        "Como auxiliar profissionais de Educação Física a planejar práticas que favoreçam participação, autonomia, segurança e percepção de competência?",
                    },
                  ].map((item) => (
                    <Card key={item.titulo} className="h-full">
                      <h2 className="text-sm font-bold tracking-widest text-petroleo-600 uppercase">
                        {item.titulo}
                      </h2>
                      <p className="mt-2 text-[0.95rem] text-ink">{item.texto}</p>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-2xl font-bold text-ink sm:text-3xl">
                  Plano para {publicoSelecionado.rotulo.toLowerCase()}
                </h1>
                <p className="mt-3 text-base text-ink-soft">{publicoSelecionado.delimitacao}</p>
              </div>
            )}

            {/* Barra de progresso */}
            <nav
              aria-label="Etapas do planejamento"
              className="mx-auto mt-10 max-w-3xl"
              aria-hidden={etapa === 1}
            >
              <ol className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3">
                {PASSOS.map((passo) => {
                  const ativo = etapa === passo.id;
                  const concluido = etapa > passo.id;
                  return (
                    <li key={passo.id} className="flex-1">
                      <span
                        className={cn(
                          "flex items-center gap-2.5 rounded-xl border-2 px-4 py-2.5 text-sm font-bold",
                          ativo
                            ? "border-petroleo-600 bg-petroleo-600 text-white"
                            : concluido
                              ? "border-petroleo-300 bg-white text-petroleo-700"
                              : "border-petroleo-100 bg-white/70 text-ink-soft",
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs",
                            ativo
                              ? "bg-white text-petroleo-700"
                              : concluido
                                ? "bg-petroleo-500 text-white"
                                : "bg-petroleo-100 text-petroleo-700",
                          )}
                        >
                          {concluido ? "✓" : passo.id}
                        </span>
                        {passo.id}. {passo.rotulo}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </nav>

            {etapa === 1 ? (
              <div className="mt-12">
                <EtapaPublico aoEscolher={escolherPublico} />
              </div>
            ) : null}
          </div>
        </section>

        {/* 2. PLANEJADOR */}
        <section
          id="planejador"
          hidden={etapa === 1}
          className="scroll-mt-24 py-12 sm:py-16"
          aria-labelledby="titulo-planejador"
        >
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            <div className="mb-6">
              <p className="text-sm font-bold tracking-[0.16em] text-petroleo-600 uppercase">
                Etapa 2
              </p>
              <h2 id="titulo-planejador" className="text-2xl font-bold text-ink sm:text-3xl">
                Planejamento da sessão
              </h2>
              <p className="mt-2 max-w-3xl text-base text-ink-soft">
                Poucas decisões: contexto, objetivo, duração, organização, materiais e adaptações. A
                partir disso o site seleciona atividades de um banco revisado — ele não inventa
                propostas.
              </p>
            </div>

            {etapa === 2 ? (
              <Formulario
                form={form}
                atualizar={atualizar}
                onGerar={gerar}
                onVoltar={voltarPublico}
              />
            ) : (
              <Card>
                <h3 className="text-lg font-bold text-ink">Resumo do planejamento</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Chip tone="primario">{publicoSelecionado.curto}</Chip>
                  <Chip>{rotuloDe(CONTEXTOS[form.publico], form.contexto)}</Chip>
                  <Chip>{objetivoSelecionado.rotulo}</Chip>
                  <Chip>{form.duracao} minutos</Chip>
                  <Chip>{rotuloDe(ORGANIZACOES, form.organizacao)}</Chip>
                  <Chip>
                    {form.materiais.includes("nenhum")
                      ? "sem material"
                      : `${form.materiais.length} material(is)`}
                  </Chip>
                  <Chip tone="amarelo">
                    {form.adaptacoes.length} adaptação(ões)
                  </Chip>
                </div>
                <button
                  type="button"
                  onClick={() => setEtapa(2)}
                  className="nao-imprimir mt-4 min-h-11 cursor-pointer rounded-xl border-2 border-petroleo-300 bg-white px-5 py-2.5 font-semibold text-petroleo-800 hover:bg-petroleo-50"
                >
                  ✎ Editar estes campos
                </button>
              </Card>
            )}
          </div>
        </section>

        {/* 3. RESULTADO */}
        <div ref={resultadoRef} className="scroll-mt-24">
          <section
            id="resultado"
            hidden={!plano}
            aria-live="polite"
            aria-labelledby="titulo-resultado"
            className="bg-petroleo-50/60 py-12 sm:py-16"
          >
            <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
              {plano ? (
                <PlanoGerado
                  plano={plano}
                  onGerarNovamente={gerar}
                  onEditar={() => setEtapa(2)}
                  onAbrirDesafio={() => {
                    document
                      .getElementById("desafio")
                      ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                />
              ) : null}
            </div>
          </section>
        </div>

        {/* DESAFIO DE ADAPTAÇÃO */}
        <section id="desafio" className="scroll-mt-24 py-12 sm:py-16" aria-labelledby="titulo-desafio">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            <div className="mb-6">
              <p className="text-sm font-bold tracking-[0.16em] text-petroleo-600 uppercase">
                Treino rápido
              </p>
              <h2 id="titulo-desafio" className="text-2xl font-bold text-ink sm:text-3xl">
                Desafio de adaptação
              </h2>
              <p className="mt-2 max-w-3xl text-base text-ink-soft">
                Casos fictícios para treinar decisões antes da aula. As respostas não são avaliadas,
                armazenadas nem convertidas em pontuação.
              </p>
            </div>
            <DesafioAdaptacao publico={form.publico} />
          </div>
        </section>

        <Fundamentacao />
        <Cuidados />
      </main>

      <footer className="site-rodape border-t border-petroleo-100 bg-white py-10">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-lg font-bold text-ink">MovimentaMente</p>
              <p className="mt-1 text-sm text-ink-soft">
                Planejador de práticas corporais acessíveis e acolhedoras.
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Produto educativo integrando Psicologia e Educação Física. Sem cadastro, sem banco
                de dados, sem armazenamento de dados pessoais.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-widest text-petroleo-600 uppercase">
                Aplicabilidade
              </h2>
              <ul className="mt-2 space-y-1.5 text-sm text-ink-soft">
                <li>Escolas e aulas de Educação Física</li>
                <li>CAPS e serviços de atenção psicossocial</li>
                <li>Projetos de esporte e lazer</li>
                <li>Espaços comunitários e programas sociais</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-widest text-petroleo-600 uppercase">
                Referências principais
              </h2>
              <ul className="mt-2 space-y-1.5 text-sm text-ink-soft">
                <li>Franzoni &amp; Marinho (2020), Motrivivência</li>
                <li>Liu et al. (2024), Am J Prev Med</li>
                <li>Machado &amp; Silva (2025), Pensar a Prática</li>
                <li>Barros &amp; Batista-dos-Santos (2010)</li>
                <li>White et al. (2024), IJBNPA</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 border-t border-petroleo-100 pt-5 text-sm text-ink-soft">
            Esta ferramenta oferece sugestões educativas de planejamento. Não realiza diagnóstico,
            não prescreve tratamento e não substitui avaliação individual nem equipe
            multiprofissional.
          </p>
        </div>
      </footer>
    </div>
  );
}
