import { DefaultModelFields, ModelFieldsProperties } from '../generic/model-fields-properties';


export type FormEmbedModel = DefaultModelFields & {
    headline: string;
    intro_text: string;
    form_embed: string;
}


export const FormEmbedModelProperties: ModelFieldsProperties = {
    contentTypeUid: 'form_embed',
    jsonRtePath: ['intro_text', 'form_embed'],
    referenceFields: undefined,
};
