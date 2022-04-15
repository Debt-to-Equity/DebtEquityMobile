import React, { useState, useEffect } from "react";
import { View, ScrollView, FlatList } from "react-native";
import { TextInput, Text, Button, Title } from "react-native-paper";
import { insertBudget } from "../../api/insertBudget";
import { BrightText } from "../../components/Texts";
import { useWizard } from "../../hooks/useWizard";
import { IUser, IWizardObj, IDebt } from "../../types";
import { expenses } from "../Wizard/data";
import AddNew from "../Wizard/components/AddNew";
import ExpenseDisplay from "../Wizard/components/ExpenseDisplay";
import { useArrayForm } from "../../hooks/useArrayForm";

interface BudgetProps {
  route: any;
  navigation: any;
}

const InsertBudget: React.FC<BudgetProps> = ({ route, navigation }) => {
  const [showNewValue, setShowNewValue] = useState(false);
  const [newValue, setNewValue] = useState({ name: "", amount: "" });
  const [sliceValues, setSliceValues] = useState({ value1: 0, value2: 3 });

  console.log(route.params);

  const debts = route.params.debts.debts;

  const nextRoute = route.params.nextRoute;

  const client = route.params.client;

  const [budget, editBudget, isValid] = useArrayForm(expenses);

  const totalValue = () => {
    return budget.reduce((acc: number, ele: IWizardObj) => {
      let num = parseInt(ele.amount);

      if (Number.isNaN(num)) {
        num = 0;
      }
      return (acc += num);
    }, 0);
  };

  const handleSubmit = async () => {
    await insertBudget(budget, client.id);
    navigation.navigate(nextRoute, client);
  };

  const renderExpense = ({ item, index }: any) => {
    return (
      <ExpenseDisplay
        expense={item}
        id={item.id}
        debt={debts}
        handleTextChange={editBudget}
        name={item.name}
        value={item.value}
        index={index}
        editMultipleValues={editBudget}
      />
    );
  };

  return (
    <View style={{ height: "100%" }}>
      <View
        style={{ paddingTop: 50, paddingHorizontal: 20, paddingBottom: 30 }}
      >
        <View style={{ maxHeight: "75%" }}>
          <Title style={{ alignSelf: "center" }}>Budget</Title>
          <FlatList
            data={budget.slice(sliceValues.value1, sliceValues.value2)}
            scrollEnabled={false}
            renderItem={renderExpense}
          />
        </View>
        <View>
          <Text style={{ fontSize: 23, marginBottom: 10, marginTop: -25 }}>
            Total Monthly Budget: {totalValue() ?? 0}
          </Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {sliceValues.value1 !== 0 ? (
              <Button
                icon="chevron-left"
                onPress={() =>
                  setSliceValues({
                    value1: sliceValues.value1 - 3,
                    value2: sliceValues.value2 - 3,
                  })
                }
                style={{ alignSelf: "flex-end" }}
              >
                Previous
              </Button>
            ) : (
              <View />
            )}

            {sliceValues.value2 <= budget.length && (
              <Button
                contentStyle={{ flexDirection: "row-reverse" }}
                icon="chevron-right"
                onPress={() =>
                  setSliceValues({
                    value1: sliceValues.value1 + 3,
                    value2: sliceValues.value2 + 3,
                  })
                }
              >
                Next
              </Button>
            )}
          </View>

          {/* {showNewValue ? (
            <AddNew
              onCancel={() => {
                setShowNewValue(false);
                setNewValue({ name: "", amount: "" });
              }}
              addNewValue={() => {
                addNewValue(newValue.name, newValue.amount);
                setShowNewValue(false);
                setNewValue({ name: "", amount: "" });
              }}
              onChangeNameText={(text: string) =>
                setNewValue({ ...newValue, name: text })
              }
              onChangeValueText={(text: string) =>
                setNewValue({ ...newValue, amount: text })
              }
              amount={newValue.amount}
              name={newValue.name}
            />
          ) : (
            sliceValues.value2 >= values.length && (
              <Button
                disabled={false}
                loading={false}
                onPress={() => setShowNewValue(true)}
              >
                Add Expense
              </Button>
            )
          )} */}
          <Button
            style={{ marginTop: 10 }}
            disabled={false}
            mode="contained"
            onPress={() => handleSubmit()}
          >
            Submit
          </Button>
        </View>
      </View>
    </View>
  );
};

export default InsertBudget;
