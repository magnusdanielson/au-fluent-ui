import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { TagPicker, IBasePickerProps, ITag } from '@fluentui/react/lib/Pickers';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IBasePickerProps<ITag> = <IBasePickerProps<ITag>>{};
reactprops.onResolveSuggestions = <any>onlyAureliaBound;
reactprops.resolveDelay = <any>{};
reactprops.onEmptyInputFocus = <any>onlyAureliaBound;
reactprops.defaultSelectedItems = <any>{};
reactprops.onChange = onlyAureliaBound;
reactprops.onFocus = onlyAureliaBound;
reactprops.onBlur = onlyAureliaBound;
reactprops.getTextFromItem = <any>onlyAureliaBound;
reactprops.onGetMoreResults = <any>onlyAureliaBound;
reactprops.className = <any>{};
reactprops.pickerSuggestionsProps = <any>{};
reactprops.pickerCalloutProps = <any>{};
reactprops.inputProps = <any>{};
reactprops.onRemoveSuggestion = onlyAureliaBound;
reactprops.onValidateInput = <any>onlyAureliaBound;
reactprops.searchingText = <any>{};
reactprops.disabled = <any>{};
reactprops.itemLimit = <any>{};
reactprops.createGenericItem = <any>onlyAureliaBound;
reactprops.onItemSelected = <any>onlyAureliaBound;
reactprops.selectedItems = <any>{};
//reactprops.onInputChange = <any>onlyAureliaBound;
reactprops.onDismiss = onlyAureliaBound;
reactprops.enableSelectedSuggestionAlert = <any>{};
//@ts-ignore
reactprops.items = <any>{};
reactprops.selectedItems = <any>{};

@inject(Element, TaskQueue)
@customElement('du-tag-picker')
export class DuTagPicker extends AuReactWrapper  {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(TagPicker, this.createState(reactprops));
  }
}

addPropertiesState(DuTagPicker, reactprops);