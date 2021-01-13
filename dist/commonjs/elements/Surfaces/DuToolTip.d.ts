import { TaskQueue } from 'aurelia-framework';
import { ITooltipProps } from '@fluentui/react/lib/Tooltip';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuToolTip extends AuReactWrapper implements ITooltipProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    attached(): void;
}
