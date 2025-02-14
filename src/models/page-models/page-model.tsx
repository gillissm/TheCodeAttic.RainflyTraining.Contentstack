import { GlobalPageFields } from './global-fields';
import { Image} from '../../typescript/action'
import { CreateReferenceList, CreateRichtextList, ModelFieldsProperties } from '../model-fields-properties';
import { ArticleFieldsModel, ArticleFieldsProperties } from '../global-fields/article-fields-model';
import { PersonModel, PersonProperties } from '../global-fields/person-model';
import { FormEmbedModel, FormEmbedModelProperties } from '../global-fields/form-embed-model';
import { TestimonialsModel } from '../global-fields/testimonials-model';
import { ImageGalleryWithLinksModel, ImageGalleryWithLinksModelProperties } from '../global-fields/image-gallery-with-links-model';
import { MultipleProductDisplay, MultipleProductDisplayProperties } from '../global-fields/multiple-product-display';
import { BasicBannerModel } from '../global-fields/basic-banner-model';
import { ExternalLinkModel } from '../global-fields/external-link-model';
import { BannerCarouselProps } from '../component-models/banner-carousel-model';
import { CTAProps, CTAPropsProperties } from '../component-models/cta-model';
import { ListingDisplayProperties, ListingDisplayProps } from '../component-models/listing-display-model';


export type PageProps = GlobalPageFields &{
    page_elements: PageComponents[];
}

export type PageComponents = {
    form: FormEmbedModel;
    testimonials: TestimonialsModel;
    image_gallery: ImageGalleryWithLinksModel;
    products: MultipleProductDisplay;
    banner: BasicBannerModel;
    external_action_link: ExternalLinkModel;
    banner_carousel: BannerCarouselProps;
    cta: { cta: CTAProps[] };
    filter_listing: { listing: ListingDisplayProps[] };
}

export const PageProperties: ModelFieldsProperties = {
    contentTypeUid:'page',    
    jsonRtePath: [''].concat(CreateRichtextList('page_elements.cta.cta', CTAPropsProperties))
        .concat(CreateRichtextList('page_elements.products', MultipleProductDisplayProperties))
        .concat(CreateRichtextList('page_elements.form', FormEmbedModelProperties)),
    referenceFields: ['page_elements.filter_listing.listing'].concat(CreateReferenceList('page_elements.cta.cta', CTAPropsProperties))
        .concat(CreateReferenceList('page_elements.products', MultipleProductDisplayProperties))
        .concat(CreateReferenceList('page_elements.image_gallery', ImageGalleryWithLinksModelProperties))    
        //.concat(CreateReferenceList('page_elements.filter_listing.listing',ListingDisplayProperties ))    
}


