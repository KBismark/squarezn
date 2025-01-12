// Home tab Screen 
import HomeScreen from '@/screens/home';
import { SafeAreaView } from 'react-native-safe-area-context';


export default ()=>{
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <HomeScreen />
        </SafeAreaView>
    );
};
