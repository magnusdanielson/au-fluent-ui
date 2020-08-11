import { IDocumentCardTitleProps } from '@fluentui/react/lib/DocumentCard';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuDocumentCardTitle extends AuReactStateWrapper implements IDocumentCardTitleProps {
    constructor(element: any);
    hidden: boolean;
    title: string;
    attached(): void;
}
