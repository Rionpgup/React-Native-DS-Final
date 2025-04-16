import React,{useEffect, useState} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native-web";
const Albumet=()=>{
    const [Albums, setAlbums]=useState([])
    const APICall= async ()=>{
        const pergjigjja= await fetch("https://jsonplaceholder.typicode.com/albums")
        const data= await pergjigjja.json()
        setAlbums(data)
    }
    useEffect(()=>{
        APICall()

    },[])
    return(
        <View>
            <FlatList
            data={Albums}
            renderItem={({item})=>{
                return(
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.body}</Text>
                    </View>
                )
            }}
        />
        </View>
    )
}

export default Albumet