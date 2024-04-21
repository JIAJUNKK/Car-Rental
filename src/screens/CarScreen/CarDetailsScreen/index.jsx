import React from 'react'
import { View, Text} from 'react-native'

const CarDetailsScreen = ({route}) => {
    const { car } = route.params; 

    return (
        <View>
            <Text>{car.model}</Text>
        </View>
    )
}

export default CarDetailsScreen
