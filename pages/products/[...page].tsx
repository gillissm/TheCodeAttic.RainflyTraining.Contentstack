import React, { useState, useEffect } from 'react';
import { onEntryChange } from '../../contentstack-sdk';
import RenderComponents from '../../components/render-components';
import Skeleton from 'react-loading-skeleton';
import {  Context } from "../../typescript/pages";
import { Props } from '../../models/props-model';
import { getPageRes, getProductPageRes } from '../../helper/data-retrieval';
import ProductPost from '../../components/custom/product-post';

export default function ProductItemPage(props: any) {
  // console.log('product -> page')
  const { page, entryUrl } = props;

  const [getEntry, setEntry] = useState(page);

  async function fetchData() {
    try {
      const entryRes = await getPageRes(entryUrl);
      if (!entryRes) throw new Error('Status code 404');     

      setEntry(entryRes);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, []);


  return (
    <>
      <ProductPost product={getEntry} />
      {
        getEntry.page_elements && (
            <RenderComponents
              pageComponents={getEntry.page_elements}
              contentTypeUid='product'
              entryUid={getEntry.uid}
              locale={getEntry.locale}
            />
          )
      }
    </>
  );


  // return getEntry.page_elements ? (
  //   <RenderComponents
  //     pageComponents={getEntry.page_elements}
  //     contentTypeUid='page'
  //     entryUid={getEntry.uid}
  //     locale={getEntry.locale}
  //   />
  // ) : (
  //   <Skeleton count={3} height={150} />
  // );
}

export async function getServerSideProps(context: Context) {
  try {
    const entryRes = await getProductPageRes(context.resolvedUrl);
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
