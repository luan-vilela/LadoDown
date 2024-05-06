import { FormControl, WarningOutlineIcon } from 'native-base';
import React from 'react';
import { Controller } from 'react-hook-form';

const ControlInputField = ({ control, name, rules, label, value, onChange, errors, children }) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field: { value, onChange } }) => (
      <FormControl isInvalid={name in errors} w="75%" maxW="300px">
        <FormControl.Label>{label}</FormControl.Label>
        {children}
        {name in errors && (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors[name].message}
          </FormControl.ErrorMessage>
        )}
      </FormControl>
    )}
  />
);

export default ControlInputField;
