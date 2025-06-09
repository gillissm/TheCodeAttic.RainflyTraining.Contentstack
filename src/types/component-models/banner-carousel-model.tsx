import { DefaultModelFields, ModelFieldsProperties } from '../generic/model-fields-properties';
import { LinkProperty } from '../generic/link-property-model';
import { Image } from '@/types/generic';

export type BannerCarouselProps = DefaultModelFields & {
    slides:Slide[]
}
export type Slide={
    deadline: string;
    sub_headline: string;
    slide_image: Image;
    action_link: LinkProperty;
}


export const BannerCarouselProperties: ModelFieldsProperties = {
    contentTypeUid:'banner_carousel',
    referenceFields: undefined,
    jsonRtePath: undefined
}
