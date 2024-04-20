// CarFilter.jsx
import {React, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { carModels } from '../../constants';
import { filterBarStyles } from './styles';

const CarFilter = ({ onSelectType }) => {
  const [selected, setSelected] = useState('All');

  let types = [...new Set(carModels.map((car) => car.type))];
  types = ['All', ...types];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        filterBarStyles.button, 
        filterBarStyles.containerShadow,
        selected === item && filterBarStyles.buttonSelected,
      ]}
      onPress={() => {
        setSelected(item === selected ? null : item);
        onSelectType(item === 'All' ? null : item);
      }}
    >
      <Text 
        style={[
          filterBarStyles.buttonText, 
          selected === item && filterBarStyles.buttonTextSelected,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={filterBarStyles.container}>
      <FlatList
        horizontal
        data={types}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={filterBarStyles.buttonContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CarFilter;
