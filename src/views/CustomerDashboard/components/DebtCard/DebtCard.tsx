import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
// import {Button} from '../../../../components/Buttons';
import { Button } from "react-native-paper";

import Card from "../../../../components/Card";
import LineGraph from "../../../../components/LineGraph";
import ProgressBar from "../../../../components/ProgressBar";
import { BrightText } from "../../../../components/Texts";
import { combineCategoryAndActual } from "../../../../functions/combine";
import { IDebt, IDebtCategory } from "../../../../types";

interface DebtCardProps {
  debts: IDebt[];
  debtCategories: IDebtCategory[];
  onInsertPress: any;
}

const data = [
  {
    month: new Date(2015, 0, 1),
    paidOffDebt: 100000,
    remainingDebt: 200000
  }
];

const keys = ["paidOffDebt", "remainingDebt"];

const DebtCard: React.FC<DebtCardProps> = ({
  debts,
  debtCategories,
  onInsertPress
}) => {
  const navigation = useNavigation();

  return (
    <Card style={styles.card}>
      <View style={styles.headerContainer}>
        <BrightText style={styles.header}>Debt</BrightText>
      </View>
      <Button onPress={onInsertPress}>Insert a Debt Payment</Button>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TransactionView", {
            transactions: combineCategoryAndActual(debtCategories, debts)
          })
        }
      >
        <BrightText>Total Debt</BrightText>
        <ProgressBar data={data} keys={keys} />
      </TouchableOpacity>
    </Card>
  );
};

export default DebtCard;

const styles = StyleSheet.create({
  header: {
    fontSize: 25
  },
  headerContainer: {
    alignItems: "center",
    paddingBottom: 5
  },
  card: {
    padding: 10,
    marginBottom: 20
  }
});
