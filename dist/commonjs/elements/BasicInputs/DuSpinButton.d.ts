import { TaskQueue } from 'aurelia-framework';
import { ISpinButtonProps } from '@fluentui/react/lib/SpinButton';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare enum Position {
    top = 0,
    bottom = 1,
    start = 2,
    end = 3
}
export declare class DuSpinButton extends AuReactWrapper implements ISpinButtonProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    className: string;
    attached(): void;
}
