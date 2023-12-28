import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import styled from "styled-components/native";
import {
  MaterialIcons,
  Ionicons,
  AntDesign,
  FontAwesome6,
  Feather,
} from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 40px;
  padding-horizontal: 18px;
  background-color: #fff;
`;

const ProfileHeader = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
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

const ProfileCenter = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ServiceCardContainer3 = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

const ButtonCard = styled.TouchableOpacity`
  position: absolute;
  bottom: 5%;
  background-color: #fff;
  width: 60%;
  padding: 5px;
  border-radius: 8px;
  border: 1px;
`;

const CardService = styled.View`
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
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

const ProfileDown = styled.View`
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
`;

const ButtonNext = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #ff335f;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  align-self: center; /* Added this line */
  margin-top: 20px;
  width: 90%;
  padding-horizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: 500;
  text-align: center;
  padding: 15px;
  margin-right: 10px;
`;

const ProfileScreen = ({ navigation }) => {
  return (
    <Container>
      <SafeAreaView>
        {/* Bagian atas */}
        <ProfileHeader>
          <MaterialIcons name="arrow-back-ios" size={25} />
          <Title>Profile</Title>
          <Ionicons name="settings-outline" size={25} />
        </ProfileHeader>

        {/* Bagian kedua */}
        <ProfileCenter>
          <ServiceCardContainer3>
            <ImageService>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              <Title>Jenny Doe</Title>
              <TextSmall>Jakarta, Indonesia</TextSmall>
              <ButtonCard>
                <Text style={{ fontSize: 15, textAlign: "center" }}>
                  Edit Profile
                </Text>
              </ButtonCard>
            </ContentImage>
          </ServiceCardContainer3>
        </ProfileCenter>

        {/* Bagian ketiga */}
        <ProfileHeader>
          <Text style={{ fontSize: 17, textAlign: "center", color: "#a6a6a6" }}>
            My Orders
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text
              style={{ fontSize: 15, textAlign: "center", color: "#a6a6a6" }}
            >
              View All my orders
            </Text>
            <AntDesign name="right" color={"#a6a6a6"} />
          </View>
        </ProfileHeader>
        <CardService>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Ionicons name="wallet-outline" size={30} />
            <Text style={{ fontSize: 15, textAlign: "center" }}>To Pay</Text>
          </View>
          <AntDesign name="right" size={15} />
        </CardService>
        <CardService>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <MaterialIcons name="local-shipping" size={30} />
            <Text style={{ fontSize: 15, textAlign: "center" }}>To Ship</Text>
          </View>
          <AntDesign name="right" size={15} />
        </CardService>
        <CardService>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Ionicons name="checkbox-outline" size={30} />
            <Text style={{ fontSize: 15, textAlign: "center" }}>To Recive</Text>
          </View>
          <AntDesign name="right" size={15} />
        </CardService>
        <CardService>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <MaterialIcons name="favorite-outline" size={30} />
            <Text style={{ fontSize: 15, textAlign: "center" }}>Wishlist</Text>
          </View>
          <AntDesign name="right" size={15} />
        </CardService>

        {/* Bagian map */}
        <ProfileDown>
          <Text style={{ fontSize: 17, color: "#a6a6a6" }}>Address</Text>
          <View
            style={{
              padding: 15,
              // width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 15,
            }}
          >
            <Feather name="map" size={30} />
            <View
              style={{
                width: "60%",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Text>123 Main Street, Brother land, Jerusalem</Text>
              {/* <TextSmall>69 912 37 889</TextSmall> */}
            </View>
          </View>
        </ProfileDown>
        <ButtonNext
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <ButtonText>Get Started</ButtonText>
        </ButtonNext>
      </SafeAreaView>
    </Container>
  );
};

export default ProfileScreen;
