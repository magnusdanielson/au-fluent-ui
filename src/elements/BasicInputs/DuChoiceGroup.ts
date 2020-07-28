import { customElement, inject } from 'aurelia-framework';
import { ChoiceGroup, IChoiceGroupProps } from '@fluentui/react/lib/ChoiceGroup';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

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



@inject(Element)
@customElement('du-choice-group')
export class DuChoiceGroup extends  AuReactStateWrapper implements IChoiceGroupProps {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(ChoiceGroup, this.createState(reactprops));
  }
}

addPropertiesState(DuChoiceGroup, reactprops);