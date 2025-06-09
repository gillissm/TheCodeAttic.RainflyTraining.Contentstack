'use client';

import { getAllEvents } from '@/utils/data-retrieval';
import { EventPostProps } from '@/types/page-models';
import ContentstackLivePreview from '@contentstack/live-preview-utils';
import { Card, CardContent, Typography, CardActions, Button, Skeleton } from '@mui/material';
import { useState, useEffect } from 'react';

export default function EventListing({ sectionHeader }: { sectionHeader: string }) {
    const [eventListing, setEventListing] = useState<EventPostProps[]>();
    async function fetchData() {
        try {
            const entryRes = await getAllEvents();
            if (!entryRes) throw new Error('Status code 404');

            setEventListing(entryRes);
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
                <div className='blog-column-left'>
                    {eventListing ? (
                        eventListing.map((blogList, index) => (
                            <Card key={index} sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {blogList.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {blogList.start_date_and_time.toString()}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" href={blogList.url}>Learn More</Button>
                                </CardActions>
                            </Card>
                        ))
                    ) : (
                        <Skeleton variant='rectangular' width={210} height={118} />
                    )}
                </div>
            </div>
        </div>
    );
}