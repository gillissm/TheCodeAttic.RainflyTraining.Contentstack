import { CTARowProps } from '../../models/component-models/cta-row-model';
import Cta from './cta';

export default function CtaRow({ ctaRow }: { ctaRow: CTARowProps }) {
    return (
        <div className="flexRow">
            {ctaRow.cta.map((item, index) => (
                <div key={index} className="flexItem">
                    <Cta cta={item} />
                </div>
            ))}
        </div>
    ); 
}