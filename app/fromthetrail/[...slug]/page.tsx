 'use client';

import { BlogPost, NotFoundComponent, SEO } from '@/components';
import { onEntryChange } from '@/config';
import { usePersonalization } from '@/context';
import { getEntryByUrl } from '@/services';
import { BlogPostProperties, BlogPostProps } from '@/types/page-models';
import { isDataInLiveEdit } from '@/utils';
import useRouterHook from '@/utils/useRouterHook';
import { useEffect, useState } from 'react';




export default function BlogPostPage() {

  const [data, setData] = useState<BlogPostProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { path, locale } = useRouterHook();
  const { personalizationSDK } = usePersonalization();

  const fetchData = async () => {
    try {

      console.log(path);
      const res = await getEntryByUrl<BlogPostProps>(
        {
          modelDefintion: BlogPostProperties,
          limit: 1,
          locale: locale
        },
        path,
        personalizationSDK) as BlogPostProps;
      res.seo.title = `${res?.post?.headline || res?.seo?.title || 'Rainfly Adventures'} | Message from the Trail`;
      setData(res)
      //setDataForChromeExtension({ entryUid: res?.uid ?? '', contenttype: 'home_page', locale: locale })
      if (!res) {
        throw '404'
      }
    } catch (err) {
      console.error('🚀 ~ fetchData ~ err:', err)
      setLoading(false)
    }
  }

  useEffect(() => {
    onEntryChange(fetchData)
  }, [])



  return (
    <>
      {data
        ? <>
          <SEO props={data.seo} pageUrl={path} />
          <BlogPost blogpost={data} />
        </>
        : <>
           {!loading && !isDataInLiveEdit() && <NotFoundComponent />} 
        </>}
    </>
  );
}
