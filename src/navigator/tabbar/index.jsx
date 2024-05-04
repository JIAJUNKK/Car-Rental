import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

import HomeScreen from "../../screens/HomeScreen";
import SavedScreen from "../../screens/SavedScreen";
import SettingsScreen from "../../screens/SettingsScreen";

import CarScreen from "../../screens/CarScreen";
import CarDetailsScreen from "../../screens/CarScreen/CarDetailsScreen";
import BookCarMainScreen from "../../screens/BookCarScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CarStack() {
  return (
    <Stack.Navigator initialRouteName="CarScreen">
      <Stack.Screen name="CarScreen" component={CarScreen} options={{ headerShown: false }}/>

      <Stack.Screen name="CarDetailsScreen" 
        component={CarDetailsScreen} 
        options={{
          headerStyle: styles.header,
          headerTitle: "Details", headerTitleStyle: styles.leftHeaderTitle,
          headerBackTitleVisible: false, 
          headerTintColor: 'black',          
        }}
      />

      <Stack.Screen
          name="BookCar"
          component={BookCarMainScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.ModalPresentationIOS, 
          }}
      />

    </Stack.Navigator>
  );
}
export const BottomTabNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: "black",
          height: 60,
        },
        tabBarLabelStyle:{
          fontSize: 15, fontWeight: 'bold',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize = size + 4; 
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } 
          else if (route.name === 'Search'){
            iconName = focused ? 'compass' : 'compass-outline';
          }
          else if (route.name === 'Saved') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }
          else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
        tabBarActiveTintColor: "white",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Search" component={CarStack}/>
      <Tab.Screen name="Saved" component={SavedScreen}/>
      <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
  );
};
