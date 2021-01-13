import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { AuReactWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops = <any>{};
reactprops.hidden = <any>{};



@inject(Element, TaskQueue)
@customElement('du-marquee-selection')
export class DuMarqueeSelection extends AuReactWrapper
{
  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean;

  attached()
  {
    this.renderReact(MarqueeSelection, this.createState(reactprops));
  }
}


addPropertiesState(DuMarqueeSelection, reactprops);