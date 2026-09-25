import { useState } from "react";
import { ADAPTACOES, ALERTAS, ETICA_GERAL, ETICA_PUBLICO } from "@/data/adaptacoes";
import {
  CONTEXTOS,
  ETAPAS,
  ORGANIZACOES,
  PUBLICOS,
  rotuloDe,
} from "@/data/taxonomia";
import { SUBSTITUICOES, type Plano } from "@/lib/gerador";
import Escala from "@/components/Escala";
import { Aviso, Botao, Card, Chip, ListaComMarcador } from "@/components/ui";
import { cn } from "@/utils/cn";

interface Props {
  plano: Plano;
  onGerarNovamente: () => void;
  onEditar: () => void;
  onAbrirDesafio: () => void;
}

const ESCALAS_ENTRADA = ["1 — Muito baixa", "2 — Baixa", "3 — Moderada", "4 — Boa", "5 — Muito boa"];
const ESCALAS_ESFORCO = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default function PlanoGerado({ plano, onGerarNovamente, onEditar, onAbrirDesafio }: Props) {
  const publico = PUBLICOS.find((item) => item.id === plano.form.publico) ?? PUBLICOS[0];
  const [extras, setExtras] = useState<string[]>([]);

  const idsAtivos = [...plano.form.adaptacoes, ...extras];
  const adaptacoes = ADAPTACOES.filter((item) => idsAtivos.includes(item.id));
  const alertas = Array.from(
    new Set([...plano.alertas, ...extras.map((id) => ALERTAS[id]).filter(Boolean) as string[]]),
  );

  const alternarExtra = (id: string) =>
    setExtras((atual) => {
      const planoAtual = plano.form.adaptacoes;
      if (planoAtual.includes(id)) return atual;
      return atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id];
    });

  return (
    <div className="space-y-6 animar-entrada">
      {/* Cabeçalho do plano */}
      <Card className="border-2 border-petroleo-600 bg-gradient-to-br from-white via-white to-petroleo-50">
        <div className="somente-impressao mb-4 hidden border-b border-petroleo-200 pb-3 text-sm">
          <strong>MovimentaMente</strong> — Planejador de práticas corporais acessíveis e
          acolhedoras. Plano {plano.codigo}. Ferramenta de apoio ao planejamento profissional;
          não substitui avaliação individual.
        </div>
        <p className="text-sm font-bold tracking-[0.16em] text-petroleo-600 uppercase">
          Plano gerado · {plano.codigo}
        </p>
        <h2
          id="titulo-resultado"
          className="mt-2 text-2xl font-bold text-ink sm:text-3xl"
        >
          {plano.nome}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Chip tone="primario">
            <span aria-hidden="true">{publico.icone}</span> {publico.curto}
          </Chip>
          <Chip>{rotuloDe(CONTEXTOS[plano.form.publico], plano.form.contexto)}</Chip>
          <Chip>{plano.form.duracao} minutos</Chip>
          <Chip>{rotuloDe(ORGANIZACOES, plano.form.organizacao)}</Chip>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border-l-4 border-petroleo-500 bg-petroleo-50/60 p-4">
            <p className="text-xs font-bold tracking-widest text-petroleo-700 uppercase">
              Objetivo físico
            </p>
            <p className="mt-1 font-semibold text-ink">{plano.objetivoFisico}</p>
          </div>
          <div className="rounded-xl border-l-4 border-amarelo bg-amarelo-suave/60 p-4">
            <p className="text-xs font-bold tracking-widest text-[#7a5800] uppercase">
              Objetivo psicológico
            </p>
            <p className="mt-1 font-semibold text-ink">{plano.objetivoPsico}</p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-sm font-bold text-ink">Por que estas atividades foram escolhidas</p>
          <ul className="mt-2 grid gap-1.5 text-sm text-ink-soft sm:grid-cols-2">
            {plano.criterios.map((criterio) => (
              <li key={criterio} className="flex gap-2">
                <span aria-hidden="true" className="text-petroleo-500">
                  ▸
                </span>
                {criterio}
              </li>
            ))}
          </ul>
        </div>
      </Card>

      {/* Sequência da sessão */}
      <section aria-labelledby="titulo-sequencia">
        <h3 id="titulo-sequencia" className="mb-3 text-xl font-bold text-ink">
          Sequência da sessão
        </h3>
        <ol className="space-y-4">
          {plano.etapas.map((item, indice) => {
            const meta = ETAPAS.find((etapa) => etapa.id === item.etapa) ?? ETAPAS[0];
            return (
              <li key={item.etapa} className="quebrar-pagina">
                <Card className="border-l-4 border-petroleo-400">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="flex items-center gap-2.5 text-lg font-bold text-ink">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-petroleo-600 text-base font-bold text-white"
                      >
                        {indice + 1}
                      </span>
                      {meta.rotulo}
                    </h4>
                    <Chip tone="claro">⏱ {item.minutos} minutos</Chip>
                  </div>

                  <p className="mt-3 font-semibold text-petroleo-700">{item.atividade.titulo}</p>
                  <p className="mt-1.5 text-[0.97rem] text-ink">{item.atividade.descricao}</p>

                  <div className="mt-4 grid gap-4 lg:grid-cols-2">
                    <div>
                      <p className="text-xs font-bold tracking-widest text-petroleo-600 uppercase">
                        Como conduzir
                      </p>
                      <div className="mt-2">
                        <ListaComMarcador itens={item.atividade.conduzir} />
                      </div>
                    </div>
                    <div className="space-y-3">
                      {item.atividade.sinais?.length ? (
                        <div className="rounded-lg bg-amarelo-suave/70 p-3">
                          <p className="text-xs font-bold tracking-widest text-[#7a5800] uppercase">
                            Sinalizações
                          </p>
                          <p className="mt-1 text-sm text-ink">
                            {item.atividade.sinais.join(" · ")}
                          </p>
                        </div>
                      ) : null}
                      {item.atividade.variacao ? (
                        <div className="rounded-lg border border-petroleo-200 bg-white p-3">
                          <p className="text-xs font-bold tracking-widest text-petroleo-600 uppercase">
                            Variação de acesso
                          </p>
                          <p className="mt-1 text-sm text-ink">{item.atividade.variacao}</p>
                        </div>
                      ) : null}
                      <div className="rounded-lg bg-petroleo-50 p-3">
                        <p className="text-xs font-bold tracking-widest text-petroleo-600 uppercase">
                          Materiais desta etapa
                        </p>
                        <p className="mt-1 text-sm text-ink">
                          {item.atividade.materiais
                            .filter((m) => m !== "nenhum")
                            .map((m) => rotuloDe(MATERIAIS_ROTULO, m))
                            .join(", ") || "nenhum material obrigatório"}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Materiais para preparar */}
      <Card className="quebrar-pagina">
        <h3 className="text-lg font-bold text-ink">Antes de começar: materiais e espaço</h3>
        <p className="mt-2 text-[0.95rem] text-ink">
          {plano.materiaisNecessarios.length
            ? `Reúna: ${plano.materiaisNecessarios
                .map((m) => rotuloDe(MATERIAIS_ROTULO, m))
                .join(", ")}.`
            : "Esta sessão funciona sem material específico."}{" "}
          Defina o espaço, o local de pausa e o sinal de início e fim antes da chegada dos
          participantes.
        </p>

        {plano.materiaisFaltantes.length ? (
          <div className="mt-4 rounded-xl border-2 border-amarelo bg-amarelo-suave/70 p-4">
            <p className="text-xs font-bold tracking-widest text-[#7a5800] uppercase">
              Sem estes materiais? Substituições possíveis
            </p>
            <ul className="mt-2 space-y-1.5 text-[0.95rem] text-ink">
              {plano.materiaisFaltantes.map((material) => (
                <li key={material}>
                  <strong>{rotuloDe(MATERIAIS_ROTULO, material)}</strong>:{" "}
                  {SUBSTITUICOES[material] ?? "adapte com objetos leves e seguros do próprio espaço"}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Card>

      {/* Check-in e check-out */}
      <section aria-labelledby="titulo-check" className="quebrar-pagina">
        <Card>
          <h3 id="titulo-check" className="text-xl font-bold text-ink">
            Check-in e check-out
          </h3>
          <p className="mt-2 max-w-3xl text-[0.95rem] text-ink-soft">
            Recurso de comunicação para usar com o participante antes e depois da prática. Não é
            teste psicológico, não é diagnóstico e não registra dados: serve para a pessoa nomear a
            própria experiência e para você ajustar a intensidade.
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Escala
              pergunta="Como está sua disposição agora?"
              opcoes={ESCALAS_ENTRADA}
              dica="Antes da atividade. Pode ser respondido com dedos, apontando a escala ou por escrito."
              destaque
            />
            <Escala
              pergunta="Qual foi seu esforço percebido? (0 a 10)"
              opcoes={ESCALAS_ESFORCO}
              dica="Depois da atividade. Entre 3 e 5 costuma indicar intensidade moderada e segura."
            />
            <Escala
              pergunta="Como foi participar?"
              opcoes={["Muito difícil", "Difícil", "Ok", "Bom", "Muito bom"]}
              dica="Aceite resposta por gesto, apontar em imagem ou apenas uma palavra."
            />
            <Escala
              pergunta="Você gostaria de repetir?"
              opcoes={["Não", "Talvez", "Sim", "Sim, e quero algo novo"]}
              dica="Use a resposta para planejar a próxima sessão."
            />
          </div>
        </Card>
      </section>

      {/* Adaptações */}
      <section aria-labelledby="titulo-adaptacoes" className="quebrar-pagina">
        <Card>
          <h3 id="titulo-adaptacoes" className="text-xl font-bold text-ink">
            Adaptações recomendadas
          </h3>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-widest text-petroleo-600 uppercase">
                Marcadas no planejamento
              </p>
              {adaptacoes.length ? (
                <ul className="mt-2 space-y-3">
                  {adaptacoes.map((adaptacao) => (
                    <li key={adaptacao.id} className="rounded-xl bg-petroleo-50 p-3">
                      <p className="font-bold text-ink">{adaptacao.rotulo}</p>
                      <p className="mt-1 text-sm text-ink">{adaptacao.texto}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-ink-soft">
                  Nenhuma adaptação extra marcada. As recomendações-base do público continuam
                  válidas.
                </p>
              )}
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-petroleo-600 uppercase">
                Recomendações-base deste público
              </p>
              <div className="mt-2">
                <ListaComMarcador itens={plano.recomendacoesBase} />
              </div>
            </div>
          </div>

          <div className="nao-imprimir mt-5 rounded-xl border-2 border-dashed border-petroleo-300 p-4">
            <p className="font-bold text-ink">Preciso adaptar durante a aula</p>
            <p className="mt-1 text-sm text-ink-soft">
              Toque em uma opção para acrescentar orientações ao plano exibido.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {ADAPTACOES.filter((item) => item.publicos.includes(plano.form.publico)).map(
                (adaptacao) => {
                  const ativo = idsAtivos.includes(adaptacao.id);
                  return (
                    <button
                      key={adaptacao.id}
                      type="button"
                      aria-pressed={ativo}
                      onClick={() => alternarExtra(adaptacao.id)}
                      className={cn(
                        "min-h-10 cursor-pointer rounded-lg border-2 px-3.5 py-2 text-sm font-semibold transition-colors",
                        ativo
                          ? "border-amarelo bg-amarelo text-[#3d2c00]"
                          : "border-petroleo-200 bg-white text-ink hover:border-petroleo-400",
                      )}
                    >
                      <span aria-hidden="true">{ativo ? "✓" : "＋"}</span> {adaptacao.rotulo}
                    </button>
                  );
                },
              )}
            </div>
          </div>

          {alertas.length ? (
            <div className="mt-5">
              <p className="text-xs font-bold tracking-widest text-[#7a5800] uppercase">
                Cuidados ligados às adaptações escolhidas
              </p>
              <div className="mt-2">
                <ListaComMarcador itens={alertas} marcador="!" />
              </div>
            </div>
          ) : null}
        </Card>
      </section>

      {/* Cuidados profissionais */}
      <section aria-labelledby="titulo-cuidados-plano" className="quebrar-pagina">
        <Card>
          <h3 id="titulo-cuidados-plano" className="text-xl font-bold text-ink">
            Cuidados profissionais desta sessão
          </h3>
          <div className="mt-3 grid gap-5 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-widest text-petroleo-600 uppercase">
                Condutas de segurança e planejamento
              </p>
              <div className="mt-2">
                <ListaComMarcador itens={plano.cuidados} />
              </div>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-petroleo-600 uppercase">
                O que evitar com {publico.curto.toLowerCase()}
              </p>
              <div className="mt-2">
                <ListaComMarcador itens={ETICA_PUBLICO[plano.form.publico]} marcador="✕" />
              </div>
              <div className="mt-4">
                <p className="text-xs font-bold tracking-widest text-petroleo-600 uppercase">
                  Necessidades consideradas neste público
                </p>
                <div className="mt-2">
                  <ListaComMarcador itens={publico.necessidades} marcador="✓" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Aviso titulo="Limites da ferramenta">
              <ul className="space-y-1.5">
                {ETICA_GERAL.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Aviso>
          </div>
        </Card>
      </section>

      {/* Ações */}
      <div className="nao-imprimir flex flex-wrap gap-3">
        <Botao variante="primario" onClick={onGerarNovamente} className="w-full sm:w-auto">
          ↻ Gerar novamente
        </Botao>
        <Botao variante="amarelo" onClick={() => window.print()} className="w-full sm:w-auto">
          🖨 Imprimir ou salvar em PDF
        </Botao>
        <Botao variante="secundario" onClick={onAbrirDesafio} className="w-full sm:w-auto">
          🎲 Sortear desafio de adaptação
        </Botao>
        <Botao variante="secundario" onClick={onEditar} className="w-full sm:w-auto">
          ✎ Ajustar o planejamento
        </Botao>
      </div>
    </div>
  );
}

const MATERIAIS_ROTULO = [
  { id: "bolas", rotulo: "bolas" },
  { id: "cones", rotulo: "cones / marcações" },
  { id: "bamboles", rotulo: "bambolês" },
  { id: "cadeiras", rotulo: "cadeiras" },
  { id: "cordas", rotulo: "cordas" },
  { id: "fita", rotulo: "fita crepe / giz" },
  { id: "garrafas", rotulo: "garrafas PET" },
  { id: "cartoes", rotulo: "cartões ou imagens" },
  { id: "musica", rotulo: "música / caixa de som" },
  { id: "nenhum", rotulo: "nenhum material" },
];
