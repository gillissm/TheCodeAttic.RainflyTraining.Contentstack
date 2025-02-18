import { Image } from '../../typescript/action';
import { DefaultModelFields, ModelFieldsProperties } from '../model-fields-properties';


export type TestimonialsModel = DefaultModelFields & {
    headline: string;
    sub_header: string;
    max_testimonial_retrieval: number;
    filter_options: string[];
}


export const TestimonialsProperties: ModelFieldsProperties = {
    contentTypeUid: 'testimonials',
    jsonRtePath: undefined,
    referenceFields: undefined,
};
