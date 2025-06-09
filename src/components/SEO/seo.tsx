'use client';
import { useLocaleContext } from '@/context'
import packageInfo from '@/package.json'
import { getAbsolutePageUrl } from '@/utils'
import { SEOModel } from '@/types/global-fields'

/**
 * SEO Component for managing meta tags and document head elements
 * @component
 * @returns {JSX.Element} SEO component with meta tags
 */

const SEO: React.FC<{ props: SEOModel, pageUrl: string }> = ({ props, pageUrl }:{props: SEOModel, pageUrl:string}) => {

   // const { seo: {no_follow, no_index, description, canonical_url} = {}, locale, summary, url, locales} = props    
    const { currentLocale } = useLocaleContext()

    // construct canonical url from current locale, and canonical_url / entry url
    const canonicalUrl = getAbsolutePageUrl(`${props?.canonical_url || pageUrl || ''}` )

    // Add version in meta tag for internal tracking and DOM visibility
    const { version } = packageInfo

    // const alternateMetaLinks = locales?.map((lang: { code: string }) => ({
    //     hrefLang: lang?.code,
    //     href: getAbsolutePageUrl(`/${lang?.code}${url}`)
    // }))

    let robots
    if (props?.no_follow && props?.no_index) {
        robots = 'noindex,nofollow'
    } else if (props?.no_follow) {
        robots = 'index,nofollow'
    } else if (props?.no_index) {
        robots = 'noindex,follow'
    } else {
        robots = 'index,follow'
    }

    return (
        <>
            {props?.title ? <title>{props?.title}</title> : <title>Rainfly Adventures</title>}
            <meta
                name='application-name'
                content='Universal Demo'
            />
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta
                name='viewport'
                content='width=device-width,initial-scale=1,minimum-scale=1'
            />
            {props?.meta_description && (
                <meta
                    name='description'
                    content={props?.meta_description}
                />)}
              {props?.meta_keyword && (
                <meta
                    name='keywords'
                    content={props?.meta_keyword}
                />)}
            
            <meta
                name='version'
                content={version ? version : ''}
            />
            <meta
                name='robots'
                content={robots} key='robots'
            />
            <meta
                property='og:locale'
                content={currentLocale || 'en'}
            />
            <meta
                httpEquiv='content-language'
                content={currentLocale}
            />
{/* 
            {alternateMetaLinks && (alternateMetaLinks?.length > 0) && alternateMetaLinks?.map((li: { hrefLang: string, href: string }) => li?.href && li?.hrefLang && li?.hrefLang !== currentLocale && <link
                rel='alternate'
                hrefLang={li.hrefLang}
                href={li.href}
                key={li.hrefLang}
            />)} */}
            <link
                rel='canonical'
                href={canonicalUrl}
            />
            <link
                rel='icon'
                href='/favicon.ico'
            />
        </>
    )
}

export { SEO }