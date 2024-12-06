'use client';

import { MantineProvider, MantineThemeOverride } from '@mantine/core';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

interface Props {
  children: React.ReactNode;
}

const theme: MantineThemeOverride = {
  fontSmoothing: true,
  primaryColor: 'dark',
  cursorType: 'pointer',
};

export const ThemeProvider = ({ children }: Props) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
