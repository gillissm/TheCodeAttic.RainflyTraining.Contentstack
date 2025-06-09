'use client';

import { RenderProps } from '@/types/generic';
import React from 'react';
import { BannerCarousel, BasicBanner } from './Banner';
import { Cta, CtaRow } from './CTA';
import FilterListing from './FilterListing/filter-listing';
import { ImageGallery } from './ImageGallery';
import { ProductListing } from './Product';
import { ExternalActionLink } from './LinkButton';


export default function RenderComponents(props: RenderProps) {
  const { pageComponents, entryUid, contentTypeUid, locale } = props;
  // console.log('RenderComponents')
  // console.log(pageComponents);
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {pageComponents?.map((component, key: number) => {
        console.log(component);
        if (component.cta) {
          return (<Cta cta={component.cta.cta[0]} key={`component-cta-${key}`}/>);
        }
        if (component.image_gallery) {
          return (<ImageGallery bannerProps={component.image_gallery} key={`component-imggallery-${key}`} />);
        }
        if (component.products) {
          return (<ProductListing productsListProp={component.products} key={`component-products-${key}`} />);
        }
        if (component.banner) {
          return (<BasicBanner bannerProps={component.banner} key={`component-banner-${key}`} />);
        }
        if (component.external_action_link) {
          return (<ExternalActionLink actionProps={component.external_action_link} key={`component-extlink-${key}`} />);
        }
        if (component.banner_carousel) {
          return (<BannerCarousel bannerProps={component.banner_carousel} key={`component-bannerslider-${key}`} />);
        }
        if (component.filter_listing) {
          return (<>
            {component.filter_listing.listing.map((l, i) => {
              return (<FilterListing key={`component-filter-${key}-${i}`} listing={l}/>)
              // return (<div key={`component-filter-${key}-${i}`}>{l.headline} - {l.target_content_type}</div>)
            })}
          </>);         
        }
        if (component.cta_row) {
          return (<CtaRow ctaRow={component.cta_row} key={`component-ctarow-${key}`} />);
        }
      })}
    </div>
  );
}
