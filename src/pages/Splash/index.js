import React, {useEffect} from "react";
import { Center, Image } from "native-base";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../routes";

// lottiefiles


const Splash = () => {
    const navitation = useNavigation();
    useEffect (() => {
        setTimeout(() => { navitation.navigate(ROUTES.SIGNIN.NAME)}, 3000);
    }, [])
    return (
        <Center  flex={1} backgroundColor="#10b981">
            <Image
            source={ require('../../assets/logo220x112-branco.png') }
            alt="Logo Lado Down" 
            resizeMode="contain"
            />
        </Center>
    )
}


export default () => {
    return (
        <Splash />
    );
}