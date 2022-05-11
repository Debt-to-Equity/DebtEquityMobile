import React from "react";
import { View } from "react-native";
import { StackedBarChart } from "react-native-svg-charts";
import { string } from "prop-types";

interface Props {
  data: {}[];
  keys: string[];
}

const ProgressBar: React.FC<Props> = ({ data, keys }) => {
  // const data = [
  //   {
  //     month: new Date(2015, 0, 1),
  //     paidOffDebt: 100000,
  //     remainingDebt: 200000
  //   }
  // ];

  const colors = ["#228B22", "grey"];
  // const keys = ["paidOffDebt", "remainingDebt"];

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
