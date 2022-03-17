import React, { useEffect, useState, useContext } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { DataTable, Button, List } from "react-native-paper";
import { BrightText } from "../../components/Texts";
import { Colors } from "../../styles";
import { IUser } from "../../types";
import { getClients as getClientsAPI } from "../../api/getClients";
import { UserContext } from "../../context/UserContext";

const optionsPerPage = [2, 3, 4];

const AgentDashboard = ({ navigation }: any) => {
  const { user } = useContext(UserContext);
  const [clients, setClients] = useState<IUser | []>([]);

  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    const stuff = await getClientsAPI(user.id);
    console.log(stuff);
    setClients(stuff);
  };

  const renderItem = ({ item }) => (
    <List.Item
      title={`${item.firstName} ${item.lastName}`}
      description={item.email}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <Button
        icon="account-plus"
        mode="contained"
        onPress={() => navigation.push("Wizard")}
      >
        Add Customer
      </Button>
      <FlatList
        data={clients}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AgentDashboard;
