export type PublicoId = "tea" | "tmg";

export type EtapaId =
  | "acolhimento"
  | "aquecimento"
  | "principal"
  | "cooperativo"
  | "encerramento";

export interface Publico {
  id: PublicoId;
  rotulo: string;
  curto: string;
  delimitacao: string;
  necessidades: string[];
  icone: string;
  destaque: string;
}

export const PUBLICOS: Publico[] = [
  {
    id: "tea",
    rotulo: "Crianças com TEA",
    curto: "Criança com TEA",
    delimitacao:
      "Crianças autistas de aproximadamente 7 a 12 anos, participantes de aulas de Educação Física escolar ou de projetos de esporte e lazer.",
    necessidades: [
      "previsibilidade da sequência",
      "instruções curtas e concretas",
      "apoio visual",
      "possibilidade de observar antes de participar",
      "adaptação de estímulos sonoros e visuais",
      "possibilidade de pausa",
      "diferentes formas de comunicação",
      "atividades sem eliminação",
    ],
    icone: "🧩",
    destaque:
      "O TEA é uma condição do neurodesenvolvimento. Cada criança tem um perfil próprio de comunicação, sensorialidade e aprendizagem.",
  },
  {
    id: "tmg",
    rotulo: "Adultos com transtornos mentais graves",
    curto: "Adulto com TMG",
    delimitacao:
      "Adultos com transtornos mentais graves — como transtornos do espectro da esquizofrenia e transtorno bipolar — acompanhados em CAPS ou em outros serviços de atenção psicossocial e aptos para a prática de atividades físicas.",
    necessidades: [
      "atividades graduadas",
      "ambiente acolhedor e não estigmatizante",
      "fortalecimento da autonomia",
      "metas alcançáveis",
      "interação social sem exposição obrigatória",
      "atenção ao cansaço, à sedação e às alterações motoras",
      "articulação com a equipe multiprofissional",
    ],
    icone: "🌿",
    destaque:
      "Transtorno mental grave não define o que a pessoa consegue fazer. A prática parte do que a pessoa quer e consegue fazer hoje.",
  },
];

export const CONTEXTOS: Record<PublicoId, { id: string; rotulo: string }[]> = {
  tea: [
    { id: "escola", rotulo: "Escola (aula de Educação Física)" },
    { id: "projeto", rotulo: "Projeto de esporte e lazer" },
    { id: "comunitario", rotulo: "Espaço comunitário" },
    { id: "outro", rotulo: "Outro contexto" },
  ],
  tmg: [
    { id: "caps", rotulo: "CAPS / serviço de atenção psicossocial" },
    { id: "projeto", rotulo: "Projeto de esporte e lazer" },
    { id: "comunitario", rotulo: "Espaço comunitário" },
    { id: "outro", rotulo: "Outro contexto" },
  ],
};

export interface Objetivo {
  id: string;
  rotulo: string;
  fisico: string;
  psico: string;
  publicos: PublicoId[];
}

