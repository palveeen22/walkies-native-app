import React, { useState } from "react";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

const Container = styled.View`
  position: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ff335f;
  row-gap: 5px;
`;

const FormContainer = styled.View`
  position: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const TextInput = styled.TextInput`
  color: #ff335f;
  background-color: white;
  font-size: 28px;
  height: 45px;
  width: 80%;
  font-size: 16px;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
`;

const TitleText = styled.Text`
  font-size: 40px;
  color: white;
  font-weight: 800;
`;

const SignInButton = styled.TouchableOpacity`
  position: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 80%;
  height: 45px;
  background-color: #fff;
`;

const TextButton = styled.Text`
  font-size: 16px;
  color: #ff335f;
`;

const TextFooter = styled.Text`
  font-size: 16px;
  color: #fff;
`;

const ContainerFooter = styled.View`
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const ContainerTitle = styled.View`
  position: flex;
  flex-direction: row;
  column-gap: 7px;
`;

const ContainerHeader = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 25%;
  width: 100%;
`;

const TouchButton = styled.TouchableOpacity`
  position: flex;
  justify-content: center;
  align-items: center;
`;

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  width: 100%;
`;

const LoginScreen = ({ navigation }) => {
  // const [password, setPassword] = useState("");

  const pressLogin = () => {
    // Perform login logic
  };

  return (
    <>
      <Container>
        {/* Header */}
        <ContainerHeader>
          <ContainerTitle>
            <FontAwesome5 name="dog" color="white" size={45} />
            <TitleText style={{ fontSize: 50, marginTop: -6 }}>
              Walkies
            </TitleText>
          </ContainerTitle>
        </ContainerHeader>

        {/* Form */}
        <KeyboardAvoidingView behavior="padding">
          <FormContainer>
            <TextInput placeholder="vlad@mail.ru" />
            <TextInput
              placeholder="input your password"
              textContentType="password"
              // onChangeText={setPassword}
              // value={password}
              secureTextEntry
            />
            <SignInButton
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <TextButton>Signed In</TextButton>
            </SignInButton>
          </FormContainer>
        </KeyboardAvoidingView>

        {/* Footer */}
        <ContainerFooter>
          <TextFooter>Wanna Create an Account?</TextFooter>
          <TouchButton
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <TextFooter
              style={{ marginTop: 3, textDecorationLine: "underline" }}
            >
              Try for Register
            </TextFooter>
          </TouchButton>
        </ContainerFooter>
      </Container>
    </>
  );
};

export default LoginScreen;
