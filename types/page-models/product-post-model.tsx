import { Image, ModelFieldsProperties } from '@/types/generic';
import { PageProps } from './page-model';

export type ProductProps = PageProps &{
    product_details: ProductDetails[];
}
export type ProductDetails = {
    general: GeneralProps;
    key_information: { bullet_item: string[] };
}

export type GeneralProps = {
    default_product_image: Image;
    product_tagline: string;
    color: string[];
    material: string;
    ease_of_use: string;
    secondary_product_image: Image[];
    net_weight: number;
    capcity: number;
}

export const ProductProperties: ModelFieldsProperties = {
    contentTypeUid:'product',
    jsonRtePath: ['product_details.general', 'product_details.key_information', 'product_details.key_information.bullet_item']
        // .concat(CreateRichtextList('page_elements.cta.cta', CTAPropsProperties))
        //         .concat(CreateRichtextList('page_elements.products', MultipleProductDisplayProperties))
        //         .concat(CreateRichtextList('page_elements.form', FormEmbedModelProperties)),
  ,  referenceFields: ['']
    // .concat(CreateReferenceList('page_elements.cta.cta', CTAPropsProperties))
    //         .concat(CreateReferenceList('page_elements.products', MultipleProductDisplayProperties))
    //         .concat(CreateReferenceList('page_elements.image_gallery',ImageGalleryWithLinksModelProperties )) 
}
