import AsyncStorage from "@react-native-async-storage/async-storage";
import { Box, Button, HStack } from "native-base";

export default function SettingsScreen(){
    const clearAsyncData = async () =>{
        try {
            await AsyncStorage.clear();
          } catch (e) {
          }
      
          console.log("Done.");
    }
    
    return(
        <Box>
            <HStack space={3} justifyContent='center'>
            <Button marginTop={3} onPress={clearAsyncData}>Delete Data</Button>
            </HStack>
        </Box>
    );
}