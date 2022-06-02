import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useWizard } from "../../hooks/useWizard";
import { IWizardObj } from "../../types";
import { TextInput, Button, Text, Title } from "react-native-paper";
import { insertMultipleDebts } from "../../api/insertMultipleDebts";
import { StackActions, useNavigation } from "@react-navigation/native";

interface DebtProps {
  route: any;
}

const InsertDebt: React.FC<DebtProps> = ({ route }) => {
  const navigation = useNavigation();
  const [values, handleChange, addNewValue, _, isValid] = useWizard([
    {
      id: 1,
      name: "First Mortgage",
      amount: "",
    },
    {
      id: 2,
      name: "Second Mortgage",
      amount: "",
    },
    {
      id: 3,
      name: "Credit Card",
      amount: "",
    },
  ]);

  const nextRoute = route.params.nextRoute;

  const client = route.params.client;

  const renderItem = () => {
    return values.map((ele: IWizardObj, indx: number) => {
      return (
        <TextInput
          key={indx}
          keyboardType="number-pad"
          mode="outlined"
          onChangeText={(text) => handleChange(text, ele.id)}
          label={ele.name}
          value={ele.amount}
        />
      );
    });
  };

  const totalValue = () => {
    return values.reduce((acc: number, ele: IWizardObj) => {
      let num = parseInt(ele.amount);

      if (Number.isNaN(num)) {
        num = 0;
      }
      return (acc += num);
    }, 0);
  };

  const handleSubmit = async () => {
    const debts = await insertMultipleDebts(values, client.id);
    if (nextRoute) {
      return navigation.dispatch(
        StackActions.replace("InsertRevenue", {
          client,
          debts,
          nextRoute: true,
        })
      );
    }
    return navigation.goBack();
  };

  return (
    <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
      <Title style={{ alignSelf: "center" }}>Debt</Title>
      {renderItem()}
      <Text style={{ fontSize: 23, marginTop: 10, marginBottom: 10 }}>
        Total Debt: {totalValue() ? totalValue() : 0}
      </Text>
      <Button
        disabled={false}
        loading={false}
        onPress={() =>
          navigation.navigate("AddNewItem", { addItem: addNewValue })
        }
      >
        Add Debt
      </Button>
      <Button
        style={{ marginTop: 25 }}
        mode="contained"
        disabled={!isValid}
        onPress={() => handleSubmit()}
      >
        Submit
      </Button>
    </View>
  );
};

export default InsertDebt;
