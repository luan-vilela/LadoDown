import React, { useEffect } from "react";
import { Skeleton, VStack, HStack, Center, NativeBaseProvider, ScrollView } from "native-base";
import { BackHandler } from "react-native";

import HeaderAdmin from "../../../components/HeaderAdmin";
import ReelsSlider from "../../../components/ReelsSlider";
import CircleMenu from "../../../components/CircleMenu";

    export default () => {
        return (
          <NativeBaseProvider>
            <HeaderAdmin />

            <ScrollView>

                <ReelsSlider />
                <CircleMenu />
            </ScrollView>


          </NativeBaseProvider>
        );
    };
    