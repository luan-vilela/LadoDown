import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const FormUploadImagem = (props) => {
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
      <Button      
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
      {/* <Button type="file" {...props} placeholder={placeholder} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
});

export default FormUploadImagem;
