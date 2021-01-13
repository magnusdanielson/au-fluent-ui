// import * as ReactDom from 'react-dom';
// import { LogManager } from 'aurelia-framework';
// import { Logger } from 'aurelia-logging';
// import { IAuReactWrapper } from './IAuReactWrapper';

// export abstract class AuReactNoStateWrapper  implements IAuReactWrapper
// {
//     public element: HTMLElement;
//     public reactComponent;
//     public parent: any;
//     public log: Logger;

//     constructor(element) {
//         this.element = element;
//         this.log = LogManager.getLogger('reacthost');
//     }

//     public abstract render();

//     public bind(bindingContext) {
//         if (bindingContext !== null) {
//             this.parent = bindingContext;
//         }
//         this.render();
//     }

//     public unbind() {
//         ReactDom.unmountComponentAtNode(this.element);
//     }

//     public createState(reactprops: any): any {
//         var reactpropNames = Object.getOwnPropertyNames(reactprops);

//         var a = {};
//         for (let i = 0; i < reactpropNames.length; i++) {
//             let renderPropName = reactpropNames[i];
//             if (typeof reactprops[renderPropName] === 'function') 
//             {
//                 console.log(`React template: typeof reactprops[${renderPropName}] is function`);
//           console.log(`Aurelia object: typeof this[${renderPropName}] is ${typeof this[renderPropName] }`);
//         if (typeof this[renderPropName] === 'function') 
//                 {
//                     console.log('bound function, go aurelia');
//                     a[renderPropName] = this[renderPropName].bind(this.parent);
//                 } 
//                 else 
//                 {
//                     console.log('function is not bound, check for default implementation on React template');

//                     let funcNames = [
//                         'defaultOnChangeEvent',
//                         'defaultActionEvent',
//                         'onlyAureliaBound'
//                     ];
//                     if (!funcNames.includes(reactprops[renderPropName].name)) {
//                         console.log('React template has default implementation, call it.');
//                         var that = this;
//                         a[renderPropName] = function()
//                         {
//                         let argLength = arguments.length;
//                         reactprops[renderPropName](that, 
//                             argLength >= 1 ? arguments[0] : undefined,
//                             argLength >= 2 ? arguments[1] : undefined,
//                             argLength >= 3 ? arguments[2] : undefined,
//                             argLength >= 4 ? arguments[3] : undefined
//                             );
//                         };
//                     }
//                     else
//           {
//             console.log('React template has empty implementation, do nothing.');
//           }
//                 }
//             } 
//             else 
//             {
//                 console.log(`React template: typeof reactprops[${renderPropName}] is NOT function`);
        
//                 if (typeof this[renderPropName] !== 'undefined') {
//                     console.log('Aurelia object property ' + renderPropName + ' has value ' +  this[renderPropName]);
//           a[renderPropName] = this[renderPropName];
//                 }
//                 else
//         {
//           console.log('Aurelia object property ' + renderPropName + ' has NO value ' );
//         }
//             }
//         }
//         return a;
//     }
// }