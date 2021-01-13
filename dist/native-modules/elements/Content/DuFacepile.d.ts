import { TaskQueue } from 'aurelia-framework';
import { IFacepileProps, IFacepilePersona } from '@fluentui/react/lib/Facepile';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuFacepile extends AuReactWrapper implements IFacepileProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    personas: IFacepilePersona[];
    getPersonaProps(persona: IFacepilePersona): any;
    attached(): void;
}
