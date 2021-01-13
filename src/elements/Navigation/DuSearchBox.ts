import { TaskQueue, customElement, inject } from 'aurelia-framework';
import { SearchBox, ISearchBox, ISearchBoxProps } from '@fluentui/react/lib/SearchBox';
import { AuReactWrapperNoChildren, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: ISearchBoxProps = <ISearchBoxProps & ISearchBox>{};
reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.required = <any>{};
reactprops.placeholder = <any>{};
reactprops.onSearch = onlyAureliaBound;
reactprops.onFocus = onlyAureliaBound;
reactprops.onBlur = onlyAureliaBound;
reactprops.onChange = <any>
function (that: any, _event: any, newValue?: string)
{
  that['value'] = newValue; 
};
reactprops.disableAnimation = <any>{};
reactprops.onClear = onlyAureliaBound;
reactprops.onEscape =  onlyAureliaBound;
reactprops.value =  <any>{};
reactprops.defaultValue =  <any>{};
reactprops.clearButtonProps =  <any>{};
reactprops.underlined =  <any>{};
reactprops.iconProps =  <any>{};


@inject(Element, TaskQueue)
@customElement('du-search-box')
export class DuSearchBox extends AuReactWrapperNoChildren implements ISearchBoxProps {

  orignalProp = reactprops;
  reactClass:any = SearchBox;
  // constructor(element, protected tq: TaskQueue) {
  //   super(element, tq);
  //   
  //   // this.hiddenName = 'hidden';
  // }

  hidden: boolean = false;

  // attached() {
  //   this.renderReact(SearchBox, this.createState(reactprops));
  // }
}

addPropertiesState(DuSearchBox, reactprops);