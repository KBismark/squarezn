import React from 'react';
import { Tabs } from 'expo-router';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { View, Platform } from 'react-native';

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
          if(pressedTabButton==='index') pressedTabButton = 'chats';
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
          title: 'Chats',
          tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
          tabBarIcon: ({ color }) => <Ionicons name='chatbubbles-outline' color={color} size={26} />,
          
        }}
      />
      <Tabs.Screen
        name="stories"
        options={{
          title: 'Stories',
          tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
          tabBarIcon: ({ color }) => <MaterialIcons name='history-toggle-off' color={color} size={26} />,

        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: 'Feed',
          tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
          tabBarIcon: ({ color }) => <MaterialIcons style={{marginRight: -5}} name='tips-and-updates' color={color} size={26} />,

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
        name="settings"
        options={{
          title: 'Settings',
          tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
          tabBarIcon: ({ color }) => <Ionicons name='settings-outline' color={color} size={26} />,

        }}
      />
    </Tabs>
  );
}
