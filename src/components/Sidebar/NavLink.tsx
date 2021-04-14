import { ElementType, ReactNode } from 'react';
import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  children: ReactNode;
  icon: ElementType;
  path: string;
}

export function NavLink({
  icon,
  path,
  children,
  ...rest
}: NavLinkProps): JSX.Element {
  return (
    <ActiveLink href={path} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text marginLeft="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
