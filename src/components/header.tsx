import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { onEntryChange } from '../contentstack-sdk';
import { HeaderProps } from '../models/component-models/header-model';
import { getHeaderRes } from '../helper/data-retrieval';

import LandscapeIcon from '@mui/icons-material/Landscape';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Stack, Toolbar, Typography } from '@mui/material';
import BasicMenuItem from './menu-button';
import Grid from '@mui/material/Grid2';

export default function Header({ header }: { header: HeaderProps }) {
  const router = useRouter();
  const [getHeader, setHeader] = useState(header);

  async function fetchData() {
    try {
      if (header) {
        const headerRes = await getHeaderRes();
        setHeader(headerRes);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (header) {
      onEntryChange(() => fetchData());
    }
  }, [header]);
  const headerData = getHeader ? getHeader : undefined;


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky'>
        <Container maxWidth='xl'>
          <Grid container direction="row">
            <Grid size={4}>
              <LandscapeIcon sx={{ display: { xs: 'none', md: 'flex' } }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                RainflyAdventures
              </Typography>
            </Grid>
            <Grid size={8}>
              <Stack direction="row" spacing={2}>
                {header.top_level_navigation.map((tlvl, index) => (
                  tlvl.menu.map((ml, i) => (
                    <BasicMenuItem indexKey={i} menuModel={ml} key={i} />
                  ))
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Box>
  );
}