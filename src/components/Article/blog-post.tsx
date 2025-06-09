'use client';

import React from 'react';
import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { BlogPostProps } from '@/types/page-models';


export function BlogPost({ blogpost }: { blogpost: BlogPostProps }) {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Paper elevation={3}>
                        <h1>{blogpost.post.headline}</h1>
                    </Paper>
                </Grid>
                <Grid size={8}>
                    <Paper elevation={2}>
                        {blogpost.post.body_copy ? (
                            <div dangerouslySetInnerHTML={{ __html: blogpost.post.body_copy }} ></div>
                        ) : ('')}
                    </Paper>
                </Grid>
                <Grid size={4}>
                    <Paper>
                        <ul>
                            {blogpost.taxonomies.map((activity, index) => (
                                <li key={index}>{activity.term_uid}</li>
                            ))}
                        </ul>
                    </Paper>
                </Grid>
                <Grid size={12}>
                    <Paper>
                        <h4>Author</h4>
                        <p>{blogpost.author.first_name} {blogpost.author.last_name}</p>
                        {blogpost.author.profile_image && <img
                            alt={blogpost.author.profile_image.filename}
                            src={blogpost.author.profile_image.url}
                            {...blogpost.author.profile_image.$.url}
                        />}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}