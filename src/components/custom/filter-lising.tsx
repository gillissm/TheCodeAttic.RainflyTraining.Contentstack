import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions, Typography, CardMedia, Skeleton } from '@mui/material';
import Button from '@mui/material/Button';
import { Image } from "../../typescript/action";
import { getEntry, onEntryChange } from '../../contentstack-sdk';
import { ListingDisplayProps } from '../../models/component-models/listing-display-model';
import { EventPostProps } from '../../models/page-models/event-post-model';
import { NewsProps } from '../../models/page-models/news-post-model';
import { BlogPostProps } from '../../models/page-models/blog-post-page';
import { getAllBlogs, getAllEvents, getAllNews } from '../../helper/data-retrieval';


function EventListing({ sectionHeader }: { sectionHeader: string }) {
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
        onEntryChange(() => fetchData());
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

function NewsListing({ sectionHeader }: { sectionHeader: string }) {
    const [newsListing, setNewsListing] = useState<NewsProps[]>();
    async function fetchData() {
        try {
            const entryRes = await getAllNews();
            if (!entryRes) throw new Error('Status code 404');

            setNewsListing(entryRes);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        onEntryChange(() => fetchData());
    }, []);

    return (
        <div className='blog-container'>
            <h2>{sectionHeader}</h2>
            <div className='blog-column-left'>
                {newsListing ? (
                    newsListing.map((blogList, index) => (
                        <Card key={index} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={blogList.news_details.featured_image.url}
                                title={blogList.news_details.featured_image.filename} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {blogList.news_details.headline}
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
    );
}


function BlogListing({ sectionHeader }: { sectionHeader: string }) {
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
        onEntryChange(() => fetchData());
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

export default function FilterListing({ listing }: { listing: ListingDisplayProps }) {
    // console.log('listing comp')
    // console.log(listing)
    if (listing.target_content_type === "Event") {
        return <EventListing sectionHeader={listing.headline} />
    }
    if (listing.target_content_type === "News") {
        return <NewsListing sectionHeader={listing.headline} />
    }

    if (listing.target_content_type === "Blog") {
        return <BlogListing sectionHeader={listing.headline} />
    }
    return <>This is empty</>;
}