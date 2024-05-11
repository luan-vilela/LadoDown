import React from 'react';
import { Modal, Button, Text } from 'native-base';

const ModalWrapper = ({
  isOpen,
  onClose,
  header,
  children,
  footer,
  showCloseButton,
  SuccessBtn,
  onPress,
  CancelBtn,
  size,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <Modal.Content p="1">
        {showCloseButton && <Modal.CloseButton p="0" />}
        {header && (
          <Text isTruncated w="90%" p="1.5" bold fontSize="md">
            {header}
          </Text>
        )}

        {children}

        {footer && <Modal.Body>{footer}</Modal.Body>}
        <Button.Group space={2} justifyContent="flex-end" p="2">
          {CancelBtn && (
            <Button variant="ghost" colorScheme="blueGray" onPress={onClose}>
              {CancelBtn || 'Fechar'}
            </Button>
          )}
          {onPress && <Button onPress={onPress}>{SuccessBtn || 'Salvar'}</Button>}
        </Button.Group>
      </Modal.Content>
    </Modal>
  );
};

const ModalCustom = ({
  isOpen,
  onClose,
  header,
  children,
  footer,
  showCloseButton = true,
  SuccessBtn,
  onPress,
  CancelBtn,
  size = 'md', // ["xs", "sm", "md", "lg", "xl", "full"]
}) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      header={header}
      footer={footer}
      showCloseButton={showCloseButton}
      SuccessBtn={SuccessBtn}
      onPress={onPress}
      CancelBtn={CancelBtn}
      size={size}>
      {children}
    </ModalWrapper>
  );
};

export default ModalCustom;
