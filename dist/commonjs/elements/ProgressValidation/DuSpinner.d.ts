import { TaskQueue } from 'aurelia-framework';
import { ISpinnerProps } from '@fluentui/react/lib/Spinner';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuSpinner extends AuReactWrapper implements ISpinnerProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    attached(): void;
}
