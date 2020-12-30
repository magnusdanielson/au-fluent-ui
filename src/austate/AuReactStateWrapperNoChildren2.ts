import * as React from 'react';
import * as ReactDom from 'react-dom';
import {inject, TaskQueue, noView, LogManager } from 'aurelia-framework';
import { Logger } from 'aurelia-logging';
import { ReactStateWrapperNoChildren } from './ReactStateWrapperNoChildren';
import { IAuReactWrapper } from './IAuReactWrapper';

@noView()
@inject(Element,TaskQueue)
export class AuReactStateWrapperNoChildren2 implements IAuReactWrapper
{
  public element: HTMLElement;
  public reactComponent: any;
  public parent: any;
  public log: Logger;

  public orignalProp: any;
  public reactClass:any;

  hiddenName: string;
  hiddenIsHidden: boolean;
  private ignoreReactUpdate:boolean = false;
  constructor(element, private tq: TaskQueue) 
  {
    console.log("ctor AuReactStateWrapperNoChildren2")
    this.element = element;
    this.log = LogManager.getLogger('reacthost');
  }

  createState(reactprops: any): any
  {
    console.log("createState AuReactStateWrapperNoChildren2");
    var reactpropNames = Object.getOwnPropertyNames(reactprops);
  
    var a = {};
    for (let i = 0; i < reactpropNames.length; i++) {
      let renderPropName = reactpropNames[i];
      if (typeof reactprops[renderPropName] === 'function')
        {
          console.log(`React template: typeof reactprops[${renderPropName}] is function`);
          console.log(`Aurelia object: typeof this[${renderPropName}] is ${typeof this[renderPropName] }`);
        
          if (typeof this[renderPropName] === 'function') 
        {
          console.log('bound function, go aurelia');
          a[renderPropName] = this[renderPropName].bind(this.parent);
        }
        else
        {

          console.log('function is not bound, check for default implementation on React template');

          let funcNames = ['defaultOnChangeEvent', 'defaultActionEvent', 'onlyAureliaBound'];
          if ( ! funcNames.includes( reactprops[renderPropName].name) )
          {
            console.log('React template has default implementation, call it.');
            var that = this;
            a[renderPropName] = function()
            {
              let argLength = arguments.length;
              reactprops[renderPropName](that, 
                argLength >= 1 ? arguments[0] : undefined,
                argLength >= 2 ? arguments[1] : undefined,
                argLength >= 3 ? arguments[2] : undefined,
                argLength >= 4 ? arguments[3] : undefined
                );
            };
          }
          else
          {
            console.log('React template has empty implementation, do nothing.');
          }
        }
         
       } else 
       {
        console.log(`React template: typeof reactprops[${renderPropName}] is NOT function`);
        
        if (typeof this[renderPropName] !== 'undefined') 
        {
          console.log('Aurelia object property ' + renderPropName + ' has value ' +  this[renderPropName]);
          a[renderPropName] = this[renderPropName];
        }
        else
        {
          console.log('Aurelia object property ' + renderPropName + ' has NO value ' );
        }
      }
      }
      return a;
  }

  isHidden(): boolean
  {
    return this.hiddenIsHidden ? this[this.hiddenName]  :  ! this[this.hiddenName] ;

  }
  

  public bind(bindingContext) 
  {
    console.log('bind AuReactStateWrapperNoChildren2');
    if ( bindingContext !== null)
    {
        this.parent = bindingContext;
    }
  }

  public unbind() 
  {
    console.log('unbind AuReactStateWrapperNoChildren2')
    if (this.element != null)
      ReactDom.unmountComponentAtNode(this.element);
  
  }

  propertyChanged(name, newValue, oldValue)
  {
    if(newValue == oldValue)
    {
      console.log('AuReactStateWrapperNoChildren2: propertySame');
      return;
    }
    console.log('AuReactStateWrapperNoChildren2: propertyChanged');
    
    if (!this.ignoreReactUpdate)
    {
      //console.log("update came from aurelia");
      let obj = {};
      obj[name] = newValue;
      // line below is necessery
      this.reactComponent.setState( obj);
    }
    this.tq.queueMicroTask(() => {
    console.log("microTask"); console.log(this);this.ignoreReactUpdate = false;});
    console.log("textfield: valueChanged Leaving");
       
  }



  attached()
  {
    this.renderReact();
  }
  renderReact() 
  {

    
    console.log('renderReact AuReactStateWrapperNoChildren2');


    var a = this.createState(this.orignalProp)
    a.aureliaHost = this;
    a.reactClass = this.reactClass;

    // reactElement is the DOM element;
    let reactElement = React.createElement(ReactStateWrapperNoChildren, a,null);
    
    // reactComponent is THE React Component
    var reactComponent = ReactDom.render(reactElement, this.element );
    this.reactComponent = reactComponent;
    
    console.log('renderReact complete AuReactStateWrapperNoChildren2');
  }
}
