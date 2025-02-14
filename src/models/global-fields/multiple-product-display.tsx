import { Image } from '../../typescript/action';
import { CreateReferenceList, DefaultModelFields, ModelFieldsProperties } from '../model-fields-properties';
import { ProductProperties, ProductProps } from '../page-models/product-post-model';
import { ActionLinksField, ActionLinksFieldProperties } from './action-link-fields';



export type MultipleProductDisplay = DefaultModelFields &{
    headline: string;
    sub_header: string;
    products_for_display: ProductProps[];
    action_link: ActionLinksField;
}


export const MultipleProductDisplayProperties: ModelFieldsProperties = {
    contentTypeUid: 'multiple_product_display',
    jsonRtePath: undefined,
    referenceFields: ['products_for_display']
        .concat(CreateReferenceList('products_for_display', ProductProperties))
        .concat(CreateReferenceList('action_link', ActionLinksFieldProperties))        
};
