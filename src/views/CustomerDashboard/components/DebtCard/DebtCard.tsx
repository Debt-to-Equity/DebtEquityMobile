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
import { IDebt, IDebtCategory, IDebts } from "../../../../types";

interface DebtCardProps {
  debts: IDebts;
  onInsertPress: any;
}

const keys = ["startingAmount", "amountRemaining"];

const DebtCard: React.FC<DebtCardProps> = ({ debts, onInsertPress }) => {
  const navigation = useNavigation();

  return (
    <Card style={styles.card}>
      <View style={styles.headerContainer}>
        <BrightText style={styles.header}>Debt</BrightText>
      </View>
      <Button onPress={onInsertPress}>Insert a Debt Payment</Button>
      <TouchableOpacity
        onPress={() => navigation.navigate("DebtsDisplay", { debts })}
      >
        <BrightText>Total Debt</BrightText>
        {debts?.debts?.length > 0 ? (
          <ProgressBar data={[debts.totalDebt]} keys={keys} />
        ) : null}
      </TouchableOpacity>
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
