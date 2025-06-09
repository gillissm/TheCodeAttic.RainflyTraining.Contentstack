import Contentstack from '@contentstack/delivery-sdk'
export const Stack = Contentstack.stack({
    apiKey: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY as string,//"blt007136d3bb9fec54",//
    deliveryToken: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN as string,//"cs42ac05abb5d000640695b3ce",//
    environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT as string,
    branch: process.env.NEXT_PUBLIC_CONTENTSTACK_BRANCH,
    host: process.env.NEXT_PUBLIC_CONTENTSTACK_HOST,
    live_preview: {
        enable: process.env.isLivePreviewEnabled === 'true' ? true : false,
        host: process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW_HOST,
        preview_token: process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW_TOKEN
    }
})

export const isLivePreviewEnabled = process.env.isLivePreviewEnabled === 'true'
export const isEditButtonsEnabled = process.env.isEditButtonsEnabled === 'true'

let onEntryChange: (callback: () => void) => void = (callback) => {
    callback()
}

let VB_EmptyBlockParentClass: string = ''

if (isLivePreviewEnabled) {
    const loadPreviewSDK = async () => {
        const { previewSdk } = await import('@/config/contentstack/previewSDk')
        onEntryChange = previewSdk.onEntryChange
        VB_EmptyBlockParentClass = previewSdk.VB_EmptyBlockParentClass

    }

    loadPreviewSDK().catch((error) => {
        console.error('Failed to load the preview SDK:', error)
    })
}

export { onEntryChange, VB_EmptyBlockParentClass }