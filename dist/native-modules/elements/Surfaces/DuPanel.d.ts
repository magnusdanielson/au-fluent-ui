import { IPanelProps } from '@fluentui/react/lib/Panel';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuPanel extends AuReactStateWrapper implements IPanelProps {
    constructor(element: any);
    isOpen: boolean;
    attached(): void;
}
