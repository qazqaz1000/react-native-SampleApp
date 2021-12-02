import React, {Component } from "react";
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
const style = {
    container : {
        flex : 1
    }
}

export default class About extends Component{
    goAuth(){
        this.props.navigation.navigate('AUTH');
    }
    goAbout(){
      this.props.navigation.navigate('ABOUT');
  }
    render(){
        return (
            <View>
                <Text style={{fontSize:30}}>About 입니다</Text>
                <Button onPress={()=>this.goAuth()} title='go auth' ></Button>
                <Button onPress={()=>this.goAbout()} title='go about' ></Button>
                
            </View>
        );
    }
}

// const About = () =>{
//     goAuth(){
//         this.props.navigation.navigate('AUTH');
//     }
//     return (
//         <Text>about !</Text>
//         <Button onPress={()=>this.goAuth()} title='go auth' ></Button>
//     );
// }

// export default About;