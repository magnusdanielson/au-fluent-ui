import { IColorPickerProps } from '@fluentui/react/lib/ColorPicker';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuColorPicker extends AuReactStateWrapper implements IColorPickerProps {
    constructor(element: any);
    hidden: boolean;
    color: string;
    attached(): void;
}
