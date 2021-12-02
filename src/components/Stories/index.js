import React from "react";

import Story from "../Story";
import {FlatList} from "react-native";

import styles from "./styles";

const data = [
    {
        imageUri : require("../../assets/lion_shy.png"),
        name : 'lion',
    }
    , {
        imageUri : require("../../assets/apeach.png"),
        name : 'apeach',
    }, {
        imageUri : require("../../assets/neo.png"),
        name : 'neo',
    }, {
        imageUri : require("../../assets/muji.png"),
        name : 'muji',
    },{
        imageUri : require("../../assets/lion_shy.png"),
        name : 'lion2',
    }
    , {
        imageUri : require("../../assets/apeach.png"),
        name : 'apeach2',
    }, {
        imageUri : require("../../assets/neo.png"),
        name : 'neo2',
    }, {
        imageUri : require("../../assets/lion_shy.png"),
        name : '??ㅇdd2',
    }
]

const Stories = () => (
    <FlatList data={data}
    keyExtractor={({name}) => name}
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
    renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}/>
)

export default Stories;