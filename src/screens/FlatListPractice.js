import React from 'react';
import { FlatList, Text } from 'react-native';
const DATA = [
  {
    id:"1",
    title:"Data Structures"
  },
  {
    id:"2",
    title:"STL"
  },
  {
    id:"3",
    title:"C++"
  },
  {
    id:"4",
    title:"Java"
  },
  {
    id:"5",
    title:"Python"
  },
  {
    id:"6",
    title:"CP"
  },
  {
    id:"7",
    title:"ReactJs"
  },
  {
    id:"8",
    title:"NodeJs"
  },
  {
    id:"9",
    title:"MongoDb"
  },
  {
    id:"10",
    title:"ExpressJs"
  },
  {
    id:"11",
    title:"PHP"
  },
  {
    id:"12",
    title:"MySql"
  },
];
const FlatListPractice=()=> {

    return (

        <FlatList
          data={DATA}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>{
           return <Text>{item.title}</Text>
          }}
        />
            
    );
}

export default FlatListPractice;