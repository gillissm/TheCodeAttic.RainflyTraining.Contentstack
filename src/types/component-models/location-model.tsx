import { DefaultModelFields, ModelFieldsProperties } from '../generic/model-fields-properties';
import { LinkProperty } from '../generic/link-property-model';


export type  LocationProps = DefaultModelFields & {
    address: string;
    city: string;
    state: string;
    zip_code: string;
    more_info: LinkProperty;
}


export const LocationPropsProperties: ModelFieldsProperties = {
    contentTypeUid:'location',    
    jsonRtePath: undefined,
    referenceFields: undefined,
}


