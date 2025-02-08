import { ActivityIndicator, Dimensions, Image, Platform, Pressable, Text, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { memo } from "react";
import { PostCardProps } from "./types";

const {width: PAGE_WIDTH}  = Dimensions.get('screen');
const CARD_WIDTH = (PAGE_WIDTH - 48) * 0.5;
const isAndroidPlatform = Platform.OS === 'android'

const PostCard = (props: PostCardProps)=>{

    return (
        <Pressable style={{minHeight: 180, width: CARD_WIDTH, height: 300, }} className="rounded-2xl bg-gray-100 mt-4 mr-4 overflow-hidden flex-col items-center justify-center">
            <ActivityIndicator color={isAndroidPlatform? 'lightgreen': undefined} size='small' />
            <Image 
                source={{ uri: props.imageUrl }}
                style={{width: '100%', height: '100%', position: 'absolute'}}
                resizeMode="cover"
            />
            
            <View className="absolute bottom-0 left-0 pl-2 pb-2 ">
                <Pressable aria-label="Post Likes" className="rounded-full p-2 flex-col items-center mb-3 bg-black/20">
                    <MaterialCommunityIcons className="text-gray-100" color={'red'} name='cards-heart-outline' size={24} />
                    <Text className="text-gray-100 ml-1 text-[10px]">34K</Text>
                </Pressable>

                <View className="w-10 h-10 rounded-full overflow-hidden bg-black/40">
                    <Image 
                        source={{ uri: props.userPhoto }}
                        style={{width: '100%', height: '100%', position: 'absolute'}}
                        resizeMode="cover"
                        alt={props.username}
                    />
                </View>
                
            </View>
        </Pressable>
    )
}


export default memo(PostCard)