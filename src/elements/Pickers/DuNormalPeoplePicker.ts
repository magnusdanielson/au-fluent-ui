import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { IPeoplePickerProps, NormalPeoplePicker } from '@fluentui/react/lib/Pickers';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IPeoplePickerProps   = <IPeoplePickerProps>{};

//@ts-ignore
reactprops.items = <any>{}; // items: T[] | undefined;
reactprops.onResolveSuggestions = <any>onlyAureliaBound;
reactprops.resolveDelay = <any>{}; 
reactprops.onEmptyInputFocus = <any>onlyAureliaBound;
reactprops.defaultSelectedItems = <any>{};
reactprops.onChange = <any> function(_this: any, items: any) { _this['selectedItems'] = items; };
reactprops.onFocus = <any>onlyAureliaBound;
reactprops.onBlur = <any>onlyAureliaBound;
reactprops.getTextFromItem = <any>onlyAureliaBound;
reactprops.onGetMoreResults = <any>onlyAureliaBound;
reactprops.className = <any>{};
reactprops.pickerSuggestionsProps = <any>{};
reactprops.pickerCalloutProps = <any>{};
reactprops.inputProps = <any>{};
reactprops.onRemoveSuggestion = <any>onlyAureliaBound;
reactprops.onValidateInput = <any>onlyAureliaBound;
reactprops.searchingText = <any>onlyAureliaBound;
reactprops.disabled = <any>{};
reactprops.itemLimit = <any>{};
reactprops.createGenericItem = <any>onlyAureliaBound;
reactprops.removeButtonAriaLabel = <any>{};
reactprops.onItemSelected = <any>onlyAureliaBound;
reactprops.selectedItems = <any>{};
//reactprops.onInputChange = <any>onlyAureliaBound;
reactprops.onDismiss = <any>onlyAureliaBound;
reactprops.enableSelectedSuggestionAlert = <any>{};
reactprops.selectedItems = <any>{};

@inject(Element, TaskQueue)
@customElement('du-normal-people-picker')
export class DuNormalPeoplePicker extends AuReactWrapper  {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(NormalPeoplePicker, this.createState(reactprops));
  }
}

addPropertiesState(DuNormalPeoplePicker, reactprops)