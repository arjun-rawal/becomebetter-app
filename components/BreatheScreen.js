import {Image,Center,Box,Slide,Button} from "native-base"
import {Text} from "react-native"
import {useState} from 'react'
export default function BreatheScreen(){
  const [index,setIndex] = useState(0)
  const breathingTypes = ["box","asd"];
     return(
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
        <Button marginTop={3} size="md"onPress={()=>{setIndex(index+1)}}> Next </Button>

    </Box>

    </>
     );
}


  const BreathingTechnique =({type})=>{
  switch (type){
    case "box":return (<Center _text={{fontSize: 21,fontWeight: "bold",
        }}>
    Box Breathing
    <Image source={{
      uri: "https://blog.noisli.com/wp-content/uploads/2022/07/box-breathing-technique.gif"
    }} alt="Alternate Text" size="2xl" />
    </Center>)

    case "asd" : return(<Text>hello</Text>)
  }
  
}
