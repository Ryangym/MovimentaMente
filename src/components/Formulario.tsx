import { ADAPTACOES } from "@/data/adaptacoes";
import {
  CONTEXTOS,
  DURACOES,
  MATERIAIS,
  OBJETIVOS,
  ORGANIZACOES,
  PUBLICOS,
  type PublicoId,
} from "@/data/taxonomia";
import type { FormState } from "@/lib/gerador";
import { Botao, Card } from "@/components/ui";
import { cn } from "@/utils/cn";

interface Props {
  form: FormState;
  atualizar: (parcela: Partial<FormState>) => void;
  onGerar: () => void;
  onVoltar: () => void;
}

function Legenda({
  numero,
  titulo,
  ajuda,
}: {
  numero: string;
  titulo: string;
  ajuda: string;
}) {
  return (
    <legend className="mb-3 w-full">
      <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-petroleo-600 text-sm font-bold text-white">
        {numero}
      </span>
      <span className="text-lg font-bold text-ink">{titulo}</span>
      <span className="mt-1 block text-sm text-ink-soft">{ajuda}</span>
    </legend>
  );
}

function OpcaoLinha({
  nome,
  valor,
  rotulo,
  descricao,
  selecionado,
  aoSelecionar,
}: {
  nome: string;
  valor: string;
  rotulo: string;
  descricao?: string;
  selecionado: boolean;
  aoSelecionar: (valor: string) => void;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start gap-3 rounded-xl border-2 p-3.5 transition-colors",
        selecionado
          ? "border-petroleo-600 bg-petroleo-50"
          : "border-petroleo-100 bg-white hover:border-petroleo-300",
      )}
    >
      <input
        type="radio"
        name={nome}
        value={valor}
        checked={selecionado}
        onChange={() => aoSelecionar(valor)}
        className="mt-1 h-5 w-5 shrink-0 accent-petroleo-600"
      />
      <span>
        <span className="block font-semibold text-ink">{rotulo}</span>
        {descricao ? <span className="block text-sm text-ink-soft">{descricao}</span> : null}
      </span>
    </label>
  );
}

