import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation-stack';
import { createStackNavigator } from 'react-navigation'
import MenuScreen from './screens/MenuScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen></MenuScreen>
    </View>
  );
}

const navigator = createStackNavigator(
  {
    Menu: MenuScreen
  },{
    initialRouteName: "Menu",
    dafaultNavigationOptions: {
      title: "App"
    }
  }
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(navigator);



const Stack = createStackNavigator();

export default function App();
return(
  <NavigationContainer
     <Stack.Navigator initialRouteName="Name")
    <Stack.Screen name= "Menu" component={MenuScreen} options={{title:'App'}}/>
    <Stack.Screen name= "Exercise" component={MenuScreen} options={{title:'App'}}/>
    <Stack.Screen name= "Button" component={MenuScreen} options={{title:'App'}}/>
    <Stack.Screen name= "List" component={MenuScreen} options={{title:'App'}}/>
</Stack.Navigator>
</NavigatorContainer>
)
}