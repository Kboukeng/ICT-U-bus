import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Notifications = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Notifications",
      headerTitleStyle: {
        color: "#000000",
        fontSize: 20,
        marginLeft: 25,
        fontWeight: "regular",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#FAFAFD",
      },
    });
  });

  return (
    <View>
      <Text>Notifications</Text>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
