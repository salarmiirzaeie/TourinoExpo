import React from "react";
import {
  Center,
  Heading,
  NativeBaseProvider,
  View,
  Avatar,
  StatusBar,
  HStack,
  Divider,
  Text,
  ScrollView,
  Circle,
  useSafeArea,
} from "native-base";
export const ProfileGallery = () => {
  return (
    <NativeBaseProvider >
     
      <HStack space={3} justifyContent="center">
        <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
      </HStack>
      <HStack space={3} justifyContent="center">
        <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
      </HStack>
      <HStack space={3} justifyContent="center">
        <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
      </HStack>
      <HStack space={3} justifyContent="center">
        <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
      </HStack>
    </NativeBaseProvider>
  );
};
