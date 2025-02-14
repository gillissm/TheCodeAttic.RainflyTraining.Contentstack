import { FooterProps } from './component-models/footer-model';
import { HeaderProps } from './component-models/header-model';
import { GlobalPageFields } from './page-models/global-fields';
import { PageComponents, PageProps } from './page-models/page-model';

export type Props = {
    Component: any;
    pageProps: {entryUrl:string, page:PageProps};    
    header: HeaderProps;
    footer: FooterProps;
    entries: Entry[];       
}

export type Entry = GlobalPageFields & {
    
}

export type CurrentPageProps = {
    entryUrl: string;
    page: PageProps;

}

export type RenderProps = {
    blogPost?: boolean;
    contentTypeUid: string;
    entryUid: string;
    locale: string;
    pageComponents:PageComponents[];
  }