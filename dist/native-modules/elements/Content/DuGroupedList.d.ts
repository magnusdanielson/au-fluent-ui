import { TaskQueue } from 'aurelia-framework';
import { IGroupedListProps } from '@fluentui/react/lib/GroupedList';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuGroupedList extends AuReactWrapper implements IGroupedListProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    items: any[];
    toggleCollapseAll(allCollapsed: boolean): any;
    forceUpdate(): void;
    attached(): void;
}
