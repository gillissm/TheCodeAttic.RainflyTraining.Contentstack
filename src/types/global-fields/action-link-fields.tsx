import { ModelFieldsProperties } from '../generic/model-fields-properties';
import { BlogPostProps } from '../page-models/blog-post-page';
import { EventPostProps } from '../page-models/event-post-model';
import { NewsProps } from '../page-models/news-post-model';
import { PageProps } from '../page-models/page-model';
import { ProductProps } from '../page-models/product-post-model';

export type ActionLinksField={
    action_label: string;
    action_target: ProductProps | PageProps | NewsProps | EventPostProps | BlogPostProps;
}
export const ActionLinksFieldProperties: ModelFieldsProperties = {
    contentTypeUid:'',
    referenceFields: ['action_target'],
    jsonRtePath: undefined
}