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
import { useState,useEffect } from "react";


export default function App() {
  const [screen, setScreen] = useState("Dashboard");

  const DisplayScreen = (screen) => {
    if (screen.screen == "Dashboard") {
      return <HomeScreen />;
    } else if (screen.screen == "Water") {
      return;
    }
    else if (screen.screen == "Motivation"){
      return <MotivationScreen />
    }
  };

  const Footer = () => {
    return (
      <Box style={{position:'absolute', bottom:0, width:'100%'}} bg="blueGray.800">
        <HStack space={2} paddingBottom={3} justifyContent="center">
          <Button _pressed={{bg: "blueGray.600"}} w="100" h="50" bg="blueGray.800" borderRadius={0} onPress={()=>{setScreen("Dashboard")}}>
            🏠
          </Button>
          <Button _pressed={{bg: "blueGray.600"}} w="100" h="50" bg="blueGray.800" borderRadius={0}>
            ⚙️
          </Button>
          <Button _pressed={{bg: "blueGray.600"}} w="100" h="50" bg="blueGray.800" borderRadius={0}>
            👤
          </Button>
        </HStack>
      </Box>
    );
  };
  function FetchQuote() {
    const [quote,setQuote] = useState('');
    const [author,setAuthor]= useState('');
    const [imgSrc,setImgSrc]= useState('');

    useEffect(()=>{
        getQuote();
       const intervalID = setInterval(()=>{
        getQuote()
       }, 24 * 60 * 60 * 1000);
    return ()=>{
        clearInterval(intervalID);
    }
    },[])
    function getQuote() {
        fetch('http://quotes.rest/qod.json?category=motivation')
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            setQuote(data.contents.quotes[0].quote);
            setAuthor(data.contents.quotes[0].author);
            setImgSrc(data.contents.quotes[0].background);
        })
    }
return(
    <>
    <Text>{quote+"-"+author}</Text>
    </>
)
}
  const MotivationScreen = () =>{
    
      return(
        <Box padding={4} style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
        <FetchQuote />
        </Box>
      );
  }
  const HomeScreen = () => {
    return (
      <ScrollView>
        <VStack paddingTop={12} space={4} alignItems="center">
          <HStack space={3} justifyContent="center">
            <Button
              _pressed={{ bg: "error.300" }}
              _text={styles.buttonLabels}
              onPress={()=>{setScreen("Motivation")}}
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
  return (
    <NativeBaseProvider>
      <DisplayScreen screen={screen} />
      <Footer />
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
