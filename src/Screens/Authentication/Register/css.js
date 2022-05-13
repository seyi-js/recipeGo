import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 50,
    // paddingBottom: 50,
    paddingHorizontal: 20,
    height: height * 1.1,
  },
  FormView: {
    marginTop: 100,
    flex: 1,
  },
  TitleText: {
    // color: "",
    fontSize: 30,
    fontWeight: "bold",
    //   fontFamily:'Po'
  },
  EachForm: {
    marginTop: 30,
  },
  label: {
    fontSize: 15,
  },
  TextInput: {
    marginTop: 5,
    // backgroundColor: "",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
    color: "black",
    // borderColor: "black",
    borderWidth: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
  registerView: {
    backgroundColor: "#000",
    height: 50,
    marginVertical: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    //   border
  },
  registerText: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
  },
});

export default styles;
