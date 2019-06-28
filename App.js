import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import * as firebase from 'react-native-firebase'
import SignupScreen from "./components/SignupScreen";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";

const AppNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen
  },
  HomeScreen:{
      screen:HomeScreen
  },
  SignupScreen:{
      screen:SignupScreen
  }
 
}, {
  initialRouteName: "LoginScreen"
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


