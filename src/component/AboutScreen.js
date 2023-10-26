import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutScreen = () => {
    return (
        <View>
            <Text style={styles.font}>AboutScreen</Text>
            <Text>AboutScreen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    font: {
        fontFamily: 'Roboto',
    }
})

export default AboutScreen;