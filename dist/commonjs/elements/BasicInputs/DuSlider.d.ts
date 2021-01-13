import { TaskQueue } from 'aurelia-framework';
import { ISliderProps } from '@fluentui/react/lib/Slider';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuSlider extends AuReactWrapper implements ISliderProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    className: string;
    attached(): void;
}
