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
            }
          }} />
          <Stack.Screen name="Motivation" component={MotivationScreen} options={{
            headerStyle:{
              backgroundColor: "#f87171" //error.400
            }
          }}/>
          <Stack.Screen name="Water" component={WaterScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Breathe" component={BreatheScreen} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
