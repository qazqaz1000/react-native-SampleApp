import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';


import ProfilePicture from "../../../ProfilePicture";
import styles from "./styles";
const Header = ({imageUri, name}) => (
    <View style={styles.container}>
        <View style={styles.left}>
            <ProfilePicture uri={imageUri} size={40}></ProfilePicture>
            <Text style={styles.name}>{name}</Text>
            

        </View>

        <View style={styles.right}>
        <Icon name="dots-three-vertical" size={15} />
        </View>
    </View>

)

export default Header;