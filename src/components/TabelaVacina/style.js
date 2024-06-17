import styled from 'styled-components/native';

const colorBorder = '#333';

// export const CardContainer = styled.View`
//   flex: 1;
//   /* width: 1200px; */
// `;

export const TableContainer = styled.View`
  flex: 1;
  width: 1200px;
  /* height: 100%; */
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TableItem = styled.View`
  flex: 1;
  /* width: 100%; */
`;
export const TableHeader = styled.Text`
  text-align: center;
  /* width: 100%; */
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

export const RegisterItem = styled.View`
  flex-direction: column;
  background-color: #4caf50;
  flex: 1;
`;

export const Dose = styled.Text`
  /* width: 100%; */
  text-align: center;
  padding: 10px 0;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-color: ${colorBorder};
`;

export const RegisterDate = styled.View`
  padding: 10px;
  /* width: 100%; */
  background-color: white;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-color: ${colorBorder};
`;
