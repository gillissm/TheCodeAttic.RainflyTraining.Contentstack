import { Image} from '../../typescript/action'
import { CreateReferenceList, CreateRichtextList, DefaultModelFields, ModelFieldsProperties } from '../model-fields-properties';
import { ExternalLinkModel } from '../global-fields/external-link-model';
import { InternalPageLinkModel, InternalPageLinkProperties } from '../global-fields/internal-page-link-model';

export type CTAProps = DefaultModelFields &{
    cta_variant: string;
    headline: string;
    sub_title: string;
    copy: string;
    image: Image;
    action_links: ActionLinkProps[];
}

export type ActionLinkProps = {
    external: ExternalLinkModel | null;
    internal: InternalPageLinkModel[] | null;
}

export const CTAPropsProperties: ModelFieldsProperties = {
    contentTypeUid:'cta',    
    jsonRtePath:['copy'],
    referenceFields:['cta.action_links.internal.internal_page_link.target.url'].concat(CreateReferenceList('cta.action_links.internal', InternalPageLinkProperties))
}
