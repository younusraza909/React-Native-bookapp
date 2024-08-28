import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import axios from 'axios'

import { API_KEY } from "@env"


const HomeScreen = () => {
    const [query, setQuery] = useState<string>('')

    const searchBooks = async () => {
        const response = await axios('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: query,
                key: API_KEY
            }
        })

        return response.data.items
    }
    return (
        <View style={styles.container}>
            <SearchBar value={query} setValue={setQuery} />
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