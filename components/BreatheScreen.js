import { Image, Center, Box, Slide, Button, Spinner, HStack } from "native-base";
import { Text } from "react-native";
import { useState } from "react";
export default function BreatheScreen() {
  const [index, setIndex] = useState(0);
  const breathingTypes = ["box", "4-7-8","Finger"];
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
        <BreathingTechnique type={breathingTypes[index]} />
      <HStack space={3}>
      {index <breathingTypes.length-1
      &&
        <Button
          marginTop={3}
          size="lg"
          onPress={() => {
            setIndex(index + 1);
          }}
        >
      
          Next
        </Button>
      }
        {index >=1 &&
        <Button 
          marginTop={3}
          size="lg"
          onPress={() => {
            setIndex(index - 1);
          }}> 
          Back
          </Button>
        }
      </HStack>
      </Box>
    </>
  );
}

const BreathingTechnique = ({ type }) => {
  const [imageLoaded, setImageLoaded] = useState("block");
  switch (type) {
    case "box":
      return (
        <Center _text={{ fontSize: 21, fontWeight: "bold" }}>
          Box Breathing
          <Spinner style={{ display: imageLoaded }} />
          <Image
            source={{
              uri: "https://blog.noisli.com/wp-content/uploads/2022/07/box-breathing-technique.gif",
            }}
            alt="Alternate Text"
            size="2xl"
            onLoad={() => {
              setImageLoaded("none");
            }}
          />
        </Center>
      );

    case "4-7-8":
      return (
        <Center _text={{ fontSize: 21, fontWeight: "bold" }}>
          4-7-8
          <Spinner style={{ display: imageLoaded }} />
          <Image
            source={{
              uri: "https://i.pinimg.com/originals/a4/ba/fc/a4bafc9008968c4dcf8df311f2c26802.gif",
            }}
            alt="Alternate Text"
            size="2xl"
            onLoad={() => {
              setImageLoaded("none");
            }}
          />
        </Center>
      );
    case "Finger":
    return(
        <Center _text={{ fontSize: 21, fontWeight: "bold" }}>
          Finger Breathing
          <Spinner style={{ display: imageLoaded }} />
          <Image
            source={{
              uri: "https://d2r91rtd4f6vua.cloudfront.net/content/2022/04/13/MTV_PauseforFiveFinger-Breathing_DR.gif",
            }}
            alt="Alternate Text"
            size="2xl"
            onLoad={() => {
              setImageLoaded("none");
            }}
          />
        </Center>
    )
    case "Balloon":
        return(
<Center _text={{ fontSize: 21, fontWeight: "bold" }}>
          Balloon breaths
          <Spinner style={{ display: imageLoaded }} />
          <Image
            source={{
              uri: "https://static.wixstatic.com/media/5b54bd_c8067e085f8b4767a268bb0abbe5972d.gif",
            }}
            alt="Alternate Text"
            size="2xl"
            onLoad={() => {
              setImageLoaded("none");
            }}
          />
        </Center>
        )
  }
};
