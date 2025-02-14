import { GlobalPageFields } from './global-fields';
import { CreateReferenceList, CreateRichtextList, ModelFieldsProperties } from '../model-fields-properties';
import { LocationProps } from '../component-models/location-model';

export type EventPostProps = GlobalPageFields & {
    event_description: string;
    location: LocationProps;
    taxonomies: [taxonomyTerm];
    start_date_and_time: Date;
    end_date_and_time: Date;
}

export const EventPostProperties: ModelFieldsProperties = {
    contentTypeUid:'event',    
    jsonRtePath:['event_description'],
    referenceFields: ['location']    
}


