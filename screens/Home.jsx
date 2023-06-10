import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import { useEffect } from "react";
import firestore from "../firebase";
import { getDoc, doc, setDoc, addDoc, collection } from "firebase/firestore";
import * as React from "react";
import moment from "moment";
import { openDatabase } from "expo-sqlite";
import {
  ModalFooter,
  ModalButton,
  ModalContent,
  BottomModal,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";

const db = openDatabase("bookings.db");

const Home = () => {
  const navigation = useNavigation();
  const [session, setSession] = React.useState("");
  const [point, setPoint] = React.useState("");
  const [modalV, setModalV] = React.useState(false);
  const [bookings, setBookings] = React.useState([]);

  const sessions = [
    { key: "Mon", value: "Morning session" },
    { key: "Aft", value: "Afternoon session" },
  ];
  const [morningSession, setMorningSession] = React.useState(false);
  const [afternoonSession, setafternoonSession] = React.useState(false);

  const morningPoints = [
    { key: "1", value: "Dispensaire messassi - 07:45am" },
    { key: "2", value: "Mobile emana - 07:30am" },
    { key: "3", value: "Rond point lonkak - 07:15am" },
    { key: "4", value: "Poste central - 07:00am" },
    { key: "5", value: "Carrefoure volt - 06:45am" },
    { key: "6", value: "Chapelle nsimeyong - 06:30am" },
    { key: "7", value: "Mendon - 06:15am" },
  ];

  const [points, setPoints] = React.useState("");

  const afternoonPoints = [
    { key: "8", value: "Dispensaire messassi" },
    { key: "9", value: "Mobile emana" },
    { key: "10", value: "Rond point lonkak" },
    { key: "11", value: "Poste central" },
    { key: "12", value: "Carrefoure volt" },
    { key: "13", value: "Chapelle nsimeyong" },
    { key: "15", value: "Mendon" },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking",
      headerTitleStyle: {
        fontSize: 20,
        marginLeft: 120,
        fontWeight: "regular",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#0808B5",
        height: 100,
        elevation: 60,
        shadowColor: "#000000",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 25 }}
        />
      ),
    });
  });

  const handleBook = () => {
    if (session && point) {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "INSERT INTO bookings (session, point, date) VALUES (?, ?, ?)",
            [session, point, moment().format("YYYY-MM-DD HH:mm:ss")],
            (_, { rows }) => {
              console.log("Booking successful:", rows);
            }
          );
        },
        (error) => {
          console.log("Booking error:", error);
        }
      );
      setSession(null);
      setPoint(null);
    } else {
      alert("Please select a session and a point.");
    }
  };

  async function test() {
    try {
      const docRef = doc(firestore, "booking", "41yWgNnqdOz7NajqwrHe");
      const doc = await getDoc(docRef);
      if (doc.exists()) {
        console.log("Document data:", doc.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function add() {
    await addDoc(collection(firestore, "booking"), {
      session: session,
      point: point,
      date: new Date(),
    });
  }

  useEffect(() => {}, []);

  const [modalVisible, setModalVisible] = React.useState(false);
  const bookSeat = (session, point) => {
    if (!session && !point) {
      Alert.alert(
        "Invalid details",
        "Please make sure select all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      setModalVisible(false);
      setModalV(true);
    }
  };

  return (
    <>
      <View>
        <ScrollView>
          <View>
            <Image
              style={{
                flex: 5,
                width: "100%",
                height: 350,
                marginRight: 10,
                shadowRadius: 10,
                shadowColor: "#000000",
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
              }}
              source={require("../assets/home.png")}
            />
          </View>
          <Pressable
            style={{
              margin: 35,
              marginTop: -175,
              backgroundColor: "#F2E9E0",
              marginBottom: 65,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              elevation: 15,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  width: 300,
                  alignSelf: "center",
                  textAlign: "center",
                  marginBottom: 10,
                  marginTop: 15,
                }}
              >
                Make a reservation
              </Text>
            </View>
            <Pressable
              style={{
                margin: 10,
                backgroundColor: "#ffffff",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
            >
              <SelectList
                onChange={() => {
                  console.log(session.key);
                  {
                    sessions.key === "Mon"
                      ? setMorningSession(true)
                      : setafternoonSession(false);
                  }
                }}
                setSelected={(val) => {
                  setSession(val);
                  {
                    session === "Morning session"
                      ? () => {
                          setMorningSession(true);
                          setPoints("Morning session");
                        }
                      : () => {
                          setMorningSession(false);
                          setPoints("Afternoon session");
                        };
                  }
                }}
                placeholder="Select a session"
                data={sessions}
                save="value"
              />
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#ffffff",
                marginTop: 10,
                marginBottom: 40,
                margin: 10,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
            >
              {morningSession && (
                <SelectList
                  setSelected={(val) => setPoint(val)}
                  placeholder="Select a point"
                  data={morningPoints}
                  save="value"
                />
              )}

              {!morningSession && (
                <SelectList
                  setSelected={(val) => {
                    setPoint(val);
                    console.log(point);
                  }}
                  placeholder="Select a point"
                  data={afternoonPoints}
                  save="value"
                />
              )}
            </Pressable>
          </Pressable>
          <View style={{ marginTop: -45 }}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                fontWeight: "normal",
                width: 275,
                fontSize: 12,
                color: "#0101C1",
              }}
            >
              For norning sessions, make sure you confirm your bookiing before
              06:00am and for afternoon sessions, make sure you confirm your
              bookiing before 04:30pm.
            </Text>
          </View>
          <Pressable
            style={{
              margin: 90,
              marginTop: 30,
              backgroundColor: "#FF8412",
              paddingVertical: 10,
              elevation: 3,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
          >
            <Text
              onPress={() => bookSeat(session, points)}
              style={{
                alignSelf: "center",
                textAlign: "center",
                fontWeight: "bold",
                width: 300,
                fontSize: 24,
                color: "white",
              }}
            >
              Book
            </Text>
          </Pressable>
        </ScrollView>
      </View>

      {modalV && (
        <BottomModal
          swipeThresholod={500}
          onBackDropPress={() => setModalV(!modalV)}
          swipeDirection={["down", "up"]}
          footer={
            <ModalFooter>
              <ModalButton
                text="Confirm"
                style={{
                  marginLeft: 75,
                  marginRight: 75,
                  marginTop: 10,
                  marginBottom: 15,
                  backgroundColor: "#FF8412",
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                  borderBottomLeftRadius: 25,
                  borderBottomRightRadius: 25,
                }}
                onPress={() => {
                  setModalV(!modalV);
                  add();
                  handleBook();
                }}
              />
            </ModalFooter>
          }
          modalTitle={
            <ModalTitle
              title="Confirm booking"
              style={{ fontWeight: "bold", fontSize: 24, color: "#BB7E04" }}
            />
          }
          modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
          onHardwareBackPress={() => setModalV(!modalV)}
          visible={modalV}
          onTouchOutside={() => setModalV(!modalV)}
        >
          <ModalContent
            style={{ width: "100%", height: 150, backgroundColor: "#EDE8DF" }}
          >
            <View
              style={{
                fontSize: 20,
                flexDirection: "column",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 16,
                  textAlign: "center",
                  alignItems: "center",
                  fontWeight: "regular",
                  fontWeight: "bold",
                  width: 300,
                }}
              >
                {" "}
                You choosed{" "}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  width: 300,
                  color: "#0824C0",
                }}
              >
                {" "}
                session: {session},
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  width: 375,
                  color: "#0721B4",
                }}
              >
                point {point}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  fontWeight: "bold",
                  width: 300,
                }}
              >
                {" "}
                Please confirm the booking.
              </Text>
            </View>
          </ModalContent>
        </BottomModal>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
