import {
    Center,
    
    Box,
    ZStack

} from "native-base";
export const JoinedPeople = () => {
    return <Center>
        <Box mt="20">
          <ZStack mt="12" ml={0}>
            <Box bg="primary.700" size={25} rounded="full" shadow={3} />
            <Box bg="primary.500" mt="0" ml="3" size={25} rounded="full" shadow={5} />
            <Box bg="primary.300" mt="0" ml="6" size={25} rounded="full" shadow={7} />

          </ZStack>
        </Box>
      </Center>;
  };