import React from "react";
import { 
    useRecoilState,
useRecoilValue,
useSetRecoilState,
useResetRecoilState,
useRecoilValueLoadable } from "recoil";
import { View, Text, Button } from "react-native";

import { valueState, countState, combineSelector, asyncState, asyncSelector } from "../../recoil/atoms";
import styles from "./styles";
const RecoilStateView = () => {
    const [value, setValue] = useRecoilState(valueState)
    const [count, setCount] = useRecoilState(countState)
    const [combine, setCombine] = useRecoilState(combineSelector)
    const asyncVla = useRecoilValueLoadable(asyncSelector)
    const [asyncValue, setAsyncValue ] = useRecoilState(asyncState)


    const valueCurrent = useRecoilValue(valueState)
    const valueHandler = useSetRecoilState(valueState)
    const valueReset = useResetRecoilState(valueState)


    const onAddValue = () => {
        // console.log("onAddValue before");
        setValue(value + 1);
        // console.log("onAddValue after");
    }

    const onSubValue = () => {
        valueHandler((pre) => pre - 1)
    }

    const onResetValue = () => {
        valueHandler((pre) => pre = 0)
    }

    const onCountValue = () => {
        setCount(count + 1);
    }

    const onSyncro = () => {
        // console.log("onSyncro before");
        setCombine(value > count ? value : count);
        // console.log("onSyncro after");
    }

    if(asyncVla.state === 'loading'){
        return <Text> 로딩중 !</Text>
    }
    
    const onAsyncroUp = () => {
        setAsyncValue(asyncValue + 1);
    }

    const onAsyncroDown = () => {
        setAsyncValue(asyncValue - 1);
    }

    return (
        <View>
            <View style={styles.container}>
                <Button title='add' color="#3c3c3c" onPress={onAddValue}></Button>
                <Button title='sub' color="#3c3c3c" onPress={onSubValue}></Button>
                <Button title='reset' color="#3c3c3c" onPress={valueReset}></Button>
                <Button title='count' color="#3c3c3c" onPress={onCountValue}></Button>
                <Button title='syncro' color="#8c8c8c" onPress={onSyncro}></Button>
            </View>
            <View style={styles.container}>
                <Button title='asyncroUp' color="#8c8c8c" onPress={onAsyncroUp}></Button>
                <Button title='asyncroDown' color="#8c8c8c" onPress={onAsyncroDown}></Button>
            </View>
            <View style={styles.container}>
                <Text>value : {value}</Text>
                <Text>count : {count}</Text>
            </View>
            <Text>selector : {combine}</Text>
            <Text>asyncVla : {asyncVla.contents}</Text>
        </View>

    )
}

export default RecoilStateView;