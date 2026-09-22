import { ETICA_GERAL, ETICA_PUBLICO } from "@/data/adaptacoes";
import { CONCEITOS, INTEGRACAO, LIMITES, REFERENCIAS } from "@/data/conteudo";
import { PUBLICOS } from "@/data/taxonomia";
import { Aviso, Card, Chip, ListaComMarcador, TituloSecao } from "@/components/ui";

export function Fundamentacao() {
  return (
    <section id="fundamentacao" className="scroll-mt-24 py-14 sm:py-20" aria-labelledby="titulo-fund">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <TituloSecao
          id="titulo-fund"
          eyebrow="Fundamentação"
          titulo="Cinco princípios que orientam o gerador"
          descricao="Cada plano combina um alvo físico e um alvo psicológico. Os princípios abaixo definem por que as atividades são propostas dessa forma e não de outra."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONCEITOS.map((conceito) => (
            <Card key={conceito.id} as="article" className="flex flex-col">
              <h3 className="text-lg font-bold text-petroleo-700">{conceito.titulo}</h3>
              <p className="mt-2 text-[0.95rem] text-ink">{conceito.conceito}</p>
              <div className="mt-3 rounded-lg bg-petroleo-50 p-3">
                <p className="text-xs font-bold tracking-widest text-petroleo-600 uppercase">
                  Aplicação
                </p>
                <p className="mt-1 text-sm text-ink">{conceito.aplicacao}</p>
              </div>
              <p className="mt-3 text-xs text-ink-soft">{conceito.areas}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-bold text-ink">Como Psicologia e Educação Física se encontram</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <caption className="sr-only">
                  Correspondência entre conceitos da Psicologia e decisões da Educação Física
                </caption>
                <thead>
                  <tr className="border-b-2 border-petroleo-200">
                    <th scope="col" className="py-2 pr-3 font-bold text-petroleo-700">
                      Psicologia
                    </th>
                    <th scope="col" className="py-2 font-bold text-petroleo-700">
                      Educação Física
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {INTEGRACAO.map((linha) => (
                    <tr key={linha.psicologia} className="border-b border-petroleo-100">
                      <th scope="row" className="py-2.5 pr-3 font-semibold text-ink">
                        {linha.psicologia}
                      </th>
                      <td className="py-2.5 text-ink-soft">{linha.educacaoFisica}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-ink">Delimitação dos públicos</h3>
            <p className="mt-2 text-[0.95rem] text-ink-soft">
              Os dois públicos foram reunidos no produto porque podem encontrar barreiras diferentes
              de participação nas práticas corporais — e não porque possuam as mesmas
              características.
            </p>
            <div className="mt-4 space-y-4">
              {PUBLICOS.map((publico) => (
                <div key={publico.id} className="rounded-xl border border-petroleo-100 p-4">
                  <h4 className="font-bold text-ink">
                    <span aria-hidden="true" className="mr-2">
                      {publico.icone}
                    </span>
                    {publico.rotulo}
                  </h4>
                  <p className="mt-1.5 text-sm text-ink">{publico.delimitacao}</p>
                  <p className="mt-2 text-sm text-petroleo-700 font-semibold">
                    {publico.destaque}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Aviso titulo="Cuidado conceitual" tone="petroleo">
                <p>
                  O TEA é uma condição do neurodesenvolvimento e não é sinônimo de transtorno mental
                  grave. São condições distintas, com necessidades de apoio diferentes, e nenhuma
                  delas define o que a pessoa é capaz de fazer.
                </p>
              </Aviso>
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <TituloSecao
            id="titulo-referencias"
            eyebrow="Referências"
            titulo="Onde o conteúdo foi buscado"
            descricao="Referências utilizadas para fundamentar os princípios, as adaptações e a atuação profissional. Confira os dados nos artigos antes de citar."
          />
          <Card>
            <ol className="space-y-4">
              {REFERENCIAS.map((referencia, indice) => (
                <li key={referencia.texto} className="border-b border-petroleo-100 pb-4 last:border-0 last:pb-0">
                  <p className="text-[0.95rem] text-ink">
                    <span className="mr-2 font-bold text-petroleo-600">[{indice + 1}]</span>
                    {referencia.texto}{" "}
                    {referencia.link ? (
                      <a
                        href={referencia.link}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-petroleo-700 underline decoration-petroleo-300 underline-offset-2"
                      >
                        DOI
                      </a>
                    ) : null}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">
                    <span className="font-semibold text-petroleo-600">Uso no projeto:</span>{" "}
                    {referencia.uso}
                  </p>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function Cuidados() {
  return (
    <section id="cuidados" className="scroll-mt-24 bg-white py-14 sm:py-20" aria-labelledby="titulo-cuidados">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <TituloSecao
          id="titulo-cuidados"
          eyebrow="Ética e limites"
          titulo="O que esta ferramenta faz — e o que ela não faz"
          descricao="O MovimentaMente apoia o planejamento profissional. Ele não avalia, não diagnostica e não decide pela pessoa."
        />

        <div className="mb-8">
          <Aviso titulo="Aviso importante">
            <p className="font-semibold">
              Esta ferramenta oferece sugestões educativas de planejamento. Ela não realiza
              diagnóstico, não prescreve tratamento e não substitui avaliação individual,
              acompanhamento psicológico, psiquiátrico, médico ou atuação de equipe
              multiprofissional. As atividades devem ser adaptadas às condições, preferências,
              necessidades de apoio e orientações de saúde de cada pessoa.
            </p>
            <ul className="mt-2 space-y-1.5">
              {ETICA_GERAL.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Aviso>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {PUBLICOS.map((publico) => (
            <Card key={publico.id}>
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="text-xl">
                  {publico.icone}
                </span>
                <h3 className="text-lg font-bold text-ink">
                  Orientações para {publico.rotulo.toLowerCase()}
                </h3>
              </div>
              <div className="mt-3">
                <ListaComMarcador itens={ETICA_PUBLICO[publico.id]} marcador="✕" />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-bold text-ink">Limites técnicos</h3>
            <div className="mt-3">
              <ListaComMarcador itens={LIMITES} />
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-ink">Acessibilidade deste site</h3>
            <p className="mt-2 text-[0.95rem] text-ink-soft">
              O produto fala de inclusão, então ele também precisa ser acessível.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "HTML semântico",
                "Contraste adequado",
                "Botões grandes",
                "Navegação por teclado",
                "Foco visível em amarelo",
                "Opção de aumentar a fonte",
                "Opção de reduzir animações",
                "Conteúdo anunciado com aria-live",
                "Não depende só de cor",
                "Responsivo no celular",
                "Versão para impressão em PDF",
              ].map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
