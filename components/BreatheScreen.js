import {
  Image,
  Center,
  Box,
  Slide,
  Button,
  Spinner,
  HStack,
} from "native-base";
import { Text } from "react-native";
import { useState } from "react";
import boxImage from "../assets/breathingTechniques/box-breathing-technique.gif";
import fourSevenEightImage from "../assets/breathingTechniques/foursevenfour.gif";
import fingerImage from "../assets/breathingTechniques/finger.gif";
import balloonImage from "../assets/breathingTechniques/balloon.gif";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function BreatheScreen() {
  const [index, setIndex] = useState(0);
  const breathingTypes = [
    boxImage,
    "Box Breathing",
    fourSevenEightImage,
    "4-7-8 Breathing",
    fingerImage,
    "Finger Breathing",
    balloonImage,
    "Balloon Breathing",
  ];
  const readIndex = async () => {
    setIndex(await AsyncStorage.getItem("currentBreathingTechnique"));
    if (index == null) {
      setIndex(0);
    }
  };
  // readIndex();
  const storeIndex = async () => {
    await AsyncStorage.setItem("currentBreathingTechnique", index.toString());
  };
  return (
    <>
      <Box
        padding={4}
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Center _text={{ fontSize: 21, fontWeight: "bold" }}>
          {breathingTypes[index + 1]}
          <Image
            source={breathingTypes[index]}
            alt="Alternate Text"
            size="2xl"
            key={breathingTypes[index]}
          />
        </Center>
        <HStack space={3}>
          {index >= 2 && (
            <Button
              marginTop={3}
              size="lg"
              onPress={() => {
                setIndex(index - 2);
              }}
            >
              Back
            </Button>
          )}
          {index < breathingTypes.length - 2 && (
            <Button
              marginTop={3}
              size="lg"
              onPress={() => {
                setIndex(index + 2);
              }}
            >
              Next
            </Button>
          )}
        </HStack>
      </Box>
    </>
  );
}
