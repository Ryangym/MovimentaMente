import { PUBLICOS, type PublicoId } from "@/data/taxonomia";
import { Botao, Card } from "@/components/ui";

interface Props {
  aoEscolher: (publico: PublicoId) => void;
}

export default function EtapaPublico({ aoEscolher }: Props) {
  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-ink sm:text-4xl">Para quem você deseja planejar?</h2>
        <p className="mt-4 text-lg text-ink-soft">
          Escolha um público para ver apenas atividades, contextos e adaptações compatíveis. Os dois
          públicos enfrentam barreiras diferentes de participação — por isso o planejamento não é o
          mesmo.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {PUBLICOS.map((publico) => (
          <Card key={publico.id} className="flex flex-col border-2 border-petroleo-100">
            <span aria-hidden="true" className="text-3xl">
              {publico.icone}
            </span>
            <h3 className="mt-3 text-xl font-bold text-ink">{publico.rotulo}</h3>
            <p className="mt-2 text-[0.95rem] text-ink">{publico.delimitacao}</p>

            <p className="mt-4 text-xs font-bold tracking-widest text-petroleo-600 uppercase">
              Necessidades consideradas
            </p>
            <ul className="mt-2 flex-1 space-y-1.5">
              {publico.necessidades.map((necessidade) => (
                <li key={necessidade} className="flex gap-2 text-sm text-ink-soft">
                  <span aria-hidden="true" className="text-petroleo-500">
                    •
                  </span>
                  {necessidade}
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <Botao
                variante="primario"
                onClick={() => aoEscolher(publico.id)}
                className="w-full"
              >
                Planejar para {publico.curto.toLowerCase()}
              </Botao>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border-2 border-petroleo-200 bg-white p-5 sombra-suave sm:p-6">
        <h3 className="text-lg font-bold text-ink">Cuidado conceitual</h3>
        <p className="mt-2 text-[0.97rem] text-ink">
          O TEA é uma condição do neurodesenvolvimento e <strong>não</strong> é sinônimo de
          transtorno mental grave. Os públicos foram reunidos no produto porque podem encontrar
          barreiras diferentes de participação nas práticas corporais, e não porque possuem as
          mesmas características. Nenhum diagnóstico é feito aqui.
        </p>
      </div>
    </div>
  );
}
