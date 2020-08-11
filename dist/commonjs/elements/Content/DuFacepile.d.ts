import { IFacepileProps, IFacepilePersona } from '@fluentui/react/lib/Facepile';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuFacepile extends AuReactStateWrapper implements IFacepileProps {
    constructor(element: any);
    hidden: boolean;
    personas: IFacepilePersona[];
    getPersonaProps(persona: IFacepilePersona): any;
    attached(): void;
}
