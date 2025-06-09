import { ModelFieldsProperties } from './model-fields-properties'

export type QueryProp = {
    queryOperator: string;
    filterQuery: any;
}

export type RequestModel = {
    modelDefintion: ModelFieldsProperties;
    query?: QueryProp|undefined;
    limit: number;
    locale: string;
}