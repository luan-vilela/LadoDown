import React from 'react';
import { View, processColor, Text } from 'react-native';
import { LineChart } from 'react-native-charts-wrapper';

const HeadCircumferenceChart = () => {
  const headCircumferenceData = [
    [20, 22, 25, 23, 24], // Dados de peso para a primeira criança
    [18, 21, 23, 22, 24], // Dados de peso para a segunda criança (se houver)
  ];

  if (!headCircumferenceData || headCircumferenceData.length === 0) {
    return <Text>Data not available</Text>; // Mensagem exibida quando não há dados disponíveis
  }

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May']; // Labels para os meses

  const datasets = headCircumferenceData.map((data, index) => ({
    data, // Dados de perímetro cefálico para cada criança
    color: processColor(index === 0 ? 'blue' : 'red'), // Cor da linha do gráfico
    label: `Child ${index + 1}`, // Rótulo para a linha do gráfico
  }));

  const data = {
    labels,
    datasets,
  };

  return (
    <View style={{ flex: 1 }}>
      <LineChart
        style={{ flex: 1 }}
        data={data}
        chartDescription={{ text: 'Head Circumference Comparison Chart' }} // Descrição do gráfico
        xAxis={{ valueFormatter: labels }} // Configuração do eixo X com os meses como rótulos
        yAxis={{ left: { axisMaximum: 50 } }} // Configuração do eixo Y
        legend={{ enabled: true }} // Ativa a legenda
      />
    </View>
  );
};

export default HeadCircumferenceChart;
