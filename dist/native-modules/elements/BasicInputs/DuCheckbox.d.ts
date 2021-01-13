import { TaskQueue } from 'aurelia-framework';
import { ICheckboxProps } from '@fluentui/react/lib/Checkbox';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuCheckbox extends AuReactWrapper implements ICheckboxProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    attached(): void;
}
