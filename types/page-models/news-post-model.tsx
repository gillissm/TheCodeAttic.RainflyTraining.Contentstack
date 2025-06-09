import { GlobalPageFields } from './global-fields';
import { ArticleFieldsModel, ArticleFieldsProperties } from '../global-fields/article-fields-model';
import { ModelFieldsProperties, CreateRichtextList } from '../generic';


export type NewsProps = GlobalPageFields &{
    news_details: ArticleFieldsModel;    
}


export const NewsProperties: ModelFieldsProperties = {
    contentTypeUid:'news',    
    jsonRtePath:CreateRichtextList('news_details', ArticleFieldsProperties),
    referenceFields: undefined,
}


