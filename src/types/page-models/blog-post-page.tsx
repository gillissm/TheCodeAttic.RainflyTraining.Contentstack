import { GlobalPageFields } from './global-fields';
import { CreateReferenceList, CreateRichtextList, ModelFieldsProperties } from '../generic/model-fields-properties';
import { ArticleFieldsModel, ArticleFieldsProperties } from '../global-fields/article-fields-model';
import { PersonModel, PersonProperties } from '../global-fields/person-model';
import { taxonomyTerm } from '../generic';


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


