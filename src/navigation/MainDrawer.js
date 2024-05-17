import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

//Screen
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Collaborator from '../screens/Collaborator'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function MainDrawer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Main'>
          {
            ()=>{
              <Drawer.Screen name='Home' component={Home}/>
              <Drawer.Screen name='Profile' component={Profile}/>
              <Drawer.Screen name='Collaborator' component={Collaborator}/>
            }
          }

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}