import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import AgentDashboard from "../views/AgentDashboard/AgentDashboard";
import CustomerDashboard from "../views/CustomerDashboard/CustomerDashboard";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import Wizard from "../views/Wizard/Wizard";
import Login from "../views/Login";
import Register from "../views/Register";
import { useUser } from "../hooks/useUser";
import { UserContext } from "../context/UserContext";
import InsertDebt from "../views/insert-debt/InsertDebt";
import InsertBudget from "../views/insert-budget/InsertBudget";
import DebtsDisplay from "../views/DebtsDisplay/DebtsDisplay";
import RevenueDisplay from "../views/revenue-display/RevenueDisplay";
import InsertRevenue from "../views/insert-revenue/InsertRevenue";
import CreateUser from "../views/create-user/CreateUser";
import AddNewItem from "../components/modals/components/AddNewItem";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const { user, saveUser, getUser, logoutUser } = useUser();

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
      <UserContext.Provider value={{ user, saveUser, getUser, logoutUser }}>
        {!user?.id ? (
          <LoginNavigator />
        ) : user.userType === "client" ? (
          <ClientNavigator />
        ) : (
          <AgentNavigator />
        )}
      </UserContext.Provider>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function LoginNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

function AgentNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Agent"
        component={AgentTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Client"
        component={CustomerDashboard}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wizard"
        component={Wizard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InsertBudget"
        component={InsertBudget}
        options={{ title: "Insert Budget" }}
      />
      <Stack.Screen
        name="DebtsDisplay"
        component={DebtsDisplay}
        options={{ title: "Debts" }}
      />
      <Stack.Screen
        name="CreateUser"
        component={CreateUser}
        options={{ title: "Create User" }}
      />
      <Stack.Screen
        name="InsertDebt"
        component={InsertDebt}
        options={{ title: "Insert Debts" }}
      />
      <Stack.Screen name="RevenueDisplay" component={RevenueDisplay} />
      <Stack.Screen name="InsertRevenue" component={InsertRevenue} />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="AddNewItem" component={AddNewItem} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function ClientNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Client"
        component={ClientTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="InsertDebt" component={InsertDebt} />
      <Stack.Screen name="DebtsDisplay" component={DebtsDisplay} />
      <Stack.Screen name="RevenueDisplay" component={RevenueDisplay} />
      {/* <Stack.Screen
        name=""
        component={Register}
        options={{ headerShown: false }}
      /> */}
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="AddNewItem" component={AddNewItem} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function AdminTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Agent"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Agent"
        component={AgentDashboard}
        options={{
          title: "Agent",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function AgentTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Agent"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Agent"
        component={AgentDashboard}
        options={{
          title: "Agent",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function ClientTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Client"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Customer"
        component={CustomerDashboard}
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
