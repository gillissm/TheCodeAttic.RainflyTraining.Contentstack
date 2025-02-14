import { GlobalPageFields } from './global-fields';
import { CreateReferenceList, CreateRichtextList, ModelFieldsProperties } from '../model-fields-properties';
import { ArticleFieldsModel, ArticleFieldsProperties } from '../global-fields/article-fields-model';
import { PersonModel, PersonProperties } from '../global-fields/person-model';


export type BlogPostProps = GlobalPageFields &{
    post: ArticleFieldsModel;
    author: PersonModel;
    taxonomies: [taxonomyTerm];
}


export const BlogPostProperties: ModelFieldsProperties = {
    contentTypeUid:'blog_post',    
    jsonRtePath:CreateRichtextList('post', ArticleFieldsProperties),
    referenceFields: CreateReferenceList('author', PersonProperties)    
}


