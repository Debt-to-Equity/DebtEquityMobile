import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Text, Card } from "react-native-paper";
import ProgressBar from "../../../../components/ProgressBar";
import { BrightText } from "../../../../components/Texts";
import { IDebts, IUser } from "../../../../types";

interface DebtCardProps {
  debts?: IDebts;
  client?: IUser;
}

const keys = ["amountPaid", "startingAmount"];

const DebtCard: React.FC<DebtCardProps> = ({ debts, client }) => {
  const navigation = useNavigation();
  const debtBarData = {
    amountPaid:
      (debts?.totalDebt?.startingAmount ?? 0) -
      (debts?.totalDebt?.amountRemaining ?? 0),
    startingAmount: debts?.totalDebt?.startingAmount ?? 0,
  };

  const activeDebts = !(
    typeof debts === "undefined" || typeof debts === "string"
  );

  return (
    <Card
      style={styles.card}
      onPress={
        activeDebts
          ? () => navigation.navigate("DebtsDisplay", { debts })
          : null
      }
    >
      <View style={styles.headerContainer}>
        <BrightText style={styles.header}>Debt</BrightText>
      </View>
      {!activeDebts ? (
        <View>
          <Text>No Debts</Text>
          <Button
            onPress={() =>
              navigation.navigate("InsertDebt", {
                client,
                debts,
              })
            }
          >
            Add Debts
          </Button>
        </View>
      ) : (
        <>
          {/* <Button onPress={onInsertPress}>Insert a Debt Payment</Button> */}
          {/* <TouchableOpacity
            onPress={() => navigation.navigate("DebtsDisplay", { debts })}
          > */}
          <BrightText>Total Debt</BrightText>
          {debts?.debts?.length > 0 ? (
            <ProgressBar data={[debtBarData]} keys={keys} />
          ) : null}
          {/* </TouchableOpacity> */}
        </>
      )}
    </Card>
  );
};

export default DebtCard;

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
