import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { IBudget, IDebts, IUser } from "../../../../types";

interface Props {
  budget: IBudget[] | string;
  client?: IUser;
  debts?: IDebts;
}

const BudgetCard: React.FC<Props> = ({ budget, debts, client }) => {
  const navigation = useNavigation();
  return (
    <Card style={styles.card}>
      {typeof budget === "string" ? (
        <View>
          <Text>No Budget Set</Text>
          <Button
            onPress={() =>
              navigation.navigate("InsertBudget", {
                client,
                debts,
                nextRoute: true,
              })
            }
          >
            Add a Budget
          </Button>
        </View>
      ) : (
        <View>
          <Text>BudgetCard</Text>
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

export default BudgetCard;
