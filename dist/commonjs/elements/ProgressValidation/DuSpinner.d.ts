import { ISpinnerProps } from '@fluentui/react/lib/Spinner';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuSpinner extends AuReactStateWrapper implements ISpinnerProps {
    constructor(element: any);
    hidden: boolean;
    attached(): void;
}
