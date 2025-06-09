'use client';

import React from 'react';
import { ImageList,ImageListItem, ImageListItemBar, Paper } from '@mui/material';
import { ImageGalleryWithLinksModel } from '@/types/global-fields';



export function ImageGallery({ bannerProps }: { bannerProps: ImageGalleryWithLinksModel }) {
    return (      
        <Paper variant='outlined' elevation={12}>
            <h3>{bannerProps.title}</h3>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {bannerProps.gallery_images.map((slide, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={`${slide.gallery_image.url}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${slide.gallery_image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={slide.gallery_image.filename}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={slide.overlay_text}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Paper>
    );
  }