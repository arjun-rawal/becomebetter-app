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
    "success"
  );
  var link = "https://api.api-ninjas.com/v1/quotes?category="  + quoteTags
  const [quote, setQuote] = useState(); //FIX THIS
  async function FetchQuote() {
    try {
      const quoteObject = await fetch(
        link
      ,{
        headers: {
          "X-Api-Key": "NE9j9kpzz9wwNpgxBhT5XA==NYRboJ18ccCs5Ecq"
        }
      }
      )
      console.log(link)
      const json = await quoteObject.json();
      console.log(json);
      setQuote('"' + json[0].quote + '"\n -' + json[0].author);
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
                    "success"
                  ]}
                  accessibilityLabel="choose one item"
                  onChange={(values) => {
                    tag = values[0];
                    console.log(tag);
                    //TODO async storage stored values
                  }}
                  alignItems="flex-box"
                >
                  <HStack space={3} justifyContent="center">
                    <VStack space={3} justifyContent="center">
                      <Checkbox value="amazing" my="1">
                        Amazing
                      </Checkbox>
                      <Checkbox value="anger" my="1">
                        Anger
                      </Checkbox>
                      <Checkbox value="art" my="1">
                        Art
                      </Checkbox>
                      <Checkbox value="attitude" my="1">
                        Attitude
                      </Checkbox>
                      <Checkbox value="business" my="1">
                        Business
                      </Checkbox>
                      <Checkbox value="change" my="1">
                        Change
                      </Checkbox>
                      <Checkbox value="courage" my="1">
                        Courage
                      </Checkbox>
                      <Checkbox value="death" my="1">
                        Death
                      </Checkbox>
                      <Checkbox value="success" my="1">
                        Success
                      </Checkbox>
                      <Checkbox value="education" my="1">
                        Education
                      </Checkbox>
                    </VStack>
                    <VStack space={3} justifyContent="center">
                      <Checkbox value="environmental" my="1">
                        Environmental
                      </Checkbox>
                      <Checkbox value="equality" my="1">
                        Equality
                      </Checkbox>
                      <Checkbox value="faith" my="1">
                        Faith
                      </Checkbox>
                      <Checkbox value="famous" my="1">
                        Famous
                      </Checkbox>
                      <Checkbox value="happiness" my="1">
                        Happiness
                      </Checkbox>
                      <Checkbox value="humor" my="1">
                        Humor
                      </Checkbox>
                      <Checkbox value="inspirational" my="1">
                        Inspirational
                      </Checkbox>
                      <Checkbox value="leadership" my="1">
                        Leadership
                      </Checkbox>
                      <Checkbox value="money" my="1">
                        Money
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
                    quoteFunction();
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



