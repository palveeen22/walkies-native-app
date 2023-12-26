import React from "react";
import { FlatList, SafeAreaView, ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import {
  MaterialCommunityIcons,
  Ionicons,
  Octicons,
  Foundation,
  MaterialIcons,
} from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 40px;
  padding-horizontal: 18px;
  background-color: #fff;
`;

const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.View`
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
`;

const Title = styled.Text`
  color: #404040;
  font-weight: 700;
  font-size: 20px;
`;

const TextSmall = styled.Text`
  color: #a6a6a6;
  font-weight: 600;
  font-size: 12px;
`;

const ContainerCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ff335f;
  margin-top: 30px;
  padding: 15px;
  width: 100%;
  border-radius: 15px;
`;

const LeftCard = styled.View`
  width: 70%;
  flex-direction: column;
  gap: 10px;
`;

const CardTitle = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
`;

const ButtonCard = styled.TouchableOpacity`
  background-color: #fff;
  width: 60%;
  padding: 5px;
  border-radius: 15px;
`;

const ContainerService = styled.View`
  margin-top: 30px;
  flex-direction: column;
  gap: 15px;
`;

const ServiceCardContainer1 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ServiceCardContainer2 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
`;

const CardService = styled.View`
  flex-direction: column;
  align-items: center;
`;

const HomeScreen = () => {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          {/* Bagian atas */}
          <ContainerHeader>
            <HeaderLeft>
              <Title>Hi, Momon!</Title>
              <TextSmall>How are you Today?</TextSmall>
            </HeaderLeft>
            <Ionicons name="notifications-outline" color="#ff335f" size={25} />
          </ContainerHeader>
          {/* Bagian kedua */}
          <ContainerCard>
            <LeftCard>
              <CardTitle>Book and schedule for your pets</CardTitle>
              <ButtonCard>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#ff335f",
                  }}
                >
                  Find Nerby
                </Text>
              </ButtonCard>
            </LeftCard>
            <MaterialCommunityIcons name="dog" color="#fff" size={80} />
          </ContainerCard>
          {/* Bagian kedua */}
          <ContainerService>
            <ServiceCardContainer1>
              <Title>Our Services</Title>
              <TextSmall>See All</TextSmall>
            </ServiceCardContainer1>
            {/* Bagian kedua card */}
            <ServiceCardContainer2>
              <CardService>
                <Foundation name="guide-dog" color="#ff335f" size={40} />
                <TextSmall>Pets Walking</TextSmall>
              </CardService>

              <CardService>
                <MaterialCommunityIcons
                  name="bathtub-outline"
                  color="#ff335f"
                  size={40}
                />
                <TextSmall>Pets Care</TextSmall>
              </CardService>

              <CardService>
                <MaterialIcons name="child-care" color="#ff335f" size={40} />
                <TextSmall>Pets sitter</TextSmall>
              </CardService>

              <CardService>
                <MaterialCommunityIcons
                  name="hoop-house"
                  color="#ff335f"
                  size={40}
                />
                <TextSmall>overstaying</TextSmall>
              </CardService>
            </ServiceCardContainer2>
          </ContainerService>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default HomeScreen;
