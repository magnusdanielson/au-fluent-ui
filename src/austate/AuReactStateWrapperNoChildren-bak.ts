// import * as React from 'react';
// import * as ReactDom from 'react-dom';
// import { AuReactStateWrapper } from './AuReactStateWrapper';
// import { ReactSimpleWrapper } from './ReactSimpleWrapper';

// // Den här filen har endast "ReactStateWrapper" som unik referens
// export class AuReactStateWrapperNoChildren extends AuReactStateWrapper
// {
//   renderReact(reactClass: any, a: any) 
//   {
//     console.log("AuReactStateWrapperNoChildren: renderReact");
//     ReactDom.unmountComponentAtNode(this.element);

    
//     this.container = this.element.querySelector('.au-react-root');
  
//     if (this.container != null)
//     {
//       console.log("AuReactStateWrapperNoChildren: remove");
//       this.container.remove();
//     }

//     this.container = document.createElement('span');
//     this.container.setAttribute('class', 'au-react-root');
//     this.element.appendChild(this.container);

//     a.aureliaHost = this;
//     a.reactClass = reactClass;

//     // reactElement is the DOM element;
//     let reactElement = React.createElement(ReactSimpleWrapper, a);
    
//     // reactComponent is THE React Component
//     var reactComponent = ReactDom.render(reactElement, this.container
//       // , () =>
//       // {
//       //   this.log.debug('DuReactWrapperBaseClass React callback render complete');
//       // }
//       )
//     ;
//     this.reactComponent = reactComponent;
//     console.log(reactComponent);
//     console.log("AuReactStateWrapperNoChildren: renderReact return");
    
//   }
// }
