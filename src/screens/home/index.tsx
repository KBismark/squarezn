// Home tab Screen 
import { Header } from '@/components/header';
import React from 'react';
import { View, Text } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import FullCard from './fulll-card';

const HomeScreen = () => {
    return (
        <GestureHandlerRootView className="flex-1">
            <Header title="Home" />
            <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true} className='px-4' style={{flex: 1,}}>
                <FullCard />
                <FullCard />
            </ScrollView>
        </GestureHandlerRootView>
    );
};

export default HomeScreen;
