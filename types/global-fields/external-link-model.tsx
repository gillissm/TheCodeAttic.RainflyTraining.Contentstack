import { LinkProperty } from '../generic/link-property-model';
import { DefaultModelFields, ModelFieldsProperties } from '../generic/model-fields-properties';


export type ExternalLinkModel = DefaultModelFields & {
    display_label: string;
    target: LinkProperty;
}


export const ExternalLinkModelProperties: ModelFieldsProperties = {
    contentTypeUid: 'external_link',
    jsonRtePath: undefined,
    referenceFields: undefined,
};
