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
    marginTop: 30,
    flexDirection: "row",
    // marginBottom: 20,
    alignItems: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
  loginView: {
    backgroundColor: "#000",
    height: 50,
    marginVertical: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    //   border
  },
  loginText: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
  },
  no_acct: {
    textAlign: "center",
    color: "#000",
  },
});

export default styles;
