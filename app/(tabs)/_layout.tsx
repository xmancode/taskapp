
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
    const {colors}=useTheme();
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor:colors.primary,
        tabBarInactiveTintColor: colors.textMuted,headerShown:false,
        tabBarStyle:{
            backgroundColor:colors.surface,
            borderTopWidth:.5,
            borderTopColor:"#343631ff",
            height:100,
            paddingTop:5,
            paddingBottom:20
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