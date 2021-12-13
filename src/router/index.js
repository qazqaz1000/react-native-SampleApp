import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import bottomHomeNavigator from "./bottomHomeNavigator.routes";
import BottomHomeNavigator from "./bottomHomeNavigator.routes";
import StoryScreen from "../screens/StoryScreen";

const RootStack = createNativeStackNavigator();

const Router = () => (
    <RootStack.Navigator initialRouteName='RootHome'>
        <RootStack.Screen name={"RootHome"} component={BottomHomeNavigator}
            options={{
                headerShown: false,
            }}></RootStack.Screen>
        <RootStack.Screen
            name="Story"
            component={StoryScreen}
            options={{
                headerShown: false,
                title: '정보'
            }}
        />
    </RootStack.Navigator>
)

export default Router;