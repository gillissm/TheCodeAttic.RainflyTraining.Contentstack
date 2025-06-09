'use client';

import { EventPost, NotFoundComponent } from '@/components';
import { onEntryChange } from '@/config';
import { usePersonalization } from '@/context';
import { getEntryByUrl } from '@/services';
import { EventPostProperties, EventPostProps,  } from '@/types/page-models';
import { isDataInLiveEdit } from '@/utils';
import useRouterHook from '@/utils/useRouterHook';
import { useEffect, useState } from 'react';


export default function EventPage() {

  const [data, setData] = useState<EventPostProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { path, locale } = useRouterHook();
  const { personalizationSDK } = usePersonalization();

  const fetchData = async () => {
    try {

      console.log(path);
      const res = await getEntryByUrl<EventPostProps>(
        {
          modelDefintion: EventPostProperties,
          limit: 1,
          locale: locale
        },
        path,
        personalizationSDK) as EventPostProps;
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
          <EventPost eventProps={data} />
        </>
        : <>
           {!loading && !isDataInLiveEdit() && <NotFoundComponent />} 
        </>}
    </>
  );
}
