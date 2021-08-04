import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import Carousel from 'react-native-snap-carousel';

import { Fontisto, AntDesign, Ionicons } from '@expo/vector-icons';

import {
  TrailDescriptionCarousel, SLIDER_WIDTH, ITEM_WIDTH
} from '../../components/TrailDescriptionCarousel';

import data from '../../../data';

import { Container, BackgroundImage, Header, IconArea, ButtonBegin, Title } from './styles';

export function TrailDetail() {
  const isCarousel = React.useRef(null);
  const navigation = useNavigation();

  function handleToMyTrails() {
    navigation.navigate('MyTrails');
  }
  function handleToHome() {
    navigation.navigate('Home');
  }
  return (
    <Container>
      <BackgroundImage
        source={require('../../assets/lagoinhaLeste_2.png')}
      />
      <Header>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={handleToHome}
        >
          <IconArea>
            <AntDesign
              name='back'
              color='#fff'
              size={23}
            />
          </IconArea>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={handleToMyTrails}
        >
          <IconArea>
            <Fontisto
              name='bookmark'
              color='#fff'
              size={22}
            />
          </IconArea>
        </TouchableOpacity>
      </Header>

      <Carousel
        layout='default'
        layoutCardOffset={10}
        ref={isCarousel}
        data={data}
        renderItem={TrailDescriptionCarousel}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />

      <ButtonBegin>
        <Title>
          Iniciar trilha
        </Title>
        <Ionicons
          name="ios-arrow-forward-circle-outline"
          color="black"
          size={28}
        />
      </ButtonBegin>

    </Container>
  )
}