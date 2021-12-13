import React from "react";
import { Image } from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import logo from '../assets/instagram.png';
import HomeScreen from "../screens/HomeScreen";
import StoryScreen from "../screens/StoryScreen";
import Auth from "../Auth";
import About from "../About";

const HomeStack = createNativeStackNavigator();

const HomeRoutes = () => (
    <HomeStack.Navigator initialRouteName='StackHome'>
        <HomeStack.Screen name="StackHome"
            component={HomeScreen}
            options={{
                title: 'Instagram',
                headerLeft: () => (
                    <Feather name="camera" size={25} color={'#000'}></Feather>
                ),
                headerTitle: () => (
                    <Image source={require("../assets/instagram.png")} resizeMode="contain" style={{ width: 150, height: 50 }}></Image>

                    // <Ionicons name="paper-plane-outline" size={25} color={'#000'}></Ionicons>
                ),
                headerRight: () => (
                    <Ionicons name="paper-plane-outline" size={25} color={'#000'}></Ionicons>
                )
            }}
        />

        <HomeStack.Screen name="AUTH" component={Auth} options={{ title: '인증' }} />
        <HomeStack.Screen name="ABOUT" component={About} options={{ title: '정보' }} />
    </HomeStack.Navigator>
)

export default HomeRoutes;