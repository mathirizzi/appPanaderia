import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function CategoriesScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CategoriesScreen</Text>
      <Button title="Go to Bread" onPress={() => navigation.navigate("Bread")} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fad2",
        alignItems: "center",
        justifyContent: "center",

    },
    title: {
        fontFamily: "Lobster",
        fontSize: 30

    }
})