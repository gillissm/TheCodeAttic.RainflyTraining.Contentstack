import React, { useState, useEffect } from 'react';
import { onEntryChange } from '../contentstack-sdk';
import RenderComponents from '../components/render-components';
import Skeleton from 'react-loading-skeleton';
import {  Context } from "../typescript/pages";
import { Props } from '../models/props-model';
import { getPageRes } from '../helper/data-retrieval';

export default function Home(props:any) {
  const { page, entryUrl } = props;

  const [getEntry, setEntry] = useState(page);

  async function fetchData() {
    try {
      // console.log("inFetchData")
      // console.log('target url: ' + entryUrl)
      const entryRes = await getPageRes(entryUrl);
      // console.log('entryRes result:')
      // console.log(entryRes);
      if (!entryRes) throw new Error('Status code 404');     

      setEntry(entryRes);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, []);

  return getEntry ? (
    <RenderComponents
      pageComponents={getEntry.page_elements}
      contentTypeUid='page'
      entryUid={getEntry.uid}
      locale={getEntry.locale}
    />
  ) : (
    <Skeleton count={3} height={150} />
  );
}

export async function getServerSideProps(context: Context) {
  try {
    const entryRes = await getPageRes(context.resolvedUrl);
    if (entryRes) {
      return {
        props: {
          entryUrl: context.resolvedUrl,
          page: entryRes,
        },
      };
    } else {
      return { notFound: true };
    }
  } catch (error) {
    return { notFound: true };
  }
}
