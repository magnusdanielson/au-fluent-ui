import * as React from 'react';
import * as ReactDom from 'react-dom';
import { inlineView, LogManager } from 'aurelia-framework';
import { Logger } from 'aurelia-logging';
import { mystate } from './mystate';

// Den här filen har endast "ReactStateWrapper" som unik referens
@inlineView('<template><div id.bind="inneridAurelia" show.bind="!hidden"><slot></slot></div></template>')
export class mybase 
{
  public element: HTMLElement;
  public container: HTMLElement | null;
  public reactComponent: any;
  public inneridAurelia: string;
  public parent: any;
  public log: Logger;

  hiddenName: string;
  hiddenIsHidden: boolean;

  createState(reactprops: any): any
  {
    // reactprops is object with reactproperty names and values as empty object or function
    var reactpropNames = Object.getOwnPropertyNames(reactprops);
  
    var a = {};
    for (let i = 0; i < reactpropNames.length; i++) {
      let renderPropName = reactpropNames[i];
      if (typeof reactprops[renderPropName] === 'function')
        {
          
          this.log.debug(`React template: typeof reactprops[${renderPropName}] is function`);
        
        
          this.log.debug(`Aurelia object: typeof this[${renderPropName}] is ${typeof this[renderPropName] }`);
        
        if (typeof this[renderPropName] === 'function') 
        {
          this.log.debug('bound function, go aurelia');
          a[renderPropName] =  this[renderPropName].bind(this.parent);
          // a[renderPropName] = (...newValue: any[]) => 
          // {
            
          //   return this[renderPropName]( newValue);
          // }
        }
        else
        {
          this.log.debug('function is not bound, check for default implementation on React template');

          let funcNames = ['defaultOnChangeEvent', 'defaultActionEvent', 'onlyAureliaBound'];
          if ( ! funcNames.includes( reactprops[renderPropName].name) )
          {
            this.log.debug('run func from React template');
            var that = this;
            a[renderPropName] = function()
            {
              let argLength = arguments.length;
              reactprops[renderPropName](that, 
                argLength>=1 ? arguments[0] : undefined,
                argLength>=2 ? arguments[1] : undefined,
                argLength>=3 ? arguments[2] : undefined,
                argLength>=4 ? arguments[3] : undefined
                );
            }
          }
          else
          {
            this.log.debug('React template has empty implementatio, do nothing.');
            
          }
        }
       } 
       else
       {
        this.log.debug(`React template: typeof reactprops[${renderPropName}] is NOT function`);
        
        if (typeof this[renderPropName] !== 'undefined')
        {
          this.log.debug('Aurelia object property ' + renderPropName + ' has value ' +  this[renderPropName]);
          a[renderPropName] = this[renderPropName];
        }
        else
        {
          this.log.debug('Aurelia object property ' + renderPropName + ' has NO value ' );
        }
      }
    }
    return a;
  }

  isHidden(): boolean
  {
    return this.hiddenIsHidden ? this[this.hiddenName]  :  ! this[this.hiddenName];
  }
  constructor(element) 
  {
    
    this.element = element;
    this.log = LogManager.getLogger('DuReactWrapperBaseClass');
    // this.log.info('DuReactWrapperBaseClass constructor');
    this.inneridAurelia = 'du' + Math.round( Math.random() * 10000000000000000);
    console.log(element);
    console.log(this.inneridAurelia);
  }

  public bind(bindingContext) 
  {
    //this.log.debug('DuPanel bind');
    if ( bindingContext !== null)
    {
        this.parent = bindingContext;
    }
  }

  public unbind() 
  {
    //this.log.debug('DuReactWrapperBaseClass unbind ')
    ReactDom.unmountComponentAtNode(this.element);
  
  }

  propertyChanged(name, newValue) //, oldValue)
  {
    this.log.debug('propertyChanged');
    this.log.debug(name);
    this.log.debug(newValue);
    console.log(this);
    let obj = {};
    obj[name] = newValue;

    if (name == this.hiddenName)
    {
      if ( this.hiddenIsHidden ? newValue : !newValue )
      {
        this.moveBack();
      }
    }
    this.reactComponent.setState(obj);
    this[name] = newValue;
    
  }

  moveBack()
  {
    //this.log.debug('Move back');
    let auelement = document.getElementById(this.inneridAurelia);

    var oldParent = document.getElementById(this.reactComponent.inneridReact);
        
    if (oldParent == null || auelement == null) 
    {
      return;
    }

    while (oldParent.childNodes.length > 0) {
      auelement.appendChild(oldParent.childNodes[0]);
    }
  }
  reactComponentWillUnmount()
  {
    //this.log.debug('DuReactWrapperBaseClass componentWillUnmount');
  }

  reactComponentDidMount()
  {
    //this.log.debug('DuReactWrapperBaseClass reactComponentDidMount');
  }
  renderReact(reactClass: any, a: any) 
  {

    //this.log.debug('DuReactWrapperBaseClass renderReact');

    ReactDom.unmountComponentAtNode(this.element);

    
    this.container = this.element.querySelector('.au-react-root');
  
    if (this.container != null)
    {
      this.container.remove();
    }

    this.container = document.createElement('span');
    this.container.setAttribute('class', 'au-react-root');
    this.element.appendChild(this.container);

    a.aureliaHost = this;
    a.reactClass = reactClass;

    // reactElement is the DOM element;
    let reactElement = React.createElement(mystate, a);
    
    // reactComponent is THE React Component
    var reactComponent = ReactDom.render(reactElement, this.container
      // , () =>
      // {
      //   this.log.debug('DuReactWrapperBaseClass React callback render complete');
      // }
    );
    this.reactComponent = reactComponent;
    
    //this.log.debug('DuReactWrapperBaseClass renderReact complete');
  }
}
