import { LinkProperty } from '../link-property-model';
import { DefaultModelFields, ModelFieldsProperties } from '../model-fields-properties';


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


