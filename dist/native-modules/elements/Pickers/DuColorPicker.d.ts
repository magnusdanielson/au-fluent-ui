import { TaskQueue } from 'aurelia-framework';
import { IColorPickerProps } from '@fluentui/react/lib/ColorPicker';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuColorPicker extends AuReactWrapper implements IColorPickerProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    color: string;
    attached(): void;
}
