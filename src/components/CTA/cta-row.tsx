'use client';

import { CTARowProps } from '@/types/component-models';
import { Cta } from './cta';


export function CtaRow({ ctaRow }: { ctaRow: CTARowProps|undefined }) {
    return ctaRow ? (
        <div className="flexRow">
            {ctaRow.cta.map((item, index) => (
                <div key={index} className="flexItem">
                    <Cta cta={item} />
                </div>
            ))}
        </div>
    ):(<></>); 
}