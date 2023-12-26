import styled from "styled-components/native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreenCard from "../screens/HomeScreenCard";
// import ProfileScreen from "../screens/ProfileScreen";
// import SearchScreen from "../screens/SearchScreen";
// import PostCreateScreen from "../screens/PostCreateScreen";
// import { BlurView } from "expo-blur";
import HomeScreen from "../screens/HomeScreen";
import Flex from "../screens/Flex";
import TestBox from "../screens/TestBox";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "home" : "home";
            return <Feather name={iconName} color="#ff335f" size={24} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Box"
        component={TestBox}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "post-add" : "post-add";
            return <MaterialIcons name={iconName} color="#ff335f" size={24} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Flex"
        component={Flex}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "inbox" : "inbox";
            return <Feather name={iconName} color="#ff335f" size={24} />;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
