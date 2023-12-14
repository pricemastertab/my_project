import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Login(){
    return (
        <View style={styles.container} >
            <Text>Bem vindo a tela Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        left: 40,
    }
})

