import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  useToken,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Textfield = ({
  id,
  placeholder,
  inputType,
  label,
  helperText,
  errorMessage,
  ...props
}) => {
  // Set up some helpers for font scale based on design specs
  const fontScale = {
    5: {
      fontSize: 'md',
      lineHeight: 'base',
    },
    6: {
      fontSize: 'sm',
      lineHeight: 'taller',
    },
    7: {
      fontSize: 'xs',
      lineHeight: 'taller',
    },
  };

  // Grab some color tokens to use in boxShadow styles
  const [purple70, alert70] = useToken('colors', [
    'firehydrant.purple.70',
    'firehydrant.alert.70',
  ]);

  return (
    <FormControl id={id} {...props}>
      <FormLabel
        sx={{ color: 'firehydrant.grey.70', mb: '0.5', ...fontScale[6] }}
        _hover={{ color: 'firehydrant.purple.50' }}
        _active={{ color: 'firehydrant.purple.70' }}
        _focus={{ color: 'firehydrant.purple.70' }}
        _invalid={{ color: 'firehydrant.alert.70' }}
      >
        {label}
      </FormLabel>
      <Input
        type={inputType}
        placeholder={placeholder}
        sx={{
          borderRadius: 'base',
          borderColor: 'firehydrant.grey.50',
          '&:hover': {
            borderColor: 'firehydrant.purple.50',
          },
          '&:active': {
            borderColor: 'firehydrant.purple.50',
          },
          '&:focus': {
            borderColor: 'firehydrant.purple.70',
          },
        }}
        _focus={{
          boxShadow: `0 0 0 3px ${purple70}`,
        }}
        _invalid={{
          borderColor: 'firehydrant.alert.70',
          '&:hover': {
            borderColor: 'firehydrant.alert.70',
          },
          '&:focus': {
            borderColor: 'firehydrant.alert.70',
            boxShadow: `0 0 0 3px ${alert70}`,
          },
        }}
      />
      <FormErrorMessage sx={{ color: 'firehydrant.alert.70', ...fontScale[7] }}>
        {errorMessage}
      </FormErrorMessage>
      <FormHelperText sx={{ color: 'firehydrant.grey.70', ...fontScale[7] }}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default Textfield;

Textfield.propTypes = {
  id: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf([
    'date',
    'email',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'time',
    'url',
  ]),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
  isInvalid: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
};

Textfield.defaultProps = {
  id: 'formcontrol',
  inputType: 'text',
  label: 'Label',
  placeholder: null,
  helperText: 'Helper text that is helpful',
  errorMessage: 'Error message',
  isInvalid: false,
  isReadOnly: false,
  isRequired: false,
};
