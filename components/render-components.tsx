import React from 'react';
import { RenderProps } from '../models/props-model';
import Cta from './custom/cta';
import ImageGallery from './custom/image-gallery';
import ProductListing from './custom/product-listing';
import BasicBanner from './custom/basic-banner';
import ExternalActionLink from './custom/external-action-link';
import BannerCarousel from './custom/banner-carousel';
import FilterListing from './custom/filter-lising';
import CtaRow from './custom/cta-row';


export default function RenderComponents(props: RenderProps) {
  const { pageComponents, blogPost, entryUid, contentTypeUid, locale } = props;
  // console.log('RenderComponents')
  // console.log(pageComponents);
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {pageComponents?.map((component, key: number) => {
        
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
