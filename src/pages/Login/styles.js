import styled from 'styled-components/native';

  export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    background-color: #000;
  `;
  export const Form = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `;
  export const Header = styled.View`
    flex: 1;
  `;
  export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    line-height: 33px;
    text-align: center;
    align-items: center; 
    color: #FFF;
    margin-top: 64px;
    margin-bottom: 35px;
  `;
  export const SubTitle = styled.Text`
    font-size: 28px;
    font-weight: bold;
    line-height: 38px;
    text-align: left;
    color: #FFF;
  `;

  export const Welcome = styled.Text`
    font-size: 22px;
    font-weight: 300;
    line-height: 28px;
    text-align: left;
    color: #BFBDBC;
    margin-top: 10px;
  `;
  export const ContainerInput = styled.View`
    flex: 1;
    width: 100%;
    height: 217px;
  `;
  export const FooterContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 20px;
  `;
  export const FooterText = styled.Text`
    color:#FFF;
    font-weight: 300;
    font-size: 16px;
  `;
  export const Register = styled.Text`
    color: #FFF;
    font-weight: bold;
    margin-left: 5px;
    font-size: 16px;
  `;
  export const Footer = styled.View`
    width: 100%;
    margin-bottom: 20px;
  `;
