'use client';

import { CTAProps } from '@/types/component-models';
import React from 'react';
import { ImageOnly } from './cta-image-only';
import { ImageSplit } from './cta-image-split';
import { TextOnly } from './cta-text-only';



export function Cta({ cta }: { cta: CTAProps }) {
    switch (cta.cta_variant) {
        case 'img_split':
            return <ImageSplit cta={cta} />;
        case 'txt_only':
            return <TextOnly cta={cta} />;
        case 'img_only':
            return <ImageOnly cta={cta} />;
        default:
            return <TextOnly cta={cta} />;
    }
}