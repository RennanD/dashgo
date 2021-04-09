import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Rennan Douglas</Text>
          <Text color="gray.300" fontSize="small">
            rennan@email.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Rennan Douglas"
        src="https://github.com/rennand.png"
      />
    </Flex>
  );
}
