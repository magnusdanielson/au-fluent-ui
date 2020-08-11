import { IContextualMenuProps, IContextualMenuItem } from '@fluentui/react/lib/ContextualMenu';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuContextualMenu extends AuReactStateWrapper implements IContextualMenuProps {
    constructor(element: any);
    hidden: boolean;
    items: IContextualMenuItem[];
    attached(): void;
}
