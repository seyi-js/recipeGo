import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import styles from "./css";
import { firebase } from "../../../firebase/config";
const Register = ({ navigation }) => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    isLoading: false,
  });

  const { first_name, last_name, email, password, isLoading } = state;

  const registerUser = async () => {
    try {
      setState({ ...setState, isLoading: true });
      if (!first_name || !last_name || !email || !password) {
        setState({ ...setState, isLoading: false });
        return Alert.alert("Error", "All fields are required.");
      }

      // console.lo
      const response = await firebase
        .app("SECONDARY_APP")
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const data = {
        id: response.user.uid,
        email,
        first_name,
        last_name,
      };

      // console.log(data);

      // const usersRef = firebase
      //   .app("SECONDARY_APP")
      //   .database()
      //   .ref(response.user.uid);
      // const result = await usersRef.set(data);

      // console.log(data);

      setState({ ...setState, isLoading: false });
      Alert.alert(
        "Success",
        "registration successful.",
        [
          {
            text: "ok",
            onPress: () => navigation.navigate("login"),
          },
        ],
        [
          {
            cancelable: true,
            onDismiss: () => navigation.navigate("login"),
          },
        ]
      );

      setState({
        ...state,
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setState({ ...setState, isLoading: false });
      console.log(error);
      Alert.alert("Error", error.toString());
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={styles.FormView}>
          <Text style={styles.TitleText}>Register</Text>

          <View style={styles.EachForm}>
            <Text style={styles.label}>First name</Text>
            <TextInput
              autoFocus={true}
              style={styles.TextInput}
              placeholder="Please enter your first name"
              value={first_name}
              onChangeText={(text) => setState({ ...state, first_name: text })}
            />
          </View>
          <View style={styles.EachForm}>
            <Text style={styles.label}>Last name</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Please enter your Last name"
              value={last_name}
              onChangeText={(text) => setState({ ...state, last_name: text })}
            />
          </View>
          <View style={styles.EachForm}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Please enter your email"
              value={email}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              onChangeText={(text) => setState({ ...state, email: text })}
            />
          </View>
          <View style={styles.EachForm}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Please enter your password"
              value={password}
              textContentType="password"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={(text) => setState({ ...state, password: text })}
            />
          </View>

          {/* <View style={styles.checkboxContainer}>
            <CheckBox style={styles.checkbox} />
            <Text>Remember me?</Text>
          </View> */}

          <TouchableOpacity onPress={() => registerUser()}>
            <View style={styles.registerView}>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <Text style={styles.registerText}>Register</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
