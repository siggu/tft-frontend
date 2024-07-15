import React from 'react';
import { Outlet } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Box } from '@chakra-ui/react';
import Set12Header from './Set12Header';

export default function Root() {
  return (
    <Box bg={'#9c5edb'}>
      <Set12Header />
      <Outlet />
      <ReactQueryDevtools />
    </Box>
  );
}
