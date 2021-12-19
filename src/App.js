/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Fragment, Component } from 'react';
import * as React from 'react';


// import { WebView } from 'react-native-webview';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { NavigationContainer } from '@react-navigation/native';


import Router from './router';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilValue,
  useRecoilState
} from 'recoil';

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};






const App: () => React$Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  
  return (
    <RecoilRoot>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Router />
      </NavigationContainer>
    </RecoilRoot>

      
    
    

    //navigator
    // <NavigationContainer> 
    //   <Stack.Navigator initialRouteName='MYHOME'>
    //     <Stack.Screen name="MYHOME" component={MyHome} options={{ title: '홈' }} />
    //     <Stack.Screen name="AUTH" component={Auth} options={{ title: '인증' }} />
    //     <Stack.Screen name="ABOUT" component={About} options={{ title: '정보' }} />
    //   </Stack.Navigator>
    // </NavigationContainer>



    // <SafeAreaView>
    //   {/* <Text>hih2i!@#\n rrrr</Text> */}
    //   <View style={{
    //         backgroundColor:  Colors.dark ,
    //       }}>
    //     <Text>hih2i!@#\n rrrr</Text>
    //     <Text>22131233333!!@#!@ #$#$#$ rㅏ나다 두번째 세번째</Text>
        


    //     {/* <Home></Home> */}
    //     {/* <Result sum={this.state.value}/>
    //     <LeftButton decreasing={this.handleDecrease}/>

    //     <RightButton increasing={this.handleIncrease} /> */}
    //   </View>
    // </SafeAreaView>
    
// {/*       
//         <WebView
//           source={{uri: 'https://github.com/facebook/react-native'}}
//           style={{marginTop: 20}}
//         /> */}
    
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <Text >hihi</Text>
    //     {/* <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.js</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View> */}
    //   </ScrollView>
    //   <Text>hihi2</Text>

    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container:{
    flex: 1
  },
});

export default App;
