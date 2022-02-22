import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useWizard} from '../../../hooks/useWizard';
import {IUser, IWizardObj} from '../../../types';
import AddNew from './AddNew';
import {TextInput, Button, Text, Title} from 'react-native-paper';
import {insertMultipleRevenue} from '../../../api/insertMultipleRevenue';

interface RevenueProps {
  onSubmit: any;
  user: IUser;
}

const Revenue: React.FC<RevenueProps> = ({onSubmit, user}) => {
  const [showNewValue, setShowNewValue] = useState(false);
  const [newValue, setNewValue] = useState({name: '', amount: ''});
  const [values, handleChange, addNewValue, _, isValid] = useWizard([
    {
      id: 1,
      name: 'Net Monthly Income',
      amount: '',
      revenue: true,
    },
  ]);

  const renderItem = () => {
    return values.map((ele: IWizardObj, indx: number) => {
      return (
        <TextInput
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
    console.log(user.id);
    let stuff = await insertMultipleRevenue(values, user._id);
    onSubmit();
  };

  return (
    <View style={{paddingTop: 50, paddingHorizontal: 20}}>
      <Title style={{alignSelf: 'center'}}>Expenses</Title>
      {renderItem()}
      <Text style={{fontSize: 23, marginTop: 10, marginBottom: 10}}>
        Total Monthly Income: {totalValue() ? totalValue() : 0}
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
          Add Revenue
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

export default Revenue;
