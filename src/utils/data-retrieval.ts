import { getEntries, getEntryByUrl } from '@/services';
import { FooterProps, FooterPropsProperties, HeaderProps, HeaderPropsProperties } from '@/types/component-models';
import { BlogPostProperties, BlogPostProps, EventPostProperties, EventPostProps, NewsProperties, NewsProps, PageProperties, PageProps, ProductProperties } from '@/types/page-models';
import { Sdk } from '@contentstack/personalize-edge-sdk/dist/sdk';


export const getFooterRes = async (locale:string="en", personalizationSDK?:Sdk): Promise<FooterProps> => {

  try{
    const responseObj = await getEntries<FooterProps>({
      modelDefintion: FooterPropsProperties,
      limit: 1,
      locale: locale
    },
      personalizationSDK ?? undefined);

    return responseObj && responseObj[0] ? responseObj[0] : {} as FooterProps; // return first entry or empty object if not found
  }
  catch (err) {
    console.error('Error in getFooterRes:\n ', err);
  }
  return {} as FooterProps; // return empty object if error
};


export const getHeaderRes = async (locale:string="en", personalizationSDK?:Sdk): Promise<HeaderProps> => {

try{
    const responseObj = await getEntries<HeaderProps>({
      modelDefintion: HeaderPropsProperties,
      limit: 1,
      locale: locale
    },
      personalizationSDK ?? undefined);

    return responseObj && responseObj[0] ? responseObj[0] : {} as HeaderProps; // return first entry or empty object if not found
  }
  catch (err) {
    console.error('Error in getHeaderRes:\n ', err);
  }
  return {} as HeaderProps; // return empty object if error
};


export const getAllEntries = async(locale:string="en", personalizationSDK?:Sdk): Promise<PageProps[]> => {
  try{
    const responseObj = await getEntries<PageProps>({
      modelDefintion: PageProperties,
      limit: 0,
      locale: locale
    },
      personalizationSDK ?? undefined);

    return responseObj ?? [];
  }
  catch (err) {
    console.error('Error in getHeaderRes:\n ', err);
  }
  return [];
  
};


export const getPageRes = async (entryUrl: string, locale:string="en", personalizationSDK?:Sdk): Promise<PageProps> => {
  
try{
    const responseObj = await getEntryByUrl<PageProps>({
      modelDefintion: PageProperties,
      limit: 1,
      locale: locale,      
    },
      entryUrl,
      personalizationSDK ?? undefined);

    return responseObj && responseObj[0] ? responseObj[0] : {} as PageProps; // return first entry or empty object if not found
  }
  catch (err) {
    console.error('Error in getPageRes:\n ', err);
  }
  return {} as PageProps; // return empty object if error

};

export const getProductPageRes = async (entryUrl: string, locale:string="en", personalizationSDK?:Sdk): Promise<PageProps> => {

try{
    const responseObj = await getEntryByUrl<PageProps>({
      modelDefintion: ProductProperties,
      limit: 1,
      locale: locale,      
    },
      entryUrl,
      personalizationSDK ?? undefined);

    return responseObj && responseObj[0] ? responseObj[0] : {} as PageProps; // return first entry or empty object if not found
  }
  catch (err) {
    console.error('Error in getProductPageRes:\n ', err);
  }
  return {} as PageProps; // return empty object if error
};


export const getAllEvents = async (locale: string = "en", personalizationSDK?: Sdk): Promise<EventPostProps[]> => {
  try{
    const responseObj = await getEntries<EventPostProps>({
      modelDefintion: EventPostProperties,
      limit: 0,
      locale: locale
    },
      personalizationSDK ?? undefined);

    return responseObj ?? [];
  }
  catch (err) {
    console.error('Error in getAllEvents:\n ', err);
  }
  return [];
};

export const getAllNews = async(locale: string = "en", personalizationSDK?: Sdk): Promise<NewsProps[]> => {
  
try{
    const responseObj = await getEntries<NewsProps>({
      modelDefintion: NewsProperties,
      limit: 0,
      locale: locale
    },
      personalizationSDK ?? undefined);

    return responseObj ?? [];
  }
  catch (err) {
    console.error('Error in getAllNews:\n ', err);
  }
  return [];

};

export const getAllBlogs = async (locale: string = "en", personalizationSDK?: Sdk): Promise<BlogPostProps[]> => {
  
try{
    const responseObj = await getEntries<BlogPostProps>({
      modelDefintion: BlogPostProperties,
      limit: 0,
      locale: locale
    },
      personalizationSDK ?? undefined);

    return responseObj ?? [];
  }
  catch (err) {
    console.error('Error in getAllBlogs:\n ', err);
  }
  return [];
};