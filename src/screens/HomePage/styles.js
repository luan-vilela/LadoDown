import reactDom from "react-dom";
import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        padding: 6,
        backgroundColor: "white",
    },
    imageDefault: {
        width: "100%",
        height: 100,
        marginBottom: 5
    },
    titulo: {
        backgroundColor: "#12AC6B",
        color: "white",
        padding: 6,
        marginBottom: 5,
        borderRadius: 2
    },
    tag: {
        top: 0,
        position: "absolute",
        backgroundColor: "#FF125F",
        color: "white",
        padding: 5
    },
    card: {
        flexDirection: "row",
        marginBottom: 5
    },
    cardLateral: {
        flexDirection: "column",
        borderRightWidth: 5,
        borderColor: "transparent",
        marginBottom: 5
    },
    imageLateral: {
        width: "100%",
        height: 100
    },
    tituloImagemLateral: {
        backgroundColor: "#12AC6B",
        color: "white"
    },
    image: {
        flex: 1,
    },
    descricao: {
        flex: 1.5,
        paddingLeft: 12,
        textAlign:"justify",
    },
});

export default { estilo }