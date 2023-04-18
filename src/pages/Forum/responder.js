import React, { useState } from "react";
import { View, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderDefault from "../../components/HeaderDefault";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Box,
  FlatList,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Modal,
  FormControl,
  TextArea,
  Menu,
  HamburgerIcon,
  Pressable,
  Divider,
} from "native-base";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

export default ({ route }) => {
  const [scrollY] = useState(new Animated.Value(0));
  const { dados } = route.params;
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <SafeAreaView style={styles.estilo.container}>
      <HeaderDefault scrollY={scrollY} />
      <Box alignItems="center" mt={1}>
        <View style={styles.estilo.box1}>
          <View style={styles.estilo.box2}>
            <Box alignItems="center" mt={3}>
              <Entypo name="user" size={30} color="black" />
            </Box>
            <Box alignItems="center" mt={3}>
              <Text>{dados.nome} </Text>
            </Box>
            <Text style={styles.estilo.texto}>{dados.title} </Text>
            <Box alignItems="center" mt={1}>
              <Modal
                isOpen={modalVisible}
                onClose={() => setModalVisible(false)}
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
              >
                <Modal.Content>
                  <Modal.CloseButton />
                  <Modal.Header>Faça seu comentário</Modal.Header>
                  <Modal.Body>
                    <FormControl>
                      <FormControl.Label>Comentário</FormControl.Label>
                      <TextArea ref={initialRef} h={20} placeholder="" />
                    </FormControl>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button
                        variant="ghost"
                        colorScheme="blueGray"
                        onPress={() => {
                          setModalVisible(false);
                        }}
                      >
                        Cancelar
                      </Button>
                      <Button
                        onPress={() => {
                          setModalVisible(false);
                        }}
                      >
                        Salvar
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
              <HStack space="4" justifyContent="center" alignItems="center">
                <Button
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  Responder
                </Button>
              </HStack>
            </Box>
          </View>
        </View>
      </Box>
      <NativeBaseProvider>
        <View style={styles.estilo.listagem}>
          <Example />
        </View>
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

const Example = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
    },
  ];
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Box
          borderBottomWidth="1"
          _dark={{
            borderColor: "muted.50",
          }}
          borderColor="muted.800"
          pl={["0", "4"]}
          pr={["0", "5"]}
          py="2"
        >
          <HStack space={[2, 3]} justifyContent="space-between">
            <VStack>
              <Text
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                bold
              >
                {item.fullName}
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                {item.recentText}
              </Text>
            </VStack>
            <Spacer />
            <Text
              fontSize="xs"
              _dark={{
                color: "warmGray.50",
              }}
              color="coolGray.800"
              alignSelf="flex-start"
            >
              {item.timeStamp}
            </Text>    
            <Menu
              w="190"
              trigger={(triggerProps) => {
                return (
                  <Pressable
                    accessibilityLabel="More options menu"
                    {...triggerProps}
                  >
                    <HamburgerIcon />
                  </Pressable>
                );
              }}
            >
              <Menu.Item>Editar</Menu.Item>
              <Divider />
              <Menu.Item>Excluir</Menu.Item>
            </Menu>
          </HStack>
        </Box>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
