import React from "react";
import { Pressable, StyleSheet, ScrollView, AsyncStorage } from "react-native";
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
  FormControl,
  Checkbox,
  Modal,
  Input,
  useBreakpointValue,
} from "native-base";
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  const [screen, setScreen] = useState("Dashboard");
  const [quote, setQuote] = useState("");
  const [quoteTags, setTags] = useState("athletics|change|education|famous-quotes|self-help")

  const DisplayScreen = (screen) => {
    switch (screen.screen){
      case "Dashboard": return <HomeScreen />
      case "Motivation": return <MotivationScreen /> 
      case "Water": return <WaterScreen /> 
    }

  };

  const Footer = () => {
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
  };
  async function FetchQuote() {
    try {
      const quoteObject = await fetch(
        "https://api.quotable.io/random?tags="+quoteTags
      );
      const json = await quoteObject.json();
      console.log(json);
      setQuote("\""+json.content + "\"\n -" + json.author);
    } catch (error) {
      console.log(error.message);
    }
  }
  const MotivationModal = () => {
    const [showModal, setShowModal] = useState(false);
    var tag="";

    return (
      <>
      <Button zIndex={-1} style={{bottom:'8%',position:'absolute'}} onPress={() => setShowModal(true)}>Customize</Button>

      <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="600px">
            <Modal.CloseButton />
            <Modal.Header>Tags</Modal.Header>
            <Modal.Body>
              <Box alignItems="center">
                <FormControl.Label
                  _text={{
                    fontSize: "lg",
                    bold: true,
                  }}
                >
                  Tags
                </FormControl.Label>

                <Checkbox.Group
                  mt="2"
                  colorScheme="blue"
                  defaultValue={[
                    "Athletics",
                    "Change",
                    "Education",
                    "Famous",
                    "Self-help",
                  ]}
                  accessibilityLabel="choose multiple items"
                  onChange={(values) => {
                    for (var i = 0; i<values.length; i++){
                      tag += values[i]+"|";
                    }
                    console.log(tag);
                    //TODO async storage stored values
                  }}
                  alignItems="flex-box"
                >
                  <HStack space={3} justifyContent="center">
                    <VStack space={3} justifyContent="center">
                      <Checkbox value="Athletics" my="1">
                        Athletics
                      </Checkbox>
                      <Checkbox value="Business" my="1">
                        Business
                      </Checkbox>
                      <Checkbox value="Change" my="1">
                        Change
                      </Checkbox>
                      <Checkbox value="Character" my="1">
                        Character
                      </Checkbox>
                      <Checkbox value="Competition" my="1">
                        Competition
                      </Checkbox>
                      <Checkbox value="Courage" my="1">
                        Courage
                      </Checkbox>
                      <Checkbox value="Education" my="1">
                        Education
                      </Checkbox>
                      <Checkbox value="Faith" my="1">
                        Faith
                      </Checkbox>

                      <Checkbox value="Family" my="1">
                        Family
                      </Checkbox>
                    </VStack>
                    <VStack space={3} justifyContent="center">
                      <Checkbox value="Famous" my="1">
                        Famous
                      </Checkbox>
                      <Checkbox value="Virtue" my="1">
                        Virtue
                      </Checkbox>
                      <Checkbox value="Film" my="1">
                        Film
                      </Checkbox>
                      <Checkbox value="Freedom" my="1">
                        Freedom
                      </Checkbox>
                      <Checkbox value="Friendship" my="1">
                        Friendship
                      </Checkbox>
                      <Checkbox value="Future" my="1">
                        Future
                      </Checkbox>
                      <Checkbox value="Character" my="1">
                        Character
                      </Checkbox>
                      <Checkbox value="Self-help" my="1">
                        Self-help
                      </Checkbox>
                    </VStack>
                  </HStack>
                </Checkbox.Group>
              </Box>
            
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setShowModal(false);
                    setQuote(tag);
                  }}
                >
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
      </>
    );
  };

  const MotivationScreen = () => {
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
          _text={{
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'italic'
          }}
        >
          {quote}
          <Button onPress={FetchQuote}>Next Quote</Button>
          <MotivationModal />
        </Box>
      </>
    );
  };
  const HomeScreen = () => {
    return (
      <ScrollView>
        <VStack paddingTop={12} space={4} alignItems="center">
          <HStack space={3} justifyContent="center">
            <Button
              _pressed={{ bg: "error.300" }}
              _text={styles.buttonLabels}
              onPress={() => {
                setScreen("Motivation");
                FetchQuote();
              }}
              w="175"
              h="175"
              bg="error.400"
              rounded="lg"
              shadow={3}
            >
              Motivation
            </Button>
            <Button
              _pressed={{ bg: "info.300" }}
              _text={styles.buttonLabels}
              w="175"
              h="175"
              bg="info.500"
              rounded="lg"
              shadow={3}
              onPress={() => {
                setScreen("Water");
              }}
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
  };

  const WaterScreen =async() =>{
    const target = AsyncStorage.getItem('waterTarget')
    if (target==null){
      console.log("Empty")
    }
    else{
      console.log("h");
    }
  }
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      <Footer />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  buttonLabels: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
