// Home tab Screen 
import ExploreScreen from '@/screens/explore';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default () => {
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <ExploreScreen />
        </SafeAreaView>
    );
};

