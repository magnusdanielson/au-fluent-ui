import { ISpinButtonProps } from '@fluentui/react/lib/SpinButton';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare enum Position {
    top = 0,
    bottom = 1,
    start = 2,
    end = 3
}
export declare class DuSpinButton extends AuReactStateWrapper implements ISpinButtonProps {
    constructor(element: any);
    hidden: boolean;
    className: string;
    attached(): void;
}
