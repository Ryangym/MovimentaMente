import type { PublicoId } from "./taxonomia";

export type Qualidade = "boa" | "parcial" | "evitar";

export interface Opcao {
  texto: string;
  feedback: string;
  qualidade: Qualidade;
}

export interface Caso {
  id: string;
  publico: PublicoId;
  titulo: string;
  situacao: string;
  pergunta: string;
  opcoes: Opcao[];
}

export const CASOS: Caso[] = [
  {
    id: "caso-tea-1",
    publico: "tea",
    titulo: "Música e desconforto sonoro",
    situacao:
      "A atividade planejada utiliza música, mas uma criança apresenta desconforto com sons altos e cobre as orelhas quando a caixa de som liga.",
    pergunta: "O que você pode modificar?",
    opcoes: [
      {
        texto:
          "Desligar a música nesta aula, avisar o grupo do combinado e usar sinal visual para as transições.",
        feedback:
          "Boa alternativa. Ajusta o estímulo na fonte, mantém a atividade e preserva a previsibilidade com sinal visual. Depois você pode reapresentar a música em volume muito baixo, em outra aula, para a criança decidir se quer experimentar.",
        qualidade: "boa",
      },
      {
        texto:
          "Manter a música e pedir que a criança espere na porta até a parte musical terminar.",
        feedback:
          "Evite. Retirar a criança da aula transforma a barreira sensorial em exclusão. A adaptação deve acontecer na atividade, não na participação.",
        qualidade: "evitar",
      },
      {
        texto:
          "Insistir até a criança “se acostumar” com o som, porque é importante para o desenvolvimento.",
        feedback:
          "Evite. Exposição forçada a estímulos aversivos aumenta o desconforto e pode desorganizar a participação nas aulas seguintes. O objetivo é participar, não dessensibilizar.",
        qualidade: "evitar",
      },
    ],
  },
  {
    id: "caso-tea-2",
    publico: "tea",
    titulo: "A criança observa e não entra",
    situacao:
      "No circuito de três estações, uma criança fica em pé olhando os colegas por dez minutos e não inicia a atividade.",
    pergunta: "Qual conduta mantém a participação possível?",
    opcoes: [
      {
        texto:
          "Garantir que ela observe o circuito completo, caminhar com ela pela rota sem exigir execução e oferecer uma única estação para começar.",
        feedback:
          "Boa alternativa. Observar é uma forma legítima de aprender a tarefa. Percorrer a rota acompanhado reduz incerteza, e começar por uma estação diminui a demanda de decisão.",
        qualidade: "boa",
      },
      {
        texto:
          "Retirar pontos da equipe dela para o grupo pressionar a participação.",
        feedback:
          "Evite. Pressão social por culpa aumenta o desconforto e ensina que participar é algo arriscado, além de punir o grupo inteiro pela barreira de uma criança.",
        qualidade: "evitar",
      },
      {
        texto:
          "Segurar a mão dela e levá-la fisicamente até a primeira estação.",
        feedback:
          "Evite. Contato físico sem aviso e sem consentimento quebra a confiança. Ofereça a mão como apoio, perguntando antes.",
        qualidade: "evitar",
      },
    ],
  },
  {
    id: "caso-tea-3",
    publico: "tea",
    titulo: "Mudança de planos no meio da aula",
    situacao:
      "Você precisou trocar a quadra pelo pátio em cima da hora e uma criança começa a repetir que a aula não é aquela do cartaz.",
    pergunta: "Como conduzir essa transição?",
    opcoes: [
      {
        texto:
          "Nomear a mudança de forma concreta, mostrar no cartão o que continua igual e manter a mesma ordem das etapas.",
        feedback:
          "Boa alternativa. Antecipar a mudança em palavras simples, sinalizar o que se mantém e preservar a rotina das etapas reduz a incerteza e devolve previsibilidade.",
        qualidade: "boa",
      },
      {
        texto:
          "Dizer que ela está exagerando e que precisa aprender a lidar com imprevistos.",
        feedback:
          "Evite. A dificuldade com mudança não é teimosia. Negar o desconforto elimina a chance de usar apoios que facilitam a transição.",
        qualidade: "evitar",
      },
      {
        texto:
          "Encerrar a aula para ela, mandando para a sala de recursos.",
        feedback:
          "Evite. Retirar a criança do espaço coletivo amplifica a exclusão e reduz ainda mais as oportunidades de prática corporal.",
        qualidade: "evitar",
      },
    ],
  },
  {
    id: "caso-tea-4",
    publico: "tea",
    titulo: "Contato social no jogo cooperativo",
    situacao:
      "Na roda de passes, uma criança não quer receber a bola e afasta o corpo quando o colega se aproxima.",
    pergunta: "O que preserva a participação dela e do grupo?",
    opcoes: [
      {
        texto:
          "Dar a ela uma função com contato mínimo, como marcar os passes com um cartão, e permitir que ela retome os passes quando quiser.",
        feedback:
          "Boa alternativa. A criança continua no jogo, com função reconhecida e interação opcional. Contribuir de outra forma também é participar.",
        qualidade: "boa",
      },
      {
        texto:
          "Exigir que ela receba pelo menos um passe para aprender a socializar.",
        feedback:
          "Evite. Contato social imposto gera desconforto e não ensina interação. Interação se constrói quando a pessoa escolhe entrar.",
        qualidade: "evitar",
      },
      {
        texto:
          "Colocá-la fora da roda, sentada em uma cadeira, até o fim do jogo.",
        feedback:
          "Evite. Afastar elimina a possibilidade de retomar a participação espontaneamente durante a atividade.",
        qualidade: "evitar",
      },
    ],
  },
  {
    id: "caso-tea-5",
    publico: "tea",
    titulo: "Movimento repetitivo durante o circuito",
    situacao:
      "Durante a explicação, uma criança balança as mãos e caminha em círculos ao lado do grupo.",
    pergunta: "Qual é a melhor conduta do professor?",
    opcoes: [
      {
        texto:
          "Manter a explicação, sem interromper o movimento, e verificar se ela está acompanhando a sequência.",
        feedback:
          "Boa alternativa. Movimentos autorregulatórios ajudam a criança a se organizar e não impedem a atenção. Só exigem interrupção em situação de risco real.",
        qualidade: "boa",
      },
      {
        texto:
          "Pedir que pare o movimento para demonstrar atenção ao grupo.",
        feedback:
          "Evite. Exigir imobilidade pode aumentar a desregulação e reduzir a capacidade de escutar a instrução.",
        qualidade: "evitar",
      },
      {
        texto:
          "Registrar a situação como problema de comportamento no diário de classe.",
        feedback:
          "Evite. Comportamento autorregulatório não é indisciplina. Registre o que a criança conseguiu fazer e quais apoios funcionaram.",
        qualidade: "evitar",
      },
    ],
  },
  {
    id: "caso-tmg-1",
    publico: "tmg",
    titulo: "Cansaço e medicação",
    situacao:
      "Na terceira estação do circuito, um participante comenta que está com sono pesado desde que a medicação foi ajustada.",
    pergunta: "Como ajustar a sessão?",
    opcoes: [
      {
        texto:
          "Reduzir para duas estações, incluir pausa programada, oferecer versão sentada e registrar a observação para conversar com a equipe do serviço.",
        feedback:
          "Boa alternativa. Intensidade ajustada, pausa prevista e comunicação com a equipe preservam a prática e a segurança. Ajuste de dose é decisão da equipe de saúde.",
        qualidade: "boa",
      },
      {
        texto:
          "Incentivar a continuar porque “o sono passa quando a pessoa se aquece”.",
        feedback:
          "Evite. Sonolência intensa pode indicar efeito medicamentoso e aumenta o risco de queda. Reduzir é mais seguro que insistir.",
        qualidade: "evitar",
      },
      {
        texto:
          "Pedir que ele vá para casa e volte quando estiver melhor, sem registro.",
        feedback:
          "Evite. Interromper a participação sem alternativa reduz a adesão. Uma versão reduzida da atividade costuma ser possível.",
        qualidade: "evitar",
      },
    ],
  },
  {
    id: "caso-tmg-2",
    publico: "tmg",
    titulo: "Desconfiança ao falar em grupo",
    situacao:
      "Na roda de chegada, um participante novo cruza os braços e diz que não gosta de falar nada na frente dos outros.",
    pergunta: "Qual conduta favorece o pertencimento?",
    opcoes: [
      {
        texto:
          "Informar que passar a vez é permitido, convidar sem insistir e oferecer a alternativa de responder por gesto ou por escrito.",
        feedback:
          "Boa alternativa. A permissão explícita reduz o custo de entrar no grupo, e manter caminhos alternativos de resposta sustenta a participação sem exposição.",
        qualidade: "boa",
      },
      {
        texto:
          "Insistir que falar é parte da atividade e que o grupo é acolhedor.",
        feedback:
          "Evite. Garantir acolhimento verbalmente não substitui a possibilidade real de escolher não falar.",
        qualidade: "evitar",
      },
      {
        texto:
          "Concordar e, a partir disso, deixar de convidá-lo em todas as aulas seguintes.",
        feedback:
          "Evite. Transformar uma preferência em regra permanente também retira a chance de participação quando a pessoa quiser tentar.",
        qualidade: "evitar",
      },
    ],
  },
  {
    id: "caso-tmg-3",
    publico: "tmg",
    titulo: "Comparação entre participantes",
    situacao:
      "No arremesso em alvo, um participante começa a zombar dos erros de outro, dizendo que está muito fácil.",
    pergunta: "Como intervir mantendo o ambiente não estigmatizante?",
    opcoes:
      [
        {
          texto:
            "Retomar o combinado da sessão em voz alta, reformular a tarefa como meta coletiva e oferecer distâncias escolhidas por cada pessoa.",
          feedback:
            "Boa alternativa. Combinado explícito, meta coletiva e escolha individual de distância protegem a autoeficácia de quem está aprendendo, sem expor ninguém.",
          qualidade: "boa",
        },
        {
          texto:
            "Fazer um desafio público entre os dois para resolver a rivalidade.",
          feedback:
            "Evite. Competição pública aumenta a exposição e associa a atividade física a avaliação negativa.",
          qualidade: "evitar",
        },
        {
          texto:
            "Ignorar, porque comentários assim fazem parte do esporte.",
          feedback:
            "Evite. Silenciar a zombaria comunica que o ambiente tolera humilhação, o que reduz a participação de quem mais precisa dela.",
          qualidade: "evitar",
        },
      ],
  },
  {
    id: "caso-tmg-4",
    publico: "tmg",
    titulo: "Queda de disposição no meio da aula",
    situacao:
      "Um participante que começou a aula com disposição 4 para de executar as estações, responde curto e olha para o chão.",
    pergunta: "O que fazer agora?",
    opcoes: [
      {
        texto:
          "Perguntar de forma simples se quer pausa, água ou mudar de atividade, e oferecer a versão mais leve da proposta.",
        feedback:
          "Boa alternativa. Pergunta direta e opções concretas devolvem controle à pessoa sem interpretar o que ela sente. O comportamento pode ter muitas causas.",
        qualidade: "boa",
      },
      {
        texto:
          "Interpretar em voz alta que ele está em crise e precisa sentar sozinho.",
        feedback:
          "Evite. Diagnóstico improvisado e isolamento são exposição. Nem toda queda de envolvimento significa crise.",
        qualidade: "evitar",
      },
      {
        texto:
          "Aumentar a estimulação da atividade para animar o grupo.",
        feedback:
          "Evite. Aumentar estímulos quando a pessoa está sobrecarregada tende a reduzir ainda mais a participação.",
        qualidade: "evitar",
      },
    ],
  },
  {
    id: "caso-tmg-5",
    publico: "tmg",
    titulo: "Autonomia x segurança no equilíbrio",
    situacao:
      "No percurso de equilíbrio, um participante quer tentar sem o apoio da cadeira, mas apresentou oscilação na primeira passada.",
    pergunta: "Qual é a conduta mais adequada?",
    opcoes: [
      {
        texto:
          "Alargar a linha, manter o apoio a um passo de distância e combinar um sinal de parada, deixando a pessoa tentar.",
        feedback:
          "Boa alternativa. Modificar a tarefa mantém o desafio e a autonomia, com segurança prevista. Participar é experimentar com apoio disponível.",
        qualidade: "boa",
      },
      {
        texto:
          "Proibir a tentativa sem apoio pela falta de equilíbrio.",
        feedback:
          "Evite. Proibir sem propor alternativa retira autonomia e reforça a ideia de incapacidade.",
        qualidade: "evitar",
      },
      {
        texto:
          "Deixar tentar sem apoio e sem combinação prévia, para não atrapalhar a autonomia.",
        feedback:
          "Evite. Autonomia não dispensa planejamento de segurança, principalmente com risco de queda.",
        qualidade: "evitar",
      },
    ],
  },
];