export default function Formulario({ form, atualizar, onGerar, onVoltar }: Props) {
  const publico = PUBLICOS.find((item) => item.id === form.publico) ?? PUBLICOS[0];
  const adaptacoesPublico = ADAPTACOES.filter((item) => item.publicos.includes(form.publico));

  const alternarMaterial = (id: string) => {
    if (id === "nenhum") {
      atualizar({ materiais: form.materiais.includes("nenhum") ? [] : ["nenhum"] });
      return;
    }
    const base = form.materiais.filter((m) => m !== "nenhum");
    const novo = base.includes(id) ? base.filter((m) => m !== id) : [...base, id];
    atualizar({ materiais: novo.length ? novo : ["nenhum"] });
  };

  const alternarAdaptacao = (id: string) => {
    const novo = form.adaptacoes.includes(id)
      ? form.adaptacoes.filter((a) => a !== id)
      : [...form.adaptacoes, id];
    atualizar({ adaptacoes: novo });
  };

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        onGerar();
      }}
      className="space-y-6"
      aria-labelledby="titulo-planejador"
    >
      <Card>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-[0.16em] text-petroleo-600 uppercase">
              Público selecionado
            </p>
            <h3 className="mt-1 text-xl font-bold text-ink">
              <span aria-hidden="true" className="mr-2">
                {publico.icone}
              </span>
              {publico.rotulo}
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-ink-soft">{publico.delimitacao}</p>
          </div>
          <Botao
            variante="secundario"
            onClick={onVoltar}
            className="nao-imprimir w-full sm:w-auto"
          >
            Trocar público
          </Botao>
        </div>
      </Card>

      {/* 1. Contexto */}
      <Card>
        <fieldset>
          <Legenda numero="1" titulo="Contexto" ajuda="Onde a atividade vai acontecer." />
          <div className="grid gap-3 sm:grid-cols-2">
            {CONTEXTOS[form.publico].map((contexto) => (
              <OpcaoLinha
                key={contexto.id}
                nome="contexto"
                valor={contexto.id}
                rotulo={contexto.rotulo}
                selecionado={form.contexto === contexto.id}
                aoSelecionar={(valor) => atualizar({ contexto: valor })}
              />
            ))}
          </div>
        </fieldset>
      </Card>

      {/* 2. Objetivo */}
      <Card>
        <fieldset>
          <Legenda
            numero="2"
            titulo="Objetivo principal"
            ajuda="O que esta sessão deve priorizar. Cada objetivo combina um alvo físico e um alvo psicológico."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {OBJETIVOS.filter((item) => item.publicos.includes(form.publico as PublicoId)).map(
              (objetivo) => (
                <OpcaoLinha
                  key={objetivo.id}
                  nome="objetivo"
                  valor={objetivo.id}
                  rotulo={objetivo.rotulo}
                  descricao={objetivo.fisico}
                  selecionado={form.objetivo === objetivo.id}
                  aoSelecionar={(valor) => atualizar({ objetivo: valor })}
                />
              ),
            )}
          </div>
        </fieldset>
      </Card>

      {/* 3. Duração + 4. Organização */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <fieldset>
            <Legenda numero="3" titulo="Duração" ajuda="Tempo total da sessão." />
            <div className="grid grid-cols-2 gap-3">
              {DURACOES.map((minutos) => (
                <OpcaoLinha
                  key={minutos}
                  nome="duracao"
                  valor={String(minutos)}
                  rotulo={`${minutos} minutos`}
                  selecionado={form.duracao === minutos}
                  aoSelecionar={(valor) => atualizar({ duracao: Number(valor) })}
                />
              ))}
            </div>
          </fieldset>
        </Card>

        <Card>
          <fieldset>
            <Legenda
              numero="4"
              titulo="Organização"
              ajuda="Como o grupo será organizado na atividade principal."
            />
            <div className="grid gap-3">
              {ORGANIZACOES.map((organizacao) => (
                <OpcaoLinha
                  key={organizacao.id}
                  nome="organizacao"
                  valor={organizacao.id}
                  rotulo={organizacao.rotulo}
                  selecionado={form.organizacao === organizacao.id}
                  aoSelecionar={(valor) => atualizar({ organizacao: valor })}
                />
              ))}
            </div>
          </fieldset>
        </Card>
      </div>

      {/* 5. Materiais */}
      <Card>
        <fieldset>
          <Legenda
            numero="5"
            titulo="Materiais disponíveis"
            ajuda="Marque tudo o que você tem à disposição. As atividades são priorizadas conforme o material marcado."
          />
          <div className="flex flex-wrap gap-2.5">
            {MATERIAIS.map((material) => {
              const ativo = form.materiais.includes(material.id);
              return (
                <label
                  key={material.id}
                  className={cn(
                    "cursor-pointer rounded-xl border-2 px-4 py-3 font-semibold transition-colors",
                    ativo
                      ? "border-petroleo-600 bg-petroleo-600 text-white"
                      : "border-petroleo-200 bg-white text-ink hover:border-petroleo-400",
                  )}
                >
                  <input
                    type="checkbox"
                    name="materiais"
                    value={material.id}
                    checked={ativo}
                    onChange={() => alternarMaterial(material.id)}
                    className="sr-only"
                  />
                  <span aria-hidden="true" className="mr-2">
                    {ativo ? "☑" : "☐"}
                  </span>
                  {material.rotulo}
                </label>
              );
            })}
          </div>
        </fieldset>
      </Card>

      {/* 6. Adaptações */}
      <Card>
        <fieldset>
          <Legenda
            numero="6"
            titulo="Necessidades de adaptação"
            ajuda="Marque o que você já sabe que precisa ser ajustado. Você pode adicionar mais adaptações depois, no plano gerado."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {adaptacoesPublico.map((adaptacao) => {
              const ativo = form.adaptacoes.includes(adaptacao.id);
              return (
                <label
                  key={adaptacao.id}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-xl border-2 p-3.5 transition-colors",
                    ativo
                      ? "border-amarelo bg-amarelo-suave"
                      : "border-petroleo-100 bg-white hover:border-petroleo-300",
                  )}
                >
                  <input
                    type="checkbox"
                    name="adaptacao"
                    value={adaptacao.id}
                    checked={ativo}
                    onChange={() => alternarAdaptacao(adaptacao.id)}
                    className="mt-1 h-5 w-5 shrink-0 accent-petroleo-600"
                  />
                  <span className="font-semibold text-ink">{adaptacao.rotulo}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </Card>

      <div className="nao-imprimir flex flex-wrap items-center gap-3">
        <Botao type="submit" variante="amarelo" className="w-full px-7 text-lg sm:w-auto">
          ▸ Gerar plano de atividade
        </Botao>
        <Botao variante="secundario" onClick={onVoltar} className="w-full sm:w-auto">
          Voltar à escolha de público
        </Botao>
        <p className="text-sm text-ink-soft">
          Plano montado em segundos. Nenhum dado é enviado ou armazenado.
        </p>
      </div>
    </form>
  );
}
