import { Image } from '../../typescript/action';
import { DefaultModelFields, ModelFieldsProperties } from '../model-fields-properties';


export type BasicBannerModel = DefaultModelFields & {
    headline: string;
    sub_header: string;
    banner_image: Image;
}


export const BasicBannerProperties: ModelFieldsProperties = {
    contentTypeUid: 'basic_banner',
    jsonRtePath: undefined,
    referenceFields: undefined,
};
