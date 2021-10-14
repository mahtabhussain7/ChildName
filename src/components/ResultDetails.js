import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ResultDetails=({result})=> {
    return (
    <View style={styles.mainContainer}>
        <Image style={styles.imageStyle} source={{uri:result.image_url}} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count}</Text>
    </View>
    );
}
const styles=StyleSheet.create({
    mainContainer:{
     marginHorizontal:15   
     },
    imageStyle:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5
    },
    name:{
        fontWeight:'bold',
        fontSize:16
    }
})
export default ResultDetails;