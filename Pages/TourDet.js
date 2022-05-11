import React from "react";
import {

  NativeBaseProvider,
  View,

  ScrollView,

  Image,

  Button,
  Box,
  Center,
  Text

} from "native-base";
import { TabViev } from "../components/Details/TabViev";
import { AppBar } from "../components/Camp/AppBar";
import { Gallery } from "../components/Details/Gallery";
import { AntDesign } from '@expo/vector-icons';

export const TourDet = () => {

  const [dataa, setdata] = React.useState([]);
  const [showing, setshowss] = React.useState(false);

  React.useEffect(() => {
    setshowss(false)

    getcampinfo();
  }, []);
  const getcampinfo = () => {
    const apiUrl = "http://192.168.43.153:3333/api/organizer/find?id=3 ";
    fetch(apiUrl)
      .then((response) => response.json())
      .then(
        (data) => {
          // console.log(data);
          setdata(data);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const showm = () => {


    setshowss(true)
  }
  const cloosing = () => {


    setshowss(false)
  }
  return (
    <NativeBaseProvider bg="#F1F5F2">
      <AppBar showmodal={showm} />

      <View p={0} flex={0.93}>

        <View mb={-10} position="absolute" zIndex={-10} h={400}>
          <Image
            w="400"

            h="365"
            alt="ee"
            source={{
              uri: "https://intoday.ir/wp-content/uploads/2020/10/Sari-Rush-Forest1-780x470.jpg",
            }}
          />
        </View>
        <ScrollView

          showsVerticalScrollIndicator={false}
          scrollEventThrottle={40}

        >
          <View borderTopColor="red.300" mt={310} h={650}>
            <Box  zIndex={9999} borderRadius={"lg"} ml={10} size={52} shadow={5} mb={-3} bg="white">
              <Center m="auto">
                <AntDesign name="heart" size={29} color="red" />
                <Text>12k</Text>
              </Center>
            </Box>
            <TabViev />
          </View>
        </ScrollView>
      </View>
      <View pl={2} pr={2} flex={0.06}>
        <Button borderRadius={10} bg="#8F95D3" h="full">پیوستن</Button>
      </View>
      <Gallery close={cloosing} modalVisible={showing} />
    </NativeBaseProvider>
  );
};
