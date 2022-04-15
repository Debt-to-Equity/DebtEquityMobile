import React from "react";
import { View, Text, FlatList } from "react-native";

interface IProps {
  route: any;
}

const DebtsDisplay: React.FC<IProps> = ({ route }) => {
  const debts = route.params.debts?.debts;
  const totalDebt = route.params.debts?.totalDebt;

  console.log("debts", debts);
  console.log("totalDebt", totalDebt);

  const renderItem = ({ item }) => <Text>{item.name}</Text>;

  return (
    <View>
      <FlatList
        data={debts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default DebtsDisplay;
