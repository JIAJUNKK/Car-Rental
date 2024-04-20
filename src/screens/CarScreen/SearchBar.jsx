import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { searchBarStyles } from './styles';
const SearchBar = () => {
  return (
    <View style={[searchBarStyles.container, searchBarStyles.containerShadow]}>
        <TextInput
            style={searchBarStyles.input}
            placeholder="Search car here"
            placeholderTextColor="#888"
        />

        <TouchableOpacity
            onPress={() => console.log("Searching...")}
        >
            <Ionicons name="search" size={24} color="#888" style={searchBarStyles.icon} />
        </TouchableOpacity>

    </View>
  );
};


export default SearchBar;
