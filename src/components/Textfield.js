import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  useToken,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { PropTypes } from 'prop-types';

const Textfield = ({
  id,
  placeholder,
  value,
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

  // Grab some color tokens to use in string interpolation styles (ex. boxShadow)
  const [purple70, alert70, grey50] = useToken('colors', [
    'firehydrant.purple.70',
    'firehydrant.alert.70',
    'firehydrant.grey.50',
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
        defaultValue={value}
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
        _readOnly={{
          border: 'none',
          // There's no way to style `border-style: dashed` (See: https://developer.mozilla.org/en-US/docs/Web/CSS/border-style),
          // so we use a background image trick to get a specific style...
          //
          // Credit: https://kovart.github.io/dashed-border-generator/
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%238A9BB7FF' stroke-width='2' stroke-dasharray='8' stroke-dashoffset='10' stroke-linecap='round'/%3e%3c/svg%3e")`,
          '&:focus': {
            boxShadow: `inset 0 0 0 1px ${grey50}, 0 0 0 3px ${grey50}`,
          },
        }}
      />
      <FormErrorMessage sx={{ color: 'firehydrant.alert.70', ...fontScale[7] }}>
        <InfoOutlineIcon w={4} h={4} mr={1} />
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
  // Label and Helper Text may need to be a 'node' type in the future for more complex compositions, but for
  // now the design only calls for text so we're going to leave it as string.
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
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
  value: null,
  helperText: null,
  errorMessage: 'Error message',
  isInvalid: false,
  isReadOnly: false,
  isRequired: false,
};
