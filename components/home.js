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

export default function HomeScreen() {
  return (
 
<ScrollView>
        <VStack paddingTop={12} space={4} alignItems="center">
          <HStack space={3} justifyContent="center">
            <Button
              _pressed={{bg:"error.300"}}
              _text={styles.buttonLabels}
              w="175"
              h="175"
              bg="error.400"
              rounded="lg"
              shadow={3}
            >
              Motivation
            </Button>
            <Button
              _pressed={{bg:"info.300"}}
              _text={styles.buttonLabels}
              w="175"
              h="175"
              bg="info.500"
              rounded="lg"
              shadow={3}
            >
              Water
            </Button>
          </HStack>

          <HStack space={3} justifyContent="center">
            <Button
              _pressed={{ bg: "tertiary.100" }}
              _text={styles.buttonLabels}
              w="175"
              h="175"
              bg="tertiary.200"
              rounded="lg"
              shadow={3}
            >
              Breathe
            </Button>
            <Button
              _pressed={{ bg: "fuchsia.200" }}
              _text={styles.buttonLabels}
              w="175"
              h="175"
              bg="fuchsia.300"
              rounded="lg"
              shadow={3}
            >
              Mind
            </Button>
          </HStack>

          <HStack space={3} justifyContent="center">
            <Button
              _pressed={{ bg: "yellow.200" }}
              _text={styles.buttonLabels}
              w="175"
              h="175"
              bg="yellow.400"
              rounded="lg"
              shadow={3}
            >
              Nutrition
            </Button>
            <Button
              _pressed={{ bg: "warmGray.400" }}
              _text={styles.buttonLabels}
              w="175"
              h="175"
              bg="blueGray.500"
              rounded="lg"
              shadow={3}
            >
              Focus
            </Button>
          </HStack>
        </VStack>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonLabels: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});