import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import {
  Container,
  ChakraProvider,
  Stack,
  StackDivider,
  Box,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
import { fhTheme as theme } from './theme/fhTheme';
import Textfield from './components/Textfield';
import Fonts from './components/Fonts';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Sample = ({ title, code, text, ...rest }) => (
  <Box width="full" {...rest}>
    <Heading as="h2" size="md" mb={3} color="firehydrant.purple.50">
      {title}
    </Heading>
    <Stack
      spacing={6}
      divider={<StackDivider borderColor="firehydrant.grey.10" />}
    >
      {code}
      <Box as={CodeBlock} text={text} language="jsx" theme={dracula} />
    </Stack>
  </Box>
);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Container
        boxShadow="2xl"
        p={5}
        border="1px"
        borderColor="firehydrant.grey.10"
        borderRadius="md"
        mt={8}
      >
        <Heading as="h1" size="xl" color="firehydrant.purple.90" mb={4}>
          Text field examples
        </Heading>
        <Text mb={10}>
          If{' '}
          <Link
            href="https://601f7495a3b7d300213a4862-juugbpzapv.chromatic.com"
            color="blue.600"
            isExternal
          >
            Storybook <ExternalLinkIcon mx="2px" />
          </Link>{' '}
          isn't your thing, here a few examples, along with the code needed to
          generate it.
        </Text>
        <Stack
          spacing={16}
          divider={<StackDivider borderColor="firehydrant.grey.50" />}
        >
          {/* Default */}
          <Sample title="Default" code={<Textfield />} text={`<Textfield />`} />

          {/* Label and helper text */}
          <Sample
            title="Label and helper text"
            code={
              <Textfield
                label="Text field"
                helperText="Helper text that is helpful."
              />
            }
            text={`<Textfield
  label="Text field"
  helperText="Helper text that is helpful."
/> `}
          />

          {/* Invalid with error message */}
          <Sample
            title="Invalid (required)"
            code={
              <Textfield
                isRequired
                isInvalid
                label="Email address"
                errorMessage="This field is required."
              />
            }
            text={`<Textfield
  isRequired
  isInvalid
  label="Email address"
  errorMessage="This field is required."
/> `}
          />

          {/* Read-only */}
          <Sample
            title="Read only"
            code={
              <Textfield
                isReadOnly
                label="Today's affirmation:"
                value="Hey. You're awesome."
              />
            }
            text={`<Textfield
  isReadOnly
  label="Today's affirmation:"
  value="Hey. You're awesome."
/> `}
          />

          {/* Using a custom field type (password) */}
          <Sample
            title="Custom field type"
            code={
              <Textfield
                inputType="password"
                label="Password"
                helperText="Your helpful password reminder."
              />
            }
            text={`<Textfield
  inputType="password"
  label="Password"
  helperText="Your helpful password reminder."
/> `}
          />

          {/* Showing responsive behavior: half width */}
          <Sample
            title="Half width"
            code={<Textfield />}
            text={`<Textfield width="50%" />`}
            width="50%"
          />
        </Stack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
