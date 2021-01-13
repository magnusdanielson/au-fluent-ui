import { TaskQueue } from 'aurelia-framework';
import { ITextFieldProps } from '@fluentui/react/lib/TextField';
import { AuReactWrapperNoChildren } from '@dunite/au-react-wrapper';
export declare class DuTextField extends AuReactWrapperNoChildren implements ITextFieldProps {
    protected tq: TaskQueue;
    orignalProp: ITextFieldProps;
    reactClass: any;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    attached(): void;
    blur(): void;
    focus(): void;
    select(): void;
    selectionEnd(): any;
    selectionStart(): any;
    setSelectionEnd(value: number): void;
    setSelectionRange(start: number, end: number): void;
    setSelectionStart(value: number): void;
}
