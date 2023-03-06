import AsyncStorage from "@react-native-async-storage/async-storage";
import { Box, Button, Input, KeyboardAvoidingView, Text } from "native-base";
import { useState } from "react";

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
  clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log("Done.");
  };

  getData();

  return <>{waterTarget === null ? <WaterTargetInput /> : <Text>h</Text>}</>;
}

const WaterTargetInput = () => {
  return (
    <Box
      padding={4}
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView h={{
    base: "200px",
    lg: "auto"
  }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Text fontSize={20} fontWeight="bold">
          Enter your daily water target(oz)
        </Text>
        <Input
          variant="outline"
          size="lg"
          placeholder="If unsure, do half your body weight(lb)"
        ></Input>
        <Button marginTop={5}>Next</Button>
      </KeyboardAvoidingView>
    </Box>
  );
};
