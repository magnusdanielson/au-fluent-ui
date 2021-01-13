import { TaskQueue } from 'aurelia-framework';
import { ITeachingBubbleProps } from '@fluentui/react/lib/TeachingBubble';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuCoachmark extends AuReactWrapper {
    protected tq: TaskQueue;
    container: HTMLElement | null;
    constructor(element: any, tq: TaskQueue);
    teachingBubbleElement: any;
    teachingBubbleContent: ITeachingBubbleProps;
    hidden: boolean;
    attached(): void;
    renderReact2(a: any): void;
}
