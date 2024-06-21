import styled from 'styled-components/native';

const colorBorder = '#333';

export const CardContainer = styled.View`
  flex: 1;
`;

export const TableContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TableItem = styled.View`
  flex: 1;
`;

export const TableHeader = styled.Text`
  text-align: center;
  background-color: #4caf50;
  padding: 10px;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-color: ${colorBorder};
`;

export const Register = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const RegisterItem = styled.TouchableOpacity`
  flex-direction: column;
  background-color: #4caf50;
  flex: 1;
`;

export const Dose = styled.Text`
  text-align: center;
  padding: 10px 0;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-color: ${colorBorder};
`;

export const RegisterDate = styled.View`
  padding: 10px;
  background-color: white;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-color: ${colorBorder};
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
`;

export const ModalText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`;

export const ModalInput = styled.TextInput`
  height: 40px;
  width: 80%;
  margin-bottom: 15px;
  border-color: ${colorBorder};
  border-width: 1px;
  padding: 10px;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #4caf50;
  padding: 10px 20px;
  border-radius: 10px;
`;

export const ModalButtonText = styled.Text`
  color: white;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 10px;
  width: 100px;
  align-items: center;
  background-color: green;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
