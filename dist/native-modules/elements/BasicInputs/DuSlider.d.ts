import { ISliderProps } from '@fluentui/react/lib/Slider';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuSlider extends AuReactStateWrapper implements ISliderProps {
    constructor(element: any);
    hidden: boolean;
    className: string;
    attached(): void;
}
