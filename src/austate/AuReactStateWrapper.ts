// import * as React from 'react';
// import * as ReactDom from 'react-dom';
// import { inlineView, LogManager } from 'aurelia-framework';
// import { Logger } from 'aurelia-logging';
// import { ReactStateWrapper } from './ReactStateWrapper';
// import { IAuReactWrapper } from './IAuReactWrapper';

// // Den här filen har endast "ReactStateWrapper" som unik referens
// @inlineView('<template><span id.bind="inneridAurelia" show.bind="!hidden"><slot></slot></span></template>')
// export class AuReactStateWrapper implements IAuReactWrapper
// {
//   public element: HTMLElement;
//   public container: Element | null;
//   public reactComponent: any;
//   public inneridAurelia: string;
//   public parent: any;
//   public log: Logger;

//   public orignalProp: any;
//   public reactClass:any;

//   hiddenName: string;
//   hiddenIsHidden: boolean;

//   createState(reactprops: any): any
//   {
//     console.log("createState AuReactStateWrapper");
//     var reactpropNames = Object.getOwnPropertyNames(reactprops);
  
//     var a = {};
//     for (let i = 0; i < reactpropNames.length; i++) {
//       let renderPropName = reactpropNames[i];
//       if (typeof reactprops[renderPropName] === 'function')
//         {
//           console.log(`React template: typeof reactprops[${renderPropName}] is function`);
//           console.log(`Aurelia object: typeof this[${renderPropName}] is ${typeof this[renderPropName] }`);
        
//           if (typeof this[renderPropName] === 'function') 
//         {
//           console.log('bound function, go aurelia');
//           a[renderPropName] = this[renderPropName].bind(this.parent);
//         }
//         else
//         {

//           console.log('function is not bound, check for default implementation on React template');

//           let funcNames = ['defaultOnChangeEvent', 'defaultActionEvent', 'onlyAureliaBound'];
//           if ( ! funcNames.includes( reactprops[renderPropName].name) )
//           {
//             console.log('React template has default implementation, call it.');
//             var that = this;
//             a[renderPropName] = function()
//             {
//               let argLength = arguments.length;
//               reactprops[renderPropName](that, 
//                 argLength >= 1 ? arguments[0] : undefined,
//                 argLength >= 2 ? arguments[1] : undefined,
//                 argLength >= 3 ? arguments[2] : undefined,
//                 argLength >= 4 ? arguments[3] : undefined
//                 );
//             };
//           }
//           else
//           {
//             console.log('React template has empty implementation, do nothing.');
//           }
//         }
         
//        } else 
//        {
//         console.log(`React template: typeof reactprops[${renderPropName}] is NOT function`);
        
//         if (typeof this[renderPropName] !== 'undefined') 
//         {
//           console.log('Aurelia object property ' + renderPropName + ' has value ' +  this[renderPropName]);
//           a[renderPropName] = this[renderPropName];
//         }
//         else
//         {
//           console.log('Aurelia object property ' + renderPropName + ' has NO value ' );
//         }
//       }
//       }
//       return a;
//   }

//   isHidden(): boolean
//   {
//     return this.hiddenIsHidden ? this[this.hiddenName]  :  ! this[this.hiddenName] ;

//   }
//   constructor(element) 
//   {
//     console.log("ctor AuReactStateWrapper")
//     this.element = element;
//     this.log = LogManager.getLogger('reacthost');
//     // this.log.info('DuReactWrapperBaseClass constructor');
//     this.inneridAurelia = 'du' + Math.round( Math.random() * 10000000000000000);
//   }

//   public bind(bindingContext) 
//   {
//     console.log('bind AuReactStateWrapper');
//     if ( bindingContext !== null)
//     {
//         this.parent = bindingContext;
//     }
//   }

//   public unbind() 
//   {
//     console.log('unbind AuReactStateWrapper')
//     if (this.container != null)
//       ReactDom.unmountComponentAtNode(this.container);
  
//   }

//   propertyChanged(name, newValue, oldValue)
//   {
//     if(newValue == oldValue)
//     {
//       console.log('AuReactStateWrapper: propertySame');
//       return;
//     }
//     console.log('AuReactStateWrapper: propertyChanged');
//     console.log(this);
    
//     console.log(newValue);
//     console.log(oldValue);
//     let obj = {};
//     obj[name] = newValue;

//     //@ts-ignore
//     if(this.changeState == true)
//     {
//       //this.renderReact(this.reactClass, this.createState(this.orignalProp));
//       console.log("AuReactStateWrapper: changeState == true");
//       this.reactComponent.innerReactComponent.setState(obj);
      
//     }
//     //@ts-ignore
//     this.changeState = true;
//     return;

//     if (name == this.hiddenName)
//     {
//       if ( this.hiddenIsHidden ? newValue : !newValue )
//       {
//         this.moveBack();
//       }
//     }
//     console.log(this);
//     //@ts-ignore
//     if(this.changeState == false)
//     {
//       console.log("AuReactStateWrapper changeState == false");

//     }
//     else
//     {
//       console.log("AuReactStateWrapper changeState == true");
//       //this.reactComponent.setState(obj);
//       //this[name] = newValue;
      
      
//     }
//     this.reactComponent.setState(obj);
//     //@ts-ignore
//     this.changeState = true;
    
//   }

//   moveBack()
//   {
//     console.log('moveBack AuReactStateWrapper');
//     let auelement = document.getElementById(this.inneridAurelia);

//     var oldParent = document.getElementById(this.reactComponent.inneridReact);
        
//     if (oldParent == null || auelement == null) 
//     {
//       return;
//     }

//     while (oldParent.childNodes.length > 0) {
//       auelement.appendChild(oldParent.childNodes[0]);
//     }
//   }
//   // reactComponentWillUnmount()
//   // {
//   //   console.log('DuReactWrapperBaseClass componentWillUnmount');
//   // }

//   // reactComponentDidMount()
//   // {
//   //   console.log('DuReactWrapperBaseClass reactComponentDidMount');
//   // }
//   renderReact(reactClass: any, a: any) 
//   {

//     console.log('renderReact AuReactStateWrapper');

//     ReactDom.unmountComponentAtNode(this.element);

    
//     this.container = this.element.querySelector('.au-react-root');
  
//     if (this.container != null)
//     {
//       this.container.remove();
//     }

//     this.container = document.createElement('span');
//     this.container.setAttribute('class', 'au-react-root');
//     this.element.appendChild(this.container);

//     a.aureliaHost = this;
//     a.reactClass = reactClass;

//     // reactElement is the DOM element;
//     let reactElement = React.createElement(ReactStateWrapper, a);
    
//     // reactComponent is THE React Component
//     var reactComponent = ReactDom.render(reactElement, this.container
//       // , () =>
//       // {
//       //   console.log('DuReactWrapperBaseClass React callback render complete');
//       // }
//     );
//     this.reactComponent = reactComponent;
    
//     console.log('renderReact complete AuReactStateWrapper');
//   }
// }
