import { StatusBar } from "expo-status-bar";
import { ModalPortal } from "react-native-modals";
import { StyleSheet, Text, View } from "react-native";
import StackNav from "./StackNav";

export default function App() {
  return (
    <>
      <StackNav />
      <ModalPortal />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
