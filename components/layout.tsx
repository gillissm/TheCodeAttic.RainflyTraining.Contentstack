import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import { HeaderProps } from '../models/component-models/header-model';
import { FooterProps } from '../models/component-models/footer-model';
import { PageProps } from '../models/page-models/page-model';
import { ChilderenProps } from '../typescript/layout';
import RenderComponents from './render-components';
import { Entry } from '../models/props-model';

export default function Layout({
  header,
  footer,
  page,
  // blogPost,
  // blogList,
  entries,
   children
}: { header: HeaderProps, footer: FooterProps, page: PageProps, entries: Entry[], children: ChilderenProps}) { //, blogPost: Posts, blogList: Posts, entries: Entry, 

  // console.log('in layout')
  // console.log(page)
  const [getLayout, setLayout] = useState({ header, footer });
  
  useEffect(() => {
    if (footer && header) {
      setLayout({ header: header, footer: footer });
    }
  }, [header, footer]);

  return (
    <>
      {header ? <Header header={getLayout.header} /> : ''}
      <main className='mainClass'>
        <>
          {children} 
          <div> I am the Layout! {page?.title} - {page?.uid} - {page?.url}</div>
        </>
      </main>
      {footer ? <Footer footer={getLayout.footer} /> : ''}
    </>
  );
}
