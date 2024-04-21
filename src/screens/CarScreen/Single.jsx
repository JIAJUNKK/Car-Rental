import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { singleStyles } from './styles';
import { useNavigation } from '@react-navigation/native'; 

const Single = ({car}) => {
  const navigation = useNavigation(); 

  return (
    <TouchableOpacity 
        onPress={() => navigation.navigate('CarDetailsScreen', { car })} 
        style={[singleStyles.container, singleStyles.containerShadow]}
    >
        
        <View style={singleStyles.textContainer}>
            <Text style = {singleStyles.modelTitle}>{car.model}</Text>
            <Text style = {singleStyles.modelTransmission}>{car.transmission}</Text>
        </View>

        <Image source={car.image} style={singleStyles.carImage}/>

        <View style={[singleStyles.priceButton, singleStyles.containerShadow]}>
            <Text style={singleStyles.priceText}>${car.pricePerDay}/day</Text>
        </View>


    </TouchableOpacity>

  )
}

export default Single
