import React from 'react';
import { Outlet } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Box } from '@chakra-ui/react';
import Header from './Set12Header';

export default function Set12Root() {
  return (
    <Box bg={'black'}>
      <Header />
      <Outlet />
      <ReactQueryDevtools />
    </Box>
  );
}
