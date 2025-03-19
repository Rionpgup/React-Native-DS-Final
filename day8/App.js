import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './Screens/MenuScreen';
import StudentScreen from './Screens/StudentScreen';




const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name= "Menu" component={MenuScreen} options={{title:'Main Menu'}}/>
          <Stack.Screen name= "Student" component={StudentScreen} options={{title:'Students Profile'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}