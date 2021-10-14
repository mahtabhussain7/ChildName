import { useState,useEffect } from "react";
import yelp from "../api/yelp";

export default ()=>{
    const [results,setResults]=useState([]);
    const [errorMsg,setErrorMsg]=useState('')
    const searchApi= async (searchTerm)=>{
        console.log("Hi there");
        try {
            const response= await yelp.get('/search',{params:{
                limit:50,
                term:searchTerm,
                location:'san jose'
              }
          });
          setResults(response.data.businesses);   
        } catch (error) {
            console.log(error);
            setErrorMsg("Something went wrong")
        }



    };
    useEffect(()=>{
    searchApi('pasta')

    },[])
    return [searchApi,results,errorMsg]
};