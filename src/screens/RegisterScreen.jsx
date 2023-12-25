import React from "react";
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

const ContainerHeader = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 25%;
  width: 100%;
`;

const ContainerTitle = styled.View`
  position: flex;
  flex-direction: row;
  column-gap: 7px;
`;

const TitleText = styled.Text`
  font-size: 40px;
  color: white;
  font-weight: 800;
`;

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  width: 100%;
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

const ContainerFooter = styled.View`
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const TextFooter = styled.Text`
  font-size: 16px;
  color: #fff;
`;

const TouchButton = styled.TouchableOpacity`
  position: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterScreen = ({ navigation }) => {
  return (
    <Container>
      {/* header  */}
      <ContainerHeader>
        <ContainerTitle>
          <FontAwesome5 name="dog" color="white" size={45} />
          <TitleText style={{ fontSize: 50, marginTop: -6 }}>Walkies</TitleText>
        </ContainerTitle>
      </ContainerHeader>

      {/* form */}
      <KeyboardAvoidingView behavior="padding">
        <FormContainer>
          <TextInput placeholder="username123" />
          <TextInput placeholder="your_email@mail.ru" />
          <TextInput
            placeholder="input your password"
            textContentType="password"
            // onChangeText={setPassword}
            // value={password}
            secureTextEntry
          />
          <SignInButton>
            <TextButton>Register Now!</TextButton>
          </SignInButton>
        </FormContainer>
      </KeyboardAvoidingView>

      {/* Footer */}
      <ContainerFooter>
        <TextFooter>I already have an account</TextFooter>
        <TouchButton
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <TextFooter style={{ marginTop: 3, textDecorationLine: "underline" }}>
            Signed in
          </TextFooter>
        </TouchButton>
      </ContainerFooter>
    </Container>
  );
};

export default RegisterScreen;
