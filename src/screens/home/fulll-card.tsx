import { ActivityIndicator, Dimensions, Image, Platform, Pressable, Text, View } from "react-native"
import { FullCardProps, PostComments } from "./types";
import { PostCaption } from "./post-caption";
import {Feather} from "@expo/vector-icons"
import { memo } from "react";

const {height: PAGE_HEIGHT}  = Dimensions.get('screen');
const CARD_HEIGHT = (PAGE_HEIGHT * 0.9) - 180
const isAndroidPlatform = Platform.OS === 'android'



const FullCard = (props: FullCardProps)=>{

    return (
        <Pressable style={{height: CARD_HEIGHT,}} className="w-full rounded-3xl bg-gray-100 mt-4 overflow-hidden flex-col items-center justify-center">
            <ActivityIndicator color={isAndroidPlatform? 'lightgreen': undefined} size={'large'} />
            <Image 
                source={{ uri: props.imageUrl }}
                style={{width: '100%', height: '100%', position: 'absolute'}}
                resizeMode="cover"
            />
            
            <Pressable aria-label="More Options" className="absolute top-0 right-0 w-10 h-10 mr-4 mt-4 flex-row items-center justify-center bg-black/40 rounded-full">
                <Feather name='more-horizontal' color={'#ffffff'} size={24} />
            </Pressable>
            <View className="absolute bottom-0 w-full">
                <PostCaption {...props.comments} username={props.username} />
            </View>
        </Pressable>
    )
}


export default memo(FullCard)