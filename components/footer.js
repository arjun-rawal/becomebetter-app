import React from "react";
import { Button, HStack, Box } from "native-base";
import { useNavigation } from '@react-navigation/native';


export default function Footer() {
    const navigation = useNavigation();

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
            navigation.navigate("Home");
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
          onPress={()=>{navigation.navigate("Settings")}}
        >
          ⚙️
        </Button>
        <Button
          _pressed={{ bg: "blueGray.600" }}
          w="100"
          h="50"
          bg="blueGray.800"
          borderRadius={0}
          onPress={()=>{navigation.navigate("Profile")}}
        >
          👤
        </Button>
      </HStack>
    </Box>
  );
}
