import { getTableDate } from '../../../mock/tables/index';
import { Box, Center, CheckIcon, Select, View, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { processColor } from 'react-native';
import { LineChart } from 'react-native-charts-wrapper';

const Chart = ({ customPoints, menino }) => {
  const COLOR_PICK = '#054FDD';
  const [points, setPoints] = useState([]);
  const [curvaType, setCurvaType] = React.useState('peso');

  // Dados para plotar a linha
  const tablePlot = getTableDate(menino, curvaType, true);

  const nameGraphics = {
    peso: {
      label: 'Peso',
    },
    altura: {
      label: 'Altura',
    },
    cefalica: {
      label: 'Perímetro cefálico',
    },
    imc: {
      label: 'IMC',
    },
  };

  const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  const formatCustomPoints = () => {
    const points = customPoints.map(item => {
      const normalizedDay = item.day / 31 === 1 ? 0 : item.day / 31;

      return {
        age: item.age + normalizedDay,
        value: item[curvaType],
      };
    });

    return points;
  };

  const SelectGraphic = () => {
    return (
      <Center>
        <Box maxW="400" w={'100%'} p={4}>
          <Select
            selectedValue={curvaType}
            minWidth="200"
            accessibilityLabel="Selecione curva"
            placeholder="Selecione curva"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={itemValue => setCurvaType(itemValue)}>
            <Select.Item label="Peso por idade" value="peso" />
            <Select.Item label="Comprimento" value="altura" />
            <Select.Item label="Perímetro cefálico" value="cefalica" />
            <Select.Item label="IMC" value="imc" />
          </Select>
        </Box>
      </Center>
    );
  };

  const plotGraphic = () => {
    return tablePlot.map(line => {
      return {
        values: line.pontos.map(({ age, value }) => ({ x: age, y: value })),
        label: line.label,
        config: {
          color: processColor(line.color),
          lineWidth: 1,
          drawValues: false,
          drawCircles: false,
          mode: 'CUBIC_BEZIER', // Aplicar curva Bezier
        },
      };
    });
  };

  const data = {
    dataSets: [
      ...plotGraphic(),
      {
        values: points.map(({ age, value }) => ({ x: age, y: value })),
        label: 'Meus Pontos',
        config: {
          valueTextSize: 12,
          valueTextColor: processColor(COLOR_PICK),
          color: processColor(COLOR_PICK), // Cor dos pontos
          drawValues: true,
          drawCircles: true, // Ativar/desativar pontos
          mode: 'LINEAR',
          circleColor: processColor(COLOR_PICK),
          circleRadius: 6,
          lineWidth: 3,
          drawCircleHole: false,
          dashedLine: {
            lineLength: 10, // required
            spaceLength: 10, // required
            phase: 1,
          },
        },
      },
    ],
    labels: labels,
  };

  useEffect(() => {
    setPoints(formatCustomPoints());
  }, [curvaType]);

  return (
    <View style={{ flex: 1 }} p={1}>
      <SelectGraphic />
      <LineChart
        style={{ flex: 1 }}
        data={data}
        chartDescription={{ text: `Curva de crescimento: ${nameGraphics[curvaType].label}` }}
        xAxis={{
          valueFormatter: labels,
          granularity: 1 / 31, // Granularidade para permitir pontos intermediários (semanas)
          granularityEnabled: true,
        }}
        yAxis={{ drawGridLines: false }}
        zoom={{
          scaleX: 1, // Zoom inicial no eixo X
          scaleY: 1, // Zoom inicial no eixo Y
          xValue: 5, // Valor inicial de X para centralizar o zoom
          yValue: 0, // Valor inicial de Y
          axisDependency: 'LEFT', // Dependência do eixo
        }}
      />
    </View>
  );
};

export default Chart;
