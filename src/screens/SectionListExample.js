import React from 'react';
import { SectionList, Text,View,StyleSheet } from 'react-native';


const  SectionListExample=()=> {

  const  data= [
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
        <View style={styles.screen}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
              <View style={styles.row}>
                  <Text style={styles.rowText}>{item}</Text>
              </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}/>
      </View>
    );

    
}
const styles = StyleSheet.create({
    screen: {
      marginTop: 18,
    },
    header: {
      fontSize: 30,
      color: "#FFF",
      marginTop: 10,
      padding: 2,
      backgroundColor: "#C2185B",
      textAlign: "center",
    },
    row: {
      marginHorizontal: 15,
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 2,
    },
    rowText: {
      fontSize: 18,
    },
  });
export default SectionListExample;