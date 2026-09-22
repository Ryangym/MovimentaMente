import type { PublicoId } from "./taxonomia";

export interface Adaptacao {
  id: string;
  rotulo: string;
  texto: string;
  publicos: PublicoId[];
}

/** Adaptações que o profissional pode marcar no planejamento. */
export const ADAPTACOES: Adaptacao[] = [
  {
    id: "som",
    rotulo: "Reduzir estímulos sonoros",
    texto:
      "Evite apito, música alta e buzinas. Avise antes de produzir qualquer som e combine um sinal visual (cartão, mão levantada, lenço no chão) para marcar início e fim.",
    publicos: ["tea", "tmg"],
  },
  {
    id: "visual",
    rotulo: "Utilizar apoio visual",
    texto:
      "Demonstre a atividade e apresente a sequência em cartões ou imagens fixadas no espaço, sempre na mesma ordem e no mesmo lugar.",
    publicos: ["tea", "tmg"],
  },
  {
    id: "instrucoes",
    rotulo: "Instruções simplificadas",
    texto:
      "Uma instrução por vez, com frases curtas e concretas. Demonstre em movimento em vez de explicar verbalmente; espere a execução antes de falar a próxima etapa.",
    publicos: ["tea", "tmg"],
  },
  {
    id: "sentado",
    rotulo: "Oferecer opção sentada",
    texto:
      "Disponibilize uma variação equivalente realizada em cadeira ou em apoio, com a mesma finalidade da atividade, sem transformá-la em tarefa inferior.",
    publicos: ["tea", "tmg"],
  },
  {
    id: "tempo",
    rotulo: "Mais tempo para responder",
    texto:
      "Depois de fazer uma pergunta ou dar uma instrução, espere em silêncio pelo menos cinco segundos. Não repita a fala imediatamente e não responda no lugar da pessoa.",
    publicos: ["tea", "tmg"],
  },
  {
    id: "pausa",
    rotulo: "Pausa de regulação",
    texto:
      "Combine com antecedência um local e um sinal para solicitar pausa. A pausa não é castigo nem atraso: é parte prevista da aula e deve ter retorno combinado.",
    publicos: ["tea", "tmg"],
  },
  {
    id: "social",
    rotulo: "Menor contato social / menor exposição",
    texto:
      "Permita participação em paralelo ao grupo, com interação opcional, turnos curtos e nenhuma fala obrigatória em público. Prefira metas coletivas a desempenho individual anunciado.",
    publicos: ["tea", "tmg"],
  },
  {
    id: "intensidade",
    rotulo: "Menor intensidade",
    texto:
      "Reduza volume, amplitude, distância e número de repetições. Faça pausas programadas e observe respiração, sudorese, tontura e relato de cansaço.",
    publicos: ["tea", "tmg"],
  },
  {
    id: "escolha",
    rotulo: "Ampliar escolhas",
    texto:
      "Ofereça duas ou três opções reais em cada etapa (ordem, material, distância, sentado ou em pé) e acate a escolha feita, mostrando o resultado da decisão.",
    publicos: ["tmg"],
  },
  {
    id: "feedback",
    rotulo: "Feedback específico e descritivo",
    texto:
      "Descreva o que a pessoa fez: “você completou o percurso segurando a bola com as duas mãos”. Evite elogios vagos, ironia e comentários comparativos.",
    publicos: ["tmg"],
  },
  {
    id: "ambiente",
    rotulo: "Ambiente mais previsível e tranquilo",
    texto:
      "Reduza circulação de pessoas, ruídos e mudanças de layout. Mantenha o mesmo horário, o mesmo espaço e a mesma ordem de atividades entre as aulas.",
    publicos: ["tmg"],
  },
  {
    id: "atencao",
    rotulo: "Apoio para atenção e memória",
    texto:
      "Apresente uma etapa por vez, repita o combinado em cartaz e use apoio de papel com a sequência desenhada para consulta durante a atividade.",
    publicos: ["tmg"],
  },
];

export const ADAPTACOES_BASE: Record<PublicoId, string[]> = {
  tea: [
    "Não utilizar apito; prefira sinais visuais para marcar transições.",
    "Dar uma instrução por vez, demonstrando o movimento.",
    "Permitir que a criança observe antes de participar.",
    "Não exigir contato visual nem resposta verbal imediata.",
    "Aceitar formas verbais e não verbais de comunicação.",
    "Mostrar antecipadamente qualquer mudança na sequência.",
    "Não interromper movimentos autorregulatórios sem motivo de segurança.",
  ],
  tmg: [
    "Oferecer opção sentada em todas as estações.",
    "Evitar comparações entre participantes e qualquer ranking público.",
    "Utilizar feedback específico, descritivo e imediato.",
    "Reduzir o número de estações em caso de fadiga.",
    "Observar tontura, sedação, tremores e alterações de equilíbrio.",
    "Articular a prática com a equipe do serviço antes e depois da aula.",
    "Reconhecer publicamente apenas conquistas, nunca dificuldades.",
  ],
};

