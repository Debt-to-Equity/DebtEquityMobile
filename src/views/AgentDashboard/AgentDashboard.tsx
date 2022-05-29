import React, { useEffect, useState, useContext } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { DataTable, Button, List } from "react-native-paper";
import { BrightText } from "../../components/Texts";
import { Colors } from "../../styles";
import { IUser } from "../../types";
import { getClients as getClientsAPI } from "../../api/getClients";
import { UserContext } from "../../context/UserContext";

const AgentDashboard = ({ navigation }: any) => {
  const { user, logoutUser } = useContext(UserContext);
  const [clients, setClients] = useState<IUser | []>([]);

  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    const stuff = await getClientsAPI(user.id);
    setClients(stuff);
  };

  const renderItem = ({ item }) => (
    <List.Item
      title={`${item.firstName} ${item.lastName}`}
      description={item.email}
      onPress={() => {
        navigation.navigate("Client", { client: item });
      }}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <Button
        icon="account-plus"
        mode="contained"
        onPress={() => navigation.push("CreateUser")}
      >
        Add Customer
      </Button>
      <FlatList
        data={clients}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id}
      />
      <Button icon="logout" mode="contained" onPress={() => logoutUser()}>
        Logout
      </Button>
    </View>
  );
};

export default AgentDashboard;
