import { IComboBoxProps, IComboBoxOption } from '@fluentui/react/lib/ComboBox';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuComboBox extends AuReactStateWrapper implements IComboBoxProps {
    constructor(element: any);
    hidden: boolean;
    options: IComboBoxOption[];
    attached(): void;
}
