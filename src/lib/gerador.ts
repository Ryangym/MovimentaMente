import {
  ADAPTACOES,
  ADAPTACOES_BASE,
  ALERTAS,
  CUIDADOS,
  type Adaptacao,
} from "@/data/adaptacoes";
import { ATIVIDADES, type Atividade } from "@/data/atividades";
import {
  ETAPAS,
  OBJETIVOS,
  ORGANIZACOES,
  PROPORCOES,
  rotuloDe,
  type EtapaId,
  type PublicoId,
} from "@/data/taxonomia";

export interface FormState {
  publico: PublicoId;
  contexto: string;
  objetivo: string;
  duracao: number;
  organizacao: string;
  materiais: string[];
  adaptacoes: string[];
}

export interface EtapaPlano {
  etapa: EtapaId;
  minutos: number;
  atividade: Atividade;
}

export interface Plano {
  codigo: string;
  nome: string;
  form: FormState;
  objetivoFisico: string;
  objetivoPsico: string;
  etapas: EtapaPlano[];
  materiaisNecessarios: string[];
  materiaisFaltantes: string[];
  adaptacoes: Adaptacao[];
  recomendacoesBase: string[];
  alertas: string[];
  cuidados: string[];
  criterios: string[];
}

export const FORM_INICIAL: FormState = {
  publico: "tea",
  contexto: "escola",
  objetivo: "coordenacao",
  duracao: 30,
  organizacao: "individual",
  materiais: ["bolas", "cones"],
  adaptacoes: [],
};

function sortear<T>(lista: T[]): T {
  return lista[Math.floor(Math.random() * lista.length)];
}

export function pontuar(atividade: Atividade, form: FormState): number {
  let pontos = 0;

  if (atividade.objetivos.includes(form.objetivo)) pontos += 6;

  const semMaterial = form.materiais.includes("nenhum");
  const exigidos = atividade.materiais.filter((m) => m !== "nenhum");
  const faltando = semMaterial ? exigidos : exigidos.filter((m) => !form.materiais.includes(m));

  if (faltando.length === 0) pontos += 4;
  else pontos -= faltando.length * 3;

  if (!semMaterial) {
    const usados = atividade.materiais.filter((m) => form.materiais.includes(m)).length;
    pontos += usados * 0.6;
  }

  if (atividade.organizacao.includes(form.organizacao)) pontos += 3;

  if (form.adaptacoes.includes("sentado") && atividade.variacao) pontos += 2.5;
  if (form.adaptacoes.includes("som") && atividade.sinais?.length) pontos += 1.5;
  if (form.adaptacoes.includes("intensidade") && atividade.variacao) pontos += 1;
  if (form.adaptacoes.includes("social") && atividade.organizacao.includes(form.organizacao))
    pontos += 0.5;

  return pontos;
}

function escolher(candidatos: Atividade[], form: FormState): Atividade {
  const avaliadas = candidatos
    .map((atividade) => ({ atividade, pontos: pontuar(atividade, form) }))
    .sort((a, b) => b.pontos - a.pontos);

  const melhor = avaliadas[0]?.pontos ?? 0;
  const finalistas = avaliadas.filter((item) => item.pontos >= melhor - 1.2);
  return sortear(finalistas).atividade;
}

function distribuirMinutos(form: FormState): Record<EtapaId, number> {
  const proporcoes = PROPORCOES[form.publico];
  const brutos = ETAPAS.map((etapa) => ({
    etapa: etapa.id,
    valor: proporcoes[etapa.id] * form.duracao,
  }));

  const minutos = {} as Record<EtapaId, number>;
  let somado = 0;

  brutos.forEach((item) => {
    const valor = Math.max(2, Math.floor(item.valor));
    minutos[item.etapa] = valor;
    somado += valor;
  });

  let resto = form.duracao - somado;
  const ordem: EtapaId[] = ["principal", "aquecimento", "encerramento", "cooperativo", "acolhimento"];

  while (resto !== 0) {
    for (const etapa of ordem) {
      if (resto === 0) break;
      if (resto > 0) {
        minutos[etapa] += 1;
        resto -= 1;
      } else if (minutos[etapa] > 2) {
        minutos[etapa] -= 1;
        resto += 1;
      }
    }
  }

  return minutos;
}

