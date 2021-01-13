import { TaskQueue } from 'aurelia-framework';
import { ITeachingBubbleProps } from '@fluentui/react/lib/TeachingBubble';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuTeachingBubble extends AuReactWrapper implements ITeachingBubbleProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    isWide: boolean;
    attached(): void;
}
