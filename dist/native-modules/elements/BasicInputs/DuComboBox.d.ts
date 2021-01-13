import { TaskQueue } from 'aurelia-framework';
import { IComboBoxProps, IComboBoxOption } from '@fluentui/react/lib/ComboBox';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuComboBox extends AuReactWrapper implements IComboBoxProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    options: IComboBoxOption[];
    attached(): void;
}
