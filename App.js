import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { LogBox } from "react-native";
import Investment from "./src/screens/Investment";
import Portfolio from "./src/screens/Portfolio";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Investment">
        <Tab.Screen
          name="Investment"
          component={Investment}
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: () => {
              return (
                <FontAwesome5 name="hand-holding-usd" size={24} color="black" />
              );
            },
          }}
        />

        <Tab.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: () => {
              return <Entypo name="wallet" size={24} color="black" />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
