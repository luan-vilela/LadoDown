import React from "react";
import { ImageBackground, Text, View, ScrollView, Linking, TouchableOpacity } from "react-native";
import styles from "./styles";

export default () => {
    const persons = [
        {
            id: "1",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6M7dJ518-Lo8n6KfqoqAFdzYVnsnJM3vf027usZ8&s",
            descricao: "Where does it come from? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ",
        },
    ];

    return (
        <View style={styles.estilo.container}>
            <ScrollView>
                <Text style={styles.estilo.titulo}>Natureza é o segredo da felicidade</Text>
                <ImageBackground source=
                    {{ uri: persons[0].imagem }}
                    resizeMode="cover" style={styles.estilo.image}>
                </ImageBackground>
                <Text style={styles.estilo.subTitulo}>Natureza é o segredo da felicidade</Text>
                <Text>{persons[0].descricao}</Text>
                <Text style={styles.estilo.subTitulo}>Natureza é o segredo da felicidade</Text>
                <Text>{persons[0].descricao}</Text>
            </ScrollView>
        </View>
    )
}