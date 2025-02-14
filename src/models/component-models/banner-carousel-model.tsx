import { Image} from '../../typescript/action'
import { DefaultModelFields, ModelFieldsProperties } from '../model-fields-properties';
import { LinkProperty } from '../link-property-model';

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
