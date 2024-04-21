import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        display: 'flex', alignSelf: 'center', alignItems: 'center',
        height: 200, 
        width: "100%",
    }, 
    carImage:{
        width: 400, 
        height: '100%', 
        resizeMode: 'contain', 
    },
    textContainer: {
        marginHorizontal: 25, 
        padding: 10,
    },
    modelTitle:{
        fontSize: 25, 
        fontWeight: 'bold',
    },
    modelTransmission:{
        color: 'gray',
    },
    aboutTitle: {
        fontSize: 30, 
        fontWeight: 'bold',
        marginVertical: 20,
    },

    specificationContainer:{
        backgroundColor: 'white',
        borderRadius: 20, 
        width: 350, 
        display: 'flex', alignSelf: 'center', 
        padding: 15, marginVertical: 10, 
        height: 150, 
    },
    containerShadow:{
        shadowColor: 'black', // IOS
        shadowOffset: { height: 5, width: 1 }, // IOS
        shadowOpacity: 0.3, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    specificationInnerContainer: {
        display: 'flex', flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-evenly',
    }, 
    
    seatImage: {
        resizeMode: 'contain', 
        height: 120, 
        width: 50, 
    },
    engineImage: {
        resizeMode: 'contain', 
        height: 120, 
        width: 70, 
    }, 
    button:{
        display: 'flex', alignSelf: 'center', alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 10, margin: 10, marginVertical: 50, 
        width: 250,
        borderRadius: 15,
        height: 70, 
    }
});

export {styles};