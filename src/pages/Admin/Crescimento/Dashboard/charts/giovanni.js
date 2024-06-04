import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Cor personalizada para este conjunto de dados
      strokeWidth: 2, // Largura da linha para este conjunto de dados
    },
  ],
  legend: ['Rainy Days'], // Legenda para os conjuntos de dados
};

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  backgroundGradientFromOpacity: 1,
  backgroundGradientToOpacity: 1,
  fillShadowGradient: '#ffa726',
  fillShadowGradientOpacity: 0.3,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  propsForBackgroundLines: {
    strokeDasharray: '', // Customize the background lines
  },
  propsForLabels: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
  decimalPlaces: 2, // Número de casas decimais nos valores
  propsForVerticalLabels: {
    fontSize: 10, // Tamanho da fonte para rótulos verticais
    fill: 'red', // Cor para os rótulos verticais
  },
  propsForHorizontalLabels: {
    fontSize: 10, // Tamanho da fonte para rótulos horizontais
    fill: 'blue', // Cor para os rótulos horizontais
  },
  propsForBackgroundVerticalLines: {
    strokeDasharray: '5,10', // Estilo para linhas verticais de fundo
  },
  propsForBackgroundHorizontalLines: {
    strokeDasharray: '5,10', // Estilo para linhas horizontais de fundo
  },
};

const MyLineChart = () => {
  return (
    <View>
      <LineChart
        data={data}
        width={screenWidth}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
};

export default MyLineChart;
