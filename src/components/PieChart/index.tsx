import React from 'react';
import { G, Line, Circle, Text } from 'react-native-svg';
import { PieChart } from 'react-native-svg-charts';
import { Colors } from '../../styles';

interface PieChartProps {
  data: {
    value: number;
    svg: any;
    name: string;
    key: string;
  }[]
}

interface Slice {
  labelCentroid: any[];
  pieCentroid: any[];
  data: any;
}


const PieChartComp: React.FC<PieChartProps> = ({ data }) => {

  const Labels = ({ slices }: any) => {
    return slices.map((slice: Slice, index: number) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <G key={index}>
          <Line
            x1={labelCentroid[0]}
            y1={labelCentroid[1]}
            x2={pieCentroid[0]}
            y2={pieCentroid[1]}
            stroke={data.svg.fill}
          />
          <Text fill={Colors.brightColor}
            stroke={Colors.brightColor}
            fontSize="15"
            // fontWeight="bold"
            x={labelCentroid[0]}
            y={labelCentroid[1]}
            textAnchor="middle" >
            {data.name}
          </Text>
          {/* <Circle
            cx={labelCentroid[0]}
            cy={labelCentroid[1]}
            r={15}
            fill={data.svg.fill}
          /> */}
        </G>
      )
    })
  }

  return (
    <PieChart
      valueAccessor={({ item }) => item.value}
      style={{ height: 125, width: '50%' }}
      data={data}
      innerRadius={20}
      outerRadius={55}
      labelRadius={80}
    >
      <Labels />
    </PieChart>
  );
};

export default PieChartComp;
