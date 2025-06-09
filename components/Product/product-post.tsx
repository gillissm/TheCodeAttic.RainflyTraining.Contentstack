'use client';
import React from 'react';

import { ImageList, ImageListItem, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ProductProps } from '@/types/page-models';


export function ProductPost({ product }: { product: ProductProps }) {
    // console.log('product post')
    // console.log(product.product_details[1].key_information.bullet_item)
    return (
        <>
            <Grid container spacing={2} sx={{ padding: 2 }}>
                <Grid size={12}>
                    <Paper elevation={12}>
                        <h1>{product.title}</h1>
                    </Paper>
                </Grid>
                {product.product_details && product.product_details.map((pd, index) => {
                    if (pd.general) {
                        return (
                            <>
                                <Grid size={8} key={`img-${index}`}>
                                    <Paper elevation={3}>
                                        <img src={pd.general.default_product_image.url}
                                            alt={pd.general.default_product_image.filename} />
                                    </Paper>
                                </Grid>
                                <Grid size={4}  key={`tag-${index}`}>
                                    <Paper elevation={3}>
                                        {pd.general.product_tagline &&
                                            <div><h3>Product Tagline</h3>
                                                <p>{pd.general.product_tagline}</p></div>}

                                        {pd.general.color &&
                                            <div><h3>Color</h3>
                                                <p>{pd.general.color}</p></div>}

                                        {pd.general.material &&
                                            <div><h3>Material</h3>
                                                <p>{pd.general.material}</p></div>}

                                        {pd.general.ease_of_use &&
                                            <div><h3>Ease of Use</h3>
                                                <p>{pd.general.ease_of_use}</p></div>}

                                        {pd.general.net_weight &&
                                            <div><h3>Net Weight</h3>
                                                <p>{pd.general.net_weight} kg</p></div>}

                                        {pd.general.capcity &&
                                            <div><h3>Capacity</h3>
                                                <p>{pd.general.capcity} L</p></div>}
                                    </Paper>
                                </Grid>
                                {pd.general.secondary_product_image &&
                                    <Grid size={12}  key={`gallery-${index}`}>
                                        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                                            {pd.general.secondary_product_image.map((item) => (
                                                <ImageListItem key={item.filename}>
                                                    <img
                                                        srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                        src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                                                        alt={item.filename}
                                                        loading="lazy"
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    </Grid>
                                }
                            </>
                        );
                    }
                    if (pd.key_information) {
                   return(     <Grid size={8} key={index}>
                            <Paper elevation={6}>
                                <h3>Key Information</h3>                           
                                 <ul>
                                    {pd.key_information?.bullet_item.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul> 
                            </Paper>
                        </Grid>)
                    }
                })}
            </Grid>
        </>
    );
}