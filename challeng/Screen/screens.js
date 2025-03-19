import React from "react";
import {View,Text,Image,StyleSheet} from 'react-native';

    const StudentInfo =({ fullName,position,description,profileImage }) =>{
        return(
            <View style={styles.container}>
                <Image 
                    source={profileImage}
                    style={styles.image}
                    resizeMode="cover"
                 />
                <Text style={styles.name}>{fullName}</Text>
                <Text style={styles.position}>{position}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        );
    };

    const styles = StyleSheet.create({
        container:{
            alignItems:'center',
            backgroundColor: '#fff',
            padding:20,
            borderRadius: 10,
            elevation: 3,
            width:'100%', 
            marginBottom: 20,
        },
        image:{
            width:120,
            height:120,
            borderRadius:60,

        },
        name:{
            frontSize:20,
            frontWeight:'bold',
            marginTop: 10,
        },
        position:{
            frontSize:16,
            color:'gray',
            marginTop: 5,
        },
        description:{
            frontSize:14,
            textAlign:'center',
            marginTop: 5,
        },
    });
    export default StudentInfo;