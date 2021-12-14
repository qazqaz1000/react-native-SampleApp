import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container : {
        // flex:1,
        height:"100%"
    },
    image:{
        flex:1,
        resizeMode : "cover",
        justifyContent : "space-between",
        // width:"100%",
    },
    userinfo : {
        flexDirection : "row",
        alignItems : "center",
        marginTop : 10
    },
    userName : {
        color : "white",
        fontWeight : "500",
        fontSize : 18,
    },
    postedTime : {
        color : "#808080",
        fontWeight : "500",
        fontSize : 14,
        marginLeft : 10
    },
    bottomContainer : {
        flexDirection: "row",
        alignItems : "center",
        marginBottom: 10,
    },
    cameraButton : {
        width : 50,
        alignItems : "center",
        justifyContent : "center"
    },

    messageButton : {
        width : 50,
        alignItems : "center",
        justifyContent : "center"
    },
    textInput : {
        height : "100%",
        color : "white",
        fontSize : 16
    },

    textInputContainer : {
        flex:1,
        height: 50,
        borderWidth: 2,
        borderRadius :25,
        borderColor : "white",
        // marginHorizontal : 10,
        paddingHorizontal : 10,
        // padding: 10,
    }
});

export default styles;
