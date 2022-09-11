import React, { useState } from "react";
import { Center, Text, HStack, VStack, FlatList } from "native-base";
import { ScrollView, Animated, ImageBackground, Image, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderDefault from "../../components/HeaderDefault";
import styles from "./styles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

const Home = ({ titulo }) => {
    const navigation = useNavigation();

    return (
        <Center>
            <HStack width="100%" borderWidth="5" rounded="md" _dark={{
                borderColor: "coolGray.500"
            }} _light={{
                borderColor: "coolGray.100"
            }}>
                <VStack w="100%">
                    {(titulo.titulo !== undefined && titulo.titulo !== "") ? <Text style={styles.estilo.titulo}>{titulo.titulo}</Text> : null}

                    {(titulo.imagemGrande !== undefined && titulo.imagemGrande !== "") ? <Image source=
                        {{ uri: titulo.imagemGrande }}
                        resizeMode="cover" style={styles.estilo.imagemGrande}>
                    </Image> : null}
                </VStack>
            </HStack>

            <TouchableOpacity onPress={() => navigation.navigate('Topicos')}>
                <HStack width="100%" borderWidth="5" rounded="md" _dark={{
                    borderColor: "coolGray.500"
                }} _light={{
                    borderColor: "coolGray.100"
                }}>
                    <HStack w="30%">
                        <Image source=
                            {{ uri: titulo.imagemPequena }}
                            resizeMode="cover" style={styles.estilo.imagemPequena}>
                        </Image >
                        {(titulo.tag !== undefined && titulo.tag !== "") ? <Text style={styles.estilo.tag}>{titulo.tag}</Text> : null}
                    </HStack>

                    <VStack w="70%" padding="5px">
                        {(titulo.title !== undefined && titulo.title !== "") ? <Text style={styles.estilo.title}>{titulo.title}{"\n"}</Text> : null}
                        <Text style={styles.estilo.descricao}>{titulo.descricao}{"\n"}</Text>
                        <Text >Há 2 horas - Luan Vilela</Text>
                    </VStack>
                </HStack>
            </TouchableOpacity>
        </Center>
    );
};

const HomeBotton = ({ titulo }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Topicos')}>
            <View style={styles.estilo.cardLateral}>
                <ImageBackground source=
                    {{ uri: titulo.imagemPequena }}
                    resizeMode="cover" style={styles.estilo.imageLateral}
                >
                </ImageBackground>
                {(titulo.tag !== undefined && titulo.tag !== "") ? <Text style={styles.estilo.tagLateral}>{titulo.tag}</Text> : null}
                <Text style={styles.estilo.tituloImagemLateral}>Natureza é o segredo da felicidade</Text>
            </View>
        </TouchableOpacity>
    );
};

const renderItem = ({ item }) => (
    <Home titulo={item} />
);

const renderBotton = ({ item }) => (
    <HomeBotton titulo={item} />
);

export default () => {
    const DATA = [
        {
            id: "1",
            title: "Natureza é o segredo da felicidade",
            imagemPequena: "https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/08/red-fox-looks-camera-portrait.jpg?fit=1000%2C668&ssl=1",
            titulo: "Natureza é o segredo da felicidade",
            imagemGrande: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6M7dJ518-Lo8n6KfqoqAFdzYVnsnJM3vf027usZ8&s",
            descricao: "Alegria da vida vem de nossos encontros com novas experiências e, portanto, não há alegria maior que ter um horizonte sempre cambiante, cada dia com um novo e diferente sol […] ",
            tag: "Saúde",
        },
        {
            id: "2",
            title: "Natureza é o segredo da felicidade",
            imagemPequena: "https://static.wikia.nocookie.net/mundo-animal/images/3/3f/Raposa-vermelha.jpg/revision/latest?cb=20140315203858&path-prefix=pt",
            titulo: "",
            imagemGrande: "",
            descricao: "Alegria da vida vem de nossos encontros com novas experiências e, portanto, não há alegria maior que ter um horizonte sempre cambiante, cada dia com um novo e diferente sol […]",
            tag: "Saúde",
        },
        {
            id: "3",
            title: "Natureza é o segredo da felicidade",
            imagemPequena: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2fFx-L1jBLvyWl2QNKxyLkuSgcGQcwhnsSq_0vavCtbhm7K-VclzGie0vwB661kwxYcA&usqp=CAU",
            titulo: "",
            imagemGrande: "",
            descricao: "Alegria da vida vem de nossos encontros com novas experiências e, portanto, não há alegria maior que ter um horizonte sempre cambiante, cada dia com um novo e diferente sol […]",
        },
        {
            id: "4",
            title: "Natureza é o segredo da felicidade",
            imagemPequena: "https://pm1.narvii.com/6723/a0ed90ef0378bb228c22a438163956174e2159bfv2_hq.jpg",
            titulo: "",
            imagemGrande: "",
            descricao: "Alegria da vida vem de nossos encontros com novas experiências e, portanto, não há alegria maior que ter um horizonte sempre cambiante, cada dia com um novo e diferente sol […]",
            tag: "Saúde",
        },
        {
            id: "5",
            title: "Natureza é o segredo da felicidade",
            imagemPequena: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfMvakibxaFvsmzsPxzAvvIhU9JzuW4MKmg&usqp=CAU",
            titulo: "",
            imagemGrande: "",
            descricao: "Alegria da vida vem de nossos encontros com novas experiências e, portanto, não há alegria maior que ter um horizonte sempre cambiante, cada dia com um novo e diferente sol […]",
            tag: "",
        },
    ];
    const [scrollY, setScrollY] = useState(new Animated.Value(0)) // Controla valor do scrollY
    return (
        <SafeAreaView>
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
                <Center flex={1} >
                    <FlatList
                        horizontal={false}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                    <FlatList
                        horizontal={false}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                    <FlatList
                        horizontal={true}
                        data={DATA}
                        renderItem={renderBotton}
                        keyExtractor={item => item.id}
                    />
                </Center>
            </ScrollView>
        </SafeAreaView>
    );
};
