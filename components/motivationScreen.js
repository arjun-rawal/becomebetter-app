import React from "react";
import {
  Button,
  HStack,
  VStack,
  Box,
  Center,
  FormControl,
  Modal,
  Checkbox,
} from "native-base";
import { useState } from "react";

export default function MotivationScreen() {
  const [quote, setQuote] = useState(
    '"They can do all because they think they can" - Virgil'
  ); //FIX THIS
  const [quoteTags, setTags] = useState(
    "athletics|change|education|famous-quotes|self-help"
  );

  async function FetchQuote() {
    try {
      const quoteObject = await fetch(
        "https://api.quotable.io/random?tags=" + quoteTags
      );
      const json = await quoteObject.json();
      console.log(json);
      setQuote('"' + json.content + '"\n -' + json.author);
    } catch (error) {
      console.log(error.message);
    }
  }
  const MotivationModal = () => {
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
                      "Athletics",
                      "Change",
                      "Education",
                      "Famous",
                      "Self-help",
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
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        {quote}
        <Button onPress={FetchQuote}>Next Quote</Button>
        <MotivationModal />
      </Box>
    </>
  );
}
