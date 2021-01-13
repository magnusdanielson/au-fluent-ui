import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { Label, ILabelProps } from '@fluentui/react/lib/Label';
import { AuReactWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops: ILabelProps = <ILabelProps>{};
reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.required = <any>{};
reactprops.htmlFor = <any>{};


@inject(Element, TaskQueue)
@customElement('du-label')
export class DuLabel extends AuReactWrapper  implements ILabelProps {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(Label, this.createState(reactprops));
  }
}

addPropertiesState(DuLabel, reactprops);