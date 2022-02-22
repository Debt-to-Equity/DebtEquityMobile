import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from '../../components/Buttons';
import {CardModal} from '../../components/Modals';
import {useForm} from '../../hooks/useForm';
import {IDebt} from '../../types';
import Address from './components/Address';
import Debt from './components/Debt';
import Expenses from './components/Expenses';
import PayoffSchedule from './components/PayoffSchedule';
import Revenue from './components/Revenue';
import UserInfo from './components/UserInfo';

const Wizard = () => {
  const [displayType, setDisplayType] = useState('user');
  const [userData, editUser, updateUser] = useForm({});
  const [revenueData, setRevenueData] = useForm({});
  const [expenseData, setExpenseData] = useForm({});
  const [debts, setDebts] = useState<IDebt[]>([]);

  const insertCreatedUserData = async user => {
    console.log('function', user);
    updateUser(user);

    setDisplayType('debt');
  };

  const insertDebtData = (debt: IDebt[]) => {
    console.log('insertDebtData', debt);
    setDebts(debt);
    setDisplayType('revenue');
  };

  return (
    <View>
      {displayType === 'user' && (
        <UserInfo onRegistration={insertCreatedUserData} />
      )}
      {/* <Address /> */}
      {/* <PayoffSchedule user={userData} /> */}

      {displayType === 'debt' && (
        <Debt user={userData} onSubmit={debt => insertDebtData(debt)} />
      )}
      {displayType === 'revenue' && (
        <Revenue user={userData} onSubmit={() => setDisplayType('expense')} />
      )}

      {displayType === 'expense' && (
        <Expenses
          user={userData}
          debts={debts}
          onSubmit={() => setDisplayType('numbers')}
        />
      )}

      {displayType === 'numbers' && <PayoffSchedule user={userData} />}
    </View>
  );
};

export default Wizard;
