import { TaskQueue,customElement, inject } from 'aurelia-framework';
import { TextField, ITextFieldProps } from '@fluentui/react/lib/TextField';
import { AuReactWrapperNoChildren, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: ITextFieldProps = {} as ITextFieldProps;

reactprops.ariaLabel = <any>{};
reactprops.autoAdjustHeight = <any>{};
reactprops.autoComplete = <any>{};
reactprops.borderless = <any>{};
reactprops.className = <any>{};
reactprops.defaultValue = <any>{};
reactprops.deferredValidationTime = <any>{};
reactprops.description = <any>{};
reactprops.disabled = <any>{};
reactprops.errorMessage = <any>{};
reactprops.iconProps = <any>{};
reactprops.inputClassName = <any>{};
reactprops.label = <any>{};
reactprops.mask = <any>{};
reactprops.maskChar = <any>{};
reactprops.maskFormat = <any>{};
reactprops.multiline = <any>{};
reactprops.onChange = <any> ((that:any, event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
  
  // line below is necessery to update the viewmodel
  that.ignoreReactUpdate = true;
  that.value = newValue;

  // line below is necessery to update the React viewmodel
  that.reactComponent.setState( {"value":newValue || ''});
  
});
reactprops.onNotifyValidationResult = onlyAureliaBound;
reactprops.onGetErrorMessage = <any>onlyAureliaBound;
reactprops.prefix = <any>{};
reactprops.suffix = <any>{};
reactprops.readOnly = <any>{};
reactprops.resizable = <any>{};
reactprops.underlined = <any>{};
reactprops.validateOnFocusIn = <any>{};
reactprops.validateOnFocusOut = <any>{};
reactprops.validateOnLoad = <any>{};
reactprops.value = <any>{};

// HTML attributes
reactprops.required = <any>{};
reactprops.placeholder = <any>{};


@inject(Element, TaskQueue)
@customElement('du-text-field')
export class DuTextField extends AuReactWrapperNoChildren implements ITextFieldProps {

  orignalProp = reactprops;
  reactClass:any = TextField;

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {
    this.renderReact( TextField, this.createState(reactprops));
    // Fixing issue with autoAdjustHeight
    //@ts-ignore
    if (this.autoAdjustHeight == true)
    {
      let elements = this.element.getElementsByTagName('textarea');
      if ( elements.length > 0)
      {
        let element  = <HTMLTextAreaElement>elements.item(0);
        element.setAttribute('style', '');
      } 
    }
  
  }

  blur()
  {
    this.reactComponent.blur();
  }
  focus()
  {
    this.reactComponent.focus();
  }
  select()
  {
    this.reactComponent.select();
  }
  selectionEnd()
  {
    return this.reactComponent.selectionEnd();
  }
  selectionStart()
  {
    return this.reactComponent.selectionStart();
  }
  setSelectionEnd(value: number)
  {
    this.reactComponent.setSelectionEnd(value);
  }
  setSelectionRange(start: number, end: number)
  {
    this.reactComponent.setSelectionRange(start, end);
  }
  setSelectionStart(value: number)
  {
    this.reactComponent.setSelectionStart(value);
  }
}

addPropertiesState(DuTextField, reactprops);