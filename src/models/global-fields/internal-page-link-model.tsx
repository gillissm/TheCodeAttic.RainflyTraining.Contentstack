import { Image } from '../../typescript/action';
import { DefaultModelFields, ModelFieldsProperties } from '../model-fields-properties';
import { BlogPostProps } from '../page-models/blog-post-page';
import { EventPostProps } from '../page-models/event-post-model';
import { NewsProps } from '../page-models/news-post-model';
import { PageProps } from '../page-models/page-model';
import { ProductProps } from '../page-models/product-post-model';


export type InternalPageLinkModel =DefaultModelFields & {
    display_label: string;
    target: ProductProps | PageProps | NewsProps | EventPostProps | BlogPostProps    
}

export const InternalPageLinkProperties: ModelFieldsProperties = {
    contentTypeUid: 'internal_page_link',
    jsonRtePath: undefined,
    referenceFields: ['target']
};
