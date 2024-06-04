import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const PesoChart = () => {
  // Dados do gráfico de altura para meninos de 5 a 19 anos (aproximados)
  const data = {
    labels: ['0', '1', '2', '3', '4', '5', '6', '12', '13', '14', '15', '16', '17', '18', '19'], // Idade em anos
    datasets: [
      {
        data: [115, 125, 135, 145, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Z-score 1
        color: (opacity = 1) => `rgba(255, 255, 0, ${opacity})`, // Laranja
        strokeWidth: 5,
        withDots: true,
      },
      {
        data: [105, 115, 125, 135, 145, 150, 155, 160, 165, 170, 175, 180, 183, 185, 187], // Z-score -2
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Vermelho
        strokeWidth: 2,
        withDots: false,
      },
      {
        data: [110, 120, 130, 140, 150, 155, 160, 165, 170, 175, 180, 185, 188, 190, 192], // Z-score -1
        color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // Laranja
        strokeWidth: 2,
        withDots: false,
      },
      {
        data: [115, 125, 135, 145, 155, 160, 165, 170, 175, 180, 185, 190, 193, 195, 197], // Z-score 0
        color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`, // Verde
        strokeWidth: 0,
        withDots: false,
      },
      {
        data: [120, 130, 140, 150, 160, 165, 170, 175, 180, 185, 190, 195, 198, 200, 202], // Z-score 1
        color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // Laranja
        strokeWidth: 2,
        withDots: false,
      },
      {
        data: [125, 135, 145, 155, 165, 170, 175, 180, 185, 190, 195, 200, 203, 205, 207], // Z-score 2
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Vermelho
        strokeWidth: 2,
        withDots: false,
      },
    ],
    legend: ['-2', '-1', '0', '1', '2'], // Legendas das linhas
  };

  return (
    <View>
      <LineChart
        data={data}
        width={Dimensions.get('window').width} // Largura do gráfico
        height={320} // Altura do gráfico
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0, // Número de casas decimais
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Cor dos eixos
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Cor das labels
          style: {
            borderRadius: 16,
          },
        }}
        hidePointsAtIndex={[0]}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default PesoChart;
