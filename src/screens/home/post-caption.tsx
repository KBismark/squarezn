import { Image, Pressable, Text, View } from "react-native";
import { PostComments } from "./types";
import {Feather, MaterialCommunityIcons, Octicons} from '@expo/vector-icons'
import { memo } from "react";

const Caption = ({username, userPhoto, message, replies}: PostComments)=>{

    return (
        <View className="m-2 p-3 rounded-3xl bg-black/40 overflow-hidden">
            <Pressable className="items-center flex-row mb-2">
                <View className="w-10 h-10 rounded-full overflow-hidden bg-black/40">
                    <Image 
                        source={{ uri: userPhoto }}
                        style={{width: '100%', height: '100%', position: 'absolute'}}
                        resizeMode="cover"
                    />
                </View>
                <Text className="ml-2 mr-2 font-semibold text-[15px] text-gray-100 ">{username}</Text>
                <Octicons name='verified' size={14} className="text-primary" color={'rgb(5, 181, 143)'} />
            </Pressable>
            {message && <Text className="text-gray-100 text-sm mx-2">{message}</Text>}
            <View role="list" className="items-center flex-row mt-4 mx-2">
                <Pressable role="listitem" aria-label="Like Post" className="items-center flex-row">
                    <MaterialCommunityIcons className="text-gray-100" color={'red'} name='cards-heart-outline' size={24} />
                    <Text className="text-gray-100 ml-1 text-sm">34K</Text>
                </Pressable>
                <Pressable role="listitem" aria-label="Add Comment" className="items-center flex-row mx-6">
                    <Feather className="text-gray-100" color={'cyan'} name='message-circle' size={24} />
                    <Text className="text-gray-100 ml-1 text-sm">2103</Text>
                </Pressable>
                <Pressable role="listitem" aria-label="Add Comment" className="items-center flex-row">
                    <Feather className="text-gray-100" color={'#ffffff'} name='share' size={24} />
                    <Text className="text-gray-100 ml-1 text-sm">12K</Text>
                </Pressable>
            </View>
        </View>
    )
}


export const PostCaption = memo(Caption)