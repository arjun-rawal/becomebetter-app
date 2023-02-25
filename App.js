import React from "react";
import { Pressable, StyleSheet, ScrollView } from "react-native";
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  List,
  Switch,
  Text,
  Center,
  useColorMode,
  NativeBaseProvider,
  IconButton,
  VStack,
} from "native-base";
import HomeScreen from "./components/home.js";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen/>
    </NativeBaseProvider>
  );
}


