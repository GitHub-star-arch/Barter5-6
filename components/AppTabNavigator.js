import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Sell from '../Screens/Sell'
import Buy from '../Screens/Buy'
export const AppTabNavigator = createBottomTabNavigator({
    donateBooks:{screen:Buy,
    navigationOptions:{
        tabBarIcon:<Image source={require('../assets/request-list.png')}></Image>,
        tabBarLabel:"Home Items"
    }},requestBooks:{screen:Sell,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/request-book.png')}></Image>,
            tabBarLabel:"Exchange Items"
        }}
})