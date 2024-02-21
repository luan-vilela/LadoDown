import React from "react";
import { Button, Text, AlertDialog } from "native-base";

const Mensagem = ({ isOpen, setIsOpen, messages }) => {
  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>Aviso</AlertDialog.Header>
        <AlertDialog.Body>
          {messages.map((msg, index) => (
            <Text key={index}>{msg}</Text>
          ))}
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button colorScheme="success" onPress={onClose}>
            OK
          </Button>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default ({ isOpen, setIsOpen, messages }) => {
  return <Mensagem isOpen={isOpen} setIsOpen={setIsOpen} messages={messages} />;
};
