import React, { useContext, useState } from "react";
import { Alert, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { registerUser } from "../../api/registerUser";
import { UserContext } from "../../context/UserContext";
import { useError } from "../../hooks/useError";
import { useForm } from "../../hooks/useForm";
import { StackActions, useNavigation } from "@react-navigation/native";

interface UserInfoProps {
  onRegistration: any;
}

const CreateUser: React.FC<UserInfoProps> = ({ onRegistration }) => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();
  const [form, handleFormUpdate, _, isValid] = useForm({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const { errorMessage, setErrorMessage } = useError();
  const [loading, setLoading] = useState(false);

  const handleRegistration = async () => {
    setLoading(true);
    registerUser(
      form.email,
      form.firstName,
      form.lastName,
      form.phoneNumber,
      user.id
    )
      .then((res) => {
        if (res.error) {
          setLoading(false);
          setErrorMessage(res.message);
        } else {
          setLoading(false);
          navigation.dispatch(
            StackActions.replace("InsertDebt", {
              client: res,
              nextRoute: true,
            })
          );
        }
      })
      .catch((err) => Alert.alert("Could not register user"));
  };

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 50,
          marginBottom: 20,
        }}
      >
        <TextInput
          style={{ minWidth: "45%" }}
          mode="outlined"
          label="First Name"
          left={<TextInput.Icon name="account" />}
          value={form?.firstName}
          onChangeText={(text) => {
            handleFormUpdate("firstName", text);
            setErrorMessage("");
          }}
        />
        <TextInput
          style={{ minWidth: "45%" }}
          mode="outlined"
          label="Last Name"
          value={form?.lastName}
          onChangeText={(text) => {
            handleFormUpdate("lastName", text);
            setErrorMessage("");
          }}
        />
      </View>
      <TextInput
        style={{ marginBottom: 20 }}
        mode="outlined"
        label="Email"
        left={<TextInput.Icon name="mail" />}
        value={form?.email}
        onChangeText={(text) => {
          handleFormUpdate("email", text);
          setErrorMessage("");
        }}
      />
      <TextInput
        style={{ marginBottom: 20 }}
        mode="outlined"
        label="Phone Number"
        left={<TextInput.Icon name="phone" />}
        value={form?.phoneNumber}
        onChangeText={(text) => {
          handleFormUpdate("phoneNumber", text);
          setErrorMessage("");
        }}
      />

      <Button
        style={{ marginTop: 50, height: 40, justifyContent: "center" }}
        mode="contained"
        onPress={() => handleRegistration()}
        disabled={Boolean(errorMessage) || loading || !isValid}
        loading={loading}
      >
        Register
      </Button>
    </View>
  );
};

export default CreateUser;
