import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';


export const Header: React.FC<HeaderProps> = ({title}) =>{
    const [alertOn, setAlert] = useState(true)
    return (
        <View className="flex-row justify-between items-center w-full h-16 px-4 py-1 bg-white ">
            <Text className="text-lg font-bold capitalize">{title}</Text>

            <View className="flex-row justify-between items-center">
                <View className="rounded-full flex-row justify-center items-center mr-4">
                    <Text className="text-center text-sm font-bold mr-2">Go live</Text>
                    <MaterialIcons name='live-tv' size={24} color="black" />
                </View>
                <Pressable className="relative">
                    <MaterialCommunityIcons name='bell-outline' size={24} color="black" />
                    {alertOn&&<View className="w-[9px] h-[9px] rounded-full bg-red-500 absolute right-0 top-0 mt-1"></View>}
                </Pressable>
            </View>
        </View>
    );
}


interface HeaderProps {
    title: string;
}