import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { Dropdown, IDropdownProps, IDropdownOption  } from '@fluentui/react/lib/Dropdown';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IDropdownProps = <IDropdownProps>{};
reactprops.placeholder = <any>{};
reactprops.options = <any>{};
reactprops.onDismiss = <any>onlyAureliaBound;
reactprops.onFocus =  <any>onlyAureliaBound;
reactprops.onBlur =  <any>onlyAureliaBound;
reactprops.onChange =  <any>onlyAureliaBound;
reactprops.dropdownWidth = <any>{};
reactprops.responsiveMode = <any>{};
reactprops.multiSelect = <any>{};
reactprops.notifyOnReselect = <any>{};
reactprops.defaultSelectedKeys = <any>{};
reactprops.selectedKeys = <any>{};
reactprops.multiSelectDelimiter = <any>{};
reactprops.keytipProps = <any>{};
reactprops.disabled = <any>{};
reactprops.errorMessage = <any>{};
reactprops.required  = <any>{};
reactprops.selectedKey = <any>{};


@inject(Element, TaskQueue)
@customElement('du-dropdown')
export class DuDropdown extends AuReactWrapper  implements IDropdownProps {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;
  options: IDropdownOption[];

  attached() {
    this.renderReact(Dropdown, this.createState(reactprops));
  }
}

addPropertiesState(DuDropdown, reactprops);