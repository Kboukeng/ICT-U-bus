import React from "react";
import "expo-dev-client";
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
import SignIn from "./SignIn";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const openSignIn = () => {
    navigation.navigate("SignIn");
  };


  return (
    <View style={{ backgroundColor: "#B6BED9", height: 1000 }}>
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
        Sign Up{" "}
      </Text>

      <Pressable>
        <Text style={{ marginTop: -20, fontSize: 18, marginLeft: 30 }}>
          Name:
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
          placeholder=" Enter your name."
        />
      </Pressable>

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
          Register
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
        Please register with your ICT U emails.
      </Text>

      <Text
        style={{
          alignSelf: "center",
          textAlign: "center",
          fontSize: 18,
          marginTop: -15,
        }}
      >
        Or sign up with:
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
        onPress={() => openSignIn()}
        style={{
          backgroundColor: "#032395",
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
          }}
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
