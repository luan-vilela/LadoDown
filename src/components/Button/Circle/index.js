import React from "react";
import { IconButton, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const ButtonCircle = ({
    icon,
    iconColor = "tertiary.600",
    iconSize = "2xl",
    onPress,
    backgroundColor = "#ECECEC",
    backgroundColorPressed = "tertiary.300",
    p = "4",
    style}) => {
  return (
    <IconButton 
        onPress={onPress}
        icon={<
            Icon as={MaterialIcons} 
            name={icon}
            size={iconSize}
            color={iconColor}
        />}
        p={p}
        variant="solid"
        borderRadius="full"
        backgroundColor={backgroundColor}
        shadow={3}
        style={{style}}
        _pressed={{
            backgroundColor: backgroundColorPressed
            }}
    />
  )
};


export default ButtonCircle;
