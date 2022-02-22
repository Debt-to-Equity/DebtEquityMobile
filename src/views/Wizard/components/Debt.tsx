import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useWizard} from '../../../hooks/useWizard';
import {IUser, IWizardObj} from '../../../types';
import AddNew from './AddNew';
import {TextInput, Button, Text, Title} from 'react-native-paper';
import {insertMultipleDebts} from '../../../api/insertMultipleDebts';

interface DebtProps {
  onSubmit: any;
  user: IUser;
}

const Debt: React.FC<DebtProps> = ({onSubmit, user}) => {
  const [showNewValue, setShowNewValue] = useState(false);
  const [newValue, setNewValue] = useState({name: '', amount: ''});
  const [values, handleChange, addNewValue, _, isValid] = useWizard([
    {
      id: 1,
      name: 'First Mortgage',
      amount: '',
    },
    {
      id: 2,
      name: 'Second Mortgage',
      amount: '',
    },
    {
      id: 3,
      name: 'Credit Card',
      amount: '',
    },
  ]);

  const renderItem = () => {
    return values.map((ele: IWizardObj, indx: number) => {
      return (
        <TextInput
          key={indx}
          keyboardType='number-pad'
          mode="outlined"
          onChangeText={text => handleChange(text, ele.id)}
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
    let debts = await insertMultipleDebts(values, user._id);
    onSubmit(debts);
  };

  return (
    <View style={{paddingTop: 50, paddingHorizontal: 20}}>
      <Title style={{alignSelf: 'center'}}>Debt</Title>
      {renderItem()}
      <Text style={{fontSize: 23, marginTop: 10, marginBottom: 10}}>
        Total Debt: {totalValue() ? totalValue() : 0}
      </Text>

      {showNewValue ? (
        <AddNew
          onCancel={() => {
            setShowNewValue(false);
            setNewValue({name: '', amount: ''});
          }}
          addNewValue={() => {
            addNewValue(newValue.name, newValue.amount);
            setShowNewValue(false);
            setNewValue({name: '', amount: ''});
          }}
          onChangeNameText={(text: string) =>
            setNewValue({...newValue, name: text})
          }
          onChangeValueText={(text: string) =>
            setNewValue({...newValue, amount: text})
          }
          amount={newValue.amount}
          name={newValue.name}
        />
      ) : (
        <Button
          disabled={false}
          loading={false}
          onPress={() => setShowNewValue(true)}>
          Add Debt
        </Button>
      )}
      <Button
        style={{marginTop: 25}}
        mode="contained"
        disabled={!isValid}
        onPress={() => handleSubmit()}>
        Submit
      </Button>
    </View>
  );
};

export default Debt;
