import { Image } from '@/types/generic';
import { DefaultModelFields, ModelFieldsProperties } from '../generic/model-fields-properties';
import { NavigationMenuModel } from './navigation-menu-model';


export type HeaderProps = DefaultModelFields &{
    logo: Image;
    top_level_navigation: NavigationMenuModel[];
}


export const HeaderPropsProperties: ModelFieldsProperties = {
    contentTypeUid:'header',    
    jsonRtePath: undefined,
    referenceFields: ['top_level_navigation']
}


