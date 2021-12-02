import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const styles = {
    container:{
        flex: 1
    }
}

const ContentView = () =>{
    return (
    <View style={styles.container}>
        <WebView source={{uri:'http://192.168.135.90:8080/oz/dev_test/dev_test.jsp'}} />
    </View>
    );
}

export default ContentView;