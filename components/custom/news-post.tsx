import React from 'react';
import { Image } from "../../typescript/action";
import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { NewsProps } from '../../models/page-models/news-post-model';



export default function NewsPost({ newspost }:{newspost: NewsProps} ) {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Paper elevation={3}>
                        {/* <h1>{blogpost.Title}</h1> */}
                        <h1>{newspost.news_details.headline}</h1>
                        
                    </Paper>
                </Grid>
                <Grid size={8}>
                    <Paper elevation={2}>
                    {newspost.news_details.body_copy ? (
                        <p {...newspost.news_details.body_copy as {}}>{newspost.news_details.body_copy}</p>
                        ) : (
                        ''
                        )}
                    </Paper>
                </Grid>                                
            </Grid>
        </Box>
    );
}