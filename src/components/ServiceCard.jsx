import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  View,
} from "react-native";
import styled from "styled-components/native";
import {
  MaterialCommunityIcons,
  Ionicons,
  Octicons,
  Foundation,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import IconsHome from "../components/IconsHome";

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

const ServiceCardContainer3 = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
`;

const CardService = styled.View`
  flex-direction: column;
  align-items: center;
`;

const ImageService = styled.View`
  width: 40%;
  /* background-color: red; */
`;

const ContentImage = styled.View`
  width: 60%;
  /* background-color: red; */
  /* padding-vertical: 20px; */
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 5px;
`;
const ServiceCard = () => {
  return (
    <ContainerService>
      <ServiceCardContainer1>
        <Title>Recomendation</Title>
        <TextSmall>See All</TextSmall>
      </ServiceCardContainer1>

      {/* Bagian ketiga pertama*/}
      <ServiceCardContainer3>
        <ImageService>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1644675272883-0c4d582528d8?q=80&w=2582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{
              width: 130,
              height: 130,
              borderRadius: 10, // Half of the width or height to make it circular
              resizeMode: "cover",
            }}
          />
        </ImageService>
        <ContentImage>
          <Title>Doggy Moby</Title>
          <TextSmall>Specialist walking dog</TextSmall>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <AntDesign name="star" color="#FDCC0D" size={16} />
            <TextSmall>4.8 (4.120 reviews)</TextSmall>
          </View>
        </ContentImage>
      </ServiceCardContainer3>

      {/* Bagian ketiga kedua */}
      <ServiceCardContainer3>
        <ImageService>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1677165324281-3497b194c168?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{
              width: 130,
              height: 130,
              borderRadius: 10, // Half of the width or height to make it circular
              resizeMode: "cover",
            }}
          />
        </ImageService>
        <ContentImage>
          <Title>Molly Moby</Title>
          <TextSmall>Specialist cat</TextSmall>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <AntDesign name="star" color="#FDCC0D" size={16} />
            <TextSmall>4.2 (3.100 reviews)</TextSmall>
          </View>
        </ContentImage>
      </ServiceCardContainer3>

      {/* Bagian ketiga ketiga */}
      <ServiceCardContainer3>
        <ImageService>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1677165479422-bc6eb405bd21?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{
              width: 130,
              height: 130,
              borderRadius: 10, // Half of the width or height to make it circular
              resizeMode: "cover",
            }}
          />
        </ImageService>
        <ContentImage>
          <Title>Dolly Popy</Title>
          <TextSmall>Specialist cat and dog</TextSmall>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <AntDesign name="star" color="#FDCC0D" size={16} />
            <TextSmall>4.5 (4.722 reviews)</TextSmall>
          </View>
        </ContentImage>
      </ServiceCardContainer3>
    </ContainerService>
  );
};

export default ServiceCard;
