import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { Facepile, IFacepileProps, IFacepilePersona } from '@fluentui/react/lib/Facepile';
import { AuReactWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops: IFacepileProps = <IFacepileProps>{};

reactprops.personas = <any>{};
reactprops.addButtonProps = <any>{};
reactprops.className = <any>{};
reactprops.maxDisplayablePersonas = <any>{};
reactprops.overflowButtonProps = <any>{};
reactprops.overflowButtonType = <any>{};
reactprops.overflowPersonas = <any>{};
reactprops.personaSize = <any>{};
reactprops.showAddButton = <any>{};

@inject(Element, TaskQueue)
@customElement('du-facepile')
export class DuFacepile  extends AuReactWrapper implements IFacepileProps
{
  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean;
  personas: IFacepilePersona[];

  
  getPersonaProps(persona: IFacepilePersona)
  {
    return this.reactComponent.getPersonaProps(persona);
  }
  attached()
  {
    this.renderReact(Facepile, this.createState(reactprops));
  }
}


addPropertiesState(DuFacepile, reactprops);