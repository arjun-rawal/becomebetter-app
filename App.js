import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import BreatheScreen from "./components/BreatheScreen";
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
          <Stack.Screen name="Home" component={HomeScreen} options={{
            headerStyle: {
              backgroundColor: 'beige'
            },
            headerTitleStyle:{
              fontWeight:'bold'
            },
            headerBackVisible: false
          }} />
          <Stack.Screen name="Motivation" component={MotivationScreen} options={{
            headerStyle:{
              backgroundColor: "#f87171" //error.400
            },
            headerTitleStyle:{
              fontWeight:'bold'
            },
            headerBackVisible: false
          }}/>
          <Stack.Screen name="Water" component={WaterScreen} options={{
            headerStyle:{
              backgroundColor: "#7dd3fc" 
            },
            headerTitleStyle:{
              fontWeight:'bold'
            },
            headerBackVisible: false
          }}/>
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Breathe" component={BreatheScreen} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
