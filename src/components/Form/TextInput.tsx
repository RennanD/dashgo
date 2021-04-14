import {
  Input,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function TextInput({ name, label, ...rest }: InputProps): JSX.Element {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Input
        id={name}
        name={name}
        focusBorderColor="pink.500"
        background="gray.900"
        variant="filled"
        _hover={{
          background: 'gray.900',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
