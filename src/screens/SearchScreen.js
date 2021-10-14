import React,{useEffect, useState} from 'react';
import { Text, View } from 'react-native';
import yelp from '../api/yelp';
import ReslutsList from '../components/ReslutsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen=()=> {
    const [term,setTerm]=useState('');
    const [searchApi,results,errorMsg]=useResults()

   const filterResultsByPrice=(price)=>{
      return results.filter(result=>{
          return result.price===price
      })
    }

    return (
       <View style={{flex:1}}>
           <SearchBar 
           term={term} 
           onTermChange={setTerm}
           onTermSubmitted={()=>searchApi(term)}/>

           <ReslutsList 
           results={filterResultsByPrice('$')}
            title="Cost Effective"
            />
           <ReslutsList 
           results={filterResultsByPrice('$$')} 
           title="Bit Pricer"
           />
           <ReslutsList
            results={filterResultsByPrice('$$$')} 
            title="Big Spender"
            />
           <Text>{errorMsg}</Text>

       </View>
    );
}

export default SearchScreen;