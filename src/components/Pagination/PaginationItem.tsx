import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  isCurrent?: boolean;
  pageNumber: number;
  onClick?: () => void;
}

export function PaginationItem({
  isCurrent,
  pageNumber,
  onClick,
}: PaginationItemProps): JSX.Element {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled={pageNumber <= 1}
        _disabled={{ background: 'pink.500', cursor: 'not-allowed' }}
        onClick={onClick}
      >
        {pageNumber}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      background="gray.700"
      _hover={{
        background: 'gray.500',
      }}
      onClick={onClick}
    >
      {pageNumber}
    </Button>
  );
}
