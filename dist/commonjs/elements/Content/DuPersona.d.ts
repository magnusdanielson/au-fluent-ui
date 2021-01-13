import { TaskQueue } from 'aurelia-framework';
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuPersona extends AuReactWrapper implements IPersonaProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    attached(): void;
}
