import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Account = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Account",
      headerTitleStyle: {
        color: "#000000",
        fontSize: 20,
        marginLeft: 120,
        fontWeight: "regular",
      },
      headerStyle: {
        backgroundColor: "#FAFAFD",
      },
    });
  });

  return (
    <View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
