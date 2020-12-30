import { ITextFieldProps } from "@fluentui/react/lib/TextField"
import { T2 } from "elements/BasicInputs/DuTextField2";
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {autoinject, TaskQueue,observable } from 'aurelia-framework';

// remove1
//@observable({ name: 'myvalue', changeHandler: 'valueChanged' })
@autoinject()
export class textfieldtest
{

  public myvalue:string;
  private reactComponent:any;

  private ignoreReactUpdate:boolean = false;

  constructor(private tq: TaskQueue) { }
  attached()
  {
    // remove1
    //this.renderReact();
  }

  renderReact()
  {
    console.log("textfield: renderReact");
    var a = {
      "label":"mylabel",
      "value": this.myvalue,
      "onChange":(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        console.log("textfield: [renderReact] onChange Entering")
        
        // line below is necessery to update the viewmodel
        this.ignoreReactUpdate = true;
        this.myvalue = newValue;

        // line below is necessery to update the React viewmodel
        this.reactComponent.setState( {"value":newValue || ''});
        console.log("textfield: [renderReact] onChange Leaving")
        
        
      }
    }
    let reactElement = React.createElement(T2, a, null);
    this.reactComponent = ReactDom.render(reactElement, document.getElementById("myreact"));
  
  }
  

  valueChanged( newValue, oldValue)
  {
    console.log("textfield: valueChanged Entering");
    if (!this.ignoreReactUpdate)
    {
      //console.log("update came from aurelia");
      // line below is necessery
      this.reactComponent.setState( {"value":newValue || ''});
    }
    this.tq.queueMicroTask(() => {
      console.log("microTask"); console.log(this);this.ignoreReactUpdate = false;});
    console.log("textfield: valueChanged Leaving");
    
  }
    // public onchange = (event: any, newValue?: string)=>
    // {
    //     console.log(event)
    //     console.log(newValue);
    //     this.myvalue = newValue;

    // }

    

}