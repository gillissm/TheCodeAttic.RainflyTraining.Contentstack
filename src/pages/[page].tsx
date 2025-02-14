import React, { useState, useEffect } from 'react';
import { onEntryChange } from '../contentstack-sdk';
import RenderComponents from '../components/render-components';
import Skeleton from 'react-loading-skeleton';
import { Props } from '../models/props-model';
import { getPageRes } from '../helper/data-retrieval';

export default function Page(props: any) {
  console.log('page file')
  console.log(props);
  const { page, entryUrl } = props;
  const [getEntry, setEntry] = useState(page);

  async function fetchData() {
    try {
      console.log('in fetch data for page');
      console.log(entryUrl)
      const entryRes = await getPageRes(entryUrl);
      if (!entryRes) throw new Error('Status code 404');
      setEntry(entryRes);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, [page]);

  return getEntry.page_elements ? (
    <RenderComponents
      pageComponents={getEntry.page_elements}
      contentTypeUid='page'
      entryUid={getEntry.uid}
      locale={getEntry.locale}
    />
  ) : (
    <Skeleton count={3} height={300} />
  );
}

export async function getServerSideProps({params}: any) {
  try {
      const entryUrl = params.page.includes('/') ? params.page:`/${params.page}`
    const entryRes = await getPageRes(entryUrl);
    // console.log('page serverprops')
    // console.log(entryRes)
      if (!entryRes) throw new Error('404');
      return {
        props: {
          entryUrl: entryUrl,
          page: entryRes,
        },
      };

  } catch (error) {
    return { notFound: true };
  }
}
