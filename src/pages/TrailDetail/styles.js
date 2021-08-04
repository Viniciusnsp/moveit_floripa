import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;
export const BackgroundImage = styled.Image`
  position: absolute;
  height: 65%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 17px;
  margin-right: 17px;
`;

export const IconArea = styled.View`
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  width: 51px;
  height: 51px;
  top: 10px;
  border-radius: 30px;
`;

export const ButtonBegin = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 170px;
  height: 40px;
  background-color: #5DEE75;
  border-radius: 25px;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #FFF;
  line-height: 25px;
  margin-right: 12px;
  margin-left: 5px;
`;