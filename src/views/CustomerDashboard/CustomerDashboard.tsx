import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { BrightText } from "../../components/Texts";
import YearsDisplay from "../../components/YearsDisplay";
import { getTime, itemTotal } from "../../functions/counting";
import DebtCard from "./components/DebtCard/DebtCard";
import InsertModal from "../../components/modals/components/InsertModal";
import { useInsertModal } from "../../hooks/useInsertModal";
import { IBudget, IDebts } from "../../types";
import { getUserDebts } from "../../api/getUserDebts";
import { UserContext } from "../../context/UserContext";
import { Button } from "react-native-paper";
import { getUserBudget } from "../../api/getUserBudget";
import { getUserRevenue } from "../../api/getUserRevenue";
import BudgetCard from "./components/BudgetCard/BudgetCard";
import RevenueCard from "./components/RevenueCard/RevenueCard";
import PayoffScheduleCard from "./components/payoff-schedule-card/PayoffScheduleCard";

interface Props {
  navigation: any;
  route: any;
}

const Dashboard: React.FC<Props> = ({ navigation, route }) => {
  const { user, logoutUser } = useContext(UserContext);
  const id = route.params?.client?.id ?? user.id;

  const {
    showInsertModal,
    insertHeader,
    insertCategories,
    setIsInsertModalVisible,
  } = useInsertModal();

  const [debt, setDebt] = useState<IDebts>();
  const [budget, setBudget] = useState<IBudget[] | string>("No Budget Set");
  const [revenue, setRevenue] = useState<any[] | string>("No Revenue Set");

  useEffect(() => {
    getDebts();
    getBudget();
    getRevenue();
  }, []);

  let isAgent = typeof route.params?.client !== "undefined";

  const getDebts = async () => {
    let data = await getUserDebts(id);
    setDebt(data);
  };

  const getBudget = async () => {
    let budget = await getUserBudget(id);
    setBudget(budget);
  };

  const getRevenue = async () => {
    let revenue = await getUserRevenue(id);
    setRevenue(revenue);
  };

  return (
    <ScrollView style={{ padding: 10 }}>
      <InsertModal
        isVisible={showInsertModal}
        header={insertHeader}
        onPress={() => {}}
        onClose={() => setIsInsertModalVisible(false)}
      />
      <PayoffScheduleCard />
      <DebtCard client={route.params?.client} debts={debt} />
      {typeof debt !== "string" ||
        (!debt && (
          <BudgetCard
            budget={budget}
            debts={debt}
            client={route.params?.client}
          />
        ))}
      <RevenueCard revenue={revenue} />

      {!isAgent && (
        <Button icon="logout" mode="contained" onPress={() => logoutUser()}>
          Logout
        </Button>
      )}
    </ScrollView>
  );
};

export default Dashboard;
