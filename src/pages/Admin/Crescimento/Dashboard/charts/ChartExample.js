import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ChartExample = () => {
  // Dados fictícios de peso médio de uma criança em diferentes idades
  const data = {
    labels: ['0', '1', '2', '3', '4', '5'], // Idades em meses
    datasets: [
      {
        data: [3.5, 6.5, 9.5, 12.5, 15.5, 18.5], // Percentil 50 (mediana)
        color: () => 'orange', // Cor da linha vermelha
        strokeWidth: 2, // Largura da linha vermelha
      },
      {
        data: [3, 6, 9, 12, 15, 18], // Percentil 10
        color: () => 'red', // Cor da linha vermelha
        strokeWidth: 2, // Largura da linha vermelha
      },
      {
        data: [4, 7, 10, 13, 16, 19], // Percentil 25
      },
      {
        data: [5, 8, 11, 14, 17, 20], // Percentil 75
        color: () => 'orange', // Cor da linha vermelha
        strokeWidth: 2, // Largura da linha vermelha
      },
      {
        data: [6, 9, 12, 15, 18, 21], // Percentil 90
        color: () => 'red', // Cor da linha vermelha
        strokeWidth: 2, // Largura da linha vermelha
      },
    ],
  };

  return (
    <View>
      <LineChart
        data={data}
        width={400}
        height={220}
        yAxisSuffix=" kg"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
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

export default ChartExample;
