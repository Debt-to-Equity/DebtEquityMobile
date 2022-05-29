import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { IBudget, IDebts, IUser } from "../../../../types";

interface Props {
  revenue: any;
  client?: IUser;
  debts?: IDebts[];
}

const RevenueCard: React.FC<Props> = ({ revenue, debts, client }) => {
  const navigation = useNavigation();
  let availableRevenue = !(typeof revenue === "string");
  let totalRevenue;

  if (availableRevenue) {
    totalRevenue = revenue.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  }

  return (
    <Card
      onPress={
        availableRevenue
          ? () => navigation.navigate("RevenueDisplay", { revenue })
          : null
      }
      style={styles.card}
    >
      {!availableRevenue ? (
        <View>
          <Text>No Revenue Set</Text>
          <Button onPress={() => navigation.navigate("InsertRevenue")}>
            Add Revenue
          </Button>
        </View>
      ) : (
        <View>
          <Text>Revenue Card</Text>
          <Text>Total Revenue: ${totalRevenue}</Text>
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
  },
  headerContainer: {
    alignItems: "center",
    paddingBottom: 5,
  },
  card: {
    padding: 10,
    marginBottom: 20,
  },
});

export default RevenueCard;
