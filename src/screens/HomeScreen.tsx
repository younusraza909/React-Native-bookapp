import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';
import BookItem from '../components/BookItem';
import Divider from '../components/Divider';

const HomeScreen = () => {
  const [query, setQuery] = useState<string>('');
  const {data, refetch} = useSearch(query);

  return (
    <View style={styles.container}>
      <SearchBar value={query} setValue={setQuery} onPress={refetch} />

      <FlatList
        data={data}
        renderItem={({item}) => <BookItem {...item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Divider}
        contentContainerStyle={{
          gap: 5,
          padding: 10,
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  },
});
