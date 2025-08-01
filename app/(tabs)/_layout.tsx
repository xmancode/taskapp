
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
    const {colors}=useTheme();
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor:colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle:{
            backgroundColor:colors.surface,
            borderTopWidth:1,
            borderTopColor:"#343631ff",
            height:60,
            paddingTop:5,
            paddingBottom:2
        },
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:'500'
        }
    }}>
    <Tabs.Screen name='index' options={{
        title:"Todos",
        tabBarIcon:({color,size})=>(
            <Ionicons name='today-outline' size={size} color={color}/>
        )
        }}/>
    <Tabs.Screen name='settings' options={{
        title:"Settings",
        tabBarIcon:({color,size})=>(
            <Ionicons name='settings-outline' size={size} color={color}/>
        )
        }}/>
    </Tabs>
  )
}

export default TabsLayout