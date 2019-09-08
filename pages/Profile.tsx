import * as React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { appStyles } from "../utils/Styles";
import Input from "../components/Input";
import Container from "../components/Container";

export interface ProfileProps {}

export interface ProfileState {}

export default class ProfileComponent extends React.Component<
  ProfileProps,
  ProfileState
> {
  public render() {
    return (
      <Container>
        <View>
          <View style={{ alignSelf: "center" }}>
            <Text>Image Component</Text>
          </View>
          <View style={appStyles.formItem}>
            <Input placeholder="Name" />
          </View>
          <View style={appStyles.formItem}>
            <Input placeholder="Email" />
          </View>
          <View style={appStyles.formItem}>
            <Button onPress={() => {}} title="Submit" />
          </View>
        </View>
      </Container>
    );
  }
}
