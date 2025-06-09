export type DefaultModelFields = {
    title: string;
    uid: string;
    $: any;
}

export type ModelFieldsProperties = {
    contentTypeUid: string;
    jsonRtePath?: string[]|undefined;
    referenceFields?: string[]|undefined ;    
}

export function CreateReferenceList(fieldName: string, propertyList: ModelFieldsProperties) {
    if (propertyList.referenceFields !== null
        && propertyList.referenceFields !== undefined
        && propertyList.referenceFields.length > 0) {
        return propertyList.referenceFields.map((f) => `${fieldName}.${f}`);
    }
    return [];
}

export function CreateRichtextList(fieldName: string, propertyList: ModelFieldsProperties) {
    if (propertyList.jsonRtePath !== null
        && propertyList.jsonRtePath !== undefined
        && propertyList.jsonRtePath.length > 0) {
        return propertyList.jsonRtePath.map((f) => `${fieldName}.${f}`);
    }
    return [];
}