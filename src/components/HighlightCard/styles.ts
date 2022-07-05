import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
    width: ${RFValue(48)}px;
    border-radius: 5px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;;
`;

export const Header = styled.View`

`;
export const Title = styled.Text`

`;
export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secondary };
    font-size: ${RFValue(300)}px;
`;
export const Footer = styled.View`

`;
export const Amount = styled.Text`

`;
export const LastTransaction = styled.Text`

`;