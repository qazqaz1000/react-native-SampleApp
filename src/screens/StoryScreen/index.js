import React, { useEffect, useState } from 'react';
import { Text ,
    View,
     ImageBackground,
    ActivityIndicator,
    TouchableWithoutFeedback,
    Dimensions,
    TextInput
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles'; 
import storiesData from '../../data/stories';
import ProfilePicture from '../../components/ProfilePicture';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { TextInput } from 'react-native-gesture-handler';

const StoryScreen = () => {
    const [userStories, setUserStories] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);
    // const [activeStory, setActiveStory] = useState(null);
    const route = useRoute();
    const navigation = useNavigation();
    console.log("StoryScreen : route.params");
    console.log(route.params);
    const userId = route.params.userId;
    
    console.log(userId);

    useEffect(() => {

        const userStories = storiesData.find(storyData => storyData.user.id === userId);
        console.log("default");
        console.log(userStories);
        setUserStories(userStories);
        setActiveStoryIndex(0);
    }, []);

    const navigateToNextUser = () =>{
        navigation.push("Story", {userId : (parseInt(userId) + 1).toString() });
    }

    const navigateToPrevUser = () =>{
        navigation.push("Story", {userId : (parseInt(userId) - 1).toString() });
    }
    
    const handleNextStory = () =>{
        console.log("next");
        if(activeStoryIndex >= userStories.stories.length - 1){
            console.log("next2");
            navigateToNextUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex + 1);
    }

    const handlePrevStory = () =>{
        console.log("prev");
        if(activeStoryIndex <= 0 ){
            navigateToPrevUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex - 1);
    }

    const handlePress = (evt) =>{
        // console.log(evt.nativeEvent);
        const x = evt.nativeEvent.locationX;
        const screenWidth = Dimensions.get('window').width;
        if(x < screenWidth / 2){
            handlePrevStory();
        }else{
            handleNextStory();
        }
    }


    if(!userStories){
        return (
            <SafeAreaView>
            <Text>Awesome Active story</Text>
            <ActivityIndicator></ActivityIndicator>
            {/* <ImageBackground source = {{uri : activeStory.imageUri}}></ImageBackground> */}
        </SafeAreaView>
        )
    }
    const activeStory = userStories.stories[activeStoryIndex];


    return(
    <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={handlePress}>
            <ImageBackground source = {activeStory.imageUri} style={styles.image}>
                
                <View style={styles.userinfo}>
                    <ProfilePicture uri={userStories.user.imageUri} size={50}></ProfilePicture>    
                    <Text style={styles.userName}>{userStories.user.name}</Text>
                    <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.cameraButton}>
                        <Feather name="camera" size={25} color={'#ffffff'}></Feather>
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput 
                        editable
                        placeholder="Send Message" 
                        placeholderTextColor={"white"}
                        style={styles.textInput}
                        ></TextInput>
                    </View>

                    <View style={styles.messageButton}>
                        <Ionicons name="paper-plane-outline" size={25} color={'#ffffff'}></Ionicons>
                    </View>
                    

                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    </SafeAreaView>
    )
}

export default StoryScreen;