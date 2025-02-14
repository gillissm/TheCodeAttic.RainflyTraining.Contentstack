import { Image } from '../../typescript/action';
import { DefaultModelFields, ModelFieldsProperties } from '../model-fields-properties';


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
