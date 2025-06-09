'use client';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { LocationProps } from '@/types/component-models';

export function LocationPost({ locationProps }:{locationProps: LocationProps}) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    {locationProps.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }} component="div">
                    <p>{locationProps.address}</p>
                    <p>{locationProps.city}, {locationProps.state} {locationProps.state} {locationProps.zip_code}</p>
                </Typography>
                {locationProps.more_info && locationProps.more_info.href.length > 0 && (
                    <CardActions>
                        <Button size="small" href={locationProps.more_info?.href}>{locationProps.more_info?.title}</Button>
                    </CardActions>
                )}
            </CardContent>
        </Card>
    );
}