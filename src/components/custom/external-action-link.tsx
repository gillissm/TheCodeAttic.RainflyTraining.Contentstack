import React from 'react';
import { Image } from "../../typescript/action";
import { Button, Divider, ImageList, ImageListItem, ImageListItemBar, Paper, Stack, styled, Typography } from '@mui/material';
import { BasicBannerModel } from '../../models/global-fields/basic-banner-model';
import  Grid  from '@mui/material/Grid2';
import { ExternalLinkModel } from '../../models/global-fields/external-link-model';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

export default function ExternalActionLink({ actionProps }: { actionProps: ExternalLinkModel }) {
    return (
        <Grid container>
            <Grid size={12}>
                <Stack direction="row" spacing={4} divider={<Divider orientation="vertical" flexItem />}>
                    {actionProps.display_label && <Item>{actionProps.display_label}</Item>}
                    {actionProps.target && <Item><Button variant='outlined' href={actionProps.target.href}>{actionProps.target.title}</Button> </Item>}
                </Stack>
            </Grid>
        </Grid>

    );
}