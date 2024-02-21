import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  VStack,
  Stack,
  ScrollView,
  Pressable
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../routes";

const BadgeCustom = ({text, percentage=0, cor="#56BF8D"}) => {
    return <>
        <Box bg={'gray.200'} m='1px' rounded="full" position="relative" >
            <Text rounded="full" color='transparent' position="absolute" bg={cor} w={percentage+"%"} h="100%"></Text>
            <Text px='6px' py='2px' shadow={"3"} color='white' textAlign={"center"} zIndex={2} position="relative" w="100%">{text}</Text> 
            
        </Box>
    </>
    
};

export default ({text, percentage, cor}) => {
  return (  
    <BadgeCustom text={text} percentage={percentage} cor={cor}/>
  );
};