import { StyleSheet } from "react-native";
import { DARK_MODE } from "../../firebase/config";

const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: "row",
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
  btnText: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 2,
    color: DARK_MODE ? "#fff" : "#000",
  },
});

export default styles;
