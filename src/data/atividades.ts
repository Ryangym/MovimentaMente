import type { EtapaId, PublicoId } from "./taxonomia";

export interface Atividade {
  id: string;
  publico: PublicoId;
  etapa: EtapaId;
  titulo: string;
  descricao: string;
  conduzir: string[];
  objetivos: string[];
  materiais: string[];
  organizacao: string[];
  variacao?: string;
  sinais?: string[];
}

const a = (item: Atividade) => item;

/* ------------------------------------------------------------------ */
/* CRIANÇAS COM TEA                                                    */
/* ------------------------------------------------------------------ */

const TEA: Atividade[] = [
  a({
    id: "tea-aco-1",
    publico: "tea",
    etapa: "acolhimento",
    titulo: "Rota visual do encontro",
    descricao:
      "Apresentar a sequência da aula em cartões ou quadro (chegada, aquecimento, atividade, jogo juntos, despedida) e mostrar onde cada coisa começa e termina.",
    conduzir: [
      "Fixe a rota visual no mesmo lugar em todas as aulas.",
      "Aponte cada cartão ao falar: “primeiro aquecemos, depois o circuito, no fim conversamos”.",
      "Avise antecipadamente qualquer mudança na sequência, virando ou retirando um cartão.",
    ],
    objetivos: ["autonomia", "regulacao", "percepcao"],
    materiais: ["cartoes", "nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
    variacao:
      "Entregue um cartão pequeno na mão da criança para que ela acompanhe a rota segurando o próprio material.",
    sinais: ["Previsibilidade antes do movimento."],
  }),
  a({
    id: "tea-aco-2",
    publico: "tea",
    etapa: "acolhimento",
    titulo: "Check-in com cartões de energia",
    descricao:
      "A criança indica como está o corpo hoje apontando um cartão: energia baixa, média ou alta. O professor organiza a proposta a partir dessa informação.",
    conduzir: [
      "Aceite apontar, gesto, palavra ou comunicação por imagem como respostas válidas.",
      "Não comente o cartão como certo ou errado: apenas agradeça e ajuste a proposta.",
      "Se a energia estiver baixa, comece por uma versão mais lenta ou sentada.",
    ],
    objetivos: ["regulacao", "percepcao", "autonomia"],
    materiais: ["cartoes", "nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
    variacao: "Use três objetos no chão (pedra, folha, lenço) caso a criança não aceite os cartões.",
  }),
  a({
    id: "tea-aco-3",
    publico: "tea",
    etapa: "acolhimento",
    titulo: "Duas portas de escolha",
    descricao:
      "O professor oferece duas possibilidades concretas de começar (por exemplo: trilha no chão ou imitar animais) e a criança escolhe uma.",
    conduzir: [
      "Ofereça sempre duas opções, nunca uma lista longa.",
      "Registre a escolha em voz alta: “você escolheu o caminho das pegadas”.",
      "Guarde a outra opção para o encerramento, reforçando que haverá nova chance de escolher.",
    ],
    objetivos: ["autonomia", "autoeficacia", "interacao"],
    materiais: ["nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
  }),
  a({
    id: "tea-aco-4",
    publico: "tea",
    etapa: "acolhimento",
    titulo: "Combinados em três frases",
    descricao:
      "Revisar três combinados da aula usando frases curtas e apoio visual: onde ficamos, como pedir pausa, quando a atividade termina.",
    conduzir: [
      "Mostre o cartão de pausa e demonstre o gesto combinado.",
      "Repita os mesmos três combinados em todas as aulas.",
      "Descreva o comportamento esperado em vez de listar proibições.",
    ],
    objetivos: ["regulacao", "autonomia"],
    materiais: ["cartoes", "nenhum"],
    organizacao: ["individual", "pequeno", "grupo"],
  }),

  a({
    id: "tea-aqu-1",
    publico: "tea",
    etapa: "aquecimento",
    titulo: "Caminho das pegadas",
    descricao:
      "Caminhar sobre marcas de pegadas ou tracinhos no chão, no próprio ritmo, até o fim do percurso.",
    conduzir: [
      "Delimite claramente início e fim com fita ou cone.",
      "Demonstre uma vez o caminho completo antes de a criança iniciar.",
      "Permita que a criança observe o colega antes de tentar.",
    ],
    objetivos: ["coordenacao", "equilibrio", "percepcao"],
    materiais: ["fita", "nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
    variacao:
      "Versão sentada: a criança percorre o trajeto tocando as pegadas com as mãos ou com uma bola.",
    sinais: ["Sem apito.", "Uma instrução por vez."],
  }),
  a({
    id: "tea-aqu-2",
    publico: "tea",
    etapa: "aquecimento",
    titulo: "Imitação de três movimentos",
    descricao:
      "O professor demonstra três movimentos simples (esticar os braços, agachar, girar os ombros) e a criança reproduz, podendo escolher a ordem.",
    conduzir: [
      "Demonstre em silêncio ou com uma frase curta por movimento.",
      "Conte com os dedos quantos movimentos faltam.",
      "Aceite versões próprias dos movimentos: a tarefa é participar, não copiar perfeitamente.",
    ],
    objetivos: ["coordenacao", "percepcao", "autoeficacia"],
    materiais: ["nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
    variacao: "Realize os três movimentos sentado em cadeira.",
  }),
  a({
    id: "tea-aqu-3",
    publico: "tea",
    etapa: "aquecimento",
    titulo: "Semáforo do movimento",
    descricao:
      "Caminhar pelo espaço respeitando cartões verde (andar), amarelo (devagar) e vermelho (parar). Nada de apito: a sinalização é sempre visual.",
    conduzir: [
      "Explique cada cartão demonstrando o que fazer.",
      "Mantenha intervalos longos entre as trocas de sinal.",
      "Se houver desregulação, retome sempre pelo cartão verde, que é o mais previsível.",
    ],
    objetivos: ["regulacao", "coordenacao", "percepcao"],
    materiais: ["cartoes", "cones"],
    organizacao: ["individual", "pequeno", "grupo"],
    variacao: "A criança pode participar parada, controlando um dos cartões junto com o professor.",
  }),
  a({
    id: "tea-aqu-4",
    publico: "tea",
    etapa: "aquecimento",
    titulo: "Dança dos gestos com escolha",
    descricao:
      "Com música em volume baixo (ou sem música), cada criança sugere um gesto e o grupo repete; quem não quiser sugerir apenas acompanha.",
    conduzir: [
      "Combine antes o volume e se haverá música nesta aula.",
      "Sugerir um gesto é opcional: participar já é suficiente.",
      "Termine com um sinal visual claro de fim (cartão vermelho ou lenço no chão).",
    ],
    objetivos: ["regulacao", "interacao", "autonomia"],
    materiais: ["musica", "nenhum"],
    organizacao: ["dupla", "pequeno", "grupo"],
    variacao: "Faça a sequência sentado, focando em braços, ombros e mãos.",
  }),
  a({
    id: "tea-aqu-5",
    publico: "tea",
    etapa: "aquecimento",
    titulo: "Bola que rola devagar",
    descricao:
      "Em roda ou em dupla, a bola rola no chão de uma pessoa para outra, sem arremesso e sem pressa.",
    conduzir: [
      "Marque com fita o lugar de cada pessoa na roda.",
      "Diga o nome ou mostre o cartão de quem vai receber a bola.",
      "Participar segurando a bola também conta como participação.",
    ],
    objetivos: ["coordenacao", "interacao", "percepcao"],
    materiais: ["bolas"],
    organizacao: ["dupla", "pequeno", "grupo"],
    variacao: "Rolar a bola sentado no chão ou em cadeira, com distância menor.",
  }),

  a({
    id: "tea-pri-1",
    publico: "tea",
    etapa: "principal",
    titulo: "Circuito motor previsível",
    descricao:
      "Três estações na mesma ordem, com começo e fim visualmente delimitados: caminhar sobre pegadas, contornar cones e arremessar em alvo grande.",
    conduzir: [
      "Apresente o circuito inteiro antes, caminhando por ele com a criança.",
      "Use um cartão ou objeto para marcar o fim de cada estação.",
      "Mantenha as três estações iguais por várias aulas antes de mudar algo.",
    ],
    objetivos: ["coordenacao", "autonomia", "equilibrio"],
    materiais: ["cones", "bolas", "fita"],
    organizacao: ["individual", "dupla", "pequeno"],
    variacao:
      "Arremessar sentado a uma distância menor ou entregar a bola na mão do professor na última estação.",
    sinais: ["Sem competição.", "Sem tempo limite."],
  }),
  a({
    id: "tea-pri-2",
    publico: "tea",
    etapa: "principal",
    titulo: "Arremesso em alvo grande",
    descricao:
      "Arremessar bolas de meia ou bolas macias em um alvo amplo (caixa, bambolê no chão ou área marcada com fita), com número livre de tentativas.",
    conduzir: [
      "Comece bem perto e afaste apenas quando a criança pedir ou demonstrar segurança.",
      "Conte os acertos apenas se a criança quiser contar.",
      "Feedback específico: “você acertou segurando com as duas mãos”.",
    ],
    objetivos: ["coordenacao", "autoeficacia", "percepcao"],
    materiais: ["bolas", "bamboles", "garrafas"],
    organizacao: ["individual", "dupla", "pequeno"],
    variacao: "Alvo no colo do professor ou na beirada da cadeira, para execução sentada.",
  }),
  a({
    id: "tea-pri-3",
    publico: "tea",
    etapa: "principal",
    titulo: "Transporte por cores",
    descricao:
      "Retirar objetos de uma cesta e levá-los um a um até o cesto da cor correspondente, percorrendo um caminho marcado.",
    conduzir: [
      "Use no máximo três cores na primeira vez.",
      "Uma tarefa por vez: escolher o objeto, caminhar, soltar no lugar certo.",
      "Sem cronômetro e sem comparação entre crianças.",
    ],
    objetivos: ["coordenacao", "percepcao", "autoeficacia"],
    materiais: ["garrafas", "cones", "cartoes"],
    organizacao: ["individual", "dupla", "pequeno"],
    variacao: "Transportar os objetos empurrando-os com a mão sobre a mesa ou cadeira.",
  }),
  a({
    id: "tea-pri-4",
    publico: "tea",
    etapa: "principal",
    titulo: "Trilha do equilíbrio",
    descricao:
      "Percorrer uma linha de fita no chão, uma corda esticada no chão ou um banco baixo, com apoio disponível na altura da mão.",
    conduzir: [
      "Ofereça a mão, uma corda ou uma cadeira como apoio opcional.",
      "Nunca retire o apoio sem pedir autorização.",
      "Se houver oscilação, transforme a linha em caminho mais largo.",
    ],
    objetivos: ["equilibrio", "coordenacao", "percepcao"],
    materiais: ["fita", "cordas", "cadeiras"],
    organizacao: ["individual", "dupla", "pequeno"],
    variacao: "Trilha no chão feita com fita larga, percorrida sentado em cadeira com apoio dos pés.",
  }),
  a({
    id: "tea-pri-5",
    publico: "tea",
    etapa: "principal",
    titulo: "Caça ao movimento com imagens",
    descricao:
      "Cartões com movimentos (pular, girar, alongar, empurrar o ar) ficam espalhados pelo espaço; a criança encontra um cartão e executa o movimento.",
    conduzir: [
      "Fixe os cartões em altura visível e em locais previsíveis.",
      "Deixe a criança escolher quantos cartões buscar.",
      "Uma imagem por cartão, sem textos longos.",
    ],
    objetivos: ["autonomia", "coordenacao", "percepcao"],
    materiais: ["cartoes", "nenhum"],
    organizacao: ["individual", "dupla", "pequeno"],
    variacao: "Os cartões ficam sobre a mesa e a criança escolhe sentada.",
  }),
  a({
    id: "tea-pri-6",
    publico: "tea",
    etapa: "principal",
    titulo: "Sequência com cartões de movimento",
    descricao:
      "Três cartões formam uma pequena sequência (agachar, levantar os braços, dar dois passos). A criança monta a própria ordem e executa.",
    conduzir: [
      "Mostre a sequência escolhida apontando os cartões antes de executar.",
      "Repita a mesma sequência quantas vezes a criança quiser.",
      "Propor trocar um cartão por vez, nunca mudar tudo ao mesmo tempo.",
    ],
    objetivos: ["autonomia", "coordenacao", "regulacao"],
    materiais: ["cartoes", "nenhum"],
    organizacao: ["individual", "dupla", "pequeno"],
  }),
  a({
    id: "tea-pri-7",
    publico: "tea",
    etapa: "principal",
    titulo: "Condução entre linhas",
    descricao:
      "Empurrar ou conduzir uma bola com a mão ou com o pé por um corredor demarcado com cones ou fita, até uma marca de parada.",
    conduzir: [
      "Corredor largo no início; estreite somente se a criança desejar.",
      "Marque o ponto de parada com um cone de cor diferente.",
      "Se a bola escapar, retome do mesmo ponto, sem recomeçar tudo.",
    ],
    objetivos: ["coordenacao", "equilibrio", "autoeficacia"],
    materiais: ["bolas", "cones"],
    organizacao: ["individual", "dupla", "pequeno"],
    variacao: "Conduzir a bola sentado, empurrando-a entre duas cadeiras.",
  }),
  a({
    id: "tea-pri-8",
    publico: "tea",
    etapa: "principal",
    titulo: "Boliche sem pontuação",
    descricao:
      "Derrubar garrafas PET dispostas em linha, com número livre de tentativas e reposição das garrafas pela própria criança ou pelo professor.",
    conduzir: [
      "Contar acertos é opcional e nunca comparativo.",
      "Montar as garrafas também é parte da atividade (organizar, alinhar, contar).",
      "Se o barulho das garrafas incomodar, use garrafas com pouco ar ou meias dentro.",
    ],
    objetivos: ["coordenacao", "autoeficacia", "regulacao"],
    materiais: ["garrafas", "bolas"],
    organizacao: ["individual", "dupla", "pequeno"],
    variacao: "Derrubar as garrafas empurrando a bola com a mão, sentado, a uma curta distância.",
  }),

  a({
    id: "tea-coo-1",
    publico: "tea",
    etapa: "cooperativo",
    titulo: "Construção coletiva",
    descricao:
      "O grupo transporta objetos (cones, garrafas, bambolês) para montar juntos uma figura simples, como uma casa ou um sol.",
    conduzir: [
      "Cada pessoa decide como contribuir: levar, apoiar, encaixar ou organizar.",
      "Não há prazo nem vencedor: a figura fica pronta quando o grupo achar que está boa.",
      "Registre em voz alta o que cada criança fez.",
    ],
    objetivos: ["cooperacao", "interacao", "coordenacao"],
    materiais: ["cones", "garrafas", "bamboles"],
    organizacao: ["dupla", "pequeno", "grupo"],
    variacao: "A criança pode montar a figura em dupla com o professor, cada um colocando uma peça.",
  }),
  a({
    id: "tea-coo-2",
    publico: "tea",
    etapa: "cooperativo",
    titulo: "Roda de passes com meta comum",
    descricao:
      "Sentados ou em pé em roda, o grupo tenta completar dez passes seguidos sem que a bola caia. Erros não eliminam ninguém.",
    conduzir: [
      "Combine que quem quiser pode apenas segurar a bola uma vez.",
      "A meta é do grupo, não de cada criança.",
      "Se a contagem gerar ansiedade, troque por “passes até todos receberem a bola”.",
    ],
    objetivos: ["cooperacao", "interacao", "coordenacao"],
    materiais: ["bolas"],
    organizacao: ["pequeno", "grupo"],
    variacao: "Rolar a bola no chão em vez de arremessar, com distâncias curtas.",
  }),
  a({
    id: "tea-coo-3",
    publico: "tea",
    etapa: "cooperativo",
    titulo: "Trilha dos dois",
    descricao:
      "Em dupla com o professor ou com um colega, percorrer um caminho curto carregando juntos um bambolê ou uma corda, cada um segurando uma ponta.",
    conduzir: [
      "A criança escolhe o colega ou faz a trilha com o professor.",
      "Se soltar a corda for confortável, a trilha continua do mesmo jeito.",
      "Pergunte antes de tocar ou segurar a mão da criança.",
    ],
    objetivos: ["cooperacao", "equilibrio", "interacao"],
    materiais: ["bamboles", "cordas", "cones"],
    organizacao: ["dupla", "pequeno"],
    variacao: "Caminhar lado a lado sem objeto em comum, mantendo o mesmo trajeto.",
  }),
  a({
    id: "tea-coo-4",
    publico: "tea",
    etapa: "cooperativo",
    titulo: "Mural do movimento",
    descricao:
      "Depois de um percurso, cada criança cola um cartão com o movimento que fez em um cartaz coletivo, formando o mural da aula.",
    conduzir: [
      "Colar o cartão é a participação: correr, andar ou rolar valem igualmente.",
      "Nomeie cada contribuição sem hierarquizar.",
      "Deixe o mural visível na aula seguinte para retomar a memória da rotina.",
    ],
    objetivos: ["cooperacao", "autonomia", "interacao"],
    materiais: ["cartoes", "fita"],
    organizacao: ["dupla", "pequeno", "grupo"],
  }),

  a({
    id: "tea-enc-1",
    publico: "tea",
    etapa: "encerramento",
    titulo: "Check-out com quatro cartões",
    descricao:
      "A criança indica, por gesto, palavra ou imagem: gostei, quero mudar, preciso de pausa ou quero repetir.",
    conduzir: [
      "Apresente os quatro cartões sempre na mesma ordem.",
      "Não exija justificativa nem fale em nome da criança.",
      "Anotar a escolha ajuda a planejar a próxima aula.",
    ],
    objetivos: ["regulacao", "autonomia", "percepcao"],
    materiais: ["cartoes", "nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
  }),
  a({
    id: "tea-enc-2",
    publico: "tea",
    etapa: "encerramento",
    titulo: "Respiração do balão",
    descricao:
      "Três ciclos lentos de inspirar levantando os braços e soltar o ar descendo os braços, com demonstração silenciosa.",
    conduzir: [
      "Faça junto, sem contar em voz alta se o som incomodar.",
      "Ofereça a opção de apenas observar.",
      "Feche com um sinal visual de fim da aula.",
    ],
    objetivos: ["regulacao", "percepcao"],
    materiais: ["nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
    variacao: "Respiração sentada com as mãos apoiadas nas coxas ou na cadeira.",
  }),
  a({
    id: "tea-enc-3",
    publico: "tea",
    etapa: "encerramento",
    titulo: "Escolha do próximo movimento",
    descricao:
      "A criança aponta, entre duas imagens, qual atividade quer repetir na próxima aula, construindo previsibilidade e sentido de continuidade.",
    conduzir: [
      "Registre a escolha visivelmente e mostre-a na próxima aula.",
      "Se a criança não responder, ofereça novamente depois, sem insistir.",
      "Cumprir o combinado é o que fortalece a confiança na rotina.",
    ],
    objetivos: ["autonomia", "autoeficacia", "regulacao"],
    materiais: ["cartoes", "nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
  }),
  a({
    id: "tea-enc-4",
    publico: "tea",
    etapa: "encerramento",
    titulo: "Alongamento de bicho",
    descricao:
      "Alongamento lento imitando três animais (gato alongando as costas, cobra levantando o tronco, tartarula encolhida), em intensidade baixa.",
    conduzir: [
      "Demonstre cada posição uma única vez e mantenha em silêncio.",
      "Imitar é opcional: alongar do seu jeito é participar.",
      "Use colchonete ou cadeira para quem preferir ficar no chão pouco tempo.",
    ],
    objetivos: ["percepcao", "regulacao", "coordenacao"],
    materiais: ["nenhum", "cadeiras"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
    variacao: "Todas as posições adaptadas para execução sentada.",
  }),
];

/* ------------------------------------------------------------------ */
/* ADULTOS COM TRANSTORNOS MENTAIS GRAVES                              */
/* ------------------------------------------------------------------ */

const TMG: Atividade[] = [
  a({
    id: "tmg-aco-1",
    publico: "tmg",
    etapa: "acolhimento",
    titulo: "Escala de disposição de 0 a 5",
    descricao:
      "Cada participante indica sua disposição de 0 a 5, mostrando os dedos ou apontando uma escala no papel, e escolhe entre começar sentado ou em pé.",
    conduzir: [
      "Registre o número sem comentar nem comparar.",
      "Se a disposição for 0 ou 1, proponha a versão de menor intensidade da atividade.",
      "Repita a escala ao final para a pessoa perceber a própria mudança.",
    ],
    objetivos: ["regulacao", "autonomia", "percepcao"],
    materiais: ["cartoes", "nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
    variacao: "A escala pode ser respondida por escrito, sem falar em voz alta.",
  }),
  a({
    id: "tmg-aco-2",
    publico: "tmg",
    etapa: "acolhimento",
    titulo: "Combinado da sessão",
    descricao:
      "Construir com o grupo os combinados do dia: intensidade, pausas, sinal de parada e o que cada pessoa não quer fazer naquele dia.",
    conduzir: [
      "Participar da conversa é opcional; ficar em silêncio já é participação.",
      "Escreva os combinados em um cartaz visível.",
      "Reforce que a pessoa pode sair, sentar ou beber água a qualquer momento.",
    ],
    objetivos: ["autonomia", "regulacao", "interacao"],
    materiais: ["cartoes", "cadeiras"],
    organizacao: ["pequeno", "grupo"],
  }),
  a({
    id: "tmg-aco-3",
    publico: "tmg",
    etapa: "acolhimento",
    titulo: "Roda de chegada sem exposição",
    descricao:
      "Em roda, cada pessoa diz apenas o próprio nome e uma palavra sobre como chegou; passar a vez é sempre permitido.",
    conduzir: [
      "Nunca insista em relatos pessoais ou sobre o diagnóstico.",
      "Comece você mesmo, com uma frase curta e simples.",
      "Mantenha a roda curta, de dois a quatro minutos.",
    ],
    objetivos: ["interacao", "regulacao", "autonomia"],
    materiais: ["nenhum"],
    organizacao: ["pequeno", "grupo"],
  }),
  a({
    id: "tmg-aco-4",
    publico: "tmg",
    etapa: "acolhimento",
    titulo: "Escolha de três caminhos",
    descricao:
      "O professor apresenta três propostas para a aula (circuito, arremesso, caminhada) e o grupo escolhe a ordem em que vão acontecer.",
    conduzir: [
      "Descreva cada proposta em uma frase, sem jargão técnico.",
      "Explique o que cada escolha exige do corpo.",
      "Registre a escolha no quadro, mostrando que a decisão foi acatada.",
    ],
    objetivos: ["autonomia", "autoeficacia", "interacao"],
    materiais: ["cartoes", "nenhum"],
    organizacao: ["pequeno", "grupo"],
  }),

  a({
    id: "tmg-aqu-1",
    publico: "tmg",
    etapa: "aquecimento",
    titulo: "Mobilidade articular com escolha",
    descricao:
      "Mobilidade de tornozelo, joelho, quadril, ombro e pescoço, realizada em cadeira ou em pé, no ritmo de cada pessoa.",
    conduzir: [
      "Demonstre sempre a versão sentada primeiro.",
      "Conte repetições em voz baixa ou use apenas o exemplo visual.",
      "Respeite dor, rigidez ou lentidão de movimento, ajustando a amplitude.",
    ],
    objetivos: ["coordenacao", "percepcao", "autonomia"],
    materiais: ["cadeiras", "nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
    variacao: "Série completa realizada sentado, com apoio dos pés no chão.",
  }),
  a({
    id: "tmg-aqu-2",
    publico: "tmg",
    etapa: "aquecimento",
    titulo: "Caminhada orientada",
    descricao:
      "Caminhada leve em percurso delimitado por cones, com possibilidade de parar, apoiar ou reduzir o passo a qualquer momento.",
    conduzir: [
      "Marque um ponto de descanso visível no meio do percurso.",
      "Converse sobre o percurso, não sobre a vida pessoal.",
      "Observe passos arrastados, tontura ou dificuldade de equilíbrio.",
    ],
    objetivos: ["equilibrio", "coordenacao", "regulacao"],
    materiais: ["cones", "nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
    variacao: "Percorrer o mesmo trajeto empurrando uma cadeira de rodas ou com apoio.",
  }),
  a({
    id: "tmg-aqu-3",
    publico: "tmg",
    etapa: "aquecimento",
    titulo: "Alongamento e percepção corporal",
    descricao:
      "Sequência curta de alongamentos mantidos por 15 a 20 segundos, nomeando as partes do corpo trabalhadas.",
    conduzir: [
      "Evite comparar amplitudes entre participantes.",
      "Pergunte se dói, nunca force até o limite.",
      "Use frases descritivas: “sinta o alongamento na parte de trás da perna”.",
    ],
    objetivos: ["percepcao", "regulacao", "coordenacao"],
    materiais: ["cadeiras", "nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
    variacao: "Todos os alongamentos com apoio da cadeira e sem descarga de peso.",
  }),
  a({
    id: "tmg-aqu-4",
    publico: "tmg",
    etapa: "aquecimento",
    titulo: "Movimento com música em volume moderado",
    descricao:
      "Sequência livre de movimentos amplos acompanhando uma música escolhida pelo grupo, sem coreografia obrigatória.",
    conduzir: [
      "Pergunte antes se o grupo quer música nesta aula.",
      "Movimentar só os braços, sentado, é participação plena.",
      "Avise quando a música terminar para não haver surpresa.",
    ],
    objetivos: ["regulacao", "interacao", "autonomia"],
    materiais: ["musica", "cadeiras"],
    organizacao: ["dupla", "pequeno", "grupo"],
    variacao: "Versão sentada com movimentos de braços, tronco e mãos.",
  }),

  a({
    id: "tmg-pri-1",
    publico: "tmg",
    etapa: "principal",
    titulo: "Circuito movimento e autonomia",
    descricao:
      "Quatro estações alternando arremesso em alvo, caminhada delimitada, sentar e levantar da cadeira e condução de bola entre cones.",
    conduzir: [
      "Caminhe com o grupo pelo circuito antes de iniciar.",
      "Permita pular uma estação sem justificativa.",
      "Reduza o número de estações se houver fadiga, tontura ou queixa de cansaço.",
    ],
    objetivos: ["equilibrio", "autoeficacia", "coordenacao"],
    materiais: ["bolas", "cones", "cadeiras"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
    variacao: "Estação de sentar e levantar substituída por flexão de joelhos sentado e extensão de pernas.",
    sinais: ["Sem comparação entre participantes.", "Pausa sempre disponível."],
  }),
  a({
    id: "tmg-pri-2",
    publico: "tmg",
    etapa: "principal",
    titulo: "Arremesso em alvo progressivo",
    descricao:
      "Arremessar bola ou bola de meia em alvos a três distâncias; a pessoa escolhe a distância em que quer tentar.",
    conduzir: [
      "A escolha da distância é da pessoa, nunca sorteada.",
      "Feedback específico sobre o gesto, não sobre o resultado.",
      "Aumentar a distância só quando a própria pessoa sugerir.",
    ],
    objetivos: ["autoeficacia", "coordenacao", "autonomia"],
    materiais: ["bolas", "cones", "garrafas"],
    organizacao: ["individual", "dupla", "pequeno"],
    variacao: "Arremesso sentado a curta distância, com alvo no colo ou em uma cadeira.",
  }),
  a({
    id: "tmg-pri-3",
    publico: "tmg",
    etapa: "principal",
    titulo: "Força funcional com garrafas",
    descricao:
      "Exercícios de força leve usando garrafas PET com água: levantar à frente, laterais, rosca de braço e levantar da cadeira com apoio.",
    conduzir: [
      "Comece sem água e encha conforme a pessoa se sentir segura.",
      "Poucas repetições bem feitas valem mais que muitas com desconforto.",
      "Observe tremores, perda de força ou queixa de cansaço incomum.",
    ],
    objetivos: ["autoeficacia", "coordenacao", "percepcao"],
    materiais: ["garrafas", "cadeiras"],
    organizacao: ["individual", "dupla", "pequeno"],
    variacao: "Toda a série realizada sentado, com apoio das costas no encosto.",
  }),
  a({
    id: "tmg-pri-4",
    publico: "tmg",
    etapa: "principal",
    titulo: "Boliche adaptado",
    descricao:
      "Derrubar garrafas PET em linha, com distância escolhida pela própria pessoa e possibilidade de usar rampa, bola maior ou empurrar com a mão.",
    conduzir: [
      "A pontuação é do grupo ou inexistente, nunca um ranking.",
      "Organizar as garrafas é uma função tão valiosa quanto derrubá-las.",
      "Atenção ao barulho: pergunte se o som incomoda alguém.",
    ],
    objetivos: ["coordenacao", "autoeficacia", "interacao"],
    materiais: ["garrafas", "bolas"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
    variacao: "Derrubar as garrafas sentado, com a bola rolada no chão.",
  }),
  a({
    id: "tmg-pri-5",
    publico: "tmg",
    etapa: "principal",
    titulo: "Trilha de equilíbrio com apoio",
    descricao:
      "Caminhar sobre uma linha no chão, corda esticada ou bambolês no chão, sempre com apoio de cadeira ou parede ao alcance da mão.",
    conduzir: [
      "Mantenha o apoio a um passo de distância, nunca longe.",
      "Se houver oscilação, alargue a linha imediatamente.",
      "Realize com calçado fechado ou descalço conforme a segurança do espaço.",
    ],
    objetivos: ["equilibrio", "percepcao", "autoeficacia"],
    materiais: ["fita", "cordas", "bamboles", "cadeiras"],
    organizacao: ["individual", "dupla", "pequeno"],
    variacao: "Trilha percorrida sentado, deslocando os pés sobre marcas no chão.",
  }),
  a({
    id: "tmg-pri-6",
    publico: "tmg",
    etapa: "principal",
    titulo: "Caminhada com estações de respiração",
    descricao:
      "Percurso em estações: caminhar, parar e fazer três respirações lentas, retomar, alongar os braços, retomar.",
    conduzir: [
      "Cada pessoa decide quantas voltas faz.",
      "As paradas fazem parte da atividade, não são atraso.",
      "Observe respiração ofegante, palidez ou sudorese excessiva.",
    ],
    objetivos: ["regulacao", "equilibrio", "percepcao"],
    materiais: ["cones", "nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
    variacao: "Estações realizadas entre a cadeira e a parede, em espaço menor.",
  }),
  a({
    id: "tmg-pri-7",
    publico: "tmg",
    etapa: "principal",
    titulo: "Condução de bola entre cones",
    descricao:
      "Conduzir a bola com a mão ou com o pé por entre cones, com espaço amplo e paradas livres.",
    conduzir: [
      "Comece com três cones bem afastados.",
      "Recomeçar do último cone vencido, não do início.",
      "Trabalhe com bola macia e de pequeno peso.",
    ],
    objetivos: ["coordenacao", "equilibrio", "autoeficacia"],
    materiais: ["bolas", "cones"],
    organizacao: ["individual", "dupla", "pequeno"],
    variacao: "Conduzir a bola sentado, empurrando-a entre duas cadeiras.",
  }),
  a({
    id: "tmg-pri-8",
    publico: "tmg",
    etapa: "principal",
    titulo: "Jogo coletivo sem eliminação",
    descricao:
      "Jogo simples com duas metas e regras mínimas: todos participam, ninguém sai do jogo e o tempo é dividido em rodadas curtas.",
    conduzir: [
      "Explique uma regra por vez e demonstre em movimento.",
      "Não crie times fixos por habilidade.",
      "Se alguém sair do jogo, isso deve ser previsto pela regra, não como punição.",
    ],
    objetivos: ["interacao", "cooperacao", "autoeficacia"],
    materiais: ["bolas", "cones", "bamboles"],
    organizacao: ["pequeno", "grupo"],
    variacao: "Jogo sentado em roda, com bola rolada no chão.",
  }),

  a({
    id: "tmg-coo-1",
    publico: "tmg",
    etapa: "cooperativo",
    titulo: "Passes com meta coletiva",
    descricao:
      "O grupo tenta alcançar uma meta comum de passes (por exemplo, 20 passes em dois minutos), somando as contribuições de todos.",
    conduzir: [
      "Quem passa e quem recebe escolhe a distância.",
      "Reforçe a soma do grupo, não o desempenho individual.",
      "Se a meta gerar pressão, reduza-a em voz alta com o grupo.",
    ],
    objetivos: ["cooperacao", "interacao", "coordenacao"],
    materiais: ["bolas"],
    organizacao: ["pequeno", "grupo"],
    variacao: "Passes rolados no chão, sentados em roda.",
  }),
  a({
    id: "tmg-coo-2",
    publico: "tmg",
    etapa: "cooperativo",
    titulo: "Construção do percurso",
    descricao:
      "O grupo monta juntos um pequeno percurso com cones, bambolês e cordas e depois cada pessoa percorre do próprio jeito.",
    conduzir: [
      "Montar o percurso é a atividade coletiva; percorrer é a individual.",
      "Aceite sugestões parciais, mesmo pequenas.",
      "Registre a autoria do percurso no fim.",
    ],
    objetivos: ["cooperacao", "autonomia", "interacao"],
    materiais: ["cones", "bamboles", "cordas"],
    organizacao: ["pequeno", "grupo"],
    variacao: "Montar um percurso na mesa, movendo os objetos sentado.",
  }),
  a({
    id: "tmg-coo-3",
    publico: "tmg",
    etapa: "cooperativo",
    titulo: "Cadeia de movimentos",
    descricao:
      "Cada participante sugere um movimento e o grupo repete em sequência, formando uma corrente criada por todos.",
    conduzir: [
      "Sugerir é opcional; repetir já sustenta a atividade.",
      "Reduza a sequência se ficar longa demais para lembrar.",
      "Dê crédito a cada autor ao repetir o movimento.",
    ],
    objetivos: ["cooperacao", "interacao", "autonomia"],
    materiais: ["nenhum", "cadeiras"],
    organizacao: ["pequeno", "grupo"],
    variacao: "Todos os movimentos executados sentados.",
  }),
  a({
    id: "tmg-coo-4",
    publico: "tmg",
    etapa: "cooperativo",
    titulo: "Transporte coletivo",
    descricao:
      "Em pequenos grupos, transportar objetos de um lado a outro usando as mãos, uma corda ou um bambolê, dividindo as tarefas livremente.",
    conduzir: [
      "Cada pessoa escolhe sua função: carregar, apoiar, contar, organizar.",
      "Não há competição entre grupos.",
      "Interrupções para descanso são previstas.",
    ],
    objetivos: ["cooperacao", "coordenacao", "interacao"],
    materiais: ["cordas", "bamboles", "garrafas"],
    organizacao: ["dupla", "pequeno", "grupo"],
    variacao: "Transportar os objetos sobre uma mesa, todos sentados.",
  }),

  a({
    id: "tmg-enc-1",
    publico: "tmg",
    etapa: "encerramento",
    titulo: "Escala de esforço de 0 a 10",
    descricao:
      "Cada participante indica o esforço percebido de 0 a 10 e compara com a disposição informada no início.",
    conduzir: [
      "Esforço entre 3 e 5 costuma indicar intensidade moderada e segura.",
      "Valores altos pedem redução de intensidade ou mais pausas na próxima aula.",
      "Nunca transforme a escala em competição.",
    ],
    objetivos: ["regulacao", "percepcao", "autonomia"],
    materiais: ["cartoes", "nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
  }),
  a({
    id: "tmg-enc-2",
    publico: "tmg",
    etapa: "encerramento",
    titulo: "Volta à calma guiada",
    descricao:
      "Redução gradual da intensidade com caminhada lenta, respiração diafragmática e alongamento leve, retornando à cadeira.",
    conduzir: [
      "Nunca interrompa a aula sem volta à calma.",
      "Fale devagar e com frases curtas.",
      "Confirme se a pessoa está estável antes de encerrar.",
    ],
    objetivos: ["regulacao", "percepcao"],
    materiais: ["cadeiras", "nenhum"],
    organizacao: ["individual", "dupla", "pequeno", "grupo"],
  }),
  a({
    id: "tmg-enc-3",
    publico: "tmg",
    etapa: "encerramento",
    titulo: "Escolha do que repetir",
    descricao:
      "Cada participante aponta qual atividade da aula gostaria de repetir na próxima semana, apontando no cartaz ou falando.",
    conduzir: [
      "Use as escolhas para planejar a aula seguinte.",
      "Anote em lista simples, sem nomear desempenhos.",
      "Cumpra ao menos uma das escolhas na próxima sessão.",
    ],
    objetivos: ["autonomia", "autoeficacia", "interacao"],
    materiais: ["cartoes", "nenhum"],
    organizacao: ["pequeno", "grupo"],
  }),
  a({
    id: "tmg-enc-4",
    publico: "tmg",
    etapa: "encerramento",
    titulo: "Roda de fechamento com uma palavra",
    descricao:
      "Cada pessoa diz uma palavra sobre a aula, podendo passar a vez. O professor encerra reforçando o que o grupo conseguiu fazer.",
    conduzir: [
      "Destaque conquistas concretas: “hoje o circuito foi feito por todos”.",
      "Evite interpretações psicológicas das palavras ditas.",
      "Comunique o dia e o horário da próxima aula.",
    ],
    objetivos: ["interacao", "autoeficacia", "regulacao"],
    materiais: ["nenhum", "cadeiras"],
    organizacao: ["pequeno", "grupo"],
  }),
];

export const ATIVIDADES: Atividade[] = [...TEA, ...TMG];

export function bancoPorPublico(publico: PublicoId, etapa: EtapaId) {
  return ATIVIDADES.filter((item) => item.publico === publico && item.etapa === etapa);
}
