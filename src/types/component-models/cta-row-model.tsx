import { CreateReferenceList, CreateRichtextList, DefaultModelFields, ModelFieldsProperties } from '../generic/model-fields-properties';
import { CTAProps, CTAPropsProperties } from './cta-model';

export type CTARowProps = DefaultModelFields &{
    cta:CTAProps[];
}

export const CTARowPropsProperties: ModelFieldsProperties = {
    contentTypeUid:'cta_row',    
    jsonRtePath:CreateRichtextList('cta', CTAPropsProperties),
    referenceFields:CreateReferenceList('cta', CTAPropsProperties)
}
