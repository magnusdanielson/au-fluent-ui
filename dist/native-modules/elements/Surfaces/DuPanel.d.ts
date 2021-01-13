import { TaskQueue } from 'aurelia-framework';
import { IPanelProps } from '@fluentui/react/lib/Panel';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuPanel extends AuReactWrapper implements IPanelProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    isOpen: boolean;
    attached(): void;
}
