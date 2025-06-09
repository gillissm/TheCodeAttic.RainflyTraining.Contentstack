
import { HeaderProps } from '@/types/component-models';
import LandscapeIcon from '@mui/icons-material/Landscape'; 
import { Box, AppBar, Container, Grid, Typography, Stack } from '@mui/material';
import BasicMenuItem from '../LinkButton/menu-button';

export default function Header({ header }: { header: HeaderProps }) {
  console.log("header");
  console.log(header);
 
  return (header && header.top_level_navigation)?(
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
                {header.top_level_navigation.map((tlvl) => (
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
  ):(<></>);
}