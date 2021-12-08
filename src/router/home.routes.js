import React from "react";
import { Image } from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import logo from '../assets/instagram.png';
import HomeScreen from "../screens/HomeScreen";
import Auth from "../Auth";
import About from "../About";

const Stack = createNativeStackNavigator();

const HomeRoutes = () => (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" 
      component={HomeScreen} 
      options={{ 
        title: '홈' ,
        headerLeft : ()=>(
          <Feather name="camera" size={25} color={'#000'}></Feather>
        ),
        headerTitle : () => (
          <Image source={require("../assets/instagram.png")} resizeMode="contain" style={{width : 150, height : 50}}></Image>
          
          // <Ionicons name="paper-plane-outline" size={25} color={'#000'}></Ionicons>
        ),
        headerRight : () => (
          <Ionicons name="paper-plane-outline" size={25} color={'#000'}></Ionicons>
        )
      }}
       />
      <Stack.Screen name="AUTH" component={Auth} options={{ title: '인증' }} />
      <Stack.Screen name="ABOUT" component={About} options={{ title: '정보' }} />
    </Stack.Navigator>
)

export default HomeRoutes;