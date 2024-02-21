// FloatingActionButton.js
import React from "react";
import { Fab } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const FloatingActionButton = ({ onPress }) => {
  return (
    <Fab
      position="absolute"
      size="md"
      icon={<Ionicons name="add" size={24} color="white" />}
      onPress={onPress}
      colorScheme="cyan"
      bottom={16}
      end={16}
      _text={{ color: "white" }}
    />
  );
};

export default FloatingActionButton;
