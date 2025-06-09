import { DefaultModelFields, ModelFieldsProperties } from '../generic/model-fields-properties';


export type SEOModel =DefaultModelFields & {
    meta_keyword: string;
    meta_description: string;
    canonical_url: string;
    no_index: boolean;
    no_follow: boolean;
}


export const SEOProperties: ModelFieldsProperties = {
    contentTypeUid: 'seo',
    jsonRtePath: undefined,
    referenceFields: undefined,
};
