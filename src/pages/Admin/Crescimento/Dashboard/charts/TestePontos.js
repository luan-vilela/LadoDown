import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const GrowthChart = ({ customPoints }) => {
  const labels = ['0', '2', '4', '6', '8', '10', '12']; // Idades em meses

  // Mapeia os pontos personalizados para os locais corretos baseados nas idades
  const customData = labels.map(label => {
    const point = customPoints.find(p => p.age.toString() === label);
    return point ? point.value : undefined; // Use undefined para valores que não devem ser exibidos
  });

  const data = {
    labels: labels,
    datasets: [
      {
        data: [2.5, 4.0, 5.5, 6.7, 7.5, 8.4, 9.2], // 3º percentil
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2,
        withDots: false,
      },
      {
        data: [3.0, 4.5, 6.0, 7.3, 8.1, 9.0, 9.8], // 15º percentil
        color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
        strokeWidth: 2,
        withDots: false,
      },
      {
        data: [3.5, 5.0, 6.5, 7.8, 8.6, 9.5, 10.3], // 50º percentil
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
        strokeWidth: 2,
        withDots: false,
      },
      {
        data: [4.0, 5.5, 7.0, 8.3, 9.1, 10.0, 10.8], // 85º percentil
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        strokeWidth: 2,
        withDots: false,
      },
      {
        data: [4.5, 6.0, 7.5, 8.8, 9.6, 10.5, 11.3], // 97º percentil
        color: (opacity = 1) => `rgba(75, 0, 130, ${opacity})`,
        strokeWidth: 2,
        withDots: false,
      },
      {
        data: customData.filter(value => value !== undefined), // Pontos personalizados
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // cor dos pontos personalizados
        strokeWidth: 0,
        withDots: true,
      },
    ],
    legend: ['P3', 'P15', 'P50', 'P85', 'P97', 'Meus Pontos'],
  };

  return (
    <View>
      <Text>Curva de Crescimento</Text>
      <LineChart
        data={data}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#ff0000',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 1, // número de casas decimais
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default GrowthChart;
