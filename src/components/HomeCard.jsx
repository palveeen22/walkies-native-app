import React from "react";
import { SafeAreaView, Text } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import Image from "../assets/contentMain";

//style

const ContainerMenu = styled.View`
  /* padding-top: 40px; */
`;

const MenuBox = styled.View`
  /* padding-vertical: 20px; */
  background-color: #fff;
  position: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  border-radius: 20px;
  padding: 25px;
  /* align-items: center; */
  width: 100%;
  height: 65%;
`;

const FormInput = styled.View`
  position: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const SearchInput = styled.TextInput`
  color: #ff335f;
  background-color: #d3d2cd;
  font-size: 28px;
  height: 45px;
  width: 90%;
  font-size: 16px;
  padding: 10px;
  border-radius: 20px;
  text-align: start;
`;

const Reklama = styled.View`
  position: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ff335f;
  margin-top: 30px;
  border-radius: 20px;
  height: 90px;
  padding: 20px;
`;

const ReklamaText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  width: 100%;
`;

const HomeCard = () => {
  return (
    <ContainerMenu>
      <MenuBox>
        <KeyboardAvoidingView behavior="padding">
          <FormInput>
            <SearchInput placeholder="find here.." />
            <Ionicons name="search" color="#ff335f" size={25} />
          </FormInput>
          <Reklama>
            <ReklamaText>
              Free service on first {"\n"}
              subscription
            </ReklamaText>
            <MaterialCommunityIcons
              name="dog-service"
              color="#ffff"
              size={55}
            />
            {/* <Image /> */}
          </Reklama>
          {/* <Text>tyesx</Text> */}
        </KeyboardAvoidingView>
      </MenuBox>
    </ContainerMenu>
  );
};

export default HomeCard;
