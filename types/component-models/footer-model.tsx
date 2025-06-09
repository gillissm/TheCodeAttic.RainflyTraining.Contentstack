import { Image } from '@/types/generic';
import { DefaultModelFields, ModelFieldsProperties } from '../generic/model-fields-properties';
import { NavigationMenuModel } from './navigation-menu-model';
import { LinkProperty } from '../generic/link-property-model';

export type FooterProps =DefaultModelFields & {
    logo: Image;
    navigation_menu: NavigationMenuModel[];
    social_share: {
        icon: Image;
        link: LinkProperty
    }[];
    copyright: string;
}

export const FooterPropsProperties: ModelFieldsProperties = {
    contentTypeUid:'footer',    
    jsonRtePath: undefined,
    referenceFields: ['navigation_menu']
}


