import { Image} from '../../typescript/action'
import { DefaultModelFields, ModelFieldsProperties } from '../model-fields-properties';
import { NavigationMenuModel } from './navigation-menu-model';
import { LinkProperty } from '../link-property-model';

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


