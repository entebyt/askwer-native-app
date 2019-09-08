import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import SignupForm from "../components/SignupForm";
import Container from "../components/Container";

export interface SignupProps {}

export interface SignupState {}

export default class Signup extends React.Component<SignupProps, SignupState> {
  state = { name: "", email: "", password: "" };
  signup = () => {};

  public render() {
    return (
      <Container>
        <SignupForm signup={this.signup} />
      </Container>
    );
  }
}
