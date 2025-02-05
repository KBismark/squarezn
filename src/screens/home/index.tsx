// Home tab Screen 
import { Header } from '@/components/header';
import React from 'react';
import { View, Text } from 'react-native';
import { FlatList, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import FullCard from './fulll-card';
import { mockData } from './mock-data';

const HomeScreen = () => {
    return (
        <GestureHandlerRootView className="flex-1">
            <Header title="Home" />
            <FlatList 
                initialNumToRender={3}
                data={mockData}
                keyExtractor={(item, index) => `${item.username}-${index}`}
                renderItem={({item}) => <FullCard {...item} />}
                contentContainerClassName='px-4'
                className='flex-1'
                showsVerticalScrollIndicator={false}
            />
        </GestureHandlerRootView>
    );
};

export default HomeScreen;
