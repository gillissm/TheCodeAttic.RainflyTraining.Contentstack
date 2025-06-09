'use client';

import { EventPostProps } from '@/types/page-models';
import { Paper } from '@mui/material';
import React from 'react';
import { LocationPost } from '@/components/Location/location-post';



export function EventPost({ eventProps }:{eventProps: EventPostProps}) {
    return (      
        <Paper elevation={12} sx={{ padding: 2 }} variant='outlined' square={false}>
            <h1>{eventProps.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: eventProps.event_description }}></div>
            {eventProps.location && eventProps.location.map((lp,index) =>
                (<LocationPost locationProps={lp} key={index} />)
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