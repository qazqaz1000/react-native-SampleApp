import React, { useEffect, useState } from 'react';
import { Text ,
    View,
     ImageBackground,
    ActivityIndicator,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

import styles from './styles'; 
import storiesData from '../../data/stories';

const StoryScreen = () => {
    const [userStories, setUserStories] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);
    // const [activeStory, setActiveStory] = useState(null);
    const route = useRoute();

    

    useEffect(() => {
        const userId = route.params.userId;
        const userStories = storiesData.find(storyData => storyData.user.id === userId);
        console.log("default");
        console.log(userStories);
        setUserStories(userStories);
        setActiveStoryIndex(0);
    }, []);

    
    const handleNextStory = () =>{
        console.log("next");
        if(activeStoryIndex >= userStories.stories.length - 1){
            return;
        }
        setActiveStoryIndex(activeStoryIndex + 1);
    }

    const handlePrevStory = () =>{
        console.log("prev");
        if(activeStoryIndex <= 0 ){
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
            <ImageBackground source = {activeStory.imageUri} style={styles.image}></ImageBackground>
        </TouchableWithoutFeedback>
    </SafeAreaView>
    )
}

export default StoryScreen;