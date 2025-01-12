import React from 'react';
import { Tabs } from 'expo-router';
import { Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { View, Platform, Pressable } from 'react-native';

const isAndroid = Platform.OS === 'android';

const useTheme = ()=>({
  mode: 'light',
  colors: {
    primary: 'blue', 
    neutral: '#eee', 
    white: '#fff', 
    blurColor: '#f3f3f3'
  }
})

export default function TabLayout() {
  const {mode, colors} = useTheme()
  const {primary, neutral, white, blurColor}  = colors;

  return (
    <Tabs
      screenListeners={{
        tabPress(e){
          const target = e.target as any
          let pressedTabButton = (target.name||target||'').toLowerCase().trim().split('-').join('/').split('/').shift();
          if(pressedTabButton==='index') pressedTabButton = 'home';
          // updateGlobalTabStore({actors: ['activeTab'], store: {activeTab: pressedTabButton}});
        }
      }}
      screenOptions={{
        tabBarActiveTintColor: primary,
        tabBarBackground() {
          return (
            isAndroid? 
            <View style={{width: '100%', height: 60, backgroundColor: white}}/>
            :
            <BlurView intensity={mode==='dark'?80:10} style={{width: '100%', height: 60}} />
          )
        },
        
        tabBarStyle: {
          backgroundColor: blurColor,
          borderTopWidth: 0,
          borderTopColor: 'rgba(0,0,0,0)',
          position: 'absolute',
        },
        tabBarHideOnKeyboard: true,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='home-variant' color={color} size={26} />,
          
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
          tabBarIcon: ({ color }) => <FontAwesome name='square' color={color} size={26} />,

        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
          tabBarIcon: ({ color }) => <Feather name='search' color={color} size={26} />,

        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          title: 'Reels',
          tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
          tabBarIcon: ({ color }) => <Entypo name='folder-video' color={color} size={26} />,

        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
          tabBarIcon: ({ color }) => {

            return (
              <Pressable className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 ">

              </Pressable>
            )
          },

        }}
      />
    </Tabs>
  );
}
