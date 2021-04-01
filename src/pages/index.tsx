import { Flex, Button, Stack } from '@chakra-ui/react';

import { TextInput } from '../components/Form/TextInput';

export default function SignIn(): JSX.Element {
  return (
    <Flex w="100vw" height="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        background="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <TextInput name="email" label="E-mail" />
          <TextInput name="password" label="Senha" />
        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
