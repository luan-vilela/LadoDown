import React, { useState, useEffect } from 'react';
import styles from "./styles";
import { ImageBackground, Text, View, ScrollView, Linking, TouchableOpacity, Box, FlatList } from "react-native";

export default () => {
    const DATA = [
        {
            id: "1",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6M7dJ518-Lo8n6KfqoqAFdzYVnsnJM3vf027usZ8&s",
            titulo: "Natureza é o segredo da felicidade",
            imagemGrande: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6M7dJ518-Lo8n6KfqoqAFdzYVnsnJM3vf027usZ8&s",
            descricao: "Alegria da vida vem de nossos encontros com novas experiências e, portanto, não há alegria maior que ter um horizonte sempre cambiante, cada dia com um novo e diferente sol […]",
            tag: "Saúde",
        },
        {
            id: "2",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6M7dJ518-Lo8n6KfqoqAFdzYVnsnJM3vf027usZ8&s",
            descricao: "Alegria da vida vem de nossos encontros com novas experiências e, portanto, não há alegria maior que ter um horizonte sempre cambiante, cada dia com um novo e diferente sol […]",
            tag: "Saúde",
        },
        {
            id: "3",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6M7dJ518-Lo8n6KfqoqAFdzYVnsnJM3vf027usZ8&s",
            descricao: "Alegria da vida vem de nossos encontros com novas experiências e, portanto, não há alegria maior que ter um horizonte sempre cambiante, cada dia com um novo e diferente sol […]",
        },
        {
            id: "4",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6M7dJ518-Lo8n6KfqoqAFdzYVnsnJM3vf027usZ8&s",
            descricao: "Alegria da vida vem de nossos encontros com novas experiências e, portanto, não há alegria maior que ter um horizonte sempre cambiante, cada dia com um novo e diferente sol […]",
            tag: "Saúde",
        },
        {
            id: "5",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6M7dJ518-Lo8n6KfqoqAFdzYVnsnJM3vf027usZ8&s",
            descricao: "Alegria da vida vem de nossos encontros com novas experiências e, portanto, não há alegria maior que ter um horizonte sempre cambiante, cada dia com um novo e diferente sol […]",
            tag: "",
        },
    ];

    const renderItem = ({ item }) => (
        <Home titulo={item} />
    );

    const renderBotton = ({ item }) => (
        <HomeBotton titulo={item} />
    );

    const Home = ({ titulo }) => (
        <TouchableOpacity>
            <View style={styles.estilo.card}>
                <ImageBackground source=
                    {{ uri: titulo.link }}
                    resizeMode="cover" style={styles.estilo.image}>
                </ImageBackground>
                {(titulo.tag !== undefined && titulo.tag !== "") ? <Text style={styles.estilo.tag}>{titulo.tag}</Text> : null}
                <Text style={styles.estilo.descricao}>{titulo.descricao}</Text>
            </View>
        </TouchableOpacity>
    );

    const HomeBotton = ({ titulo }) => (
        <TouchableOpacity>
            <View style={styles.estilo.cardLateral}>
                <ImageBackground source=
                    {{ uri: titulo.link }}
                    resizeMode="cover" style={styles.estilo.imageLateral}
                >
                </ImageBackground>
                <Text style={styles.estilo.tag}>{titulo.tag}</Text>
                <Text style={styles.estilo.tituloImagemLateral}>Natureza é o segredo da felicidade</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.estilo.container}>
            <ScrollView>
                <Text style={styles.estilo.titulo}>{DATA[0].titulo}</Text>
                <ImageBackground source=
                    {{ uri: DATA[0].imagemGrande }}
                    resizeMode="cover" style={styles.estilo.imageDefault}>
                </ImageBackground>

                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

                <ImageBackground source=
                    {{ uri: DATA[0].link }}
                    resizeMode="cover" style={styles.estilo.imageDefault}>
                </ImageBackground>
                <Text style={styles.estilo.titulo}>{DATA[0].titulo}</Text>

                <FlatList
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
            </ScrollView>
        </View>
    )
}