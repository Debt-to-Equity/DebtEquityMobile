import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { BrightText } from "../../components/Texts";
import YearsDisplay from "../../components/YearsDisplay";
import CashFlowContainer from "./components/CashFlowContainer";
import { getTime, itemTotal } from "../../functions/counting";
import ItemCard from "./components/ItemCard";
import DebtCard from "./components/DebtCard/DebtCard";
import InsertModal from "../../components/Modals/components/InsertModal";
import { useInsertModal } from "../../hooks/useInsertModal";
import { IDebts } from "../../types";
import { getUserDebts } from "../../api/getUserDebt";
import { UserContext } from "../../context/UserContext";
import { Button } from "react-native-paper";

const Dashboard = ({ navigation, route }) => {
  const { user, logoutUser } = useContext(UserContext);
  console.log(route);

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
  const [debt, setDebt] = useState<IDebts>();

  useEffect(() => {
    getDebts();
  }, []);

  const getDebts = async () => {
    let id = route.params?.client?.id ?? user.id;
    let data = await getUserDebts(id);
    console.log(data);
    setDebt(data);
  };

  const getExpenses = () => {
    let id = route.params?.client?.id ?? user.id;
    let expenses;
  };

  return (
    <ScrollView style={{ padding: 10 }}>
      <InsertModal
        isVisible={showInsertModal}
        header={insertHeader}
        onPress={() => {}}
        onClose={() => setIsInsertModalVisible(false)}
      />
      {/* <CashFlowContainer
        firstName="Budget"
        secondName="Revenue"
        firstTotal={itemTotal(budget)}
        secondTotal={itemTotal(revenueCategories)}
        budget={budget}
        revenue={revenueCategories}
        time={getTime(revenueCategories, budget, debt)}
        header="Estimated"
      />
      <CashFlowContainer
        firstName="Expenses"
        secondName="Revenue"
        firstTotal={itemTotal(expenses)}
        secondTotal={itemTotal(actualRevenue)}
        budget={expenses}
        revenue={actualRevenue}
        time={getTime(actualRevenue, expenses, debt)}
        header="Actual"
      /> */}
      <DebtCard
        onInsertPress={() =>
          setIsInsertModalVisible(true, "Debt Payment", debt)
        }
        debts={debt}
        debtCategories={debtCategories}
      />

      <Button icon="logout" mode="contained" onPress={() => logoutUser()}>
        Logout
      </Button>
      {/* <ItemCard
        navigation={navigation}
        onInsertPress={() => setIsInsertModalVisible(true, "Expense", debt)}
        header="Budget"
        dataTotal={itemTotal(budget)}
        data={budget}
        comparibleData={expenses}
        comparibleDataTotal={itemTotal(expenses)}
      />
      <ItemCard
        navigation={navigation}
        onInsertPress={() => setIsInsertModalVisible(true, "Revenue", debt)}
        header="Revenue"
        dataTotal={itemTotal(revenueCategories)}
        data={revenueCategories}
        comparibleData={actualRevenue}
        comparibleDataTotal={itemTotal(actualRevenue)}
      /> */}
    </ScrollView>
  );
};

export default Dashboard;
