import { GlobalPageFields } from './global-fields';
import { Image} from '../../typescript/action'
import { CreateReferenceList, CreateRichtextList, ModelFieldsProperties } from '../model-fields-properties';
import { ArticleFieldsModel, ArticleFieldsProperties } from '../global-fields/article-fields-model';
import { PersonModel, PersonProperties } from '../global-fields/person-model';


export type NewsProps = GlobalPageFields &{
    news_details: ArticleFieldsModel;    
}


export const NewsProperties: ModelFieldsProperties = {
    contentTypeUid:'news',    
    jsonRtePath:CreateRichtextList('news_details', ArticleFieldsProperties),
    referenceFields: undefined,
}


