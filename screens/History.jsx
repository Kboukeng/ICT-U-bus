import { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
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
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <ListItem key={booking.id} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{booking.session}</ListItem.Title>
              <ListItem.Subtitle>{booking.point}</ListItem.Subtitle>
              <ListItem.Subtitle>{booking.date}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      ) : (
        <Text>No bookings yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default History;
