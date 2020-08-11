import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuPersona extends AuReactStateWrapper implements IPersonaProps {
    constructor(element: any);
    hidden: boolean;
    attached(): void;
}
