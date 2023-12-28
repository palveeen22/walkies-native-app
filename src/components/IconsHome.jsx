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

const IconsHome = () => {
  return (
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
          <MaterialIcons name="pets" color="#ff335f" size={40} />
          <TextSmall>Pets Care</TextSmall>
        </CardService>

        <CardService>
          <MaterialIcons name="child-care" color="#ff335f" size={40} />
          <TextSmall>Pets sitter</TextSmall>
        </CardService>

        <CardService>
          <MaterialCommunityIcons name="hoop-house" color="#ff335f" size={40} />
          <TextSmall>overstaying</TextSmall>
        </CardService>
      </ServiceCardContainer2>
    </ContainerService>
  );
};

export default IconsHome;
