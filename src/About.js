import React, {Component, useEffect } from "react";
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
// useEffect(() => {
//     console.log("dd");
// });

export default class About extends Component{
    state={
        userLoggedIn: false,
        test : "a",
      }
      
    constructor(props) {
        super(props);
        console.log("constructor");
    }
    componentDidMount(){
        console.log("componentDidMount");
        setTimeout(()=>{
          this.setState({
            loading:false,
            test:"B"
          })
        },1000)
      }
      shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate " + nextProps.hoho + " " + nextState.test);
        console.log("shouldComponentUpdate " + this.props.name);
        if(nextProps.name !== this.props.name){
          return false
        }
        return false
      }
      componentDidUpdate(preProps, prevState){
        console.log("componentDidUpdate " + prevState.test);
        if(prevState.showToggled === this.state.showToggled){
          this.setState({
            showToggled: !showToggled
          })
        }
      }
    static GetDerivedStateFromProps(nextProps, nextState){
        console.log("dd");
        if(nextProps.user.authenticated){
            console.log("dd");
          return{
            userLoggedIn:true
          }
        }
        return null
      }
    
    goAuth(){
        console.log("auth");
        this.setState({
            test:"C"
        })
        // this.props.navigation.navigate('AUTH');
    }
    goAbout(){
        console.log("about");
    //   this.props.navigation.navigate('ABOUT');
  }
    render(){
        console.log("render()");
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