import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const AboutScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.font}>AboutScreen</Text>
            <Text>AboutScreen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('List')}><Text>List</Text></TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    font: {
        fontFamily: 'Roboto',
    }
})

export default AboutScreen;