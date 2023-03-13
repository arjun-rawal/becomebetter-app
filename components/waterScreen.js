import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Box,
  Button,
  Input,
  KeyboardAvoidingView,
  Text,
  FormControl,
  Stack,
} from "native-base";
import { useState } from "react";
import { View } from "react-native";

export default function WaterScreen() {
  const [waterTarget, setTarget] = useState("null");
  const getData = async () => {
    try {
      setTarget(await AsyncStorage.getItem("waterTarget"));
    } catch (e) {
      // error reading value
    }
  };
  setStringValue = async (value) => {
    try {
      await AsyncStorage.setItem("waterTarget", "asd");
    } catch (e) {
      // save error
    }

    console.log("Done.");
  };

  getData();

  const WaterTargetInput = () => {
    const [waterTargetValue, setWaterTargetValue] = useState("");

    const handleChange = (text) => {
      if (!isNaN(text) && !text.includes(".")) {
        console.log(text);
        setWaterTargetValue(text);
      }
    };

    const storeWaterTarget = async () => {
      await AsyncStorage.setItem("waterTarget", waterTargetValue);
      setTarget(waterTargetValue);
    };
    return (
      <Box
        padding={4}
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#a5f3fc",
        }}
      >
        <Text fontSize={20} fontWeight="bold"></Text>
        <FormControl isRequired>
          <Stack mx="2">
            <FormControl.Label
              _text={{ fontSize: 20, fontWeight: "bold", color: "black" }}
            >
              Enter your daily water target(oz)
            </FormControl.Label>
            <Input
              keyboardType="numeric"
              size="lg"
              value={waterTargetValue}
              onChangeText={handleChange}
              placeholder="If unsure, do half your body weight(lb)"
              borderColor="muted.600"
              borderWidth={1.5}
              borderRadius="md"
            />
            <FormControl.HelperText>Numbers only</FormControl.HelperText>

            <Button onPress={storeWaterTarget} marginTop={5} bg="teal.600">
              Next
            </Button>
          </Stack>
        </FormControl>
      </Box>
    );
  };
  return (
    <>
      {waterTarget === null ? <WaterTargetInput /> : <Text>{waterTarget}</Text>}
    </>
  );
}
