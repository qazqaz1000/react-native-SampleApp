import React from "react";
import { FlatList } from "react-native";

import Stories from "../Stories";
import Post from "../Post";
const data = [
    {
        id:1,
        user: {
            imageUri: require("../../assets/lion_shy.png"),
            name: 'lion',
        },
        imageUri: require("../../assets/post_wedding.jpg"),
        caption : '남철 예지 결혼식날',
        likes : 38475,
        postedAt : ' 7분전'
    },
    {
        id : 2,
        user: {
            imageUri: require("../../assets/muji.png"),
            name: 'lion',
        },
        imageUri: require("../../assets/post_smile.jpg"),
        caption : '남철 예지 웃자',
        likes : 1241,
        postedAt : ' 11분전'
    },
    {
        id : 3,
        user: {
            imageUri: require("../../assets/neo.png"),
            name: 'lion',
        },
        imageUri: require("../../assets/post_kiss.jpg"),
        caption : '남철 예지 결혼식날',
        likes : 343666,
        postedAt : ' 10분전'
    }
]

const Feed = () => (
    <FlatList
        data = {data}
        renderItem={({item}) => <Post post={item}/>}
        keyExtractor={({id}) => id}
        ListHeaderComponent={Stories}
    ></FlatList>
)

export default Feed;