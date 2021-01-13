import { TaskQueue } from 'aurelia-framework';
import { IHoverCardProps } from '@fluentui/react/lib/HoverCard';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuHoverCard extends AuReactWrapper implements IHoverCardProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    attached(): void;
}
