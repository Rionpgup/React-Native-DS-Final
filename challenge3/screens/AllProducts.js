import React,{useEffect, useState} from "react";
import {View, Text, FlatList} from 'react-native';

const AllProducts=()=>{
    const [products, setProducts]=useState([]);
    useEffect(()=>{
            fetch("https://fakestoreapi.com/products").then(respons=>respons.json())
            .then(data => {
                 setProducts(data)
            })

        },[])

        return(
            <FlatList
            data={products}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>{
                return(
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )
            }}
            />
        )
}

export default AllProducts