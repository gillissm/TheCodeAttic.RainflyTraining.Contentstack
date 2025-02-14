import getConfig from "next/config";
import { addEditableTags } from "@contentstack/utils";

import { FooterProps, FooterPropsProperties } from '../models/component-models/footer-model';
import { getEntry, getEntryByUrl } from "../contentstack-sdk";
import { HeaderProps, HeaderPropsProperties } from '../models/component-models/header-model';
import { PageProperties, PageProps } from '../models/page-models/page-model';
import { ProductProperties } from '../models/page-models/product-post-model';
import { EventPostProperties, EventPostProps } from '../models/page-models/event-post-model';
import { NewsProperties, NewsProps } from '../models/page-models/news-post-model';
import { BlogPostProperties, BlogPostProps } from '../models/page-models/blog-post-page';

const { publicRuntimeConfig } = getConfig();
const envConfig = process.env.CONTENTSTACK_API_KEY
  ? process.env
  : publicRuntimeConfig;

const liveEdit = envConfig.CONTENTSTACK_LIVE_EDIT_TAGS === "true";


export const getFooterRes = async (): Promise<FooterProps> => {
  const response = (await getEntry({
    contentTypeUid: FooterPropsProperties.contentTypeUid,
    referenceFieldPath: FooterPropsProperties.referenceFields,
    jsonRtePath: FooterPropsProperties.jsonRtePath,
  })) as FooterProps[][];
  liveEdit && addEditableTags(response[0][0], FooterPropsProperties.contentTypeUid, true);
  return response[0][0];
};


export const getHeaderRes = async (): Promise<HeaderProps> => {
  const response = (await getEntry({
    contentTypeUid: HeaderPropsProperties.contentTypeUid,
    referenceFieldPath: HeaderPropsProperties.referenceFields,
    jsonRtePath: HeaderPropsProperties.jsonRtePath,
  })) as HeaderProps[][];

  liveEdit && addEditableTags(response[0][0],  HeaderPropsProperties.contentTypeUid, true);
  return response[0][0];
};


export const getAllEntries = async (): Promise<PageProps[]> => {
  const response = (await getEntry({
    contentTypeUid: PageProperties.contentTypeUid,
    referenceFieldPath: PageProperties.referenceFields,
    jsonRtePath: PageProperties.jsonRtePath,
  })) as PageProps[][];
  liveEdit &&
    response[0].forEach((entry) => addEditableTags(entry, PageProperties.contentTypeUid, true));
  return response[0];
};


export const getPageRes = async (entryUrl: string): Promise<PageProps> => {
  
  const response = (await getEntryByUrl({
    contentTypeUid: PageProperties.contentTypeUid,
    entryUrl: entryUrl,
    referenceFieldPath: PageProperties.referenceFields,
    jsonRtePath: PageProperties.jsonRtePath,    
  })) as PageProps[];
  liveEdit && addEditableTags(response[0], PageProperties.contentTypeUid, true);
  //  console.log('in getPageRes, next value is response')
  //  console.log(response)
  return response[0];
};

export const getProductPageRes = async (entryUrl: string): Promise<PageProps> => {
  
  const response = (await getEntryByUrl({
    contentTypeUid: ProductProperties.contentTypeUid,
    entryUrl: entryUrl,
    referenceFieldPath: ProductProperties.referenceFields,
    jsonRtePath: ProductProperties.jsonRtePath,    
  })) as PageProps[];
  liveEdit && addEditableTags(response[0], ProductProperties.contentTypeUid, true);
  //  console.log('in getPageRes, next value is response')
  //  console.log(response)
  return response[0];
};


export const getAllEvents = async (): Promise<EventPostProps[]> => {
  const response = (await getEntry({
    contentTypeUid: EventPostProperties.contentTypeUid,
    referenceFieldPath: EventPostProperties.referenceFields,
    jsonRtePath: EventPostProperties.jsonRtePath,
  })) as EventPostProps[][];
  liveEdit &&
    response[0].forEach((entry) => addEditableTags(entry, EventPostProperties.contentTypeUid, true));
  return response[0];
};

export const getAllNews= async (): Promise<NewsProps[]> => {
  const response = (await getEntry({
    contentTypeUid: NewsProperties.contentTypeUid,
    referenceFieldPath: NewsProperties.referenceFields,
    jsonRtePath: NewsProperties.jsonRtePath,
  })) as NewsProps[][];
  liveEdit &&
    response[0].forEach((entry) => addEditableTags(entry, NewsProperties.contentTypeUid, true));
  return response[0];
};

export const getAllBlogs= async (): Promise<BlogPostProps[]> => {
  const response = (await getEntry({
    contentTypeUid: BlogPostProperties.contentTypeUid,
    referenceFieldPath: BlogPostProperties.referenceFields,
    jsonRtePath: BlogPostProperties.jsonRtePath,
  })) as BlogPostProps[][];
  liveEdit &&
    response[0].forEach((entry) => addEditableTags(entry, BlogPostProperties.contentTypeUid, true));
  return response[0];
};