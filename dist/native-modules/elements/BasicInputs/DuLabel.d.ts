import { TaskQueue } from 'aurelia-framework';
import { ILabelProps } from '@fluentui/react/lib/Label';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuLabel extends AuReactWrapper implements ILabelProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    attached(): void;
}
