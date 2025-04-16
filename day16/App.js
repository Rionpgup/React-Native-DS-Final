import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDos from './screens/ToDos';
import Comments from './Screens/Comments';
import Albumet from './Screens/Albumet';
import  {NavigatorContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from  './Screens/Home';
 const Stack = createNativeStackNavigator()

 
export default function App() {
  return (
   <NavigatorContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/> 
        <Stack.Screen name="ToDos" component={ToDos}/>
        <Stack.Screen name="Comments" component={Comments}/>
        <Stack.Screen name="Albumet" component={Albumet}/>
    </Stack.Navigator>
   </NavigatorContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
