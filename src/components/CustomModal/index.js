import React from 'react';
import { Modal, Button, Text, Box, HStack } from 'native-base';

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
  DelBtn,
  onPressDel,
  isLoadingDel,
  isLoading,
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
        <HStack space={3} alignItems="flex-end" p="2">
          {onPressDel && (
            <Button
              variant="subtle"
              colorScheme="secondary"
              onPress={onPressDel}
              isLoading={isLoadingDel}
              isLoadingText="Aguarde">
              {DelBtn || 'Excluir'}
            </Button>
          )}

          <Button.Group flex={1} space={2} justifyContent="flex-end">
            {CancelBtn && (
              <Button variant="ghost" colorScheme="blueGray" onPress={onClose}>
                {CancelBtn || 'Fechar'}
              </Button>
            )}
            {onPress && (
              <Button onPress={onPress} isLoading={isLoading} isLoadingText="Aguarde">
                {SuccessBtn || 'Salvar'}
              </Button>
            )}
          </Button.Group>
        </HStack>
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
  DelBtn,
  onPressDel,
  isLoadingDel,
  isLoading,
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
      isLoading={isLoading}
      CancelBtn={CancelBtn}
      size={size}
      DelBtn={DelBtn}
      onPressDel={onPressDel}
      isLoadingDel={isLoadingDel}>
      {children}
    </ModalWrapper>
  );
};

export default ModalCustom;
