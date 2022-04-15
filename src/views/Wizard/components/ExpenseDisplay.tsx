import React, { useState } from "react";
import { View } from "react-native";
import { Searchbar, Switch, Text, TextInput } from "react-native-paper";
import { IDebt } from "../../../types";
import AttachDebtDialog from "./AttachDateDialog";

interface ExpesneDisplayProps {
  id: number;
  handleTextChange: any;
  name: string;
  value: string;
  index: number;
  debt: any;
  expense: {
    id: number;
    name: string;
    value: string;
    debtId: string;
    amortized: boolean;
    totalYears: string;
    yearsLeft: string;
    interestRate: string;
  };
  editMultipleValues: any;
}

const ExpenseDisplay: React.FC<ExpesneDisplayProps> = ({
  expense,
  handleTextChange,
  name,
  value,
  id,
  debt,
  editMultipleValues,
}) => {
  const [isSwitchOn, onToggleSwitch] = useState(!!expense.debtId);
  const [displayModal, setDisplayModal] = useState(false);

  const displaySelectedDebt = () => {
    const [selectedDebt] = debt.filter(
      (ele: IDebt) => ele._id === expense.debtId
    );
    return (
      <Text style={{ fontSize: 18, paddingLeft: 15 }}>
        Attached Debt: {selectedDebt?.name}
      </Text>
    );
  };

  const handleDebtPayment = (
    debtId: string,
    interestRate: string,
    amortized: boolean,
    yearsLeft: string
  ) => {
    editMultipleValues(
      { ...expense, debtId, interestRate, amortized, yearsLeft, amount: 0 },
      id
    );
    setDisplayModal(false);
  };

  return (
    <>
      <AttachDebtDialog
        isVisible={displayModal}
        onCancel={() => {
          if (expense.debtId) {
            return setDisplayModal(false);
          }
          onToggleSwitch(false);
          setDisplayModal(false);
        }}
        onSave={handleDebtPayment}
        debt={debt}
      />
      {isSwitchOn ? (
        <Text>Estimated Payment: 4000</Text>
      ) : (
        <TextInput
          style={{ marginTop: 10 }}
          mode="outlined"
          onChangeText={(text) => handleTextChange(text, id)}
          label={name}
          value={value}
          keyboardType="number-pad"
        />
      )}
      <View
        style={{ flexDirection: "row", alignItems: "center", paddingTop: 5 }}
      >
        <Switch
          value={isSwitchOn}
          onValueChange={() => {
            if (!isSwitchOn) {
              onToggleSwitch(true);
              setDisplayModal(true);
              return;
            }
            onToggleSwitch(false);
            handleDebtPayment("", "", false, "");
          }}
        />
        {expense.debtId ? displaySelectedDebt() : null}
      </View>
    </>
  );
};

export default ExpenseDisplay;
