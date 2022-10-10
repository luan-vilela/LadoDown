import React, { useEffect } from "react";
import { Skeleton, VStack, HStack, Center, NativeBaseProvider, ScrollView } from "native-base";
import { BackHandler } from "react-native";

import HeaderAdmin from "../../../../components/HeaderAdmin";
import TabelaVacina from "../../../../components/TabelaVacina";

    export default () => {
        return (
          <NativeBaseProvider>
            <HeaderAdmin title={"Carteira de vacinação"} />
            
            <ScrollView>
              <TabelaVacina />
            </ScrollView>
          </NativeBaseProvider>
        );
    };
    