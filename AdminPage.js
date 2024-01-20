import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ticket from "./ticket.json";

function AdminPage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems:'center', justifyContent: 'space-evenly', backgroundColor: "lightslategrey" }}>
          <View style={{ flexDirection: "row" }}>
          <Button onPress={() => navigation.navigate("Main")} fontSize={40}
            style={styles.buttonsTick}
            title="HOME"></Button>
        </View>
        <View>
          {ticket.map((item, id) => (
          <View style={styles.ticketData} key={item.name}>
            <View>
              <Text style={styles.ticketNumber}>
                {++id}
              </Text>
            </View>
            <View>
            <Text>Name: {item.name}</Text>
            </View>
            <View>
            <Text>Email: {item.email}</Text>
            </View>
            <View>
            <Text style={styles.descStyle} >Description: {item.description}</Text>
            <Text>{"\n"}</Text>
            </View>
          </View>
        ))}
      </View>
      </View>
      );
}

export default AdminPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "lightslategrey",
      alignItems: 'stretch',
      justifyContent: 'space-around',
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
      marginTop: 100
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
      ticketData: {
        marginTop: -30
      },
      descStyle: {
        marginBottom: 10
      },
      ticketNumber: {
        fontSize: 20,
        color: 'white'
      }
  });