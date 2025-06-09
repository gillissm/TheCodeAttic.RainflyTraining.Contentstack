'use client';

import {  NotFoundComponent, ProductPost, SEO } from '@/components';
import RenderComponents from '@/components/render-components';
import { onEntryChange } from '@/config';
import { usePersonalization } from '@/context';
import { getEntryByUrl } from '@/services';
import {    ProductProperties, ProductProps, } from '@/types/page-models';
import { isDataInLiveEdit } from '@/utils';
import useRouterHook from '@/utils/useRouterHook';
import { useEffect, useState } from 'react';


export default function ProductPage() {

  const [data, setData] = useState<ProductProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { path, locale } = useRouterHook();
  const { personalizationSDK } = usePersonalization();

  const fetchData = async () => {
    try {

      console.log(path);
      const res = await getEntryByUrl<ProductProps>(
        {
          modelDefintion: ProductProperties,
          limit: 1,
          locale: locale
        },
        path,
        personalizationSDK) as ProductProps;
        res.seo.title = `${res?.title || res?.seo?.title || 'Rainfly Adventures'} | Rainfly Adventures`;

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
          <ProductPost product={data} />
          <RenderComponents
            pageComponents={data.page_elements}
            entryUid={data.uid}
            contentTypeUid={ProductProperties.contentTypeUid}
            locale={locale}
          />
          
        </>
        : <>
           {!loading && !isDataInLiveEdit() && <NotFoundComponent />} 
        </>}
    </>
  );
}
