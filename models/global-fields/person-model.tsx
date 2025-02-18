import { Image } from '../../typescript/action';
import { LinkProperty } from '../link-property-model';
import { DefaultModelFields, ModelFieldsProperties } from '../model-fields-properties';


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
