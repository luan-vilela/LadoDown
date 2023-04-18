import reactDom from "react-dom";
import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    titulo: {
        backgroundColor: "#12AC6B",
        color: "white",
        padding: 6,
        borderRadius: 2
    },
    title: {
        color: "#12AC6B",
    },
    imagemGrande: {
        width: "100%",
        height: 100,
        marginBottom: 5,
        borderRadius: 2
    },
    card: {
        flexDirection: "row",
        elevation: 1,
        borderWidth: 1,
        borderColor: "black",
    },
    imagemPequena: {
        flex: 1,
    },
    descricao: {
        textAlign: "justify",
        flexWrap: "wrap",
    },
    autor: {
        position: "absolute",
        bottom: 0,
        right: 12,
    },
    tag: {
        bottom: 0,
        position: "absolute",
        backgroundColor: "#FF125F",
        color: "white",
        padding: 5
    },
    tagLateral: {
        top: 0,
        position: "absolute",
        backgroundColor: "#FF125F",
        color: "white",
        padding: 5
    },
    cardLateral: {
        flexDirection: "column",
        borderRightWidth: 1,
        borderColor: "black",
        marginBottom: 5,
        marginLeft: 5
    },
    tituloImagemLateral: {
        backgroundColor: "#12AC6B",
        color: "white"
    },
    imageLateral: {
        width: "100%",
        height: 100
    }
});

export default { estilo }