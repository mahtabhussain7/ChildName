import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar=({term,onTermChange,onTermSubmitted})=> {
    return (
      <View style={styles.backgroundStyle} >
     <Icon style={styles.iconStyle} color="black" name="search" size={30}/>
     <TextInput style={styles.inputStyle} 
     placeholder="Search"
     autoCapitalize="none"
    autoCorrect={false}
     value={term}
     onChangeText={onTermChange}
     onEndEditing={onTermSubmitted}
/>
      </View>
    );
}

const styles=StyleSheet.create({
backgroundStyle:{
    backgroundColor:"#F0EEEE",
    height:50,
    borderRadius:5,
    marginHorizontal:15,
    flexDirection:'row',
    marginTop:10,
    marginBottom:10
},
inputStyle:{
  flex:1,
  fontSize:18
},
iconStyle:{
  fontSize:35,
  alignSelf:'center',
  marginHorizontal:15
}
});

export default SearchBar;