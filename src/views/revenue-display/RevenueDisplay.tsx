import React from "react";
import { View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, List } from "react-native-paper";
import { IDebt } from "../../types";

interface IProps {
  route: any;
}

const RevenueDisplay: React.FC<IProps> = ({ route }) => {
  const revenue = route.params.revenue;
  const renderItem = ({ item }: { item: any }) => (
    <Card style={{ marginBottom: 10 }}>
      <List.Item
        title={item.name}
        description={`$${item.amount}`}
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
        data={revenue}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RevenueDisplay;
