import React from 'react';
import { Image } from "../../typescript/action";
import { ImageList, ImageListItem, ImageListItemBar, Paper, Typography } from '@mui/material';
import { BasicBannerModel } from '../../models/global-fields/basic-banner-model';
import  Grid from '@mui/material/Grid2';


export default function BasicBanner({ bannerProps }: { bannerProps: BasicBannerModel }) {
        const divStyle = {
          backgroundImage: `url(${bannerProps.banner_image.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '50vh',
        };
    
    return (
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