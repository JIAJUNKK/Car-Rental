import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  headerContainer:{
    padding: 10,
    marginTop: '1%', marginRight: '10%', marginBottom: '1%', marginLeft: '5%', 
  }, 
  title:{
    fontSize: 25, 
    fontWeight: 'bold',
  },
  subText:{
    color: 'gray',
    fontWeight: 'bold',
  }
});

const singleStyles = StyleSheet.create({
  container:{
    display: 'flex', alignSelf: 'center',
    backgroundColor: "white",
    height: 170, 
    borderRadius: 20,
    padding: 10, 
    marginBottom: '10%',
    width: 380
  }, 

  containerShadow:{
    shadowColor: 'black', // IOS
    shadowOffset: { height: 5, width: 1 }, // IOS
    shadowOpacity: 0.3, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },

  textContainer: {
    flex: 1, 
    marginRight: 10, 
    padding: 10,
  },
  modelTitle:{
    fontSize: 15, 
    fontWeight: 'bold',
    marginBottom: '3%',
  },
  modelTransmission:{
    color: 'gray',
  },
  carImage:{
    position: 'absolute', right: 0, top: 20, 
    width: 250, 
    height: '100%', 
    resizeMode: 'contain', 
  },
  priceButton:{
    backgroundColor: 'black',
    padding: 10, margin: 10,
    width: 90,
    borderRadius: 15,
  },
  priceText:{
    color: 'white',
    fontWeight: 'bold',
  }
})

const searchBarStyles = StyleSheet.create({
  container: {
    display: 'flex', flexDirection: 'row', 
    alignSelf: 'center', justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 15, margin: 10, 
    borderRadius: 15,
    width: 380,
    backgroundColor: '#F9F5F5',
  },
  containerShadow:{
    shadowColor: 'black', // IOS
    shadowOffset: { height: 5, width: 1 }, // IOS
    shadowOpacity: 0.3, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },

  input: {
    fontSize: 16,
    width: 300,
  },
})

const filterBarStyles = StyleSheet.create({
  container: {
    flex: 1, alignSelf: 'center',
    marginBottom: '5%',
    width: 400,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  containerShadow:{
    shadowColor: 'black', // IOS
    shadowOffset: { height: 4, width: 1 }, // IOS
    shadowOpacity: 0.3, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  button: {
    backgroundColor: '#F9F5F5',
    padding: 15,
    marginHorizontal: 5,
    width: 110, 
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonSelected:{
    backgroundColor: 'black',
  },
  buttonTextSelected:{
    color: 'white',
  }
});

export {styles, singleStyles, searchBarStyles, filterBarStyles};