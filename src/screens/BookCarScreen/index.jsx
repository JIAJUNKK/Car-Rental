import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

import BookingCalendar from './BookingCalendar';
const BookCarMainScreen = ({ route, navigation }) => {
  const { car } = route.params;

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backContainer}>
        <Text>Back</Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>

      <BookingCalendar/>

    </View>
  );
};

export default BookCarMainScreen;
