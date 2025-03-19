import React from 'react'
import{View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'

const Profile=()=>{

   return( <ScrollView style={StyleSheet.container}>
        <View style={styles.profileContainer}>
<Image style={styles.avatar} source={{uri:"https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg"}}/>
<View style={styles.profileDetails}>
    <Text style={style.name}>Jon Doe</Text>
    <Text style={style.role}>UI/UX</Text>
    <Text style={style.name}>I am an awesome . . .</Text>
    <TouchableOpacity>
        <Text style={styles.hireText}>Hire me</Text>
    </TouchableOpacity>
    
     </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.projectContainer}>
             <image style={styles.projectImage} source={{uri:"https://ipma.world/app/uploads/2015/09/Dollarphotoclub_65655745-1-1.jpg"}}/>
             <image style={styles.projectImage} source={{uri:"https://ipma.world/app/uploads/2015/09/Dollarphotoclub_65655745-1-1.jpg"}}/>
        </ScrollView>
        </ScrollView>
)}
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#ffffff"
},
profileContainer:{
    alignItems:"center",
    padding:20,
    backgroundColor:"f8f9fa",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
},
avatar:{
    width:120,
    height:120,
    borderRadius:60,
    marginBottom:10
},
profileDetail:{
    alignItems:"center",
    fontWeight:"bold"
},
name:{
    fontSize:20,
    fontWeight:"bold"
},
role:{
    fontSize:16,
    color:"grey",
    marginVertical:5
},
description:{
    textAlign:"center",
    fontSize:14,
    marginBottom:15

},
hireButton:{
    backgroundColor:"#FFD700",
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:25
},
projectHeader:{
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  paddingHorizontal:20,
  marginTop:20 
},
projectTitle:{
    fontSize:18,
    fontWeight:"bold",
},
viewAll:{
    fontSize:14,
    color:"#FFD700",
    fontWeight:"bold"
},
projectContainer:{
    flexDirection:"row",
    paddingHorizontal:20,
    margineTop:10,
},
projectImage:{
    width:150,
    height:100,
    borderRadius:10,
    marginRight:10
}


})


export default Profile;