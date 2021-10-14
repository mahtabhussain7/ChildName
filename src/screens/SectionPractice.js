import React from 'react';
import { SectionList, Text } from 'react-native';

const SectionPractice=()=> {
    const  state= [
        {
          title: "Operating System",
          data: [
            "Processes & Threads",
            "Memory Management",
            "CPU Scheduling",
            "Process Synchronization",
            "Deadlock",
          ],
        },
        {
          title: "Computer Network",
          data: [
            "Data Link Layer",
            "Network Layer",
            "Transport Layer",
            "Application Layer",
            "Network Security",
          ],
        },
        {
          title: "DBMS",
          data: [
            "Entity Relationship Model",
            "Normalisation",
            "Transaction and Concurrency Control",
            "Indexing, B and B+ trees",
            "File Organization",
          ],
        },
      ]
    return (
      <SectionList
      sections={state}
      keyExtractor={(item,index)=>{
          item+index
      }}
      renderItem={({item})=>{
          return <Text>{item}</Text>
      }}

      renderSectionHeader={({ section: { title } }) => (
        <Text>{title}</Text>
      )}
      />
    );
}

export default SectionPractice;