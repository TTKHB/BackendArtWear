import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text } from "react-native";
import DiscoveryScreen from '../screens/DiscoveryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screens/HomeScreen'
import StoryScreen from '../screens/StoryScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Routes = () => (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {

                    if (route.name === 'Home') {
                        return <Foundation name="home" size={size} color={color} />;
                    }
                    if (route.name === 'Discovery') {
                        return <Feather name="search" size={size} color={color} />;
                    }
                    if (route.name === 'Post') {
                        return <Feather name="plus-square" size={size} color={color} />;
                    }
                    if (route.name === 'Notifications') {
                        return <AntDesign name="hearto" size={size} color={color} />;
                    }
                    if (route.name === 'Profile') {
                        return <Ionicons name="person-outline" size={size} color={color} />;
                    }

                },
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
            })}>

            <Tab.Screen
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => (
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: "#dbb98f" }}>HOT ArtWear</Text>
                        // <Image source={logo} resizeMode="contain" style={{width: 135, height: 50}}/>
                    ),
                    headerLeft: () => (
                        <Feather name="camera" style={{ marginLeft: 15 }} size={25} color={"#000"} />
                    ),
                    headerRight: () => (
                        <Ionicons name="paper-plane-outline" style={{ marginRight: 15 }} size={25} color={"#545454"} />
                    ),
                }}
                name="Home" component={HomeScreen} />

            <Tab.Screen name="Discovery" component={DiscoveryScreen} />
            <Tab.Screen name="Post" component={CreatePostScreen} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
)
export default Routes;