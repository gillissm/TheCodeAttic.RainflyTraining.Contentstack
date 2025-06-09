'use client';
import React from 'react';
import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { NewsProps } from '@/types/page-models';



export function NewsPost({ newspost }:{newspost: NewsProps} ) {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Paper elevation={3}>
                        <h1>{newspost.news_details.headline}</h1>                        
                    </Paper>
                </Grid>
                <Grid container size={2}></Grid>
                <Grid size={8}>
                    <Paper elevation={2}>
                        {newspost.news_details.body_copy ? (
                            <div dangerouslySetInnerHTML={{ __html: newspost.news_details.body_copy }}></div>
                        ) : (
                        ''
                        )}
                    </Paper>
                </Grid>                            
                <Grid container size={2}></Grid>
            </Grid>
        </Box>
    );
}