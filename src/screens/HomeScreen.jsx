import React from "react";
import { SafeAreaView, Text } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Image from "../assets/contentMain";
import HomeCard from "../components/HomeCard";

// layout //
const Container = styled.View`
  position: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #d3d2cd;
`;
const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  width: 100%;
  padding-horizontal: 18px;
`;

const Location = styled.View`
  position: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const Title = styled.Text`
  color: #000000;
  font-weight: 300;
  font-size: 15px;
`;

const HomeScreen = () => {
  return (
    <Container>
      {/* Navbar */}
      <SafeAreaView>
        <ContainerHeader>
          <Ionicons name="person" color="#ff335f" size={25} />
          <Location>
            <Ionicons name="location-sharp" color="#FFAC1C" size={18} />
            <Title>12 Oak Street</Title>
            <Ionicons name="chevron-down" color="#7F8C8D" size={25} />
          </Location>
          <Ionicons name="notifications-outline" color="#ff335f" size={25} />
        </ContainerHeader>
        <HomeCard />
      </SafeAreaView>
    </Container>
  );
};

export default HomeScreen;
