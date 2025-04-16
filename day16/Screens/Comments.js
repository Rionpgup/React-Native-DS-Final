import React,{useEffect, useState} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native-web";
const Comments=()=>{
    const [comments, setComments]=useState([])
    const APICall= async ()=>{
        const pergjigjja= await fetch("https://jsonplaceholder.typicode.com/comments")
        const data= await pergjigjja.json()
        setComments(data)
    }
    useEffect(()=>{
        APICall()

    },[])
    return(
        <View>
            <FlatList
            data={comments}
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

export default Comments