import React from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

interface AddNewProps {
  amount: string;
  name: string;
  onChangeNameText: any;
  onChangeValueText: any;
  addNewValue: any;
  onCancel: any;
}

const AddNew: React.FC<AddNewProps> = ({
  amount,
  name,
  onChangeNameText,
  onChangeValueText,
  addNewValue,
  onCancel,
}) => {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput
          style={{width: '45%'}}
          onChangeText={onChangeNameText}
          placeholder="Add Name"
          value={name}
        />
        <TextInput
          style={{width: '45%'}}
          onChangeText={onChangeValueText}
          placeholder="Add Value"
          value={amount}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Button
          style={{width: '45%'}}
          disabled={false}
          loading={false}
          onPress={addNewValue}
          mode="contained">
          Add
        </Button>
        <Button
          color="tomato"
          style={{width: '45%'}}
          disabled={false}
          loading={false}
          onPress={onCancel}
          mode="contained">
          Cancel
        </Button>
      </View>
    </View>
  );
};

export default AddNew;
