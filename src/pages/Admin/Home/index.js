import React from "react";
import { Skeleton, VStack, HStack, Center, NativeBaseProvider, ScrollView } from "native-base";
import HeaderAdmin from "../../../components/HeaderAdmin";
import ReelsSlider from "../../../components/ReelsSlider";

const Dashboard = () => {
  return <Center w="100%">
      <VStack w="100%" maxW="400" borderWidth="5" space={6} rounded="md" alignItems="center" _dark={{
      borderColor: "coolGray.500"
    }} _light={{
      borderColor: "coolGray.200"
    }}>
        <Skeleton h="40" />
        <Skeleton borderWidth={1} borderColor="coolGray.200" endColor="warmGray.100" size="20" rounded="full" mt="-70" />
        <HStack space="2">
          <Skeleton size="5" rounded="full" />
          <Skeleton size="5" rounded="full" />
          <Skeleton size="5" rounded="full" />
          <Skeleton size="5" rounded="full" />
          <Skeleton size="5" rounded="full" />
        </HStack>
        <Skeleton.Text lines={6} alignItems="center" px="12" />
        <Skeleton mb="3" w="40" rounded="20" />
      </VStack>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <HeaderAdmin />

            <ScrollView>
              <Center flex={1}>
                <ReelsSlider />
              </Center>
            </ScrollView>

          </NativeBaseProvider>
        );
    };
    