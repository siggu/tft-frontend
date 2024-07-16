import React from 'react';
import { Outlet } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from './Set11Header';
import { Box } from '@chakra-ui/react';

export default function Set11Root() {
  return (
    <Box bg={'#161618'}>
      <Header />
      <Outlet />
      <ReactQueryDevtools />
    </Box>
  );
}
