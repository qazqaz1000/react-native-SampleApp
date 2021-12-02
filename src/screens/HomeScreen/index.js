import React from "react";
import {View, Text} from "react-native";
import ProfilePicture from "../../components/ProfilePicture";


import Feed from "../../components/Feed";


const HomeScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>hi home</Text>
        
        {/* <Post post={post} ></Post> */}
        <Feed></Feed>


    </View>
)

export default HomeScreen;