import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {registerUser} from '../../../api/registerUser';
import {useError} from '../../../hooks/useError';
import {useForm} from '../../../hooks/useForm';
import {useWizardForm} from '../hooks/useWizardForm';

interface UserInfoProps {
  onRegistration: any;
}

const UserInfo: React.FC<UserInfoProps> = ({onRegistration}) => {
  const [form, handleFormUpdate, _, isValid] = useForm({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });
  const {errorMessage, setErrorMessage} = useError();
  const [loading, setLoading] = useState(false);
  
  const handleRegistration = async () => {
    setLoading(true);
    registerUser(form.email, form.firstName, form.lastName, form.phoneNumber)
      .then(res => {
        if (res.error) {
          setLoading(false);
          setErrorMessage(res.message);
        } else {
          setLoading(false);
          console.log(res);
          onRegistration(res);
        }
      })
      .catch(err => console.log('erro'));
  };

  return (
    <View style={{paddingHorizontal: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 50,
          marginBottom: 20,
        }}>
        <TextInput
          style={{minWidth: '45%'}}
          mode="outlined"
          label="First Name"
          left={<TextInput.Icon name="account" />}
          value={form?.firstName}
          onChangeText={text => {
            handleFormUpdate('firstName', text);
            setErrorMessage('');
          }}
        />
        <TextInput
          style={{minWidth: '45%'}}
          mode="outlined"
          label="Last Name"
          value={form?.lastName}
          onChangeText={text => {
            handleFormUpdate('lastName', text);
            setErrorMessage('');
          }}
        />
      </View>
      <TextInput
        style={{marginBottom: 20}}
        mode="outlined"
        label="Email"
        left={<TextInput.Icon name="mail" />}
        value={form?.email}
        onChangeText={text => {
          handleFormUpdate('email', text);
          setErrorMessage('');
        }}
      />
      <TextInput
        style={{marginBottom: 20}}
        mode="outlined"
        label="Phone Number"
        left={<TextInput.Icon name="phone" />}
        value={form?.phoneNumber}
        onChangeText={text => {
          handleFormUpdate('phoneNumber', text);
          setErrorMessage('');
        }}
      />

      <Button
        style={{marginTop: 50, height: 40, justifyContent: 'center'}}
        mode="contained"
        onPress={() => handleRegistration()}
        disabled={Boolean(errorMessage) || loading || !isValid}
        loading={loading}>
        Register
      </Button>
    </View>
  );
};

export default UserInfo;
