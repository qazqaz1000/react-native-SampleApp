import React from "react";

import Story from "../UserStoryPreview";
import {FlatList} from "react-native";

import styles from "./styles";
import storiesData from "../../data/stories";

const Stories = () => (
    <FlatList data={storiesData}
    keyExtractor={({user:{id}}) => id}
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
    renderItem={({item}) => <Story story={item}/>}/>
)

export default Stories;