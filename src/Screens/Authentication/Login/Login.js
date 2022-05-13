import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  // CheckBox,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import styles from "./css";
import { firebase } from "../../../firebase/config";
const Login = ({ navigation }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    isSelected: false,
    isLoading: false,
  });

  const { isSelected, email, password, isLoading } = state;

  const loginUser = async () => {
    try {
      setState({ ...setState, isLoading: true });
      if (!email || !password) {
        setState({ ...setState, isLoading: false });

        Alert.alert("Error", "All inputs are required.");
      }

      await firebase
        .app("SECONDARY_APP")
        .auth()
        .signInWithEmailAndPassword(email, password);

      setState({ ...setState, isLoading: false });
      navigation.navigate("Home");
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
          <Text style={styles.TitleText}>Login</Text>

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
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(text) => setState({ ...state, password: text })}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={(val) =>
                setState({ ...state, isSelected: !isSelected })
              }
              style={styles.checkbox}
            />
            <Text>Remember me?</Text>
          </View>

          <TouchableOpacity onPress={() => loginUser()}>
            <View style={styles.loginView}>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <Text style={styles.loginText}>Login</Text>
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text style={styles.no_acct}>
              Don't have an account? Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
