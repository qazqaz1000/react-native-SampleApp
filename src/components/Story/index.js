import React from "react";
import {View, Text} from "react-native";

import ProfilePicture from "../ProfilePicture";
import styles from "./styles";

const Story = ({imageUri, name}) => (
    <View>
        <ProfilePicture uri={imageUri}></ProfilePicture>
        <Text style={styles.name}>{name}</Text>
    </View>
)

export default Story;