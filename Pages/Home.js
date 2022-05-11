import React from "react";
import {  Center, Heading, NativeBaseProvider, View ,StatusBar} from "native-base";
import {HomeHeader} from "../Components/Home/HomeHeader";
import { SearchInput } from "../Components/Home/SearchInput";
import { HomeCategories } from "../Components/Home/HomeCategories";
import { PopularCompanies } from "../Components/Home/PopularCompanies";
import { HomeBanner } from "../Components/Home/HomeBanner";
import { useFonts } from 'expo-font';

export const Home = () => {
    
  let [fontsLoaded] = useFonts({
    'dastnevis': require('../assets/Fonts/danstevis.otf'),
  });
    return (
        <NativeBaseProvider bg="#F1F5F2">
            <StatusBar/>
        <View flex={1} p={2} flexDirection="column">
          
          <View  flex={0.1}>
            <HomeHeader />
          </View>
          <View flex={0.05}>
            <Center>
              <Heading color="#023436">
               طبیعتگردی با <Heading color="#00A693">بقچه </Heading>
              </Heading>
            </Center>
          </View>
          <View  pt={2} flex={0.06}>
            <Center>
              <SearchInput />
            </Center>
          </View>
          <View pt={4}  flex={0.3}>
            <HomeCategories />
          </View>
          <View flex={0.1}>
            <Center pt={5}>
              <Heading color="#023436">
                محبوبترین <Heading color="#00A693">کمپ ها </Heading>
              </Heading>
            </Center>
          </View>
          <View flex={0.13}>
            <PopularCompanies />
          </View>
          <View pt={2} flex={0.19}>
            <HomeBanner />
          </View>
        </View>
      </NativeBaseProvider>
      );
};
