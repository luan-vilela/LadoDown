const BASE_TIMESTAMP = 1716430197000; // Timestamp base
const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000; // 1 dia em milissegundos

export const DATA_CRESCIMENTO = Array.from({ length: 10 }, (_, index) => {
  const timestamp = BASE_TIMESTAMP + index * 10 * DAY_IN_MILLISECONDS; // Adiciona 10 dias a cada novo objeto

  return {
    altura: 50 + index * 2, // Aumenta a altura a cada novo objeto
    created_at: timestamp, // Armazena o timestamp no created_at
    id: `${index + 1}`, // ID único
    imc: 20.2 + index * 0.8, // Aumenta o IMC a cada novo objeto
    peso: 3.5 + index * 0.6, // Aumenta o peso a cada novo objeto
    cefalica: 35 + index * 2, // Aumenta o tamanho da cabeça a cada novo objeto
    updated_at: timestamp, // Armazena o mesmo timestamp no updated_at
  };
});

// https://www.movimentodown.org.br/wp-content/uploads/2017/03/Tese_Fabio_Bertapelli_2016-1.pdf
