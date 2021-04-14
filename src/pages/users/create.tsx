import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { TextInput } from '../../components/Form/TextInput';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function CreateUser(): JSX.Element {
  return (
    <Box>
      <Header />
      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />
        <Box
          flex="1"
          borderRadius={8}
          background="gray.800"
          padding={['6', '8']}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider marginY="6" borderColor="gray.700" />

          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <TextInput name="name" label="Nome completo" />
              <TextInput name="email" label="E-mail" type="email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <TextInput name="password" label="Senha" type="password" />
              <TextInput
                name="password-confirmation"
                label="Confirmação da senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>
          <Flex marginTop="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
