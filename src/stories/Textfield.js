import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';

const Textfield = ({ label, helperText, errorMessage, props }) => (
  <FormControl id="email" {...props}>
    <FormLabel>{label}</FormLabel>
    <Input type="email" />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
    <FormHelperText>{helperText}</FormHelperText>
  </FormControl>
);

export default Textfield;

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

// TextField.propTypes = {
//   primary: PropTypes.bool,
//   backgroundColor: PropTypes.string,
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   label: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// };

// TextField.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };
