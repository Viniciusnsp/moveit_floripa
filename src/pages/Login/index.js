import React from 'react';
import {
  KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/core'

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Container, Form, Header, Title, SubTitle, Welcome,
  ContainerInput, FooterContainer, FooterText, Register, Footer
} from './styles';

export function Login() {
  const navigation = useNavigation();

  function handleMoveOnHome() {
    navigation.navigate('Home');
  }

  function handleRegister() {
    navigation.navigate('UserRegistration');
  }
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'position'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <Form>

            <Header>
              <Title>
                Move it Floripa
              </Title>
              <SubTitle>
                Vamos fazer seu login.
              </SubTitle>
              <Welcome>
                Bem vindo de volta.
              </Welcome>
            </Header>

            <ContainerInput>
              <Input
                placeholder='Email'
                placeholderTextColor="#BFBDBC"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType='email-address'
              />
              <Input
                placeholder='Senha'
                placeholderTextColor="#BFBDBC"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />
            </ContainerInput>

            <FooterContainer>
              <FooterText>
                Não possui uma conta?
              </FooterText>
              <TouchableOpacity
                onPress={handleRegister}
              >
                <Register>
                  Registre-se
                </Register>
              </TouchableOpacity>
            </FooterContainer>

            <Footer>
              <Button
                title='Entrar'
                onPress={handleMoveOnHome}
              />
            </Footer>

          </Form>

        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>
    </Container>

  )
}