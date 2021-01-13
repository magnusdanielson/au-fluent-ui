import { TaskQueue } from 'aurelia-framework';
import { ICalloutProps } from '@fluentui/react/lib/Callout';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuCallout extends AuReactWrapper implements ICalloutProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    attached(): void;
}
