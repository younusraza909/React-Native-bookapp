import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <SearchBar />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#292f36"
    }
})