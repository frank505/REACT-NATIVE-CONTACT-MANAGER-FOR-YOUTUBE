import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Dashboard/Home/Home';



const Stack = createStackNavigator();

export default function Main() {
    return (
        <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login"     component={Login} />
      <Stack.Screen name="Dashboard"     component={Home} />

    </Stack.Navigator>
  </NavigationContainer>
    )
}
