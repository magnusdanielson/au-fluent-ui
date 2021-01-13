import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { Spinner, ISpinnerProps } from '@fluentui/react/lib/Spinner';
import { AuReactWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops: ISpinnerProps = <ISpinnerProps>{};
reactprops.className = <any>{};
reactprops.size = <any>{};
reactprops.label = <any>{};
reactprops.labelPosition = <any>{};


@inject(Element, TaskQueue)
@customElement('du-spinner')
export class DuSpinner extends AuReactWrapper  implements ISpinnerProps {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {

    this.renderReact(Spinner, this.createState(reactprops));
  }
}

addPropertiesState(DuSpinner, reactprops);