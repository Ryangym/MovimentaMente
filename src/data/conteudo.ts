export interface Conceito {
  id: string;
  titulo: string;
  conceito: string;
  aplicacao: string;
  areas: string;
}

export const CONCEITOS: Conceito[] = [
  {
    id: "autonomia",
    titulo: "Autonomia",
    conceito:
      "Oferecer escolhas possíveis pode aumentar o envolvimento e respeitar as preferências da pessoa.",
    aplicacao:
      "Escolha entre atividade sentada ou em pé, individual ou em dupla, ordem das estações e material a ser usado.",
    areas: "Psicologia (autodeterminação) + Educação Física (escolha de atividades e materiais)",
  },
  {
    id: "autoeficacia",
    titulo: "Autoeficácia",
    conceito:
      "Experiências graduais de sucesso podem fortalecer a crença na própria capacidade de participar.",
    aplicacao:
      "Níveis de dificuldade em cada estação, metas alcançáveis e feedback específico sobre o que a pessoa fez.",
    areas: "Psicologia (autoeficácia) + Educação Física (progressão e nível de dificuldade)",
  },
  {
    id: "previsibilidade",
    titulo: "Previsibilidade",
    conceito:
      "Apresentar a sequência e antecipar mudanças pode reduzir barreiras relacionadas à incerteza.",
    aplicacao:
      "Rotina visual, começo e fim delimitados, mesma ordem de etapas e aviso prévio de qualquer alteração.",
    areas: "Psicologia (controle e segurança) + Educação Física (estrutura da sessão)",
  },
  {
    id: "pertencimento",
    titulo: "Pertencimento",
    conceito:
      "Atividades cooperativas e sem eliminação podem favorecer participação e interação social.",
    aplicacao:
      "Metas coletivas, diferentes formas de contribuir e nenhuma seleção por habilidade.",
    areas: "Psicologia (vínculo e pertença) + Educação Física (jogos cooperativos)",
  },
  {
    id: "regulacao",
    titulo: "Regulação emocional",
    conceito:
      "Pausas, adaptação de estímulos e observação do estado da pessoa podem favorecer participação segura.",
    aplicacao:
      "Check-in inicial, pausa combinada, controle de intensidade e observação contínua de fadiga e desconforto.",
    areas: "Psicologia (regulação) + Educação Física (controle de intensidade e esforço percebido)",
  },
];

export const INTEGRACAO: { psicologia: string; educacaoFisica: string }[] = [
  { psicologia: "Autonomia e escolha", educacaoFisica: "Escolha de atividades e materiais" },
  { psicologia: "Autoeficácia", educacaoFisica: "Progressão e níveis de dificuldade" },
  { psicologia: "Regulação emocional", educacaoFisica: "Check-in, pausa e check-out" },
  { psicologia: "Previsibilidade", educacaoFisica: "Sequência visual da aula" },
  { psicologia: "Motivação", educacaoFisica: "Atividades significativas e metas alcançáveis" },
  { psicologia: "Pertencimento", educacaoFisica: "Jogos cooperativos e sem eliminação" },
  { psicologia: "Respeito às diferenças", educacaoFisica: "Adaptação de regras, ambiente e comunicação" },
  { psicologia: "Observação do estado da pessoa", educacaoFisica: "Controle de intensidade e esforço percebido" },
];

export interface Referencia {
  texto: string;
  link?: string;
  uso: string;
}

export const REFERENCIAS: Referencia[] = [
  {
    texto:
      "DE CASTRO FRANZONI, W. C.; MARINHO, A. O papel do professor de Educação Física na atuação com pessoas com transtorno do espectro autista em um programa de esporte e lazer de Florianópolis (SC). Motrivivência, v. 32, n. 61, p. 1-22, 2020.",
    link: "https://doi.org/10.5007/2175-8042.2020e65391",
    uso: "Papel do professor de Educação Física e barreiras de participação no TEA.",
  },
  {
    texto:
      "LIU, C. et al. Mechanisms linking physical activity with mental health in children and adolescents with neurodevelopmental disorders: a systematic review. American Journal of Preventive Medicine, v. 67, n. 4, p. 592-605, 2024.",
    link: "https://doi.org/10.1016/j.amepre.2024.05.022",
    uso: "Mecanismos que ligam atividade física e saúde mental em transtornos do neurodesenvolvimento.",
  },
  {
    texto:
      "MACHADO, L. F. L.; SILVA, F. G. da. Práticas dos profissionais de Educação Física na atenção psicossocial em saúde mental. Pensar a Prática, v. 28, 2025.",
    link: "https://doi.org/10.5216/rpp.v28.79866",
    uso: "Atuação do profissional de Educação Física em CAPS e serviços psicossociais.",
  },
  {
    texto:
      "BARROS, M.; BATISTA-DOS-SANTOS, A. C. Por dentro da autoeficácia: um estudo sobre seus fundamentos teóricos, suas fontes e conceitos correlatos. Revista Espaço Acadêmico, v. 10, n. 112, p. 1-9, 2010.",
    uso: "Fundamentos teóricos e fontes da autoeficácia aplicados ao planejamento.",
  },
  {
    texto:
      "WHITE, R. L. et al. Physical activity and mental health: a systematic review and best-evidence synthesis of mediation and moderation studies. International Journal of Behavioral Nutrition and Physical Activity, v. 21, n. 1, art. 134, 2024.",
    link: "https://doi.org/10.1186/s12966-024-01676-6",
    uso: "Mediação e moderação na relação entre atividade física e saúde mental.",
  },
];

export const LIMITES = [
  "Não diagnostica nenhum condição nem avalia o nível de suporte de uma pessoa.",
  "Não substitui avaliação individual, laudo, prescrição de exercício ou acompanhamento clínico.",
  "Não fornece tratamento psicológico, psiquiátrico ou médico.",
  "Não padroniza pessoas por diagnóstico: duas pessoas com o mesmo diagnóstico podem precisar de apoios diferentes.",
  "Não armazena dados. Nada do que você marca sai do seu navegador.",
  "Funciona como apoio ao planejamento profissional; a decisão final é do professor com a equipe.",
];
