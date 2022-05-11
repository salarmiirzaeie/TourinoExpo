import React from "react";
import {


  Heading,
  HStack,

  IconButton,

} from "native-base";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
export const AppBar2 = ({ showmodal }) => {
  const navigation = useNavigation()
  return (
    <>
      <HStack
        justifyContent="space-between"
        zIndex={9999}
        bg="transparent"
        w="100%"
        p={3}
        borderRadius={10}

      >
        <HStack borderRadius="full">
          <IconButton
            onPress={() => navigation.goBack()}
            _icon={{
              as: AntDesign,
              name: "left",
              color: "white",
              size: 7,
            }}
          />
        </HStack>
        <HStack alignSelf="center">
          <Heading>کمپ ها</Heading>
        </HStack>

        <HStack borderRadius="full">
          <IconButton

            _icon={{
              as: Feather,
              name: "more-vertical",
              color: "white",
              size: 7,
            }}
          />
        </HStack>
      </HStack>

    </>
  );
}