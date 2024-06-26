export const VACCINES = [
  [
    {
      vacina: 'BCG',
      nome_completo: 'Bacilo de Calmette e Guérin',
      protege: 'Formas graves da tuberculose (miliar e meníngea).',
      contraindicacao: [
        'Em crianças nascidas com peso inferior a 2 Kg, adiar a vacinação até que atinjam este peso.',
        'Crianças vacinadas na faixa etária correta que não apresentam cicatriz vacinal não necessitam ser revacinadas.',
        'Pessoas imunodeprimidas e recém-nascidos de mães que usaram medicamentos que possam causar imunodepressão do feto durante a gestação.',
      ],
      aspectoTecnico:
        'O imunizante é apresentado sob a forma liofilizada em ampola multi dose acompanhada da ampola do diluente específico, via de administração intradérmica.',
      doQueEFeita:
        'É composta pelo bacilo de Calmette-Guérin – origem do nome BCG – obtido pela atenuação (enfraquecimento) de uma das bactérias que causam a tuberculose. Completam sua composição o glutamato de sódio e a solução fisiológica (soro a 0,9%).',
      esquemaDosagem: [
        {
          id: 'dose_1',
          dose: 'Dose única',
          minimo: 0,
          maximo: 1825,
        },
      ],
      foto: 'https://www.invivo.fiocruz.br/wp-content/uploads/2022/06/Cicatriz-vacinal.jpg',
      url: 'https://www.gov.br/pt-br/servicos/vacinar-contra-formas-graves-de-tuberculose-bcg-fiocruz-rj#:~:text=O%20que%20%C3%A9%3F,o%20nascimento%2C%20ainda%20na%20maternidade.',
      indicacao:
        'A vacina é indicada de rotina a partir do nascimento até antes de a criança completar 5 anos de idade. Pessoas de qualquer idade que convivem com portadores de hanseníase (lepra).',
      localAplicacao: 'Intradérmica',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'Hepatite B',
      nome_completo: 'Vacina contra Hepatite B',
      protege: 'Hepatite B',
      contraindicacao: [
        'Pessoas com hipersensibilidade conhecida a qualquer componente da vacina.',
        'Adiar a vacinação em caso de doença febril aguda.',
      ],
      aspectoTecnico:
        'A vacina é apresentada em suspensão injetável, via de administração intramuscular.',
      doQueEFeita:
        'É composta pelo antígeno de superfície do vírus da hepatite B (HBsAg) produzido por tecnologia de DNA recombinante em células de levedura. Completam sua composição o hidróxido de alumínio e o tiomersal como conservante.',
      esquemaDosagem: [
        {
          id: 'dose_2',
          dose: 'Dose ao nascer',
          minimo: 0,
          maximo: 60,
        },
      ],
      foto: 'https://www.saude.go.gov.br/images/saude/noticias/2022_fevereiro/hepatite_b.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao: 'Recomendada para todos os recém-nascidos, adolescentes e adultos não vacinados.',
      localAplicacao: 'Intramuscular',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'Penta (DTP/Hib/Hepatite B)',
      nome_completo: 'Vacina Pentavalente (DTP/Hib/Hepatite B)',
      protege:
        'Difteria, Tétano, Coqueluche, infecções por Haemophilus influenzae tipo B, Hepatite B',
      contraindicacao: [
        'Pessoas com reação alérgica grave (anafilaxia) após dose anterior.',
        'Pessoas com encefalopatia não esclarecida ocorrida até sete dias após a administração de dose anterior de vacina contendo componente pertussis.',
      ],
      aspectoTecnico:
        'O imunizante é apresentado em suspensão injetável, via de administração intramuscular.',
      doQueEFeita:
        'Contém toxóides diftérico e tetânico, células inteiras de Bordetella pertussis inativadas, antígeno de superfície do vírus da hepatite B e polissacarídeos de Haemophilus influenzae tipo B conjugados.',
      esquemaDosagem: [
        {
          id: 'dose_3',
          dose: '1 dose',
          minimo: 60,
          maximo: 120,
        },
        {
          id: 'dose_4',
          dose: '2 dose',
          minimo: 120,
          maximo: 180,
        },
        {
          id: 'dose_5',
          dose: '3 dose',
          minimo: 180,
          maximo: 240,
        },
      ],
      foto: 'https://www.saude.gov.br/images/galerias_fotos/2018/julho/21-07-18-Vacina-Pentavalente-foto.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao:
        'Indicada para crianças a partir de 2 meses de idade, com doses aos 2, 4 e 6 meses.',
      localAplicacao: 'Intramuscular',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'VIP (Vacina Inativada Poliomielite)',
      nome_completo: 'Vacina Inativada Poliomielite',
      protege: 'Poliomielite',
      contraindicacao: [
        'Pessoas com reação alérgica grave (anafilaxia) após dose anterior.',
        'Pessoas com alergia grave a qualquer componente da vacina.',
      ],
      aspectoTecnico:
        'A vacina é apresentada em suspensão injetável, via de administração intramuscular ou subcutânea.',
      doQueEFeita:
        'É composta por vírus inativados de poliovírus tipos 1, 2 e 3. Completam sua composição o hidróxido de alumínio e o 2-fenoxietanol como conservante.',
      esquemaDosagem: [
        {
          id: 'dose_6',
          dose: '1 dose',
          minimo: 60,
          maximo: 120,
        },
        {
          id: 'dose_7',
          dose: '2 dose',
          minimo: 120,
          maximo: 180,
        },
        {
          id: 'dose_8',
          dose: '3 dose',
          minimo: 180,
          maximo: 240,
        },
      ],
      foto: 'https://www.saude.gov.br/images/poliomielite-vacina.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao:
        'Indicada para todas as crianças a partir de 2 meses de idade, com doses aos 2, 4 e 6 meses.',
      localAplicacao: 'Intramuscular ou Subcutânea',
      aplicadoEm: ['menino', 'menina'],
    },
  ],
  [
    {
      vacina: 'Rotavírus',
      nome_completo: 'Vacina contra Rotavírus',
      protege: 'Gastroenterite por rotavírus',
      contraindicacao: [
        'Pessoas com história de hipersensibilidade a qualquer componente da vacina.',
        'Pessoas com imunodeficiência congênita ou adquirida.',
        'Adiar a vacinação em caso de doença febril aguda.',
      ],
      aspectoTecnico: 'A vacina é apresentada em suspensão oral, administrada por via oral.',
      doQueEFeita:
        'É composta por vírus vivos atenuados de rotavírus humano. Completam sua composição sacarose, dextrose, sorbitol e aminoácidos.',
      esquemaDosagem: [
        {
          id: 'dose_9',
          dose: '1 dose',
          minimo: 60,
          maximo: 120,
        },
        {
          id: 'dose_10',
          dose: '2 dose',
          minimo: 120,
          maximo: 180,
        },
      ],
      foto: 'https://www.saude.gov.br/images/rotavirus-vacina.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao: 'Indicada para todas as crianças aos 2 e 4 meses de idade.',
      localAplicacao: 'Oral',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'Pneumocócica 10-valente',
      nome_completo: 'Vacina Pneumocócica 10-valente',
      protege: 'Doenças pneumocócicas (pneumonia, meningite, otite)',
      contraindicacao: [
        'Pessoas com hipersensibilidade conhecida a qualquer componente da vacina.',
        'Adiar a vacinação em caso de doença febril aguda.',
      ],
      aspectoTecnico:
        'A vacina é apresentada em suspensão injetável, via de administração intramuscular.',
      doQueEFeita:
        'É composta por polissacarídeos capsulares purificados de Streptococcus pneumoniae conjugados com proteína D de Haemophilus influenzae.',
      esquemaDosagem: [
        {
          id: 'dose_11',
          dose: '1 dose',
          minimo: 60,
          maximo: 120,
        },
        {
          id: 'dose_12',
          dose: '2 dose',
          minimo: 120,
          maximo: 180,
        },
      ],
      foto: 'https://www.saude.gov.br/images/pneumococica-10valente.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao:
        'Indicada para todas as crianças aos 2, 4 e 6 meses de idade, com reforço aos 12 meses.',
      localAplicacao: 'Intramuscular',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'Meningocócica C',
      nome_completo: 'Vacina Meningocócica C',
      protege: 'Meningite e outras infecções causadas pelo meningococo C',
      contraindicacao: [
        'Pessoas com hipersensibilidade conhecida a qualquer componente da vacina.',
        'Adiar a vacinação em caso de doença febril aguda.',
      ],
      aspectoTecnico:
        'A vacina é apresentada em suspensão injetável, via de administração intramuscular.',
      doQueEFeita:
        'É composta por polissacarídeos capsulares purificados de Neisseria meningitidis conjugados com toxóide tetânico.',
      esquemaDosagem: [
        {
          id: 'dose_13',
          dose: '1 dose',
          minimo: 90,
          maximo: 150,
        },
        {
          id: 'dose_14',
          dose: '2 dose',
          minimo: 150,
          maximo: 210,
        },
      ],
      foto: 'https://www.saude.gov.br/images/meningococica-c.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao: 'Indicada para todas as crianças aos 3, 5 e 12 meses de idade.',
      localAplicacao: 'Intramuscular',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'Febre Amarela',
      nome_completo: 'Vacina contra Febre Amarela',
      protege: 'Febre amarela',
      contraindicacao: [
        'Pessoas com imunodeficiência primária ou secundária.',
        'Pessoas com reação alérgica grave a ovo de galinha.',
        'Gestantes (salvo em situações de surto).',
        'Pessoas com doenças neurológicas em atividade.',
      ],
      aspectoTecnico:
        'A vacina é apresentada em suspensão injetável, via de administração subcutânea.',
      doQueEFeita:
        'É composta por vírus vivos atenuados de febre amarela. Completam sua composição sacarose, gelatina, sorbitol e aminoácidos.',
      esquemaDosagem: [
        {
          id: 'dose_15',
          dose: '1 dose',
          minimo: 270,
          maximo: 365,
        },
      ],
      foto: 'https://www.saude.gov.br/images/febre-amarela.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao:
        'Indicada para crianças a partir dos 9 meses de idade e adultos em áreas de risco.',
      localAplicacao: 'Subcutânea',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'Tríplice Viral (SCR)',
      nome_completo: 'Vacina Tríplice Viral (Sarampo, Caxumba, Rubéola)',
      protege: 'Sarampo, Caxumba, Rubéola',
      contraindicacao: [
        'Pessoas com imunodeficiência congênita ou adquirida.',
        'Pessoas com reação alérgica grave a qualquer componente da vacina.',
        'Gestantes (adicionar outra dose após o parto).',
      ],
      aspectoTecnico:
        'A vacina é apresentada em suspensão injetável, via de administração subcutânea.',
      doQueEFeita:
        'É composta por vírus vivos atenuados de sarampo, caxumba e rubéola. Completam sua composição sorbitol, gelatina e aminoácidos.',
      esquemaDosagem: [
        {
          id: 'dose_16',
          dose: '1 dose',
          minimo: 365,
          maximo: 425,
        },
      ],
      foto: 'https://www.saude.gov.br/images/triplice-viral.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao: 'Indicada para crianças aos 12 e 15 meses de idade.',
      localAplicacao: 'Subcutânea',
      aplicadoEm: ['menino', 'menina'],
    },
  ],
  [
    {
      vacina: 'Pneumocócica 10-valente',
      nome_completo: 'Vacina Pneumocócica 10-valente',
      protege: 'Doenças pneumocócicas (pneumonia, meningite, otite)',
      contraindicacao: [
        'Pessoas com hipersensibilidade conhecida a qualquer componente da vacina.',
        'Adiar a vacinação em caso de doença febril aguda.',
      ],
      aspectoTecnico:
        'A vacina é apresentada em suspensão injetável, via de administração intramuscular.',
      doQueEFeita:
        'É composta por polissacarídeos capsulares purificados de Streptococcus pneumoniae conjugados com proteína D de Haemophilus influenzae.',
      esquemaDosagem: [
        {
          id: 'dose_17',
          dose: 'Reforço',
          minimo: 360,
          maximo: 420,
        },
      ],
      foto: 'https://www.saude.gov.br/images/pneumococica-10valente.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao:
        'Indicada para todas as crianças aos 2, 4 e 6 meses de idade, com reforço aos 12 meses.',
      localAplicacao: 'Intramuscular',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'Meningocócica C',
      nome_completo: 'Vacina Meningocócica C',
      protege: 'Meningite e outras infecções causadas pelo meningococo C',
      contraindicacao: [
        'Pessoas com hipersensibilidade conhecida a qualquer componente da vacina.',
        'Adiar a vacinação em caso de doença febril aguda.',
      ],
      aspectoTecnico:
        'A vacina é apresentada em suspensão injetável, via de administração intramuscular.',
      doQueEFeita:
        'É composta por polissacarídeos capsulares purificados de Neisseria meningitidis conjugados com toxóide tetânico.',
      esquemaDosagem: [
        {
          id: 'dose_18',
          dose: 'Reforço',
          minimo: 360,
          maximo: 510,
        },
      ],
      foto: 'https://www.saude.gov.br/images/meningococica-c.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao: 'Indicada para todas as crianças aos 3, 5 e 12 meses de idade.',
      localAplicacao: 'Intramuscular',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'DTP/DTPa (Tríplice Bacteriana)',
      nome_completo: 'Vacina Tríplice Bacteriana (Difteria, Tétano, Coqueluche)',
      protege: 'Difteria, Tétano, Coqueluche',
      contraindicacao: [
        'Pessoas com história de encefalopatia não esclarecida até sete dias após a administração de dose anterior de vacina contendo componente pertussis.',
        'Pessoas com reação alérgica grave (anafilaxia) após dose anterior.',
      ],
      aspectoTecnico:
        'A vacina é apresentada em suspensão injetável, via de administração intramuscular.',
      doQueEFeita:
        'Contém toxóides diftérico e tetânico e células inteiras de Bordetella pertussis inativadas.',
      esquemaDosagem: [
        {
          id: 'dose_19',
          dose: '1 dose',
          minimo: 360,
          maximo: 390,
        },
      ],
      foto: 'https://www.saude.gov.br/images/triplice-bacteriana.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao: 'Indicada para crianças aos 15 meses de idade como dose de reforço.',
      localAplicacao: 'Intramuscular',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'VOP (Vacina Oral Poliomielite)',
      nome_completo: 'Vacina Oral Poliomielite',
      protege: 'Poliomielite',
      contraindicacao: [
        'Pessoas com imunodeficiência primária.',
        'Pessoas que receberam recentemente transfusão de sangue ou produtos derivados do sangue.',
        'Pessoas com história de hipersensibilidade a qualquer componente da vacina.',
      ],
      aspectoTecnico: 'A vacina é apresentada em suspensão oral, administrada por via oral.',
      doQueEFeita: 'É composta por vírus vivos atenuados de poliovírus tipos 1, 2 e 3.',
      esquemaDosagem: [
        {
          id: 'dose_20',
          dose: '1 dose',
          minimo: 455,
          maximo: 485,
        },
        {
          id: 'dose_21',
          dose: '2 dose',
          minimo: 1460,
          maximo: 1490,
        },
      ],
      foto: 'https://www.saude.gov.br/images/poliomielite-oral.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao:
        'Indicada como dose de reforço para todas as crianças aos 15 meses e 4 anos de idade.',
      localAplicacao: 'Oral',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'Tetra Viral (SCRV)',
      nome_completo: 'Vacina Tetra Viral (Sarampo, Caxumba, Rubéola, Varicela)',
      protege: 'Sarampo, Caxumba, Rubéola, Varicela',
      contraindicacao: [
        'Pessoas com imunodeficiência congênita ou adquirida.',
        'Pessoas com reação alérgica grave a qualquer componente da vacina.',
        'Gestantes (adicionar outra dose após o parto).',
      ],
      aspectoTecnico:
        'A vacina é apresentada em suspensão injetável, via de administração subcutânea.',
      doQueEFeita:
        'É composta por vírus vivos atenuados de sarampo, caxumba, rubéola e varicela. Completam sua composição sorbitol, gelatina e aminoácidos.',
      esquemaDosagem: [
        {
          id: 'dose_22',
          dose: '1 dose',
          minimo: 455,
          maximo: 485,
        },
      ],
      foto: 'https://www.saude.gov.br/images/tetra-viral.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao: 'Indicada para crianças aos 15 meses de idade.',
      localAplicacao: 'Subcutânea',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'Varicela',
      nome_completo: 'Vacina contra Varicela',
      protege: 'Varicela (catapora)',
      contraindicacao: [
        'Pessoas com imunodeficiência primária ou secundária.',
        'Pessoas com história de reação alérgica grave a algum componente da vacina.',
        'Gestantes (deve ser evitada durante a gravidez).',
        'Pessoas com doenças agudas moderadas ou graves (a vacinação deve ser adiada).',
      ],
      aspectoTecnico: 'Vacina de vírus vivo atenuado, administrada por via subcutânea.',
      doQueEFeita:
        'Composta por vírus vivo atenuado da varicela, além de sorbitol, gelatina e traços de neomicina.',
      esquemaDosagem: [
        {
          id: 'dose_23',
          dose: 'Dose única',
          minimo: 360,
          maximo: 450,
        },
      ],
      foto: 'https://www.cdc.gov/vaccines/parents/diseases/images/teen-chickenpox.jpg',
      url: 'https://www.cdc.gov/vaccines/vpd/varicella/index.html',
      indicacao: 'Indicada para crianças a partir de 12 meses e adultos não imunes.',
      localAplicacao: 'Subcutânea',
      aplicadoEm: ['menino', 'menina'],
    },
  ],
  [
    {
      vacina: 'Hepatite A',
      nome_completo: 'Vacina contra Hepatite A',
      protege: 'Hepatite A',
      contraindicacao: [
        'Pessoas com hipersensibilidade conhecida a qualquer componente da vacina.',
        'Adiar a vacinação em caso de doença febril aguda.',
      ],
      aspectoTecnico:
        'A vacina é apresentada em suspensão injetável, via de administração intramuscular.',
      doQueEFeita:
        'É composta por vírus inativados de hepatite A. Completam sua composição hidróxido de alumínio e 2-fenoxietanol como conservante.',
      esquemaDosagem: [
        {
          id: 'dose_24',
          dose: 'Uma dose',
          minimo: 365,
          maximo: 425,
        },
      ],
      foto: 'https://www.saude.gov.br/images/hepatite-a.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao: 'Indicada para crianças aos 12 meses de idade.',
      localAplicacao: 'Intramuscular',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'Pneumocócica 23-valente (Povos indígenas)',
      nome_completo: 'Vacina Pneumocócica 10-valente',
      protege: 'Doenças pneumocócicas (pneumonia, meningite, otite)',
      contraindicacao: [
        'Pessoas com hipersensibilidade conhecida a qualquer componente da vacina.',
        'Adiar a vacinação em caso de doença febril aguda.',
      ],
      aspectoTecnico:
        'A vacina é apresentada em suspensão injetável, via de administração intramuscular.',
      doQueEFeita:
        'É composta por polissacarídeos capsulares purificados de Streptococcus pneumoniae conjugados com proteína D de Haemophilus influenzae.',
      esquemaDosagem: [
        {
          id: 'dose_25',
          dose: 'Uma dose',
          minimo: 360,
          maximo: 390,
        },
      ],
      foto: 'https://www.saude.gov.br/images/pneumococica-10valente.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao:
        'Indicada para todas as crianças aos 2, 4 e 6 meses de idade, com reforço aos 12 meses.',
      localAplicacao: 'Intramuscular',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'HPV (Papilomavírus Humano)',
      nome_completo: 'Vacina contra Papilomavírus Humano (HPV)',
      protege: 'Infecções por HPV e cânceres associados',
      contraindicacao: [
        'Pessoas com hipersensibilidade conhecida a qualquer componente da vacina.',
        'Adiar a vacinação em caso de doença febril aguda.',
      ],
      aspectoTecnico:
        'A vacina é apresentada em suspensão injetável, via de administração intramuscular.',
      doQueEFeita:
        'É composta por partículas semelhantes ao vírus (VLPs) de HPV tipos 6, 11, 16 e 18. Completam sua composição hidróxido de alumínio e 2-fenoxietanol como conservante.',
      esquemaDosagem: [
        {
          id: 'dose_26',
          dose: 'Dose Única',
          minimo: 3285,
          maximo: 5140,
        },
      ],
      foto: 'https://www.saude.gov.br/images/hpv-vacina.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao: 'Indicada para meninas de 9 a 14 anos e meninos de 11 a 14 anos.',
      localAplicacao: 'Intramuscular',
      aplicadoEm: ['menino', 'menina'],
    },
    {
      vacina: 'Influenza',
      nome_completo: 'Vacina contra Influenza',
      protege: 'Influenza (gripe)',
      contraindicacao: [
        'Pessoas com história de reação alérgica grave a ovo de galinha ou a qualquer outro componente da vacina.',
        'Crianças menores de 6 meses de idade.',
        'Pessoas com história de síndrome de Guillain-Barré após receber vacina contra influenza.',
      ],
      aspectoTecnico: 'Vacina de vírus inativado, administrada por via intramuscular.',
      doQueEFeita:
        'Composta por vírus inativados da gripe, além de estabilizadores e conservantes.',
      esquemaDosagem: [
        {
          id: 'dose_27',
          dose: 'Dose anual',
          idadeMinima: 360,
          idadeMaxima: 9999,
        },
      ],
      foto: 'https://www.cdc.gov/flu/images/freeresources/updates/2021-2022/flu-vaccine.jpg',
      url: 'https://www.cdc.gov/flu/prevent/index.html',
      indicacao:
        'Indicada para todas as pessoas a partir dos 6 meses de idade, especialmente grupos de risco.',
      localAplicacao: 'Intramuscular',
      aplicadoEm: ['criança', 'adolescente', 'adulto', 'idoso'],
    },
    {
      vacina: 'Febre Amarela',
      nome_completo: 'Vacina contra Febre Amarela',
      protege: 'Febre amarela',
      contraindicacao: [
        'Pessoas com imunodeficiência primária ou secundária.',
        'Pessoas com reação alérgica grave a ovo de galinha.',
        'Gestantes (salvo em situações de surto).',
        'Pessoas com doenças neurológicas em atividade.',
      ],
      aspectoTecnico:
        'A vacina é apresentada em suspensão injetável, via de administração subcutânea.',
      doQueEFeita:
        'É composta por vírus vivos atenuados de febre amarela. Completam sua composição sacarose, gelatina, sorbitol e aminoácidos.',
      esquemaDosagem: [
        {
          id: 'dose_28',
          dose: 'Dose de Reforço',
          minimo: 270,
          maximo: 365,
        },
      ],
      foto: 'https://www.saude.gov.br/images/febre-amarela.jpg',
      url: 'https://www.gov.br/saude/pt-br/vacinacao',
      indicacao:
        'Indicada para crianças a partir dos 9 meses de idade e adultos em áreas de risco.',
      localAplicacao: 'Subcutânea',
      aplicadoEm: ['menino', 'menina'],
    },
  ],
];

export const COLOR_VACCINE = [
  '#718adb',
  '#f3c1bd',
  '#ffd79c',
  '#dae6ff',
  '#e3c8f1',
  '#febcce',
  '#77cafb',
  '#fe874f',
  '#019bf2',
  '#f0e9e0',
  '#b4b1f2',
  '#fadbe3',
  '#cfbeba',
];
