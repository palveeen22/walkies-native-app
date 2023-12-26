import React from "react";
import { FlatList, SafeAreaView, ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import {
  MaterialCommunityIcons,
  Ionicons,
  Octicons,
  MaterialIcons,
} from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 40px;
  background-color: #e6e7e1;
`;

const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 18px;
`;

const Location = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const Title = styled.Text`
  color: #000000;
  font-weight: 300;
  font-size: 15px;
`;

const CardContainer = styled.View`
  padding-top: 20px;
  /* border: 1px; */
`;

const Card = styled.View`
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
`;

const ContainerInput = styled.View`
  position: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const SearchInput = styled.TextInput`
  color: #ff335f;
  background-color: #e6e7e1;
  font-size: 28px;
  height: 40px;
  width: 85%;
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

const TitleCard = styled.Text`
  color: #000;
  font-size: 30px;
  font-weight: 500;
`;

const Tag = styled.View`
  background-color: #ff335f;
  position: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  padding: 5px;
`;

const HomeScreen = () => {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          {/* up content */}
          <ContainerHeader>
            <Ionicons name="person" color="#ff335f" size={25} />
            <Location>
              <Ionicons name="location-sharp" color="#FFAC1C" size={18} />
              <Title>12 Oak Street</Title>
              <Ionicons name="chevron-down" color="#7F8C8D" size={25} />
            </Location>
            <Ionicons name="notifications-outline" color="#ff335f" size={25} />
          </ContainerHeader>

          {/* second content */}
          <CardContainer>
            <Card>
              <ContainerInput>
                <SearchInput placeholder="find here.." />
                <Ionicons name="search" color="#ff335f" size={25} />
              </ContainerInput>
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
              </Reklama>
            </Card>
          </CardContainer>

          {/* third content */}
          <CardContainer>
            <Card>
              <ContainerInput>
                <TitleCard>Popular</TitleCard>
                <ContainerInput>
                  <Text style={{ color: "#595959" }}>See All</Text>
                  <Octicons name="arrow-right" color="#595959" size={15} />
                </ContainerInput>
              </ContainerInput>
              <ContainerInput>
                <Tag>
                  <MaterialIcons name="pets" color="#ffff" size={25} />
                  {/* <Text style={{ color: "#fff" }}>Pet Food</Text> */}
                </Tag>
              </ContainerInput>
            </Card>
          </CardContainer>

          {/* four content */}
          <CardContainer>
            <Card>
              <ContainerInput>
                <SearchInput placeholder="find here.." />
                <Ionicons name="search" color="#ff335f" size={25} />
              </ContainerInput>
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
              </Reklama>
            </Card>
          </CardContainer>

          {/* five content */}
          <CardContainer>
            <Card>
              <ContainerInput>
                <SearchInput placeholder="find here.." />
                <Ionicons name="search" color="#ff335f" size={25} />
              </ContainerInput>
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
              </Reklama>
            </Card>
          </CardContainer>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default HomeScreen;
