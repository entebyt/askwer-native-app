import * as React from "react";
import { View, TextInput, Button } from "react-native";
import { appStyles } from "../utils/Styles";
import Input from "./Input";

interface SignupFormProps {
  signup: () => void;
}

const SignupForm: React.SFC<SignupFormProps> = ({ signup }) => {
  return (
    <View>
      <View style={appStyles.formItem}>
        <Input placeholder="Name" />
      </View>
      <View style={appStyles.formItem}>
        <Input placeholder="Email" />
      </View>
      <View style={appStyles.formItem}>
        <Input secureTextEntry={true} placeholder="Password" />
      </View>
      <View style={appStyles.formItem}>
        <Button onPress={signup} title="Submit" />
      </View>
    </View>
  );
};
export default SignupForm;
