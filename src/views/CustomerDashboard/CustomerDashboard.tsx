import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { BrightText } from "../../components/Texts";
import YearsDisplay from "../../components/YearsDisplay";
import { getTime, itemTotal } from "../../functions/counting";
import DebtCard from "./components/DebtCard/DebtCard";
import InsertModal from "../../components/Modals/components/InsertModal";
import { useInsertModal } from "../../hooks/useInsertModal";
import { IBudget, IDebts } from "../../types";
import { getUserDebts } from "../../api/getUserDebts";
import { UserContext } from "../../context/UserContext";
import { Button } from "react-native-paper";
import { getUserBudget } from "../../api/getUserBudget";
import BudgetCard from "./components/BudgetCard/BudgetCard";

const Dashboard = ({ navigation, route }) => {
  const { user, logoutUser } = useContext(UserContext);

  const {
    showInsertModal,
    insertHeader,
    insertCategories,
    setIsInsertModalVisible,
  } = useInsertModal();
  const [debtCategories, setDebtCategories] = useState([
    {
      name: "Credit Card",
      isEditable: false,
      id: 1,
    },
    {
      name: "Mortgage",
      isEditable: false,
      id: 2,
    },
  ]);
  const [debt, setDebt] = useState<IDebts[]>([]);
  const [budget, setBudget] = useState<IBudget[] | string>("No Budget Set");

  useEffect(() => {
    getDebts();
    getBudget();
  }, []);

  let isAgent = typeof route.params?.client !== "undefined";

  const getDebts = async () => {
    let id = route.params?.client?.id ?? user.id;
    let data = await getUserDebts(id);
    setDebt(data);
  };

  const getBudget = async () => {
    let id = route.params?.client?.id ?? user.id;
    let budget = await getUserBudget(id);
    console.log(budget);
    setBudget(budget);
  };

  return (
    <ScrollView style={{ padding: 10 }}>
      <InsertModal
        isVisible={showInsertModal}
        header={insertHeader}
        onPress={() => {}}
        onClose={() => setIsInsertModalVisible(false)}
      />
      <DebtCard
        onInsertPress={() =>
          setIsInsertModalVisible(true, "Debt Payment", debt)
        }
        debts={debt}
      />
      <BudgetCard
        budget={budget}
        userId={route.params?.client?.id}
        debts={debt}
        client={route.params?.client}
      />

      {!isAgent && (
        <Button icon="logout" mode="contained" onPress={() => logoutUser()}>
          Logout
        </Button>
      )}
    </ScrollView>
  );
};

export default Dashboard;
