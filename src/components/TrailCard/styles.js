import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  max-width: 45%;
  border-radius: 10px;
`;
export const TextContainer = styled.View`
  height: 30px;
  width: 190px;
  justify-content: center;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: -85px;
  margin-top: 15px;
  margin-left: 75px;
  elevation: 3;
  z-index: 100;
`;
export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  line-height: 22px;
  color: #FFF;
  margin-left: 16px;
`;
export const TrailPhoto = styled.Image`
  margin: 0 auto;
  width: 320px;
  height: 160px;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 15px;
`;
export const IconContainer = styled.TouchableOpacity`
  height: 25px;
  width: 73px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 100;
  bottom: 20px;
  right: -160px;
  position: absolute;
`;
export const Counter = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
`;