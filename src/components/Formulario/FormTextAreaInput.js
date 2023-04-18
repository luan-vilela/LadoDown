import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const FormTextInput = (props) => {
  const { placeholder, label, error } = props;
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{label}</Text>
        {error ? (
          <Text style={{ color: "red", fontSize: 16 }}>{error}</Text>
        ) : null}
      </View>
      <TextInput
        multiline={true}
        numberOfLines={20}
        {...props}
        placeholder={placeholder}
        style={styles.input}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#1b1b33",
    height: 35,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
    height: 400,
    textAlignVertical: "top",
  },
});

export default FormTextInput;
