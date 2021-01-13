import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { Toggle, IToggleProps } from '@fluentui/react/lib/Toggle';
import { AuReactWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops: IToggleProps = {} as IToggleProps;
reactprops.ariaLabel = <any>{}; 
reactprops.label = <any>{};
reactprops.onText = <any>{};
reactprops.offText = <any>{};
reactprops.checked = <any>{};
reactprops.defaultChecked = <any>{};
reactprops.disabled  = <any>{};
reactprops.onChange = function (that: any, _event: any, newValue?: string)
{
  that['checked'] = newValue; 
};
reactprops.className = <any>{};
reactprops.keytipProps  = <any>{};


@inject(Element, TaskQueue)
@customElement('du-toggle')
export class DuToggle extends AuReactWrapper  implements IToggleProps {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {

    
    this.renderReact(Toggle, this.createState(reactprops));
  }
}

addPropertiesState(DuToggle, reactprops);