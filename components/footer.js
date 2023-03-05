import React from "react";
import { Button, HStack, Box } from "native-base";

export default function Footer() {
  return (
    <Box
      style={{ position: "absolute", bottom: 0, width: "100%" }}
      bg="blueGray.800"
    >
      <HStack space={2} paddingBottom={3} justifyContent="center">
        <Button
          _pressed={{ bg: "blueGray.600" }}
          w="100"
          h="50"
          bg="blueGray.800"
          borderRadius={0}
          onPress={() => {
            setScreen("Dashboard");
          }}
        >
          🏠
        </Button>
        <Button
          _pressed={{ bg: "blueGray.600" }}
          w="100"
          h="50"
          bg="blueGray.800"
          borderRadius={0}
        >
          ⚙️
        </Button>
        <Button
          _pressed={{ bg: "blueGray.600" }}
          w="100"
          h="50"
          bg="blueGray.800"
          borderRadius={0}
        >
          👤
        </Button>
      </HStack>
    </Box>
  );
}
