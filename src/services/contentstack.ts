/* eslint-disable */
import  _ from 'lodash';
import { addEditableTags, jsonToHTML } from '@contentstack/utils'
import { QueryOperator } from '@contentstack/delivery-sdk'
import { EmbeddedItem } from '@contentstack/utils/dist/types/Models/embedded-object'
import { Sdk } from '@contentstack/personalize-edge-sdk/dist/sdk'
import { Stack } from '@/config'
import { isEditButtonsEnabled } from '@/config'
import { RequestModel } from '@/types/generic'
import { deserializeVariantIds } from '@/utils'

/**
  *
  * fetches all the entries from specific content-type
  * @param {* content-type uid} contentTypeUid
  * @param {* locale} locale
  * @param {* reference field name} referenceFieldPath
  * @param {* Json RTE path} jsonRtePath
  * @param {* containedInQuery} query
  *
  */
export const getEntries = async <T>(request:RequestModel,  personalizationSDK?: Sdk|undefined ) => {
    try {    
        console.log(request.locale);
        let result: { entries: T[] } | null = null
        if(!Stack) {
            throw new Error('===== No stack initialization found====== \n check environment variables: \
            CONTENTSTACK_API_KEY, CONTENTSTACK_DELIVERY_TOKEN, CONTENTSTACK_PREVIEW_TOKEN, CONTENTSTACK_PREVIEW_HOST, CONTENTSTACK_ENVIRONMENT')
        }
        const entryQuery = Stack.contentType(request.modelDefintion.contentTypeUid)
            .entry()
          //  .locale(request.locale)
            .includeFallback()
            .includeEmbeddedItems()
            .includeReference(request.modelDefintion?.referenceFields ?? [])
            .variants(deserializeVariantIds(personalizationSDK))
            .query()
            

        if (entryQuery) {
            
            if (request.query?.filterQuery?.length > 0 && request.query?.queryOperator === 'or') { // filterQuery is an array of object consisting key:value pair
               
                const queries = request.query?.filterQuery?.map((q:any) => { 
                    if (typeof Object.values(q)?.[0] === 'string') {
                        // return Stack.ContentType(contentTypeUid).Query().where(Object.keys(q)?.[0], Object.values(q)?.[0])
                        return Stack && Stack.contentType(request.modelDefintion.contentTypeUid).entry().query().equalTo(Object.keys(q)?.[0], Object.values(q)?.[0] as string)
                    }
                    return Stack && Stack.contentType(request.modelDefintion.contentTypeUid).entry().query().containedIn(Object.keys(q)?.[0], Object.values(q)?.[0] as any)
                })
                entryQuery.queryOperator(QueryOperator.OR, ...queries)
            } 

            if (request.query?.filterQuery?.key && request.query?.filterQuery?.value) { // filterQuery is an object consisting key value pair
                entryQuery.equalTo(request.query.filterQuery.key, request.query.filterQuery.value)
            }

            // fetching entries based on limit for related articles (not to overload payload)
            if (request.limit !== 0) entryQuery.limit(request.limit)

            result = await entryQuery
                .addParams({'include_metadata': 'true'})
                .addParams({'include_applied_variants': 'true'})
                .find() as { entries: T[] }

            const data = result?.entries as EmbeddedItem[]

            if (data && _.isEmpty(data?.[0])) {
                throw '404 | Not found'
            }

            data.forEach((entry) => {
                if (request.modelDefintion?.jsonRtePath) {
                    jsonToHTML({
                        entry: entry,
                        paths: request.modelDefintion?.jsonRtePath
                    })
                }
                isEditButtonsEnabled && addEditableTags(entry, request.modelDefintion?.contentTypeUid, true, request.locale)
            })
            
            return data as T[];
        }
    }
    catch (error) {
        console.error('🚀 ~ getEntries ~ error:', error)
        throw error
    }
}


/**
 *
 * fetches all the entries from specific content-type
 * @param {* content-type uid} contentTypeUid
 * @param {* locale} locale
 * @param {* entryUrl} entryUrl
 * @param {* reference field name} referenceFieldPath
 * @param {* Json RTE path} jsonRtePath
 *
 */
export const getEntryByUrl = async <T> (request:RequestModel, entryUrl: string, personalizationSDK?: Sdk|undefined) => {
    try {
        console.log(request.locale);
        let result: { entries: T[] } | null = null
        if (!Stack) {
            throw new Error('===== No stack initialization found====== \n check environment variables: \
            CONTENTSTACK_API_KEY, CONTENTSTACK_DELIVERY_TOKEN, CONTENTSTACK_PREVIEW_TOKEN, CONTENTSTACK_PREVIEW_HOST, CONTENTSTACK_ENVIRONMENT')
        }

        const entryQuery = Stack.contentType(request.modelDefintion?.contentTypeUid)
            .entry()
            //.locale(request.locale)
            .includeFallback()
            .includeEmbeddedItems()
            .includeReference(request.modelDefintion?.referenceFields ?? [])
            .variants(deserializeVariantIds(personalizationSDK))
            
        if (request.modelDefintion?.referenceFields){
            for (const path of request.modelDefintion?.referenceFields) {
                entryQuery.includeReference(path)
            }
        }

        if (entryQuery) {
            result = await entryQuery.query()
                .equalTo('url', entryUrl)
                .addParams({ 'include_metadata': 'true' })
                .addParams({ 'include_applied_variants': 'true' })
                .find() as { entries: T[] }
            
            const data = result?.entries?.[0] as EmbeddedItem
            if (data && _.isEmpty(data)) {
                throw '404 | Not found'
            }

            if (request.modelDefintion?.jsonRtePath && data) {
                jsonToHTML({
                    entry: data,
                    paths: request.modelDefintion?.jsonRtePath
                })
            }
            
            if (isEditButtonsEnabled && data) {
                addEditableTags(data, request.modelDefintion?.contentTypeUid, true, request.locale)
            }
            return data
        }
    }
    catch (error) {
        console.error('🚀 ~ getEntryByUrl ~ error:', error)
        throw error
    }
}