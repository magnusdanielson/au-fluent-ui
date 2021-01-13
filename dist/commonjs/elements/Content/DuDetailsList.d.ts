import { TaskQueue } from 'aurelia-framework';
import { IDetailsListProps } from '@fluentui/react/lib/DetailsList';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
import { ScrollToMode } from '@fluentui/react/lib/List';
export declare class DuDetailsList extends AuReactWrapper implements IDetailsListProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    items: any[];
    scrollToIndex(index: number): void;
    forceUpdate(): void;
    focusIndex(index: number, forceIntoFirstElement?: boolean, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode): void;
    attached(): void;
    getStartItemIndexInView(): any;
}
