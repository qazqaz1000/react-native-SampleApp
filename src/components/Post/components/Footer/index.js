import React from "react";
import {View, Text } from "react-native";

import FAIcon from 'react-native-vector-icons/FontAwesome';
import ADIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';

import styles from "./styles";
const Footer = ({likesCount, caption, postedAt}) => (
    <View style={styles.container}>
        <View style={styles.iconsContainer}>
            <View style={styles.leftIcons}>
                <ADIcon name="hearto" size={25} color={"#545454"}></ADIcon>
                <IonIcon name="chatbubble-outline" size={25} color={"#545454"}></IonIcon>
                <IonIcon name="paper-plane-outline" size={25} color={"#545454"}></IonIcon>
            </View>

            <FAIcon name="bookmark-o" size={25} color={"#545454"}></FAIcon>
        </View>
        <Text style={styles.likes}>{likesCount} 좋아요</Text>

        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
)

export default Footer;