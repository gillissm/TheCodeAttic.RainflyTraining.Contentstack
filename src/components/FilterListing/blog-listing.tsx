'use client';
import { getAllBlogs } from '@/utils/data-retrieval';
import { BlogPostProps } from '@/types/page-models';
import ContentstackLivePreview from '@contentstack/live-preview-utils';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Skeleton } from '@mui/material';
import { useState, useEffect } from 'react';

export default function BlogListing({ sectionHeader }: { sectionHeader: string }) {
    const [blogListing, setBlogListing] = useState<BlogPostProps[]>();
    async function fetchData() {
        try {
            const entryRes = await getAllBlogs();
            if (!entryRes) throw new Error('Status code 404');

            setBlogListing(entryRes);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        ContentstackLivePreview.onEntryChange(fetchData); 
    }, []);

    return (
        <div className='blog-container'>
            <h2>{sectionHeader}</h2>
            <div className='blog-column-left'>
                {blogListing ? (
                    blogListing.map((blogList, index) => (
                        <Card key={index} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={blogList.post.featured_image.url}
                                title={blogList.post.featured_image.filename} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {blogList.post.headline}
                                </Typography>
                                <Typography gutterBottom component="div">
                                    by {blogList.author.last_name}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href={blogList.url}>Go Read It!</Button>
                            </CardActions>
                        </Card>
                    ))
                ) : (
                    <Skeleton variant='rectangular' width={210} height={118} />
                )}
            </div>
        </div>
    );
}