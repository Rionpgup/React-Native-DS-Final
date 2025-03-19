import React from "react";
import {View,Text,Image,StyleSheet} from 'react-native';

const Projects = ({ image }) => {
    return (

    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
  },
});

export default Projects;

