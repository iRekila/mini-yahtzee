import Home from './components/Home';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} options={{tabBarStyle:{display:'none'},tabBarLabelStyle:{color:"#d1301fcd"},tabBarIcon:()=><AntDesign name="home" size={24} color="black" />}}/>
          <Tab.Screen name='Gameboard' component={Gameboard} options={{tabBarLabelStyle:{color:"#d1301fcd"},tabBarIcon:()=> <FontAwesome5 name="dice" size={24} color="black" />}}/>
          <Tab.Screen name='Scoreboard' component={Scoreboard} options={{tabBarLabelStyle:{color:"#d1301fcd"},tabBarIcon:()=> <FontAwesome5 name="clipboard-list" size={24} color="black" />}}/>
        </Tab.Navigator>
      </NavigationContainer> 
  );
}

 
