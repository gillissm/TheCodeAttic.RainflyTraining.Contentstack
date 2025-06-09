import { FooterProps } from '@/types/component-models';
import { Container, Grid, Paper, Box } from '@mui/material';
import BasicMenuItem from '../LinkButton/menu-button';

export default function Footer({ footer }: { footer: FooterProps }) {

  return (footer && footer.navigation_menu) ? (
    <footer className='footer'>
      <Container maxWidth='xl'>
        <Grid container direction="row" spacing={2}>
          {footer?.navigation_menu.map((t) => (
            t.menu.map((ml, i) => (
              <Grid size={4} key={i}>
                <BasicMenuItem indexKey={i} menuModel={ml} key={i} />
              </Grid>
            ))
          ))}
          <Grid size={footer?.navigation_menu.length}>
            <img
              src={`${footer?.logo.url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${footer?.logo.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={footer?.logo.filename}
              loading="lazy"
            />
          </Grid>
          <Grid size={12}>
            <Paper elevation={12}>
              <Box alignContent={'center'} alignItems={'center'}>
                {footer?.copyright}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </footer>
  ): (<div>Footer</div>);
}