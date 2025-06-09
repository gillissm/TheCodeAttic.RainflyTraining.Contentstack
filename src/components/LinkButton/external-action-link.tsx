'use client';

import React from 'react';
import { Button, Divider, Paper, Stack, styled } from '@mui/material';
import  Grid  from '@mui/material/Grid';
import { ExternalLinkModel } from '@/types/global-fields';

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

export function ExternalActionLink({ actionProps }: { actionProps: ExternalLinkModel }) {
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