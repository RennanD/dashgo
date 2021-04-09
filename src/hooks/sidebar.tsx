import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect } from 'react';

type SidebarContextData = UseDisclosureReturn;

interface SidebarDrawerProviderProps {
  children: React.ReactNode;
}

const SidebarContextData = createContext({} as SidebarContextData);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps): JSX.Element {
  const disclosure = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarContextData.Provider value={disclosure}>
      {children}
    </SidebarContextData.Provider>
  );
}

export function useSidebarDrawer(): SidebarContextData {
  const context = useContext(SidebarContextData);

  if (!context) {
    throw new Error(
      "you can't use useSidebarDrawer outside SidebarDrawerProvider",
    );
  }

  return context;
}
