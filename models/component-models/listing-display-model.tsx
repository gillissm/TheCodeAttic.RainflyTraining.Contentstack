import {  DefaultModelFields, ModelFieldsProperties } from '../model-fields-properties';

export type ListingDisplayProps = DefaultModelFields & {
    headline: string;
    target_content_type: string;
    taxonomies: [taxonomyTerm];
}


export const ListingDisplayProperties: ModelFieldsProperties = {
    contentTypeUid:'listing_display',    
    jsonRtePath: undefined,
    referenceFields: undefined,
}


