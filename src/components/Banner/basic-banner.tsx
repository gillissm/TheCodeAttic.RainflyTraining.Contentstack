'use client';
import React from 'react';
import { Paper } from '@mui/material';
import { BasicBannerModel } from '@/types/global-fields';
import  Grid from '@mui/material/Grid';


export function BasicBanner({ bannerProps }: { bannerProps: BasicBannerModel }) {
        const divStyle = {
          backgroundImage: `url(${bannerProps.banner_image.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '50vh',
        };
    
    return bannerProps &&(
        <Grid container>
            <Grid size={12}>
                <Paper elevation={4} variant='elevation'>
                    <div style={divStyle}>               
                        <div className="overlay-text">
                            <h1>{bannerProps.headline}</h1>
                            {bannerProps.sub_header && <h3>{bannerProps.sub_header}</h3>}
                        </div>
                    </div>
                </Paper>
            </Grid>
        </Grid>

    );
}