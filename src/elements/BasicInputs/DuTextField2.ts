import * as React from 'react';
import * as ReactDom from 'react-dom';
import {observable,bindingMode,bindable,TaskQueue, noView,customElement, inject } from 'aurelia-framework';
import { TextField, ITextFieldProps } from '@fluentui/react/lib/TextField';
import { addPropertiesState } from '../../austate/addPropertiesState';
import { addPropertiesNoState } from '../../austate/addPropertiesNoState';
import { onlyAureliaBound } from '@dunite/au-react-wrapper';
import {AuReactStateWrapperNoChildren2} from '../../austate/AuReactStateWrapperNoChildren2';
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
reactprops.onChange = <any>onlyAureliaBound;
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


@customElement('du-text-field2')
@noView()
@inject(Element,TaskQueue)
export class DuTextField2 {


  public element: HTMLElement;
  public value:string;
  orignalProp = reactprops;
  hidden: boolean = false;
  private reactComponent:any;

  private ignoreReactUpdate:boolean = false;

  constructor(element, private tq: TaskQueue) {
    this.element = element;
   }
  attached()
  {
    this.renderReact();
  }

  renderReact()
  {
    console.log("DuTextField2: renderReact");
    var a = {
      "label":"mylabel2",
      "value": this.value,
      "onChange":(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        console.log("DuTextField2: [renderReact] onChange Entering")
        
        // line below is necessery to update the viewmodel
        this.ignoreReactUpdate = true;
        this.value = newValue;

        // line below is necessery to update the React viewmodel
        this.reactComponent.setState( {"value":newValue || ''});
        console.log("DuTextField2: [renderReact] onChange Leaving")
        
        
      }
    }
    let reactElement = React.createElement(T2, a, null);
    this.reactComponent = ReactDom.render(reactElement, document.getElementById("myreact"));
  
  }

  valueChanged( newValue, oldValue, more)
  {
    console.log("DuTextField2: valueChanged Entering");

    console.log(this);
    console.log(newValue);
    console.log(oldValue);
    console.log(more);
    
    if (!this.ignoreReactUpdate)
    {
      //console.log("update came from aurelia");
      // line below is necessery
      this.reactComponent.setState( {"value":newValue || ''});
    }
    this.tq.queueMicroTask(() => {
      console.log("microTask"); console.log(this);this.ignoreReactUpdate = false;});
    console.log("DuTextField2: valueChanged Leaving");
    
  }
  
}

bindable({
  name: "value",
  attribute: "value",
  changeHandler: 'valueChanged',
  defaultBindingMode: bindingMode.twoWay
})(DuTextField2);
//addPropertiesState(DuTextField2, reactprops);



export class T2 extends React.Component {

  constructor(props: any) {
    

    super(props);
    console.log("T2:ctor");
    // props is a (object) sent to React.createElement(T2,a,null)
    //console.log(props);


    // this.state == "undefined"
    //console.log(this.state);
    
    this.state = {...props};

    //this.state is now a
    //console.log(this.state);

}
  render() {
    console.log("T2:render");
    console.log(this);
    return React.createElement(TextField, this.state, null);
  }

  
}