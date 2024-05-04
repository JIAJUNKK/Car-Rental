import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

const BookCarMainScreen = ({ route, navigation }) => {
  const { car } = route.params;

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backContainer}>
        <Text>Back</Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>

      <Text>Booking Car Screen</Text>
    </View>
  );
};

export default BookCarMainScreen;
