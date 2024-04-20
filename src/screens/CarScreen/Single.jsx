import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { singleStyles } from './styles';

const Single = ({car}) => {
  return (
    <TouchableOpacity 
        onPress={() => console.log(`Button pressed on ${car.model}`)} 
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
