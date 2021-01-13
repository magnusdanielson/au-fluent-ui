import { TaskQueue } from 'aurelia-framework';
import { IDialogProps } from '@fluentui/react/lib/Dialog';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuDialog extends AuReactWrapper implements IDialogProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    attached(): void;
}
