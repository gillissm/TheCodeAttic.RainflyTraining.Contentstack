import { Image } from '@/types/generic';
import { CreateReferenceList, DefaultModelFields, ModelFieldsProperties } from '../generic/model-fields-properties';
import { ActionLinksField, ActionLinksFieldProperties } from './action-link-fields';


export type ImageGalleryWithLinksModel = DefaultModelFields & {
    headline: string;
    sub_header: string;
    gallery_images: GalleryImageModel[];
    action_links: ActionLinksField[];
}

export type GalleryImageModel = {
    gallery_image: Image;
    overlay_text: string;
    text_location: string;
}



export const ImageGalleryWithLinksModelProperties: ModelFieldsProperties = {
    contentTypeUid: 'image_gallery_with_links',
    jsonRtePath: undefined,
    referenceFields:CreateReferenceList('action_links', ActionLinksFieldProperties)
};
