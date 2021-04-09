import { Box, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { PaginationItem } from './PaginationItem';

const pages = [1, 2, 3, 4, 5];

export function Pagination(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <Stack
      spacing="6"
      direction="row"
      marginTop="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>1 até</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {pages.map(page => (
          <PaginationItem
            onClick={() => setCurrentPage(page)}
            isCurrent={currentPage === page}
            pageNumber={page}
          />
        ))}
      </Stack>
    </Stack>
  );
}
