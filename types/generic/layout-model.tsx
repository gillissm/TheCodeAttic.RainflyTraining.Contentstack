import { FooterProps, HeaderProps } from '../component-models';

export type LayoutModel = {
    children: React.ReactNode;
    header?: HeaderProps;
    footer?: FooterProps;
    locale?: string;
};