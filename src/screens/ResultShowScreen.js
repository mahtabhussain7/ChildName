import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen=({route})=> {
  const { id } = route.params;
  console.log(id);
   const [result,setResult]=useState(null)
   const getResult= async (id)=>{
         try {
          const response= await yelp.get('/${id}')
          setResult(response.data)
         } catch (error) {
           console.log(error);
         }
   
   };

   useEffect(()=>{
       getResult(id)
   },[])

   if(!result)
   {
     return null
   }
    return (
      <View>
          <Text>{result.name}</Text>
      </View>
    );
}

export default ResultShowScreen;