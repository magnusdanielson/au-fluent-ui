import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { ChoiceGroup, IChoiceGroupProps } from '@fluentui/react/lib/ChoiceGroup';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IChoiceGroupProps = <IChoiceGroupProps>{};
reactprops.ariaLabelledBy = <any>{};
reactprops.disabled = <any>{};
reactprops.checked = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.onChange = function (that: any, _event: any, newValue?: string)
{
  that['value'] = newValue; 
};
reactprops.options = <any>{};
reactprops.onClick = onlyAureliaBound;
reactprops.defaultSelectedKey = <any>{};
reactprops.selectedKey = <any>{};
reactprops.value = <any>{};



@inject(Element, TaskQueue)
@customElement('du-choice-group')
export class DuChoiceGroup extends AuReactWrapper  implements IChoiceGroupProps {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(ChoiceGroup, this.createState(reactprops));
  }
}

addPropertiesState(DuChoiceGroup, reactprops);