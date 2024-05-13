import React from 'react';
import { Box, Heading } from 'native-base';
import CustomModal from '../CustomModal';

const AlertConfirm = ({
  showModal,
  setShowModal,
  setValue,
  text,
  title,
  cancel,
  successBtn,
  footer,
  showCloseButton,
}) => {
  return (
    <CustomModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      CancelBtn={cancel}
      showCloseButton={showCloseButton}
      header={title}
      onPress={() => {
        setValue(true), setShowModal(false);
      }}
      footer={footer}
      SuccessBtn={successBtn}>
      <Box alignItems="center" pt={'42px'} pb={'24px'} px={2}>
        <Heading size="sm">{text}</Heading>
      </Box>
    </CustomModal>
  );
};

export default AlertConfirm;
