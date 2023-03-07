import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./components/home";
import Footer from "./components/footer";
import MotivationScreen from "./components/motivationScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WaterScreen from "./components/waterScreen";
import SettingsScreen from "./components/settingScreen";
import ProfileScreen from "./components/profileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Motivation" component={MotivationScreen} />
          <Stack.Screen name="Water" component={WaterScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
