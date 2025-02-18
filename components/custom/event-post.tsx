import React from 'react';
import { Image } from "../../typescript/action";
import { ImageList,ImageListItem, ImageListItemBar, Paper } from '@mui/material';
import LocationPost from './location-post';
import { EventPostProps } from '../../models/page-models/event-post-model';



export default function EventPost({ eventProps }:{eventProps: EventPostProps}) {
    return (      
        <Paper elevation={12} sx={{ padding: 2 }} variant='outlined' square={false}>
            <h1>{eventProps.title}</h1>
            <p>{eventProps.event_description}</p>
            {eventProps.location && (
                <LocationPost locationProps={eventProps.location}/>
            )}
            {eventProps.start_date_and_time && (
                <div>
                    <h3>Start Date and Time</h3>
                    <p>{new Date(eventProps.start_date_and_time).toLocaleString()}</p>
                </div>
            )}
            {eventProps.end_date_and_time && (
                <div>
                    <h3>End Date and Time</h3>
                    <p>{new Date(eventProps.end_date_and_time).toLocaleString()}</p>
                </div>
            )}
        </Paper>
    );
  }