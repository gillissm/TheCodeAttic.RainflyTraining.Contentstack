import { Image } from '@/types/generic';
import { DefaultModelFields, ModelFieldsProperties } from '../generic/model-fields-properties';


export type ArticleFieldsModel =DefaultModelFields & {
    headline: string;
    body_copy: string;
    featured_image: Image;
}


export const ArticleFieldsProperties: ModelFieldsProperties = {
    contentTypeUid: 'article_fields',
    jsonRtePath: ['body_copy'],
    referenceFields: undefined,
};
