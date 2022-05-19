import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CompanyDet } from "./Pages/CompanyDet";
import { Explore } from "./Pages/Explore";
import { TourDet } from "./Pages/TourDet";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Profile } from "./Pages/Profile";
import { Direct } from "./components/Home/Direct";
import { CampProfile } from "./Pages/CampProfile";
import { SearchPage } from "./Pages/SearchPage";
import { AddTour } from "./Pages/AddTour";
import{Home2}from"./Pages/Home2"
import { Provider } from "react-redux";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const MainStack = createNativeStackNavigator();
import React,{Suspense} from 'react'
import Store from "./assets/State-Management/Store";

import { Text ,NativeBaseProvider,Circle} from "native-base";
import { Tourdet3 } from "./components/Details/Tourdet3";
import { AddForm2 } from "./components/Add/AddForm2";
export default function App() {

  return (
   
    <NavigationContainer>
      {/* <Provider store={Store}> */}
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        
        <MainStack.Screen name="Tabstack" component={Tabstack} />
        <MainStack.Screen name="TourDet" component={TourDet} />
        <MainStack.Screen name="TourDet3" component={Tourdet3} />

        <MainStack.Screen name="CompanyDet" component={CompanyDet} />
        <MainStack.Screen name="Direct" component={Direct} />
        <MainStack.Screen name="SearchPage" component={SearchPage} />
        <MainStack.Screen name="AddTour1" component={AddTour} />



      </MainStack.Navigator>
      {/* </Provider>
       */}
    </NavigationContainer>
  );
}
const Tab = createMaterialBottomTabNavigator();

function Tabstack() {
  return (
    
    <Tab.Navigator
    labeled={true}
    barStyle={{
      position: "absolute",
      backgroundColor: "white",
      borderRadius: 35,
      borderTopColor: "white",
      stopAnimation: "50",
    }}
     
    
    >
      <Tab.Screen
        options={{
          unmountOnBlur: true,

          headerShown: false,
          tabBarShowLabel: false,

          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          tabBarActiveTintColor: "#00A693",
        }}
        name="Homea"
        component={Home2}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarActiveTintColor: "#00A693",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass-outline" size={24} color={color} />
          ),
        }}
        component={Explore}
      />
      <Tab.Screen
        name=" "
        
        options={{
         
          tabBarIcon: ({ color }) => (
            <NativeBaseProvider>
              <Circle size={41} mt={-2} shadow={5} bg="#00A693">
                <Feather name="plus" size={30} color={color} />
              </Circle>
            </NativeBaseProvider>
          ),
        }}
        component={AddTour}
      />
      <Tab.Screen
        name="s"
        options={{
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarActiveTintColor: "#00A693",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={24} color={color} />),
        }}
        component={Profile}
      />
      <Tab.Screen
        name="Esxplore"
        options={{
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarActiveTintColor: "#00A693",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
        component={CampProfile}
      />
    </Tab.Navigator>
  );
}



