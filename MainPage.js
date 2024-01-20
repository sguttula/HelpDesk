import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

function MainPage({ navigation }) {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[description, setDescription] = useState('');

    const addTicket = () => {
        const tickets = { name , email , description }
        console.log(tickets); //Printed to console to show that data is registered
        setName("");
        setEmail("");
        setDescription("");
    }

    const saveTicket = () => {
      // const errorParsing = (errorLog) => {
      //   if(errorLog) {
      //     console.error(errorLog)
      //     return;
      //   }
      // }
      //  const jsonData = JSON.stringify(tickets, null, 2)
      //  RNFS.writeFile('ticket.json', jsonData, errorParsing)
      }

    return (
    <>
    <View style={styles.container}>
      <StatusBar backgroundColor="cadetblue" />
      <View style={{ flexDirection: "row" }}>
        <Button onPress={() => navigation.navigate("Admin")} fontSize={40}
          style={styles.buttonsAdmin}
          title="ADMIN PANEL"></Button>
      </View>
      <Text style={styles.tms}>Ticket Management System</Text>
      <Text style={styles.labelsname}>Name</Text>
        <TextInput
          label="Name" placeholder=" Enter name" value={name} onChangeText={setName}
          style={{ margin: 10, height: 40, width: 385, borderWidth: 1, borderRadius: 10, backgroundColor: '#DDC3A5'}}
          />
        <Text style={styles.labels}>Email</Text>
        <TextInput
          label="Email" placeholder=" example@gmail.com" value={email} onChangeText={setEmail} 
          style={{ margin: 10, height: 40, width: 385, borderWidth: 1, borderRadius: 10, backgroundColor: '#DDC3A5'}}
          />
        <Text style={styles.labels}>Description</Text>
        <TextInput
          label="Description" placeholder=" Enter details" value={description} multiline onChangeText={setDescription}
          style={{ margin: 10, minHeight: 200, width: 385, borderWidth: 1, borderRadius: 10, fontSize: 22,
          textAlign: 'left', backgroundColor: '#DDC3A5'}}
          />
        <Button onPress={addTicket} fontSize={40}  title="CREATE">CREATE</Button>
    </View>     
    </>
    )
}

export default MainPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "lightslategrey",
      alignItems: 'center',
      justifyContent: 'center',
    },
    labels: {
      alignItems: 'center',
      fontSize: 25,
      justifyContent: 'center',
    },
    labelsname: {
      alignItems: 'center',
      fontSize: 25,
      justifyContent: 'center',
      marginTop: 50
    },
    buttons: {
      fontSize: 80, 
      color: 'red', 
      borderWidth: 5, 
      borderRadius: 10
    },
    tms: {
      fontSize: 30,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      marginTop: 50
    },
    buttonsAdmin: {
        fontSize: 80, 
        color: 'red', 
        borderWidth: 5, 
        borderRadius: 10
      },
      buttonsTick: {
        fontSize: 80, 
        color: 'red', 
        borderWidth: 5, 
        borderRadius: 10
      },
      linksAdmin: {
        fontSize: 40,
        color: 'cadetblue'
      },
      scrollViewSmooth: {
        flex: 1,
        backgroundColor: "lightslategrey"
      }
  });