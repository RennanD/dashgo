import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
        <Box flex="1" borderRadius={8} background="gray.800" padding="8">
          <Flex marginBottom="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon fontSize="20" as={RiAddLine} />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th paddingX={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td paddingX={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Rennan Douglas</Text>
                    <Text fontSize="sm" color="gray.300">
                      rennandev@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>03 de Outubro, 2014</Td>}
                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="blue"
                      leftIcon={<Icon fontSize="16" as={RiPencilLine} />}
                      _hover={{ cursor: 'pointer' }}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
