import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";
import Movie from "../screens/Movie";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import useAuth from "../database/hooks/useAuth";
import Recommended from "../screens/Recommended";
import Continue from "../screens/Continue";

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  const { user } = useAuth();
  
// # The if condition is use for the user will be signIn allow the home screen other it will be execute the else part
  
  if (user) {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Movie"
          component={Movie}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recommended"
          component={Recommended}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Continue"
          component={Continue}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={SignIn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
};

export default AppNavigation;
