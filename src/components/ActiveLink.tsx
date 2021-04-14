import { ReactElement, cloneElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMacthExactPath?: boolean;
}

export function ActiveLink({
  children,
  shouldMacthExactPath = false,
  ...rest
}: ActiveLinkProps): JSX.Element {
  const { asPath } = useRouter();

  let isActive = false;

  if (
    shouldMacthExactPath &&
    (asPath === rest.href || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  if (
    !shouldMacthExactPath &&
    (asPath.startsWith(String(rest.href)) || asPath === rest.as)
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  );
}
