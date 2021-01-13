import { TaskQueue } from 'aurelia-framework';
import { IDropdownProps, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuDropdown extends AuReactWrapper implements IDropdownProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    options: IDropdownOption[];
    attached(): void;
}
