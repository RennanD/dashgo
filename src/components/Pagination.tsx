import { Box, Button, Stack } from '@chakra-ui/react';

export function Pagination(): JSX.Element {
  return (
    <Stack
      spacing="6"
      direction="row"
      marginTop="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>1 até</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ background: 'pink.500', cursor: 'not-allowed' }}
        >
          1
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          background="gray.700"
          _hover={{
            background: 'gray.500',
          }}
        >
          2
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          background="gray.700"
          _hover={{
            background: 'gray.500',
          }}
        >
          3
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          background="gray.700"
          _hover={{
            background: 'gray.500',
          }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  );
}
