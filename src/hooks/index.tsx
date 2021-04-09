import { useSidebarDrawer, SidebarDrawerProvider } from './sidebar';

interface AppPrviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppPrviderProps): JSX.Element {
  return <SidebarDrawerProvider>{children}</SidebarDrawerProvider>;
}

export { useSidebarDrawer };
