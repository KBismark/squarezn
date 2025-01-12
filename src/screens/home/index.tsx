// Home tab Screen 
import { Header } from '@/components/header';
import React from 'react';
import { View, Text } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

const HomeScreen = () => {
    return (
        <GestureHandlerRootView className="flex-1">
            <Header title="Home" />
            <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text className="text-lg font-bold">Home Tab</Text>
            </ScrollView>
        </GestureHandlerRootView>
    );
};

export default HomeScreen;
