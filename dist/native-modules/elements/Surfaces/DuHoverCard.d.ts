import { IHoverCardProps } from '@fluentui/react/lib/HoverCard';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuHoverCard extends AuReactStateWrapper implements IHoverCardProps {
    constructor(element: any);
    hidden: boolean;
    attached(): void;
}
