import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";

import { TextInput, Button, Text, Title } from "react-native-paper";

import { insertMultipleRevenue } from "../../api/insertMultipleRevenue";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useWizard } from "../../hooks/useWizard";
import { IWizardObj } from "../../types";

interface Props {
  route: any;
}

const InsertRevenue: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation();
  const [values, handleChange, addNewValue, _, isValid] = useWizard([
    {
      id: 1,
      name: "Net Monthly Income",
      amount: "",
      revenue: true,
    },
  ]);

  const nextRoute = route.params?.nextRoute;

  const client = route.params?.client;

  const debts = route.params?.debts;

  const renderItem = () => {
    return values.map((ele: IWizardObj, indx: number) => {
      return (
        <TextInput
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
    await insertMultipleRevenue(values, client.id);
    if (nextRoute) {
      return navigation.dispatch(
        StackActions.replace("InsertBudget", {
          debts,
          client,
          nextRoute: true,
        })
      );
    }
    return navigation.goBack();
  };

  return (
    <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
      <Title style={{ alignSelf: "center" }}>Expenses</Title>
      {renderItem()}
      <Text style={{ fontSize: 23, marginTop: 10, marginBottom: 10 }}>
        Total Monthly Income: {totalValue() ? totalValue() : 0}
      </Text>

      <Button
        disabled={false}
        loading={false}
        onPress={() =>
          navigation.navigate("AddNewItem", { addItem: addNewValue })
        }
      >
        Add Revenue
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

export default InsertRevenue;
