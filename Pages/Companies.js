import React from "react";
import { dumeyData } from "./Data";
import {

  
  HStack,
  Box,

  
  NativeBaseProvider,

  Image,
  
  ScrollView
} from "native-base";
import { AppBar2 } from "../components/Camp/Appbar2";

export const Companies = ({ navigation }) => {
  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  }];
  return (
    <NativeBaseProvider>
      <AppBar2 />
      <ScrollView>
        <HStack pt={1} flex={1} pr={1} pl={2.5} space={1}>
          <Box size={130} flex={0.33} >
            <Image
              w="full"
              rounded="xl"
              h="full"
              alt="ee"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2O9dtxVlqdBW5i4Bp9SQxVixLhAvaLMbtsiWiH4BOX0RD5GqEU5kdETrLXCju__-uiIA&usqp=CAU",
              }}
            />          </Box>
          <Box size={130} flex={0.33} >
            <Image
              w="full"
              rounded="xl"

              h="full"
              alt="ee"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2O9dtxVlqdBW5i4Bp9SQxVixLhAvaLMbtsiWiH4BOX0RD5GqEU5kdETrLXCju__-uiIA&usqp=CAU",
              }}
            />          </Box>
          <Box size={130} flex={0.33}>
            <Image
              w="full"
              rounded="xl"

              h="full"
              alt="ee"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2O9dtxVlqdBW5i4Bp9SQxVixLhAvaLMbtsiWiH4BOX0RD5GqEU5kdETrLXCju__-uiIA&usqp=CAU",
              }}
            />          </Box>

        </HStack>
        <HStack pt={1} flex={1} pr={1} pl={2.5} space={1}>
          <Box size={130} flex={0.33} >
            <Image
              w="full"
              rounded="xl"
              h="full"
              alt="ee"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2O9dtxVlqdBW5i4Bp9SQxVixLhAvaLMbtsiWiH4BOX0RD5GqEU5kdETrLXCju__-uiIA&usqp=CAU",
              }}
            />          </Box>
          <Box size={130} flex={0.33} >
            <Image
              w="full"
              rounded="xl"

              h="full"
              alt="ee"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2O9dtxVlqdBW5i4Bp9SQxVixLhAvaLMbtsiWiH4BOX0RD5GqEU5kdETrLXCju__-uiIA&usqp=CAU",
              }}
            />          </Box>
          <Box size={130} flex={0.33}>
            <Image
              w="full"
              rounded="xl"

              h="full"
              alt="ee"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2O9dtxVlqdBW5i4Bp9SQxVixLhAvaLMbtsiWiH4BOX0RD5GqEU5kdETrLXCju__-uiIA&usqp=CAU",
              }}
            />          </Box>

        </HStack>
      </ScrollView>

    </NativeBaseProvider>
  );
};


