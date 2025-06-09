'use client';
import React, { useEffect, useState } from 'react'

import { onEntryChange } from '@/config'
import { LayoutModel } from '@/types/generic'
import { getFooterRes, getHeaderRes } from '@/utils'
import Footer from '../Footer/footer'
import Header from '../Header/header'
import { FooterProps, HeaderProps } from '@/types/component-models'
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/services/theme';
import CssBaseline from '@mui/material/CssBaseline'


const MainLayout: React.FC<LayoutModel> = (props: React.PropsWithChildren<LayoutModel>) => {

    const [getHeader, setHeader] = useState(props.header?? {} as HeaderProps);
    const [getFooter, setFooter] = useState(props.footer ?? {} as FooterProps);

    // let getHeader = props.header ?? {} as HeaderProps;
    // let getFooter = props.footer ?? {} as FooterProps;
    const locale = 'en-us';

    //const { locale } = useRouterHook()
    // const { personalizationSDK } = usePersonalization()

    const fetchAppConfig = async () => {
        try {

            if (props.header == undefined || props.header == null) {
                await getHeaderRes(locale).then((res) => { setHeader(res); });;
            }

            if (props.footer == undefined || props.footer == null) {
                await getFooterRes(locale).then((res) => { setFooter(res); });;
            }

        } catch (err) {
            console.error('Main Layout failed to load,\n', err)
        }
    }

    useEffect(() => {
        onEntryChange(fetchAppConfig)
    }, [])
    

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* {locale && <LocaleContext.Provider
                value={{
                    currentLocale: locale
                }}
            > */}
                <Header header={getHeader} />
                <main className='mainClass'>
                    {props.children}
                </main>
                <Footer footer={getFooter} />
            {/* </LocaleContext.Provider>} */}
        </ThemeProvider>
    )
}

export { MainLayout }