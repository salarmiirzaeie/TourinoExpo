import React from "react";
import {


  HStack,

  IconButton,
  Menu,Pressable,Box,HamburgerIcon

} from "native-base";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export const AppBar = ({ showmodal }) => {
  const navigation = useNavigation()
  return (
    <>
      <HStack
        justifyContent="space-between"
        zIndex={9999}
        bg="transparent"
        w="100%"
        p={3}
        position="absolute"
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
        <HStack space={1}>
          <HStack borderRadius="full">
            <IconButton
              onPress={() => showmodal()}
              _icon={{
                as: MaterialIcons,
                name: "fullscreen",
                color: "white",
                size: 7,
              }}
            />
          </HStack>

          <HStack borderRadius="full">
            <IconButton

              _icon={{
                as: Feather,
                name: "more-vertical",
                color: "white",
                size: 6,
              }}
            />
          </HStack>
        
        </HStack>

      </HStack>
    </>
  );
}