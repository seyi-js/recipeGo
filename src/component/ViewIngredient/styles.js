import { StyleSheet } from "react-native";
import { DARK_MODE } from "../../firebase/config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    width: 270,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100,
    borderColor: DARK_MODE ? "#fff" : "#d44404",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#2cd18a'
  },
  text: {
    fontSize: 14,
    color: DARK_MODE ? "#fff" : "#d44404",
  },
});

export default styles;
