import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useEffect } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

const SignIn = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const backToSignUp = () => navigation.navigate("SignUp");
  const openHome = () => navigation.navigate("App");

  return (
    <View style={{ backgroundColor: "#D1DAF7", height: 1000 }}>
      <Text
        style={{
          margin: 50,
          fontSize: 30,
          fontWeight: "bold",
          color: "#002291",
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        {" "}
        Sign In{" "}
      </Text>

      <Pressable>
        <Text style={{ marginTop: 10, fontSize: 18, marginLeft: 30 }}>
          Email:
        </Text>
        <TextInput
          style={{
            elevation: 7,
            fontSize: 16,
            marginLeft: 25,
            backgroundColor: "white",
            paddingVertical: 7,
            marginRight: 25,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
          placeholder=" Enter your email."
        />
      </Pressable>

      <Pressable>
        <Text style={{ marginTop: 10, fontSize: 18, marginLeft: 30 }}>
          Password:
        </Text>
        <TextInput
          style={{
            elevation: 7,
            fontSize: 16,
            marginLeft: 25,
            backgroundColor: "white",
            paddingVertical: 7,
            marginRight: 25,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
          placeholder=" Enter your password."
        />
      </Pressable>

      <Pressable
        onPress={() => openHome()}
        style={{
          backgroundColor: "#CF6E00",
          marginLeft: 115,
          marginRight: 115,
          marginTop: 30,
          elevation: 10,
          paddingVertical: 7,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            textAlign: "center",
            fontSize: 20,
            color: "#CEE3F1",
            fontWeight: "bold",
          }}
        >
          Log in
        </Text>
      </Pressable>

      <Text
        style={{
          margin: 25,
          fontSize: 18,
          marginTop: 15,
          fontWeight: "bold",
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        Please log in with your ICT U emails.
      </Text>

      <Text
        style={{
          alignSelf: "center",
          textAlign: "center",
          fontSize: 18,
          marginTop: -15,
        }}
      >
        Or sign in with:
      </Text>

      <Pressable
        style={{
          backgroundColor: "#B8BFCE",
          elevation: 15,
          marginTop: 25,
          marginLeft: 145,
          marginRight: 140,
          borderTopLeftRadius: 75,
          borderTopRightRadius: 75,
          borderBottomLeftRadius: 75,
          borderBottomRightRadius: 75,
        }}
      >
        <Image
          style={{
            width: 65,
            height: 65,
            alignSelf: "center",
            textAlign: "center",
          }}
          source={require("../assets/google.png")}
        />
      </Pressable>

      <Pressable
        onPress={() => backToSignUp()}
        style={{
          backgroundColor: "#032395",
          marginLeft: 115,
          marginRight: 115,
          marginTop: 45,
          elevation: 10,
          paddingVertical: 7,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            textAlign: "center",
            fontSize: 20,
            color: "#CEE3F1",
          }}
        >
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
