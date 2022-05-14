import { StyleSheet } from "react-native";
import { MODE } from "../../firebase/config";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: MODE,
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 20,
    backgroundColor: MODE,
  },
});

export default styles;
