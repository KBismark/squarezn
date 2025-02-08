import { Header } from "@/components/header";
import { FlatList, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { mockData } from "./mock-data";
import PostCard from "./post-card";

const ExploreScreen = () => {
  return (
    <GestureHandlerRootView className="flex-1">
         <Header title="Explore" />
        <FlatList 
            initialNumToRender={6}
            numColumns={2}
            data={mockData}
            keyExtractor={(item, index) => `${item.username}-${index}`}
            renderItem={({item}) => <PostCard {...item} />}
            contentContainerClassName='w-full items-center pl-4'
            className='flex-1'
            showsVerticalScrollIndicator={false}
        />
    </GestureHandlerRootView>
  );
}


export default ExploreScreen;