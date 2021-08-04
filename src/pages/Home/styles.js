import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  width: 100%;
  background-color: #000;
`;
export const MapImage = styled.Image `
  width: 580px;
  height: 341px;
  margin-left: -118px;
  margin-top: -50px;
  position: absolute;
`;
export const Title = styled.Text`
  color: #FFFF;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-top: 64px;
`;
export const ContainerInput = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 32px auto;
  opacity: .8;
`;
export const Input = styled.TextInput`
  width: 256px;
  height: 42px;
  padding-left: 22px; 
  background-color:rgba(255,255,255,0.1);
  color: #BFBDBC;
  font-size: 12px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;
export const BoxIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 42px;
  padding-right: 15px;
  background-color: rgba(255,255,255,0.1);;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;
export const SubTitle = styled.Text`
  align-items: center;
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: justify;
`;
export const ListTrails = styled.FlatList``;