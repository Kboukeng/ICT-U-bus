import { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { openDatabase } from "expo-sqlite";


const db = openDatabase("bookings.db");


const History = () => {
  const navigation = useNavigation();
  const [bookingData, setBookingData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "History",
      headerTitleStyle: {
        color: "#000000",
        fontSize: 20,
        marginLeft: 125,
        fontWeight: "regular",
      },
      headerStyle: {
        backgroundColor: "#FAFAFD",
      },
    });
  });

    const [bookings, setBookings] = useState([]);

  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS bookings (id INTEGER PRIMARY KEY AUTOINCREMENT, session TEXT, point TEXT, date TEXT)"
        );
        tx.executeSql(
          "SELECT * FROM bookings",
          [],
          (_, { rows }) => {
            setBookings(rows._array);
          },
          (_, error) => {
            console.log("Error:", error);
          }
        );
      },
      (error) => {
        console.log("Transaction error:", error);
      }
    );
  }, []);

  return (
    <ScrollView>
      <View>
        <Text style={styles.header}>Your booking</Text>
        {bookings.length > 0 ? (
          bookings.map((bookings) => (
            <ListItem key={bookings.id} bottomDivider style={styles.container}>
              <ListItem.Content>
                <ListItem.Title>{bookings.session}</ListItem.Title>
                <ListItem.Subtitle>{bookings.point}</ListItem.Subtitle>
                <ListItem.Subtitle>{bookings.date}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        ) : (
          <Text>No bookings yet.</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#1C2F31D1",
    fontSize: 10,
    margin: 10
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0810FD",
  },
});

export default History;
