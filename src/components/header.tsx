import React from "react";
import { Text, View } from "react-native";


export const Header: React.FC<HeaderProps> = ({title}) =>{
    return (
        <View className="flex-row justify-between items-center w-full h-16 px-4 py-1 bg-white">
            <Text className="text-lg font-bold capitalize">{title}</Text>
        </View>
    );
}


interface HeaderProps {
    title: string;
}