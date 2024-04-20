// CarScreen.jsx
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { carModels } from '../../constants';
import { styles } from './styles';
import Single from './Single';
import SearchBar from './SearchBar';
import CarFilter from './CarFilter';

const CarScreen = () => {
  const [selectedType, setSelectedType] = useState(null);

  const filterCars = (type) => {
    setSelectedType(type);
  };

  return (
    <ScrollView style={{ backgroundColor: '#F9F5F5' }}>
      
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Find Your Car Here!</Text>
        <Text style={styles.subText}>Browse and choose your perfect car</Text>
      </View>
      <SearchBar />
      <CarFilter onSelectType={filterCars} />

      {carModels
        .filter((car) => !selectedType || car.type === selectedType)
        .map((car, index) => (
          <Single key={index} car={car} />
        ))}
    </ScrollView>
  );
};

export default CarScreen;
