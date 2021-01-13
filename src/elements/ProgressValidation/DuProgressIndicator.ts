import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { ProgressIndicator, IProgressIndicatorProps } from '@fluentui/react/lib/ProgressIndicator';
import { AuReactWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops: IProgressIndicatorProps = <IProgressIndicatorProps>{};
reactprops.className = <any>{};
reactprops.barHeight = <any>{};
reactprops.description = <any>{};
reactprops.label = <any>{};
reactprops.percentComplete = <any>{};
reactprops.progressHidden = <any>{};


@inject(Element, TaskQueue)
@customElement('du-progress-indicator')
export class DuProgressIndicator extends AuReactWrapper  {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {

    this.renderReact(ProgressIndicator, this.createState(reactprops));
  }
}

addPropertiesState(DuProgressIndicator, reactprops);