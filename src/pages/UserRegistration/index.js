import React from 'react';
import {
  TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { Ionicons } from '@expo/vector-icons';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Container, ContainerTitle, Icon, Title, Header, SubTitle, Welcome,
  Form, Footer
} from './styles';

export function UserRegistration() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('Home');
  }
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'position'}
        >
          <ContainerTitle>
            <Icon>
              <Ionicons
                name='md-arrow-undo-outline'
                size={22}
                color='#FFF'
              />
            </Icon>
            <Title>
              Move it Floripa
            </Title>
          </ContainerTitle>

          <Header>
            <SubTitle>
              Crie sua conta.
            </SubTitle>
            <Welcome>
              E seja bem vindo!
            </Welcome>
          </Header>

          <Form>
            <Input
              placeholder='Nome'
              placeholderTextColor="#BFBDBC"
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Input
              placeholder='Email'
              placeholderTextColor="#BFBDBC"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Input
              placeholder='Telefone'
              placeholderTextColor="#BFBDBC"
              keyboardType='phone-pad'
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Input
              placeholder='Senha'
              placeholderTextColor="#BFBDBC"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
            <Input
              placeholder='Confirme sua senha'
              placeholderTextColor="#BFBDBC"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
          </Form>

          <Footer>
            <Button
              title='Cadastrar'
              onPress={handleLogin}
            />
          </Footer>

        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  )
}