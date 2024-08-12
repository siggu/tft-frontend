import React from 'react';
import { Outlet } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Box } from '@chakra-ui/react';
import Header from './Set12Header';
import { Helmet } from 'react-helmet';

export default function Set12Root() {
  return (
    <Box bg={'#161618'}>
      <Helmet>reroll - Set12</Helmet>
      <Header />
      <Outlet />
      <ReactQueryDevtools />
    </Box>
  );
}
