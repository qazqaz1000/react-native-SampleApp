import React from "react";
import {View, Text, Image} from "react-native";

import styles from "./styles";
const Body = ({imageUri}) => (
    <View>
        <Image source={imageUri} style={styles.image}/>
    </View>

)

export default Body;