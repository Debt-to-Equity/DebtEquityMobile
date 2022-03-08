import React, {useState} from 'react';
import {View} from 'react-native';
import {useForm} from '../../hooks/useForm';
import {IDebt, IUser} from '../../types';
import Debt from './components/Debt';
import Expenses from './components/Expenses';
import PayoffSchedule from './components/PayoffSchedule';
import Revenue from './components/Revenue';
import UserInfo from './components/UserInfo';

const Wizard = () => {
  const [displayType, setDisplayType] = useState('user');
  const [userData, editUser, updateUser] = useForm({});
  const [debts, setDebts] = useState<IDebt[]>([]);

  const insertCreatedUserData = async (user: IUser) => {
    updateUser(user);

    setDisplayType('debt');
  };

  const insertDebtData = (debt: IDebt[]) => {
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
        <Debt user={userData} onSubmit={(debt: any) => insertDebtData(debt)} />
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
