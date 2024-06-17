import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import * as S from './style';
import { VACCINES } from '../../mock/vaccines';

const TabelaVacina = () => {
  const vaccines = VACCINES;

  return (
    <ScrollView horizontal={true}>
      {/* <S.CardContainer> */}
      <S.TableContainer>
        {vaccines.map((vaccine, index) => (
          <S.TableItem key={index}>
            <S.TableHeader>{vaccine.vacina}</S.TableHeader>
            <S.Register>
              {vaccine.esquemaDosagem.map((esquema, index) => (
                <S.RegisterItem key={esquema.id}>
                  <S.Dose>{esquema.dose}</S.Dose>
                  <S.RegisterDate>
                    <Text>Data: __/__/____ </Text>
                    <Text>Lote: </Text>
                    <Text>Unidade: </Text>
                  </S.RegisterDate>
                </S.RegisterItem>
              ))}
            </S.Register>
          </S.TableItem>
        ))}
      </S.TableContainer>
      {/* </S.CardContainer> */}
    </ScrollView>
  );
};

export default TabelaVacina;
