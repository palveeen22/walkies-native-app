import React from "react";
import styled from "styled-components/native";
// import SvgType from "react-native-svg";
// import test from "../assets/2.svg";
// import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
// import { SvgUri } from "react-native-svg";
import MainImage from "../assets/mainImage";
import { Image } from "react-native";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ff335f;
  padding: 5px;
`;

const Box = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextH1 = styled.Text`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
`;

const Paragraph = styled.Text`
  color: #ffffff;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
`;

const ButtonNext = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 90%;
  padding-horizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #ff335f;
  font-weight: 500;
  text-align: center;
  padding: 15px;
  margin-right: 10px;
`;

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      {/* <SvgUri source={test} width="400" /> */}
      <MainImage />
      {/* <MaterialIcons name="pets" color="#fff" size={70} /> */}
      {/* <Image
        source={{
          uri: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={{ width: "80%", height: "50%", resizeMode: "contain" }}
      /> */}
      <Box>
        <TextH1>Walkies</TextH1>
        <Paragraph>
          Walking, babysitting and overstaying pets in Jakarta
        </Paragraph>
      </Box>
      <ButtonNext
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <ButtonText>Get Started</ButtonText>
        {/* <AntDesign
          name="arrowright"
          size={20}
          color="#ff335f"
          onPress={() => {
            navigation.navigate("Login");
          }}
        /> */}
      </ButtonNext>
    </Container>
  );
};

export default WelcomeScreen;
