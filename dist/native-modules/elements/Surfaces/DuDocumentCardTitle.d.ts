import { TaskQueue } from 'aurelia-framework';
import { IDocumentCardTitleProps } from '@fluentui/react/lib/DocumentCard';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuDocumentCardTitle extends AuReactWrapper implements IDocumentCardTitleProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    title: string;
    attached(): void;
}
