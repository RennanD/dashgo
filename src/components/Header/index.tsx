import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { Logo } from './Logo';
import { Notifications } from './Notifications';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="5"
      paddingX="6"
      align="center"
    >
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" marginLeft="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
