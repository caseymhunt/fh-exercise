import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

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

const Textfield = ({ label, helperText, errorMessage, ...props }) => {
  return (
    <FormControl id="email" {...props}>
      <FormLabel sx={{ ...fontScale[5] }}>{label}</FormLabel>
      <Input type="email" />
      <FormErrorMessage sx={{ ...fontScale[7] }}>
        {errorMessage}
      </FormErrorMessage>
      <FormHelperText sx={{ ...fontScale[7] }}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default Textfield;

Textfield.propTypes = {
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
  isInvalid: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  // size: PropTypes.oneOf(['small', 'medium', 'large']),
  // onClick: PropTypes.func,
};

Textfield.defaultProps = {
  label: 'Label',
  helperText: 'Helper text that is helpful',
  errorMessage: 'Error message',
  isInvalid: false,
  isReadOnly: false,
};

// Reference
// ------------------------------
// export const TextField = ({
//   primary,
//   backgroundColor,
//   size,
//   label,
//   ...props
// }) => {
//   const mode = primary
//     ? 'storybook-button--primary'
//     : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(
//         ' '
//       )}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };
