import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function CategoryBreadScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bread Category</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5da7a",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "Lobster",
        fontSize: 30

    }
})