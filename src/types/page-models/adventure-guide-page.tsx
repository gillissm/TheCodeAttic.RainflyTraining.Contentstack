import { GlobalPageFields } from './global-fields';
import { Image, taxonomyTerm } from '@/types/generic';
import { ModelFieldsProperties } from '../generic/model-fields-properties';

export type AdventureGuideProps=GlobalPageFields & {
    taxonomies: taxonomyTerm[];
    bio: string;
    profile_pic: Image;
    top_trip_description: string;
}

export const AdventureGuideProperties: ModelFieldsProperties = {
    contentTypeUid:'adventure_guide',
    referenceFields: undefined,
    jsonRtePath: ['bio', 'top_trip_description']
}