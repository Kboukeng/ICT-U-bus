import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C3C8D4",
  },

  smallContainer: {
    backgroundColor: "#F2E9E0",
    margin: 40,
    elevation: 25,
    borderRadius: 20,
    padding: 75,
    marginBottom: 25,
  },

  image: {
    width: "95%",
    height: 575,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: -200,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
    textAlign: "center",
  },

  dropdownContainer: {
    width: "60%",
    height: 50,
    marginBottom: 20,
    borderRadius: 15,
  },

  dropdown: {
    backgroundColor: "#fafafa",
    dropdownItem: {
      justifyContent: "flex-start",
    },
    dropdownList: {
      backgroundColor: "#fafafa",
    },
  },

  message: {
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "normal",
    width: 275,
    fontSize: 14,
    color: "#0101C1",
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#F99006",
    color: "#FFFFFF",
    paddingHorizontal: 100,
    paddingVertical: 20,
    size: 45,
    fontWeight: "bold",
    borderRadius: 25,
    marginBottom: 170,
    elevation: 30,
  },
});

export default Styles;
