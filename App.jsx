import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import MainPage from "./screens/MainPage";
import TestBox from "./screens/TestBox";
import RegisterScreen from "./screens/RegisterScreen";
import HomePage from "./screens/HomePage";

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <MainPage /> */}
        {/* <LoginScreen /> */}
        {/* <RegisterScreen /> */}
        <HomePage />
      </NavigationContainer>
    </>
  );
}
