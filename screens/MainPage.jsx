import React from "react";
import styled from "styled-components/native";
import SvgType from "react-native-svg";
import test from "../assets/2.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import MainImage from "../assets/mainImage";

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

const ButtonNext = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-horizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #ff335f;
  text-align: center;
  padding: 15px;
  margin-right: 10px;
`;

const MainPage = () => {
  return (
    <Container>
      {/* <SvgUri source={test} width="400" /> */}
      <MainImage />
      <Box>
        <TextH1>Walkies</TextH1>
        <Paragraph>
          Walking, babysitting and overstaying dogs in Jakarta
        </Paragraph>
      </Box>
      <ButtonNext
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        <ButtonText>Let's Start</ButtonText>
        <AntDesign name="arrowright" size={20} color="#ff335f" />
      </ButtonNext>
    </Container>
  );
};

export default MainPage;
