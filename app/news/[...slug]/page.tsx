'use client';

import { NewsPost, NotFoundComponent, SEO } from '@/components';
import { onEntryChange } from '@/config';
import { usePersonalization } from '@/context';
import { getEntryByUrl } from '@/services';
import { NewsProperties, NewsProps } from '@/types/page-models';
import { isDataInLiveEdit } from '@/utils';
import useRouterHook from '@/utils/useRouterHook';
import { useEffect, useState } from 'react';


export default function NewsPostPage() {

  const [data, setData] = useState<NewsProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { path, locale } = useRouterHook();
  const { personalizationSDK } = usePersonalization();

  const fetchData = async () => {
    try {

      console.log(path);
      const res = await getEntryByUrl<NewsProps>(
        {
          modelDefintion: NewsProperties,
          limit: 1,
          locale: locale
        },
        path,
        personalizationSDK) as NewsProps;
      res.seo.title = `${res?.news_details?.headline || res?.seo?.title || 'Rainfly Adventures'} | Rainfly Adventures`;

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
          {data?.seo && <SEO props={data.seo} pageUrl={path} />}
          <NewsPost newspost={data} />
        </>
        : <>
          {!loading && !isDataInLiveEdit() && <NotFoundComponent />}
        </>}
    </>
  );
}
