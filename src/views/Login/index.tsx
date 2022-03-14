import React, { useContext, useState } from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import { TextInput, HelperText, Text, Button, useTheme } from 'react-native-paper';

import { Colors } from '../../styles';
import { BrightText, MediumText } from '../../components/Texts'
import { useForm } from '../../hooks/useForm';
import { loginUser } from '../../api/loginUser';
import { useError } from '../../hooks/useError';
import { useUser } from '../../hooks/useUser';
import { UserContext } from '../../context/UserContext';

interface IProps {
  navigation: any;
}

const Login: React.FC<IProps> = ({navigation}) => {
  const {user, saveUser} = useContext(UserContext);
  const { colors } = useTheme();
  const [form, handleFormUpdate] = useForm({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false);
  const { errorMessage, setErrorMessage } = useError()
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    let response = await loginUser(form.email, form.password)
    if (response.error) {
      setLoading(false)
      setErrorMessage(response.message)
    } else {
      setLoading(false)
      saveUser(response)
    }
  }

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: Colors.backgroundColor, paddingHorizontal: 20 }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
          }}>
          <BrightText style={{ fontSize: 25 }}>Login to your account</BrightText>
        </View>

        <HelperText visible={Boolean(errorMessage)} type="error" style={{ marginTop: 15 }}>{errorMessage}</HelperText>
        <TextInput
          mode="outlined"
          label="Email"
          left={<TextInput.Icon name="account" />}
          value={form.email}
          onChangeText={text => {
            handleFormUpdate('email', text)
            setErrorMessage('')
          }}
        />

        <TextInput
          mode="outlined"
          style={{ marginTop: 15 }}
          label="Password"
          secureTextEntry={!showPassword}
          left={<TextInput.Icon name="key" />}
          right={!showPassword ?
            <TextInput.Icon
              name="eye"
              onPress={() => setShowPassword(true)}
            />
            :
            <TextInput.Icon
              name="eye-off"
              onPress={() => setShowPassword(false)}
            />
          }
          value={form.password}
          onChangeText={text => {
            handleFormUpdate('password', text)
            setErrorMessage('')
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            marginLeft: 20,
          }}>
          <MediumText>Need to Register? </MediumText>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ color: colors.primary }}>Register here</Text>
          </TouchableOpacity>
        </View>

        <Button
          style={{ marginTop: 50, height: 40, justifyContent: 'center' }}
          mode="contained"
          onPress={() => handleLogin()}
          disabled={false}
          loading={loading}
        >
          Login
        </Button>

      </View>
    </SafeAreaView>
  );
};

export default Login;
