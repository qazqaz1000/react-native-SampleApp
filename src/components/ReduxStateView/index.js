import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import { INCREMENT,
DECREMENT,
RESET,
PUSH } from "../../redux/constants";
const ReduxStateView = () => {
    const myDispatch = useDispatch();
    const { value } = useSelector(state => state.value);
    const { count } = useSelector(state => state.count);

    const onAddValue = () => {
        myDispatch( {type : INCREMENT})
    }

    const onSubValue = () => {
        myDispatch( {type : DECREMENT})
    }

    const onResetValue = () => {
        myDispatch( {type : RESET})
    }

    const onCountValue = () => {
        myDispatch( {type : PUSH})
    }


    return (
        <View>
            <View style={styles.container}>
                {/* <Text> value : {value} \n cout : {count}</Text> */}
                <Button title='add' color="#3c3c3c" onPress={onAddValue}></Button>
                <Button title='sub' color="#3c3c3c" onPress={onSubValue}></Button>
                <Button title='reset' color="#3c3c3c" onPress={onResetValue}></Button>
                <Button title='count' color="#3c3c3c" onPress={onCountValue}></Button>
            </View>
            <View style={styles.container}>
                <Text>value : {value}</Text>
                <Text>count : {count}</Text>
            </View>
        </View>
    )
}

export default ReduxStateView;