export const CUIDADOS: Record<PublicoId, string[]> = {
  tea: [
    "Confirme com a família e com a equipe escolar o que já funciona com a criança.",
    "Prepare o espaço antes da chegada: materiais no lugar, ruído controlado, rota visual visível.",
    "Tenha sempre uma atividade alternativa pronta para o caso de desregulação.",
    "Registre o que a criança escolheu e o que funcionou, para dar continuidade na próxima aula.",
    "Comunique mudanças de professor, horário ou espaço com antecedência.",
  ],
  tmg: [
    "Confirme com a equipe do serviço quais pessoas estão aptas para a atividade naquele dia.",
    "Avalie espaço, piso, calçado e apoio disponível antes de iniciar.",
    "Observe sinais de fadiga, sedação, tontura, dor e alteração de equilíbrio durante toda a sessão.",
    "Tenha plano de encerramento antecipado caso alguém precise sair da atividade.",
    "Encaminhe observações relevantes para a equipe multiprofissional, sem diagnóstico.",
  ],
};

export const ETICA_GERAL = [
  "Esta ferramenta oferece sugestões educativas de planejamento.",
  "Não realiza diagnóstico, não prescreve tratamento e não substitui avaliação individual.",
  "Não substitui acompanhamento psicológico, psiquiátrico, médico nem atuação de equipe multiprofissional.",
  "As atividades devem ser adaptadas às condições, preferências, necessidades de apoio e orientações de saúde de cada pessoa.",
  "Nenhum dado é armazenado: tudo o que você marca fica apenas nesta aba do navegador.",
];

export const ETICA_PUBLICO: Record<PublicoId, string[]> = {
  tea: [
    "Não exigir contato visual.",
    "Não presumir incapacidade.",
    "Não forçar interação social.",
    "Não impedir movimentos autorregulatórios sem motivo de segurança.",
    "Não tocar sem avisar.",
    "Reconhecer formas não verbais de comunicação.",
    "Conversar com a criança, não apenas com o acompanhante.",
  ],
  tmg: [
    "Evitar infantilização.",
    "Respeitar consentimento e autonomia.",
    "Não atribuir todos os comportamentos ao diagnóstico.",
    "Observar possíveis efeitos de medicamentos.",
    "Não conduzir atividade em situação de crise aguda sem articulação com a equipe.",
    "Não apresentar atividade física como cura.",
    "Evitar exposição e comparação pública.",
  ],
};

/** Cuidados acionados automaticamente pelas adaptações marcadas. */
export const ALERTAS: Record<string, string> = {
  intensidade:
    "Com intensidade reduzida, mantenha a conversa durante a atividade: falta de ar para falar, sudorese excessiva e palidez indicam necessidade de nova pausa.",
  sentado:
    "Ao oferecer versão sentada, verifique altura da cadeira, apoio dos pés no chão e estabilidade antes de iniciar.",
  som:
    "Se houver redução de estímulos sonoros, avise o grupo inteiro sobre o combinado para que ninguém seja surpreendido pelo silêncio.",
  pausa:
    "A pausa de regulação precisa ter local definido, tempo combinado e forma de retorno, para não ser confundida com saída definitiva da aula.",
  social:
    "Participação em paralelo ao grupo é participação válida. Registre-a como presença e envolvimento, não como recusa.",
  tempo:
    "Ao ampliar o tempo de espera, mantenha o grupo ocupado com algo previsível para que a espera não gere desconforto.",
  visual:
    "Apoio visual exige constância: os mesmos cartões, na mesma ordem, no mesmo lugar, em todas as aulas.",
  instrucoes:
    "Instruções simplificadas não significam menos desafio motor: a complexidade fica na tarefa, não na fala.",
  escolha:
    "Oferecer escolhas exige que você cumpra a escolha feita. Escolha não acatada reduz a confiança na atividade.",
  feedback:
    "Feedback específico funciona melhor logo após a ação, descrevendo o movimento e não a pessoa.",
  ambiente:
    "Ambiente previsível depende de rotina: horário, espaço, ordem e mesma equipe sempre que possível.",
  atencao:
    "Apoio de memória funciona melhor quando a pessoa pode consultar o material durante a atividade, e não apenas no início.",
};
