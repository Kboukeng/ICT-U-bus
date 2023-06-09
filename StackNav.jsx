import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

import React from "react";
import Home from "./screens/Home";
import History from "./screens/History";
import Account from "./screens/Account";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";

const StackNav = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#0101C1" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarLabel: "History",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="book" size={24} color="#0101C1" />
              ) : (
                <Ionicons name="book-outline" size={24} color="black" />
              ),
          }}
        />

        {/* <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: "Account",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Octicons name="person-fill" size={24} color="#0101C1" />
              ) : (
                <Octicons name="person" size={24} color="black" />
              ),
          }}
        /> */}
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name="App"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
