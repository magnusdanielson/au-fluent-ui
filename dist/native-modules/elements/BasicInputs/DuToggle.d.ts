import { TaskQueue } from 'aurelia-framework';
import { IToggleProps } from '@fluentui/react/lib/Toggle';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuToggle extends AuReactWrapper implements IToggleProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    attached(): void;
}
