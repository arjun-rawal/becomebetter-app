import React, { useEffect } from "react";
import {
  Button,
  HStack,
  VStack,
  Box,
  Center,
  FormControl,
  Modal,
  Checkbox,
  View,
} from "native-base";
import { useState } from "react";

export default function MotivationScreen() {
  const [quoteTags, setTags] = useState(
    "athletics|education|famous|self-help|"
  );
  var link = "https://api.quotable.io/random?tags=" + quoteTags
  const [quote, setQuote] = useState(); //FIX THIS
  async function FetchQuote() {
    try {
      const quoteObject = await fetch(
        link
      )
      console.log(link)
      const json = await quoteObject.json();
      console.log(json);
      setQuote('"' + json.content + '"\n -' + json.author);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {

    FetchQuote();
  }, []);

  return quote && <Child currentQuote={quote} quoteFunction = {FetchQuote} tagFunction= {setTags}/>
}

 
const MotivationModal = ({setTags}) => {
  const [showModal, setShowModal] = useState(false);
  var tag = "";

  return (
    <>
      <Button
        zIndex={-1}
        style={{ bottom: "8%", position: "absolute" }}
        onPress={() => setShowModal(true)}
      >
        Customize
      </Button>

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
                    "athletics",
                    "education",
                    "famous",
                    "self-help",
                  ]}
                  accessibilityLabel="choose multiple items"
                  onChange={(values) => {
                    for (var i = 0; i < values.length; i++) {
                      tag += values[i] + "|";
                    }
                    console.log(tag);
                    //TODO async storage stored values
                  }}
                  alignItems="flex-box"
                >
                  <HStack space={3} justifyContent="center">
                    <VStack space={3} justifyContent="center">
                      <Checkbox value="athletics" my="1">
                        Athletics
                      </Checkbox>
                      <Checkbox value="business" my="1">
                        Business
                      </Checkbox>
                      <Checkbox value="change" my="1">
                        Change
                      </Checkbox>
                      <Checkbox value="character" my="1">
                        Character
                      </Checkbox>
                      <Checkbox value="competition" my="1">
                        Competition
                      </Checkbox>
                      <Checkbox value="courage" my="1">
                        Courage
                      </Checkbox>
                      <Checkbox value="education" my="1">
                        Education
                      </Checkbox>
                      <Checkbox value="faith" my="1">
                        Faith
                      </Checkbox>

                      <Checkbox value="family" my="1">
                        Family
                      </Checkbox>
                    </VStack>
                    <VStack space={3} justifyContent="center">
                      <Checkbox value="famous" my="1">
                        Famous
                      </Checkbox>
                      <Checkbox value="virtue" my="1">
                        Virtue
                      </Checkbox>
                      <Checkbox value="film" my="1">
                        Film
                      </Checkbox>
                      <Checkbox value="freedom" my="1">
                        Freedom
                      </Checkbox>
                      <Checkbox value="friendship" my="1">
                        Friendship
                      </Checkbox>
                      <Checkbox value="future" my="1">
                        Future
                      </Checkbox>
                      <Checkbox value="character" my="1">
                        Character
                      </Checkbox>
                      <Checkbox value="self-help" my="1">
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
                    setTags(tag);
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
  const Child = ({currentQuote,quoteFunction,tagFunction}) => {
  return( 
    <>
    <Box
      padding={4}
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'beige' 
      }}
      _text={{
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
      }}
    >
      {currentQuote}
      <Button onPress={()=>{quoteFunction()}}>Next Quote</Button>
      <MotivationModal setTags={tagFunction}/>
    </Box>
  </>
  );
  }



