import React, { useState, useEffect } from 'react';
import { onEntryChange } from '../contentstack-sdk';
import { FooterProps } from '../models/component-models/footer-model';
import { getFooterRes } from '../helper/data-retrieval';
import Container from '@mui/material/Container';
import { Box, Paper, Stack, Toolbar, Typography } from '@mui/material';
import BasicMenuItem from './menu-button';
import Grid from '@mui/material/Grid2';

export default function Footer({ footer }: { footer: FooterProps }) {

  const [getFooter, setFooter] = useState(footer);

  async function fetchData() {
    try {
      if (!footer) {
        const footerRes = await getFooterRes();
        setFooter(footer);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, [footer]);

  const footerData = getFooter ? getFooter : undefined;

  return (
    <footer className='footer'>
      <Container maxWidth='xl'>
        <Grid container direction="row" spacing={2}>
          {footerData?.navigation_menu.map((t, index) => (
            t.menu.map((ml, i) => (
              <Grid size={4} key={i}>
                <BasicMenuItem indexKey={i} menuModel={ml} key={i} />
              </Grid>
            ))
          ))}
          <Grid size={footerData?.navigation_menu.length}>
            <img
              src={`${footerData?.logo.url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${footerData?.logo.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={footerData?.logo.filename}
              loading="lazy"
            />
          </Grid>
          <Grid size={12}>
            <Paper elevation={12}>
              <Box alignContent={'center'} alignItems={'center'}>
                {footerData?.copyright}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}