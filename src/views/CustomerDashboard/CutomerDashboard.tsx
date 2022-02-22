import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {BrightText} from '../../components/Texts';
import YearsDisplay from '../../components/YearsDisplay';
import CashFlowContainer from './components/CashFlowContainer';
import {getTime, itemTotal} from '../../functions/counting';
import ItemCard from './components/ItemCard';
import DebtCard from './components/DebtCard/DebtCard';
import {IActual, IPlanned} from '../../types';
import InsertModal from '../../components/Modals/components/InsertModal';
import {useInsertModal} from '../../hooks/useInsertModal';

const Dashboard = ({navigation}) => {
  const {
    showInsertModal,
    insertHeader,
    insertCategories,
    setIsInsertModalVisible,
  } = useInsertModal();
  const [debtCategories, setDebtCategories] = useState([
    {
      name: 'Credit Card',
      isEditable: false,
      id: 1,
    },
    {
      name: 'Mortgage',
      isEditable: false,
      id: 2,
    },
  ]);
  const [debt, setDebt] = useState([
    {
      id: 1,
      number: 400000,
      debtCategoryId: 2,
      date: '',
    },
    {
      id: 2,
      number: 4500,
      debtCategoryId: 1,
    },
  ]);

  const [revenueCategories, setRevenueCategories] = useState<IPlanned[]>([
    {
      name: 'Job',
      isEditable: false,
      id: 1,
      number: 4000,
      color: 'blue',
    },
    {
      name: 'Rental Property',
      isEditable: true,
      id: 2,
      number: 300,
      color: 'red',
    },
    {
      name: 'Dividends',
      isEditable: true,
      id: 3,
      number: 25,
      color: 'orange',
    },
  ]);
  const [budget, setBudget] = useState<IPlanned[]>([
    {
      name: 'Mortgage',
      isEditable: false,
      id: 1,
      number: 1000,
      color: 'blue',
    },
    {
      name: 'Grocieries',
      isEditable: true,
      id: 2,
      number: 400,
      color: 'red',
    },
    {
      name: 'Phone Bill',
      isEditable: true,
      id: 3,
      number: 120,
      color: 'orange',
    },
    {
      name: 'Retirement',
      isEditable: true,
      id: 4,
      number: 100,
      color: 'purple',
    },
  ]);
  const [expenses, setExpenses] = useState<IActual[]>([
    {
      name: 'Mortgage Payment',
      number: 1000,
      categoryId: 1,
      id: 1,
    },
    {
      name: 'Winco Shopping',
      number: 85,
      categoryId: 2,
      id: 2,
    },
    {
      name: 'Walmart',
      number: 60,
      categoryId: 2,
      id: 3,
    },
    {
      name: 'Verizon Charge',
      number: 120,
      categoryId: 3,
      id: 4,
    },
    {
      name: 'Fedelity Deposit',
      number: 100,
      categoryId: 4,
      id: 5,
    },
  ]);
  const [actualRevenue, setActualRevenue] = useState<IActual[]>([
    {
      name: 'PayCheck',
      number: 4000,
      categoryId: 1,
      id: 1,
    },
    {
      name: 'Rent Check',
      number: 250,
      categoryId: 2,
      id: 2,
    },
  ]);

  return (
    <ScrollView style={{padding: 10}}>
      <InsertModal
        isVisible={showInsertModal}
        header={insertHeader}
        onPress={() => {}}
        onClose={() => setIsInsertModalVisible(false)}
      />
      <CashFlowContainer
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
      />
      <DebtCard
        onInsertPress={() =>
          setIsInsertModalVisible(true, 'Debt Payment', debt)
        }
        debts={debt}
        debtCategories={debtCategories}
      />
      <ItemCard
        navigation={navigation}
        onInsertPress={() => setIsInsertModalVisible(true, 'Expense', debt)}
        header="Budget"
        dataTotal={itemTotal(budget)}
        data={budget}
        comparibleData={expenses}
        comparibleDataTotal={itemTotal(expenses)}
      />
      <ItemCard
        navigation={navigation}
        onInsertPress={() => setIsInsertModalVisible(true, 'Revenue', debt)}
        header="Revenue"
        dataTotal={itemTotal(revenueCategories)}
        data={revenueCategories}
        comparibleData={actualRevenue}
        comparibleDataTotal={itemTotal(actualRevenue)}
      />
    </ScrollView>
  );
};

export default Dashboard;
