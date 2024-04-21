import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity} from 'react-native'
import {styles} from './styles';

const CarDetailsScreen = ({route}) => {
    const { car } = route.params; 

    return (
        <ScrollView style={{backgroundColor: '#F9F5F5'}}>
            <View style={styles.container}>
                <Image source={car.image} style={styles.carImage}/>
            </View>

            <View style={styles.textContainer}>
                <Text style = {styles.modelTitle}>{car.model}</Text>
                <Text style = {styles.modelTransmission}>{car.transmission}</Text>
                <Text style = {styles.aboutTitle}>About</Text>
                <Text style= {{lineHeight: 20}}>{car.description}</Text>
            </View>

            <View style={[styles.specificationContainer, styles.containerShadow]}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Specification</Text>
                <View style={styles.specificationInnerContainer}>
                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <Image 
                            source={require('../../../assets/carSeat.png')}
                            style={styles.seatImage}
                        />
                        <Text style={{fontSize: 17, fontWeight: 'bold', marginHorizontal: 10}}>{car.seat} seat</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <Image 
                            source={require('../../../assets/engine.png')}
                            style={styles.engineImage}
                        />
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 10}}>{car.engineCC} cc</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity 
                style={[styles.button, styles.containerShadow]}
                onPress={()=> {console.log("Booking...")}}
            >
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Book Now</Text>
            </TouchableOpacity>


        </ScrollView>
    )
}

export default CarDetailsScreen
