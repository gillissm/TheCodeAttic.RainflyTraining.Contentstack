import { LinkProperty } from '../generic/link-property-model';
import { DefaultModelFields, ModelFieldsProperties } from '../generic/model-fields-properties';


export type NavigationMenuModel = DefaultModelFields & {
    menu: MenuItem[];
}

export type MenuItem = {
    menu_title: string;
    menu_item: LinkProperty[];
}


export const NavigationMenuProperties: ModelFieldsProperties = {
    contentTypeUid:'navigation_menu',    
    jsonRtePath: undefined,
    referenceFields: undefined,
}


