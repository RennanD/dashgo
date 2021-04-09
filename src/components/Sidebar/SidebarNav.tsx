import { Stack } from '@chakra-ui/react';

import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import { NavSection } from './NavSetion';
import { NavLink } from './NavLink';

export function SidebarNav(): JSX.Element {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} path="/dashboard">
          Dashboard
        </NavLink>

        <NavLink icon={RiContactsLine} path="/users">
          Usuários
        </NavLink>
      </NavSection>

      <NavSection title="GERAL">
        <NavLink icon={RiInputMethodLine} path="/users">
          Formulários
        </NavLink>

        <NavLink icon={RiGitMergeLine} path="/users">
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  );
}
