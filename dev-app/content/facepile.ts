import { PersonaSize } from "@fluentui/react/lib/Persona";
import { facepilePersonas } from "./facepileexampledata";
import { IFacepilePersona, OverflowButtonType } from "@fluentui/react/lib/Facepile";

export class facepile
{
    numberOfFaces = 5;
    personaSize = PersonaSize.large;
    personas= facepilePersonas.slice(0, this.numberOfFaces);
    overflowPersonas =  facepilePersonas.slice(this.numberOfFaces);
    overflowButtonType = OverflowButtonType.more;
    overflowButtonProps =  {
        ariaLabel: 'More users',
        onClick: (ev: any) => alert('overflow icon clicked')
      }

    
}