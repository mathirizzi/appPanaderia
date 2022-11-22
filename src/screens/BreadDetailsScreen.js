import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BreadDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bread Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff985e",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "Lobster",
        fontSize: 30

    },
})