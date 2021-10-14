import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View,Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetails from './ResultDetails';

const ReslutsList=({title,results})=> {
    const navigation=useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
              {title}
            </Text>
            <FlatList
            horizontal
            data={results}
            keyExtractor={result=>result.id}
            renderItem={({item})=>{
                
                return(
                <TouchableOpacity onPress={()=> navigation.navigate('ResultShow',{id:item.id})}>
                <ResultDetails result={item}/>
                </TouchableOpacity>
                )
            }
            }
            />
        
        </View>
    );
}
const styles=StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginHorizontal:15,
        marginBottom:5
    },
    container:{
        marginBottom:10
    }
})

export default  ReslutsList;