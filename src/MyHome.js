// import React from "react";
import React, { Fragment, Component } from 'react';
// import { View, Text, Button } from 'react-native';

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
// const MyHome = ({ navigation }) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', { name: 'Jane' })
//       }
//     />
//   );
// };
// export default MyHome;
export default class MyHome extends Component{
    goAuth(){
        this.props.navigation.navigate('AUTH');
    }
    goAbout(){
      this.props.navigation.navigate('ABOUT');
  }
    render(){
        return (
            <View>
                <Text style={{fontSize:30}}>Home 입니다</Text>
                <Button onPress={()=>this.goAuth()} title='go auth' ></Button>
                <Button onPress={()=>this.goAbout()} title='go about' ></Button>
                
            </View>
        );
    }
}

/*
class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    render() {
      return (
        // <div>
        //   <h1>Hello, world!</h1>
        //   <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        // </div>
        <Text>dkdkdk</Text>
      );
    }
  }

const Home = () =>{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       value: 0,
    //     };
    //   }
    
    //   handleIncrease =() => {
    //     this.setState({
    //       value: this.state.value +1
    //     })
    //   }
    //   handleDecrease =() => {
    //     this.setState({
    //       value: this.state.value -1
    //     })
    //   }

    return (
        // <div>Home !!!</div>
        // <div>
        //     <h2>Home !!</h2>
        // </div>
        // <Text>HHH</Text>
        <Test></Test>
    );
}

export default Home;
*/