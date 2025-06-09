'use client';

import { NotFoundComponent, SEO } from '@/components';
import RenderComponents from '@/components/render-components';
import { onEntryChange } from '@/config';
import { usePersonalization } from '@/context';
import { getEntryByUrl } from '@/services';
import { PageProperties, PageProps } from '@/types/page-models';
import { isDataInLiveEdit } from '@/utils';
import useRouterHook from '@/utils/useRouterHook';
import { useEffect, useState } from 'react';


export default function BasicPage() {

  const [data, setData] = useState<PageProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { path, locale } = useRouterHook();
  const { personalizationSDK } = usePersonalization();

  const fetchData = async () => {
    try {

      console.log(path);
      const res = await getEntryByUrl<PageProps>(
        {
          modelDefintion: PageProperties,
          limit: 1,
          locale: locale
        },
        path,
        personalizationSDK) as PageProps;
      
      res.seo.title = `${res?.title || res?.seo?.title || 'Rainfly Adventures'} | Rainfly Adventures`;
      setData(res)      
      //setDataForChromeExtension({ entryUid: res?.uid ?? '', contenttype: 'home_page', locale: locale })
      if (!res) {
          console.log('this is home3');
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
          {data?.page_elements
            ? <RenderComponents
              pageComponents={data.page_elements}
              contentTypeUid={PageProperties.contentTypeUid}
              entryUid={data.uid}
              locale={locale}
            /> : ''} 
        </>
        : <>
           {!loading && !isDataInLiveEdit() && <NotFoundComponent />} 
        </>}
    </>
  );
}
