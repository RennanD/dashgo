import { ElementType, ReactNode } from 'react';
import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

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
    <Link href={path} display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text marginLeft="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