const NOMES: Record<PublicoId, string[]> = {
  tea: [
    "Missão do Movimento",
    "Trilha do Eu Consigo",
    "Percurso Amigo",
    "Expedição do Corpo",
    "Circuito Passo a Passo",
  ],
  tmg: [
    "Circuito Movimento e Autonomia",
    "Encontro Corpo em Movimento",
    "Rota do Participante",
    "Oficina de Movimento e Escolha",
    "Sessão Passo Seguro",
  ],
};

export function gerarPlano(form: FormState): Plano {
  const minutos = distribuirMinutos(form);

  const etapas: EtapaPlano[] = ETAPAS.map((etapa) => {
    const banco = ATIVIDADES.filter(
      (item) => item.publico === form.publico && item.etapa === etapa.id,
    );
    const atividade = escolher(banco, form);
    return { etapa: etapa.id, minutos: minutos[etapa.id], atividade };
  });

  const objetivo = OBJETIVOS.find((item) => item.id === form.objetivo) ?? OBJETIVOS[0];

  const usados = Array.from(
    new Set(etapas.flatMap((item) => item.atividade.materiais).filter((m) => m !== "nenhum")),
  );

  const materiaisNecessarios = usados.filter((m) => form.materiais.includes(m) || m === "cartoes");
  const materiaisFaltantes = usados.filter((m) => !form.materiais.includes(m) && m !== "cartoes");

  const adaptacoes = ADAPTACOES.filter((item) => form.adaptacoes.includes(item.id));
  const alertas = Array.from(
    new Set(form.adaptacoes.map((id) => ALERTAS[id]).filter(Boolean) as string[]),
  );

  const criterios = [
    `Objetivo prioritário: ${objetivo.rotulo.toLowerCase()}.`,
    `Organização escolhida: ${rotuloDe(ORGANIZACOES, form.organizacao).toLowerCase()}.`,
    form.materiais.includes("nenhum")
      ? "Atividades priorizadas sem necessidade de material."
      : `Materiais considerados: ${form.materiais.map((m) => rotuloDe(MATERIAIS_ROTULO, m)).join(", ")}.`,
    adaptacoes.length
      ? `${adaptacoes.length} adaptação(ões) aplicada(s) à seleção das atividades.`
      : "Nenhuma adaptação extra marcada: recomendações-base do público aplicadas.",
  ];

  return {
    codigo: `MM-${String(Math.floor(Math.random() * 9000) + 1000)}`,
    nome: `${sortear(NOMES[form.publico])} — ${form.duracao} minutos`,
    form,
    objetivoFisico: objetivo.fisico,
    objetivoPsico: objetivo.psico,
    etapas,
    materiaisNecessarios,
    materiaisFaltantes,
    adaptacoes,
    recomendacoesBase: ADAPTACOES_BASE[form.publico],
    alertas,
    cuidados: CUIDADOS[form.publico],
    criterios,
  };
}

const MATERIAIS_ROTULO = [
  { id: "bolas", rotulo: "bolas" },
  { id: "cones", rotulo: "cones" },
  { id: "bamboles", rotulo: "bambolês" },
  { id: "cadeiras", rotulo: "cadeiras" },
  { id: "cordas", rotulo: "cordas" },
  { id: "fita", rotulo: "fita crepe" },
  { id: "garrafas", rotulo: "garrafas PET" },
  { id: "cartoes", rotulo: "cartões" },
  { id: "musica", rotulo: "música" },
  { id: "nenhum", rotulo: "nenhum material" },
];

/** Substituições acessíveis quando um material marcado na atividade não está disponível. */
export const SUBSTITUICOES: Record<string, string> = {
  bolas: "meias enroladas, papel amassado dentro de uma sacola ou garrafa com arroz",
  cones: "garrafas PET, caixas, tênis ou marcas feitas com giz e fita",
  bamboles: "corda no chão formando círculo ou marca desenhada com giz",
  cadeiras: "banco firme, caixa estável ou cadeira sem rodinhas, testada antes",
  cordas: "fita crepe colada no chão, barbante ou mangueira",
  fita: "giz, barbante ou cartões de papel apoiados no chão",
  garrafas: "caixas de leite vazias, copos plásticos ou latas com borda protegida",
  cartoes: "folhas de papel com desenho ou pratos de papel",
  musica: "palmas em ritmo lento, contagem silenciosa ou estalar de dedos",
};