export const OBJETIVOS: Objetivo[] = [
  {
    id: "coordenacao",
    rotulo: "Coordenação motora",
    fisico: "coordenação global, equilíbrio dinâmico e manipulação de objetos",
    psico: "autonomia, previsibilidade e percepção de competência",
    publicos: ["tea", "tmg"],
  },
  {
    id: "equilibrio",
    rotulo: "Equilíbrio",
    fisico: "equilíbrio estático e dinâmico, com apoio disponível",
    psico: "segurança percebida e redução do medo de errar",
    publicos: ["tea", "tmg"],
  },
  {
    id: "interacao",
    rotulo: "Interação social",
    fisico: "habilidades motoras em situações de contato leve e turnos",
    psico: "pertencimento, vínculo e interação sem exposição obrigatória",
    publicos: ["tea", "tmg"],
  },
  {
    id: "autonomia",
    rotulo: "Autonomia e escolha",
    fisico: "repertório de movimentos escolhidos pela própria pessoa",
    psico: "autodeterminação, voz e controle sobre a própria participação",
    publicos: ["tea", "tmg"],
  },
  {
    id: "percepcao",
    rotulo: "Percepção corporal",
    fisico: "consciência corporal, lateralidade e esquema corporal",
    psico: "reconhecimento das sensações corporais e dos próprios limites",
    publicos: ["tea", "tmg"],
  },
  {
    id: "autoeficacia",
    rotulo: "Autoeficácia",
    fisico: "tarefas graduadas com possibilidade real de sucesso",
    psico: "crença na própria capacidade e feedback específico de progresso",
    publicos: ["tea", "tmg"],
  },
  {
    id: "regulacao",
    rotulo: "Regulação emocional",
    fisico: "intensidade controlada, alternando ativação e desaceleração",
    psico: "autorregulação, pausa possível e manejo de desconforto",
    publicos: ["tea", "tmg"],
  },
  {
    id: "cooperacao",
    rotulo: "Cooperação",
    fisico: "ações coordenadas com um objetivo comum",
    psico: "metas coletivas, contribuição de todos e ausência de eliminação",
    publicos: ["tea", "tmg"],
  },
];

export const DURACOES = [20, 30, 40, 50];

export const ORGANIZACOES = [
  { id: "individual", rotulo: "Individual" },
  { id: "dupla", rotulo: "Dupla" },
  { id: "pequeno", rotulo: "Pequeno grupo (3 a 6)" },
  { id: "grupo", rotulo: "Grupo maior (7 ou mais)" },
];

export const MATERIAIS = [
  { id: "bolas", rotulo: "Bolas" },
  { id: "cones", rotulo: "Cones / marcações" },
  { id: "bamboles", rotulo: "Bambolês" },
  { id: "cadeiras", rotulo: "Cadeiras" },
  { id: "cordas", rotulo: "Cordas" },
  { id: "fita", rotulo: "Fita crepe / giz" },
  { id: "garrafas", rotulo: "Garrafas PET" },
  { id: "cartoes", rotulo: "Cartões ou imagens" },
  { id: "musica", rotulo: "Música / caixa de som" },
  { id: "nenhum", rotulo: "Nenhum material" },
];

export const ETAPAS: {
  id: EtapaId;
  rotulo: string;
  descricao: string;
  icone: string;
}[] = [
  {
    id: "acolhimento",
    rotulo: "Acolhimento / check-in",
    descricao: "Nomear o estado, combinar a rotina e oferecer escolhas.",
    icone: "①",
  },
  {
    id: "aquecimento",
    rotulo: "Aquecimento",
    descricao: "Preparar o corpo em intensidade baixa e previsível.",
    icone: "②",
  },
  {
    id: "principal",
    rotulo: "Atividade principal",
    descricao: "Núcleo da aula, com tarefa clara e níveis de dificuldade.",
    icone: "③",
  },
  {
    id: "cooperativo",
    rotulo: "Atividade cooperativa",
    descricao: "Meta coletiva, sem competição e sem eliminação.",
    icone: "④",
  },
  {
    id: "encerramento",
    rotulo: "Encerramento / check-out",
    descricao: "Reduzir a intensidade, reconhecer o que foi feito e ouvir a pessoa.",
    icone: "⑤",
  },
];

/** Proporção do tempo total dedicada a cada etapa, por público. */
export const PROPORCOES: Record<PublicoId, Record<EtapaId, number>> = {
  tea: {
    acolhimento: 0.1,
    aquecimento: 0.17,
    principal: 0.5,
    cooperativo: 0.13,
    encerramento: 0.1,
  },
  tmg: {
    acolhimento: 0.125,
    aquecimento: 0.175,
    principal: 0.5,
    cooperativo: 0.075,
    encerramento: 0.125,
  },
};

export function rotuloDe(lista: { id: string; rotulo: string }[], id: string) {
  return lista.find((item) => item.id === id)?.rotulo ?? id;
}
