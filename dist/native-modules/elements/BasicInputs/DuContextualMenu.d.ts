import { TaskQueue } from 'aurelia-framework';
import { IContextualMenuProps, IContextualMenuItem } from '@fluentui/react/lib/ContextualMenu';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuContextualMenu extends AuReactWrapper implements IContextualMenuProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    items: IContextualMenuItem[];
    attached(): void;
}
