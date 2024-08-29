import {QueryObserverResult, RefetchOptions} from '@tanstack/react-query';
import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface ISearchBar {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onPress: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<any, Error>>;
}

const SearchBar = ({value, setValue, onPress}: ISearchBar) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="search books"
        placeholderTextColor="#000"
        onChangeText={setValue}
        value={value}
      />

      <Pressable
        style={styles.btn}
        onPress={() => {
          onPress();
        }}>
        <Icon name="search" color="#fff" size={20} />
        <Text style={styles.text}>search</Text>
      </Pressable>
    </View>
  );
};

export default SearchBar;
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
