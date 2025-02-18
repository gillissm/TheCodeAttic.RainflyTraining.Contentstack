import React from 'react';
import { Image } from "../../typescript/action";
import { ImageList,ImageListItem, ImageListItemBar } from '@mui/material';
import { BannerCarouselProps } from '../../models/component-models/banner-carousel-model';


export default function BannerCarousel({ bannerProps }: { bannerProps: BannerCarouselProps }) {
    return (
      
        <div className='demo-section'>
            <h3>{bannerProps.title}</h3>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {bannerProps.slides.map((slide, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={`${slide.slide_image.url}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${slide.slide_image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={slide.slide_image.filename}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={slide.sub_headline}
                            subtitle={slide.sub_headline}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
  }