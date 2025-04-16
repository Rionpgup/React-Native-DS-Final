import React from "react";
import {View, Button} from 'react-native'

const Home=({navigation})=>{

    return(<View>
      <Button title="Go to ToDos" onPress={()=>navigation.navigate('ToDos')}/>
      <Button title="Go to Comments" onPress={()=>navigation.navigate('Comments')}/>
      <Button title="Go to Albumet" onPress={()=>navigation.navigate('Albumet')}/>
    </View>)
}
export default Home