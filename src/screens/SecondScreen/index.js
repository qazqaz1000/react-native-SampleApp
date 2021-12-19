import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context"
import { useEffect } from "react/cjs/react.development";
import { useSelector, useDispatch } from "react-redux"
import ReduxStateView from "../../components/ReduxStateView"
import styles from "./styles";
import RecoilStateView from "../../components/RecoilStateView";
const SecondScreen = (props) => {
    const route = useRoute();
    const [myState, setMyState] = useState(0);

    useEffect(() => {
        console.log("useEffect")
        return () => {
            console.log("useEffect return");
        }
    }, []);

    const test = route.params.test;

    const onPress = () => {
        setMyState(myState+1);
    }
    const getMoviesFromApi = () => {
        // console.log("before");
        let tt = fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);
          return json.movies;
        })
        .catch((error) => {
          console.error(error);
        });
        // console.log("after");
        return tt;
      };

      const getMoviesFromApiAsync = async () => {
        // console.log("before");
        let tt;
        try {
          const response = await fetch(
            'https://reactnative.dev/movies.json'
          );
          tt = await response.json();
        //   console.log(tt);
          
        } catch (error) {
          console.error(error);
        }
        // console.log("after");
        return tt.movies;
      };


      //redux
    const dispatch = useDispatch()

	const { value } = useSelector(state => state.value);
	const { count } = useSelector(state => state.count);

	const addValue = () => {
		dispatch({ type: 'increment' });
	}
	const subValue = () => {
		dispatch({ type: 'decrement' });
	}
	const resetValue = () => {
		dispatch({ type: 'reset' });
	}
	const pushButton = () => {
		dispatch({ type: 'push' });
	}

    return (
        <SafeAreaView>
            <View>
                <Text>hiohihihi {test}</Text>
                <Button title="hi button" onPress={onPress}> </Button>
                <Button title="fetch" onPress={getMoviesFromApi}> </Button>
                <Button title="async fetch" onPress={getMoviesFromApiAsync}> </Button>
                <View style={styles.container}>
                    <Button title="add" onPress={addValue}> </Button>
                    <Button title="sub" onPress={subValue}> </Button>
                    <Button title="reset" onPress={resetValue}> </Button>
                    <Button title="push" onPress={pushButton}> </Button>
                </View>
                <Text>value : {value}</Text>
                <Text>count : {count}</Text>
                <ReduxStateView></ReduxStateView>
                <RecoilStateView></RecoilStateView>
            </View>
        </SafeAreaView>


    );
}

export default  SecondScreen;