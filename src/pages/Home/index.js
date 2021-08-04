import React from 'react';
import {
  KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { Ionicons } from '@expo/vector-icons';

import { TrailCard } from '../../components/TrailCard';

import {
  Container, Title, ContainerInput, Input, SubTitle, ListTrails,
  BoxIcon, MapImage
} from './styles';

export function Home() {
  const navigation = useNavigation();

  function handleToTrailDetail() {
    navigation.navigate('TrailDetail');
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <MapImage
            source={require('../../assets/map-preview.png')}
          />

          <Title>
            As melhores trilhas de Florianópolis
          </Title>

          <ContainerInput>
            <Input
              placeholder='Buscar trilhas...'
              placeholderTextColor="white"
              autoCapitalize="none"
              autoCorrect={false}
            >
            </Input>

            <BoxIcon
              activeOpacity={0.9}
            >
              <Ionicons
                name='search-outline'
                color='#BFBDBC'
                size={20}
              />
            </BoxIcon>
          </ContainerInput>

          <SubTitle>
            Trilhas populares
          </SubTitle>

          <ListTrails
            data={[{ id: 1, title: 'teste' }, { id: 2, title: 'teste' }, { id: 3, title: 'teste' }, { id: 4, title: 'teste' }]}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <TrailCard
                data={item}
                onPress={() => handleToTrailDetail()}
              />
            )}
            showsVerticalScrollIndicator={false}
          />

        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  )
}