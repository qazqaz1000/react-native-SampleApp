import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const SecondScreen = (props) => {
    const route = useRoute();
    const [myState, setMyState] = useState(0);

    console.log("SecondScreen !");
    console.log(route);
    const test = route.params.test;
    console.log(test);

    const onPress = () => {
        setMyState(myState+1);
        console.log("onPress !! " + myState);
    }

    return (
        <SafeAreaView>
        <View>
            <Text>hiohihihi</Text>
            <Button title="hi button" onPress={onPress}> </Button>
        </View>
        </SafeAreaView>


    );
}

export default  SecondScreen;