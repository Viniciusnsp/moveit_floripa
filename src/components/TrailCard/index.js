import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  Container, TrailPhoto, TextContainer, Title, IconContainer, Counter
} from './styles';

export function TrailCard({ data, onPress, ...rest }) {
  return (
    <Container
      onPress={onPress}
      {...rest}
      activeOpacity={0.7}
    >

      <TextContainer>
        <Title>
          Lagoinha do leste
        </Title>
      </TextContainer>

      <TrailPhoto
        source={require('../../assets/lagoinhaLeste.jpg')}
      />

      <IconContainer
        activeOpacity={0.6}
      >
        <Ionicons
          name='star'
          color='#EDDF08'
          size={14}
          style={{ marginRight: 8 }}
        />
        <Counter>
          9/10
        </Counter>
      </IconContainer>
    </Container>
  )
}