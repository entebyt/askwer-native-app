import * as React from "react";
import {
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextInputProps
} from "react-native";

interface InputProps {
  style?: StyleProp<TextStyle>;
}

const Input: React.SFC<TextInputProps & InputProps> = (
  props: TextInputProps
) => {
  return (
    <TextInput
      style={props.style ? props.style : defaultStyle.inputDefaultStyle}
      {...props}
    />
  );
};
export default Input;
const defaultStyle = StyleSheet.create({
  inputDefaultStyle: {
    borderBottomColor: "#ebebeb",
    borderBottomWidth: 1,
    padding: 10
  }
});
