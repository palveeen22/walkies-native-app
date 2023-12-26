import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreenCard from "../screens/HomeScreenCard";
// import ProfileScreen from "../screens/ProfileScreen";
// import SearchScreen from "../screens/SearchScreen";
// import PostCreateScreen from "../screens/PostCreateScreen";
// import { BlurView } from "expo-blur";
import HomeScreen from "../screens/HomeScreen";
import Flex from "../screens/Flex";

// import HomeStack from "../stacks/HomeStack";
// import MessageScreen from "../screens/MessageScreen";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "ios-people" : "ios-people-outline";
            return <Ionicons name={iconName} color="white" size={24} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Flex"
        component={Flex}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "ios-people" : "ios-people-outline";
            return <Ionicons name={iconName} color="white" size={24} />;
          },
          headerShown: false,
        }}
      />
      {/* <Tab.Screen name="Home" component={HomeScreen}/> */}
    </Tab.Navigator>
  );
};

export default TabBar;
