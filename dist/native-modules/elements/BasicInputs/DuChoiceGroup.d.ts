import { TaskQueue } from 'aurelia-framework';
import { IChoiceGroupProps } from '@fluentui/react/lib/ChoiceGroup';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuChoiceGroup extends AuReactWrapper implements IChoiceGroupProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    attached(): void;
}
