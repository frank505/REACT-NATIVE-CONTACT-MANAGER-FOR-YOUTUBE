import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateContact from '../CreateContact'
import ViewContact from '../ViewContact';
import ContactSearch from '../ContactSearch';
import ViewSingleContact from '../../ViewSingleContact/ViewSingleContact';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();



function tabNavigation ()
{
  return (<Tab.Navigator
  activeColor="#f0edf6"
inactiveColor="#3e2465"
barStyle={{ backgroundColor: '#694fad' }}
  >
  <Tab.Screen
   name="CreateContact"
   options={{
    tabBarLabel: 'New Contact',
    tabBarIcon: ({ color }) => (
      <Ionicons name="ios-add-circle" color={color} size={26} />
    ),
  }}
  component={CreateContact} 
  />

  <Tab.Screen 
  name="ViewContact" 
   options={{
    tabBarLabel: 'View Contact',
    tabBarIcon: ({ color }) => (
      <Ionicons name="ios-eye" color={color} size={26} />
    ),
  }}
  component={ViewContact} />
</Tab.Navigator>)
}








export default function Home() {

    

    return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Tabs"     component={tabNavigation} />
      <Stack.Screen name="SearchContactModal" component={ContactSearch} />
      <Stack.Screen name="ViewSingleContact" component={ViewSingleContact} />
      
    </Stack.Navigator>
    )
}
