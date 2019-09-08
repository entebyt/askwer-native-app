import * as React from "react";
import { View, StyleProp, ViewStyle, ViewProps } from "react-native";
import { appStyles } from "../utils/Styles";

interface ContainerProps {
  style?: StyleProp<ViewStyle>;
}

const Container: React.SFC<ContainerProps> = props => {
  return (
    <View {...props} style={props.style ? props.style : appStyles.container}>
      {props.children}
    </View>
  );
};
export default Container;
