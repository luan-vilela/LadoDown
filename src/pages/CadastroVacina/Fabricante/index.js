import React, { useState } from "react";
import { Box, Heading, HStack, VStack, FormControl, Input, Button, Center, Text, Link, Image, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import HeaderDefault from "../../../components/HeaderDefault";
import { SafeAreaView } from 'react-native-safe-area-context'
import { Animated, ImageBackground, View } from "react-native";

const Fabricante = () => {
    const navigation = useNavigation();
    return <Center w="100%">

        <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading
                size="lg"
                fontWeight="600"
                background="white"
            >
                Cadastro do Fabricante
            </Heading>
            <VStack space={3} mt="5">
                <FormControl>
                    <Input variant="outline" placeholder="Fabricante" />
                </FormControl>
                <FormControl>
                    <Input variant="outline" placeholder="Lote" />
                </FormControl>
                <FormControl>
                    <Input variant="outline" placeholder="Local" />
                </FormControl>
                <FormControl>
                    <Input variant="outline" placeholder="Profissional" />
                </FormControl>
                <FormControl>
                    <Input variant="outline" placeholder="Próxima dose" />
                </FormControl>
            </VStack>
        </Box>
    </Center>;
};

export default () => {
    const [scrollY, setScrollY] = useState(new Animated.Value(0)) // Controla valor do scrollY

    /* 2. Get the param */
    return (
        <SafeAreaView>
            {/* ######### HEADER ########## */}
            <HeaderDefault scrollY={scrollY} />

            <ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event([{
                    nativeEvent: {
                        contentOffset: { y: scrollY }
                    },
                }],
                    {
                        useNativeDriver: false,
                    }
                )}
            >
                {/* ######### CONTEÜDO ########## */}
                <Center flex={1}>
                    <Fabricante />
                </Center>
                {/* ######### CONTEÜDO ########## */}
            </ScrollView>
        </SafeAreaView>
    );
};
