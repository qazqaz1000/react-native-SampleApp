import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native'; 

import ProfilePicture from "../ProfilePicture";
import styles from "./styles";

const Story = (props) => { 
    console.log(props);
    const {
        story:{
            user:{
                id,
                imageUri,
                name
            }
        }

    } = props;

    const navigation = useNavigation();

    const onPress = () => {
        console.log(`${name} story pressed ` + id);
        navigation.navigate("Story", {userId : id});
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <ProfilePicture uri={imageUri}></ProfilePicture>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Story;