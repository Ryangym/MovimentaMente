import { useState } from "react";
import { CASOS, type Caso, type Qualidade } from "@/data/casos";
import { PUBLICOS, type PublicoId } from "@/data/taxonomia";
import { Botao, Card } from "@/components/ui";
import { cn } from "@/utils/cn";

const ROTULO_QUALIDADE: Record<Qualidade, { texto: string; classe: string; icone: string }> = {
  boa: {
    texto: "Boa alternativa",
    classe: "border-petroleo-500 bg-petroleo-50 text-petroleo-800",
    icone: "✓",
  },
  parcial: {
    texto: "Possível, com ressalvas",
    classe: "border-amarelo bg-amarelo-suave text-[#6b4e00]",
    icone: "!",
  },
  evitar: {
    texto: "Melhor evitar",
    classe: "border-[#b3564d] bg-[#fdecea] text-[#7a2f28]",
    icone: "✕",
  },
};

interface Props {
  publico: PublicoId | null;
}

export default function DesafioAdaptacao({ publico }: Props) {
  const [caso, setCaso] = useState<Caso | null>(null);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [respondidas, setRespondidas] = useState<string[]>([]);

  const sortear = () => {
    const pool = CASOS.filter((item) => !publico || item.publico === publico);
    const restantes = pool.filter((item) => !respondidas.includes(item.id));
    const lista = restantes.length ? restantes : pool;
    const sorteado = lista[Math.floor(Math.random() * lista.length)];
    setCaso(sorteado);
    setEscolha(null);
    setRespondidas((atual) => (restantes.length ? [...atual, sorteado.id] : [sorteado.id]));
  };

  return (
    <div>
      {!caso ? (
        <Card className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-ink">Sortear desafio de adaptação</h3>
            <p className="mt-1 max-w-2xl text-[0.95rem] text-ink-soft">
              Um caso fictício é apresentado e você escolhe a conduta mais adequada. A ferramenta
              devolve um feedback curto. Servir para treinar decisões de adaptação antes da aula.
            </p>
          </div>
          <Botao variante="amarelo" onClick={sortear} className="w-full sm:w-auto">
            🎲 Sortear caso
          </Botao>
        </Card>
      ) : (
        <Card className="border-2 border-amarelo">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-bold tracking-[0.14em] text-petroleo-600 uppercase">
              Caso fictício de adaptação
            </p>
            <span className="rounded-full bg-petroleo-50 px-3 py-1 text-xs font-bold text-petroleo-700">
              {PUBLICOS.find((item) => item.id === caso.publico)?.rotulo}
            </span>
          </div>

          <h3 className="mt-2 text-xl font-bold text-ink">{caso.titulo}</h3>
          <p className="mt-2 text-[0.97rem] text-ink">{caso.situacao}</p>
          <p className="mt-3 font-bold text-petroleo-700">{caso.pergunta}</p>

          <div className="mt-4 grid gap-3">
            {caso.opcoes.map((opcao, indice) => {
              const revelado = escolha !== null;
              const foiEscolhida = escolha === indice;
              const qualidade = ROTULO_QUALIDADE[opcao.qualidade];
              return (
                <div key={opcao.texto}>
                  <button
                    type="button"
                    onClick={() => setEscolha(indice)}
                    aria-expanded={foiEscolhida}
                    className={cn(
                      "min-h-12 w-full cursor-pointer rounded-xl border-2 p-4 text-left text-[0.97rem] font-semibold transition-colors",
                      revelado
                        ? foiEscolhida
                          ? "border-petroleo-600 bg-petroleo-50"
                          : "border-petroleo-100 bg-white text-ink-soft"
                        : "border-petroleo-200 bg-white text-ink hover:border-petroleo-400",
                    )}
                  >
                    <span className="mr-2 font-bold text-petroleo-600">
                      {String.fromCharCode(65 + indice)})
                    </span>
                    {opcao.texto}
                  </button>
                  {revelado && foiEscolhida ? (
                    <div
                      className={cn(
                        "animar-entrada mt-2 rounded-xl border-2 p-4",
                        qualidade.classe,
                      )}
                      aria-live="polite"
                    >
                      <p className="flex items-center gap-2 font-bold">
                        <span aria-hidden="true">{qualidade.icone}</span>
                        {qualidade.texto}
                      </p>
                      <p className="mt-1.5 text-[0.95rem]">{opcao.feedback}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Botao variante="primario" onClick={sortear} className="w-full sm:w-auto">
              ↻ Sortear outro caso
            </Botao>
            <Botao variante="fantasma" onClick={() => setEscolha(null)} className="w-full sm:w-auto">
              {escolha !== null ? "Tentar novamente este caso" : "Limpar"}
            </Botao>
          </div>
        </Card>
      )}
    </div>
  );
}
