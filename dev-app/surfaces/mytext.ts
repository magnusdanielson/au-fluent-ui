import { customElement, inject } from 'aurelia-framework';
import { TextField, ITextFieldProps, ITextField } from 'office-ui-fabric-react/lib/TextField';
import { addProperties, onlyAureliaBound } from './myutils';
import { mybasenochild } from './mybasenochild';

let reactprops: ITextFieldProps & ITextField = {} as ITextFieldProps & ITextField;
reactprops.ariaLabel = <any>{};
reactprops.validateOnFocusIn = <any>{};
reactprops.validateOnFocusOut = <any>{};
reactprops.validateOnLoad = <any>{};
reactprops.disabled = <any>{};
reactprops.multiline = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.resizable = <any>{};
reactprops.onChange = function (that:any, event: any, newValue?: string)
{
  that['value'] = newValue; 
};
reactprops.autoAdjustHeight = <any>{};
reactprops.underlined = <any>{};
reactprops.onNotifyValidationResult = onlyAureliaBound;
reactprops.onGetErrorMessage = <any>onlyAureliaBound;
reactprops.borderless = <any>{};
reactprops.autoComplete = <any>{};
reactprops.value = <any>{};
reactprops.description = <any>{};
reactprops.prefix = <any>{};
reactprops.suffix = <any>{};
reactprops.defaultValue = <any>{};
reactprops.readOnly = <any>{};
reactprops.errorMessage = <any>{};
reactprops.deferredValidationTime = <any>{};
reactprops.inputClassName = <any>{};
reactprops.mask = <any>{};
reactprops.maskChar = <any>{};
reactprops.maskFormat = <any>{};
//@ts-ignore Native props allowed
reactprops.required = <any>{};
//@ts-ignore Native props allowed
reactprops.placeholder = <any>{};
reactprops.iconProps = <any>{};


@inject(Element)
@customElement('mytext')
export class mytext extends  mybasenochild implements ITextFieldProps {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;
  className:string;

  attached() {
    console.log('Attached Textfield');
    this.renderReact(TextField, this.createState(reactprops));
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
}

addProperties(mytext, reactprops);