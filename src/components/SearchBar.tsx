import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder='search books'
                placeholderTextColor="#000" />

            <Pressable style={styles.btn} >
                <Text style={styles.text}>search</Text>
            </Pressable>
        </View>
    )
}

export default SearchBar
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15,
        padding: 15,
    },
    input: {
        padding: 15,
        fontSize: 15,
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 10,
        flex: 1,
    },
    btn: {
        flexDirection: 'row',
        gap: 5,
        backgroundColor: '#4ecdc4',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        cursor: 'pointer',
    },
    text: {
        color: '#fff',
        textTransform: 'capitalize',
        fontWeight: '500',
    },
});