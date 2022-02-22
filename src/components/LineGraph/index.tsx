import React from 'react';
import { View } from 'react-native';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';

interface LineGraphProps {
  data: number[]
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {

  const axesSvg = { fontSize: 10, fill: 'grey' };
  const verticalContentInset = { top: 10, bottom: 10 }
  const xAxisHeight = 30

  return (
    <View style={{ height: 300, padding: 10, flexDirection: 'row' }}>
      <YAxis
        data={data}
        style={{ marginBottom: xAxisHeight }}
        contentInset={verticalContentInset}
        svg={axesSvg}
      />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <LineChart
          style={{ flex: 1 }}
          data={data}
          contentInset={verticalContentInset}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
        >
          <Grid />
        </LineChart>
        <XAxis
          style={{ marginHorizontal: -10, height: xAxisHeight }}
          data={data}
          formatLabel={(value, index) => index}
          contentInset={{ left: 10, right: 10 }}
          svg={axesSvg}
        />
      </View>
    </View>
  );
};

export default LineGraph;
