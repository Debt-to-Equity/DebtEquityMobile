import React from "react";
import { View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, List } from "react-native-paper";
import { IDebt } from "../../types";

interface IProps {
  route: any;
}

const DebtsDisplay: React.FC<IProps> = ({ route }) => {
  const debts = route.params.debts?.debts;
  const totalDebt = route.params.debts?.totalDebt;

  console.log("debts", debts);
  console.log("totalDebt", totalDebt);

  const renderItem = ({ item }: { item: IDebt }) => (
    <Card style={{ marginBottom: 10 }}>
      <List.Item
        title={item.name}
        description={`$${item.amountRemaining}`}
        // right={(props) => (
        //   <TouchableOpacity>
        //     <List.Icon icon="delete" />
        //   </TouchableOpacity>
        // )}
        // onPress={() => {
        //   navigation.navigate("Client", { client: item });
        // }}
      />
    </Card>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={debts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default DebtsDisplay;
