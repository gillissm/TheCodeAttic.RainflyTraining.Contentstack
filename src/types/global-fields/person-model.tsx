import { Image } from '@/types/generic';
import { LinkProperty } from '../generic/link-property-model';
import { DefaultModelFields, ModelFieldsProperties } from '../generic/model-fields-properties';


export type PersonModel = DefaultModelFields &{
    first_name: string;
    last_name: string;
    based_out_of: Location;
    profile_image: Image;
    profile_url: LinkProperty;
}


export const PersonProperties: ModelFieldsProperties = {
    contentTypeUid: 'person',
    jsonRtePath: undefined,
    referenceFields: ['based_out_of']
};
