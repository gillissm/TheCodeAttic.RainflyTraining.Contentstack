import { SEOModel } from '../global-fields/seo-model';
import { DefaultModelFields } from '../generic/model-fields-properties';

export type GlobalPageFields = DefaultModelFields & {    
    url: string;
    seo: SEOModel;
    locale: string;
}