import { View, IconButton, Button, useColorModeValue, Center, Divider, Slide, Alert, Skeleton, VStack, Text, AlertDialog, Box, NativeBaseProvider, Menu, Pressable, HamburgerIcon } from 'native-base'
import React from 'react'
import { Feather } from '@expo/vector-icons';

export const TourDet2 = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <NativeBaseProvider>
      <Box p={100} h="80%" w="90%" alignItems="flex-start">
        <Menu defaultIsOpen={false} w="190" trigger={triggerProps => {
          return            <IconButton

              _icon={{
                as: Feather,
                name: "more-vertical",
                color: "white",
                size: 6,
              }}
              {...triggerProps}
            />            
        }}>
          <Menu.Group title="Free">
            <Menu.Item>Arial</Menu.Item>
            <Menu.Item>Nunito Sans</Menu.Item>
            <Menu.Item>Roboto</Menu.Item>
          </Menu.Group>
          <Divider mt="3" w="100%" />
          <Menu.Group title="Paid">
            <Menu.Item>SF Pro</Menu.Item>
            <Menu.Item>Helvetica</Menu.Item>
          </Menu.Group>
        </Menu>
      </Box>














      {/* <Box h="32" w="300">
        <Slide in={isOpenTop} placement="top">
          <Alert justifyContent="center" status="error">
            <Alert.Icon />
            <Text color="error.600" fontWeight="medium">
              No Internet Connection
            </Text>
          </Alert>
        </Slide>
        <Button mt="auto" onPress={() => setIsOpenTop(!isOpenTop)} variant="unstyled" bg="coolGray.700:alpha.30" _text={{
          color: useColorModeValue("darkText", "lightText")
        }}>
          {str}
        </Button>
      </Box>
      <Center>
        <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
          Delete Customer
        </Button>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Delete Customer</AlertDialog.Header>
            <AlertDialog.Body>
              This will remove all data relating to Alex. This action cannot be
              reversed. Deleted data can not be recovered.
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                  Cancel
                </Button>
                <Button colorScheme="danger" onPress={onClose}>
                  Delete
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>
      <Center w="100%">
        <VStack w="90%" maxW="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
          borderColor: "coolGray.500"
        }} _light={{
          borderColor: "coolGray.200"
        }}>
          <Skeleton h="40" />
          <Skeleton.Text px="4" />
          <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
        </VStack>
      </Center> */}
    </NativeBaseProvider>)
}