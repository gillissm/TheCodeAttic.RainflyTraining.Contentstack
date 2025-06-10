import { BannerCarouselProps, CTAProps, ListingDisplayProps, CTARowProps, CTAPropsProperties, CTARowPropsProperties, BannerCarouselProperties } from '../component-models';
import { ModelFieldsProperties, CreateRichtextList, CreateReferenceList } from '../generic';
import { FormEmbedModel, TestimonialsModel, ImageGalleryWithLinksModel, MultipleProductDisplay, BasicBannerModel, ExternalLinkModel, MultipleProductDisplayProperties, FormEmbedModelProperties, ImageGalleryWithLinksModelProperties } from '../global-fields';
import { GlobalPageFields } from './global-fields';

export type PageProps = GlobalPageFields & {
    page_elements: PageComponents[];
}

export type PageComponents = {
    form: FormEmbedModel;
    testimonials: TestimonialsModel;
    image_gallery: ImageGalleryWithLinksModel;
    products: MultipleProductDisplay;
    banner: BasicBannerModel;
    external_action_link: ExternalLinkModel;
    banner_carousel: {
        carousel: BannerCarouselProps[];
    };
    cta: { cta: CTAProps[] };
    filter_listing: { listing: ListingDisplayProps[] };
    cta_row: CTARowProps;
};

export const PageProperties: ModelFieldsProperties = {
    contentTypeUid: 'page',
    jsonRtePath: [''].concat(CreateRichtextList('page_elements.cta.cta', CTAPropsProperties))
        .concat(CreateRichtextList('page_elements.products', MultipleProductDisplayProperties))
        .concat(CreateRichtextList('page_elements.form', FormEmbedModelProperties))
        .concat(CreateRichtextList('page_elements.cta_row', CTARowPropsProperties)),
    referenceFields: ['page_elements.filter_listing.listing'].concat(CreateReferenceList('page_elements.cta.cta', CTAPropsProperties))
        .concat(CreateReferenceList('page_elements.products', MultipleProductDisplayProperties))
        .concat(CreateReferenceList('page_elements.image_gallery', ImageGalleryWithLinksModelProperties))
        .concat(CreateReferenceList('page_elements.cta_row', CTARowPropsProperties))
        .concat(CreateReferenceList('page_elements.banner_carousel.carousel', BannerCarouselProperties))
    //.concat(CreateReferenceList('page_elements.filter_listing.listing',ListingDisplayProperties ))    
}


