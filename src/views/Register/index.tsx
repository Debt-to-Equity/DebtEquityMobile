import React, { useState, useEffect, useContext } from "react";
import { View, TouchableOpacity, SafeAreaView } from "react-native";

import {
  TextInput,
  HelperText,
  Text,
  Button,
  useTheme,
} from "react-native-paper";

import { Colors } from "../../styles";
import { BrightText, MediumText } from "../../components/Texts";
import { useForm } from "../../hooks/useForm";
import { updatePassword } from "../../api/updatePassword";
import { useError } from "../../hooks/useError";
import { UserContext } from "../../context/UserContext";

interface IProps {
  navigation: any;
  saveUser: (user: any) => {};
}

const Register = (props: IProps) => {
  const { colors } = useTheme();
  const { saveUser } = useContext(UserContext);
  const [form, handleFormUpdate] = useForm({
    email: "",
    password: "",
    confirmPassword: "",
    token: "",
    phoneNumber: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { errorMessage, setErrorMessage } = useError();
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    let response = await updatePassword(
      form.email,
      form.phoneNumber,
      form.password,
      form.token
    );
    if (response.error) {
      setLoading(false);
      setErrorMessage(response.message);
    } else {
      setLoading(false);
      saveUser(response);
    }
  };

  useEffect(() => {
    if (form.confirmPassword && form.confirmPassword !== form.password) {
      setErrorMessage("Passwords do not match");
    } else {
      setErrorMessage("");
    }
  }, [form]);

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: Colors.backgroundColor,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <BrightText style={{ fontSize: 25 }}>Register you account</BrightText>
        </View>

        <HelperText
          type="error"
          visible={
            errorMessage && errorMessage.includes("Email") ? true : false
          }
        >
          {errorMessage}
        </HelperText>
        <TextInput
          mode="outlined"
          style={{ marginBottom: 30 }}
          label="Email"
          left={<TextInput.Icon name="account" />}
          value={form.email}
          onChangeText={(text) => {
            handleFormUpdate("email", text);
          }}
        />

        <TextInput
          mode="outlined"
          style={{ marginBottom: 15 }}
          label="Password"
          secureTextEntry={!showPassword}
          left={<TextInput.Icon name="key" />}
          right={
            !showPassword ? (
              <TextInput.Icon
                name="eye"
                onPress={() => setShowPassword(true)}
              />
            ) : (
              <TextInput.Icon
                name="eye-off"
                onPress={() => setShowPassword(false)}
              />
            )
          }
          value={form.password}
          onChangeText={(text) => {
            handleFormUpdate("password", text);
          }}
        />

        <HelperText
          type="error"
          visible={
            errorMessage && errorMessage.includes("do not match") ? true : false
          }
        >
          {errorMessage}
        </HelperText>
        <TextInput
          mode="outlined"
          style={{ marginBottom: 15 }}
          label="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          left={<TextInput.Icon name="key" />}
          right={
            !showConfirmPassword ? (
              <TextInput.Icon
                name="eye"
                onPress={() => setShowConfirmPassword(true)}
              />
            ) : (
              <TextInput.Icon
                name="eye-off"
                onPress={() => setShowConfirmPassword(false)}
              />
            )
          }
          value={form.confirmPassword}
          onChangeText={(text) => {
            handleFormUpdate("confirmPassword", text);
          }}
        />

        <HelperText
          type="error"
          visible={
            errorMessage && errorMessage.includes("phone") ? true : false
          }
        >
          {errorMessage}
        </HelperText>
        <TextInput
          mode="outlined"
          style={{ marginBottom: 15 }}
          label="Phone Number"
          left={<TextInput.Icon name="phone" />}
          value={form.phoneNumber}
          onChangeText={(text) => {
            handleFormUpdate("phoneNumber", text);
          }}
        />

        <HelperText
          type="error"
          visible={
            errorMessage && errorMessage.includes("token") ? true : false
          }
        >
          {errorMessage}
        </HelperText>
        <TextInput
          mode="outlined"
          label="Token"
          left={<TextInput.Icon name="alpha-t-circle" />}
          value={form.token}
          onChangeText={(text) => {
            handleFormUpdate("token", text);
          }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            marginLeft: 20,
          }}
        >
          <MediumText>Have an Account? </MediumText>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={{ color: colors.primary }}>Login here</Text>
          </TouchableOpacity>
        </View>

        <Button
          style={{ marginTop: 50, height: 40, justifyContent: "center" }}
          mode="contained"
          onPress={() => handleRegister()}
          disabled={Boolean(errorMessage)}
          loading={loading}
        >
          Register
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Register;
