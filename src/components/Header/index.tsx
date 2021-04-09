import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { RiMenuLine } from 'react-icons/ri';
import { Logo } from './Logo';
import { Notifications } from './Notifications';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

import { useSidebarDrawer } from '../../hooks';

export function Header(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useSidebarDrawer();

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
      {!isWideVersion && (
        <IconButton
          aria-label="Open Drawer"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          icon={<Icon as={RiMenuLine} />}
          marginRight="2"
        />
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" marginLeft="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
