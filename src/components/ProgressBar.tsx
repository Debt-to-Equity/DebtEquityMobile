import React from "react";
import { StackedBarChart } from "react-native-svg-charts";

interface Props {
  data: {}[];
  keys: string[];
}

const ProgressBar: React.FC<Props> = ({ data, keys }) => {
  const colors = ["#228B22", "grey"];

  return (
    <StackedBarChart
      style={{ height: 100 }}
      keys={keys}
      colors={colors}
      data={data}
      showGrid={false}
      contentInset={{ top: 30, bottom: 30 }}
      horizontal={true}
    />
  );
};

export default ProgressBar;
