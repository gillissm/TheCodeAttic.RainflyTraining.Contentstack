import { GlobalPageFields } from './global-fields';
import { ModelFieldsProperties } from '../generic/model-fields-properties';
import { LocationProps } from '../component-models/location-model';
import { taxonomyTerm } from '../generic';

export type EventPostProps = GlobalPageFields & {
    event_description: string;
    location: [LocationProps];
    taxonomies: [taxonomyTerm];
    start_date_and_time: Date;
    end_date_and_time: Date;
}

export const EventPostProperties: ModelFieldsProperties = {
    contentTypeUid:'event',    
    jsonRtePath:['event_description'],
    referenceFields: ['location']    
}


