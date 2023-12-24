import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Image from "../assets/contentMain";

// layout //
const Container = styled.View`
  position: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ffff;
  row-gap: 5px;
  padding-horizontal: 18px;
`;
const ContainerHeader = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  top: 10%;
  width: 100%;
`;

const Title = styled.Text`
  color: #ff335f;
  font-weight: bold;
  font-size: 20px;
`;

const Carousel = styled.View`
  position: absolute;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  align-items: start;
  top: 17%;
  width: 100%;
  padding-horizontal: 10px;
`;

const CarouselText = styled.Text`
  color: #ff335f;
  font-weight: 500;
  font-size: 40px;
`;
const CarouselParagraph = styled.Text`
  color: #ff335f;
  font-weight: 500;
  font-size: 20px;
`;

const TagContainer = styled.View`
  flex-direction: row;
  justify-content: start;
  gap: 15px;
  align-items: start;
  width: 100%;
`;

const CarouselTag = styled.View`
  background-color: #ff335f;
  border-radius: 40px;
  padding-horizontal: 10px;
`;

const TagText = styled.Text`
  color: #ffff;
  font-size: 28px;
  padding: 10px;
  font-weight: lighter;
`;

const Content = styled.View`
  position: flex;
  background-color: #ff335f;
  border-radius: 40px;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  width: 100%;
  height: 20%;
`;

const ContentUp = styled.View`
  position: absolute;
  flex-direction: row;
  top: 20%;
`;

const TextContent = styled.Text`
  color: #ffff;
  font-size: 20px;
`;

const TextContainer = styled.View`
  position: flex;
  flex-direction: column;
`;

const RowContent = styled.View`
  position: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const TextRow = styled.View`
  position: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const TextP = styled.Text`
  color: #fff;
`;
const HomePage = () => {
  return (
    <Container>
      {/* menu header */}
      <ContainerHeader>
        <Ionicons name="menu" color="#ff335f" size={35} />

        <Title>Walkies</Title>
        <Ionicons name="search-outline" color="#ff335f" size={25} />
      </ContainerHeader>
      {/* carousel */}
      <Carousel>
        {/* title carousel */}
        <CarouselText>Discover</CarouselText>
        <CarouselParagraph>Find what for your dog</CarouselParagraph>

        {/* tag carousel */}
        <TagContainer>
          <CarouselTag>
            <TagText>Walk</TagText>
          </CarouselTag>
          <CarouselTag>
            <TagText>Babysitting</TagText>
          </CarouselTag>
          <CarouselTag>
            <TagText>Overstaying</TagText>
          </CarouselTag>
        </TagContainer>
      </Carousel>

      {/* content */}
      <Content>
        <ContentUp>
          <Image />
          <TextContainer>
            <TextContent>Walking with Jonan</TextContent>
            <RowContent>
              <TextRow>
                <Ionicons name="location-sharp" color="#fff" size={18} />
                <TextP>1.3 KM</TextP>
              </TextRow>
              <TextRow>
                <Ionicons name="star-sharp" color="#fff" size={18} />
                <TextP>1.3 KM</TextP>
              </TextRow>
            </RowContent>
          </TextContainer>
        </ContentUp>
      </Content>

      {/* contont down */}
      {/* <Content>
        <ContentUp>
          <Image />
          <TextContent>test</TextContent>
        </ContentUp>
      </Content> */}
    </Container>
  );
};

export default HomePage;
