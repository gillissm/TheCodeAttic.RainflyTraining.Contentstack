import { Image } from '../../typescript/action';
import { LinkProperty } from '../link-property-model';
import { DefaultModelFields, ModelFieldsProperties } from '../model-fields-properties';


export type ExternalLinkModel = DefaultModelFields & {
    display_label: string;
    target: LinkProperty;
}


export const ExternalLinkModelProperties: ModelFieldsProperties = {
    contentTypeUid: 'external_link',
    jsonRtePath: undefined,
    referenceFields: undefined,
};
