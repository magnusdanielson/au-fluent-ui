import { Coachmark, ICoachmarkProps } from '@fluentui/react/lib/Coachmark';
import { customElement, inject, noView, bindable } from 'aurelia-framework';
import { addProperties, onlyAureliaBound } from './myutils';
import { ITeachingBubbleProps, TeachingBubbleContent } from '@fluentui/react/lib/TeachingBubble';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { mybase } from './mybase';
import { mystate } from './mystate';
import { mystatenochild } from './mystatenochild';
import { AuReactWrapper, addPropertiesState, ReactWrapper, ReactSimpleWrapper, AuReactWrapperNoChildren } from '@dunite/au-react-wrapper';

let reactprops: ICoachmarkProps = <ICoachmarkProps>{};
reactprops.beaconColorOne = <any>{};
reactprops.beaconColorTwo = <any>{};
reactprops.className = <any>{};
reactprops.color = <any>{};
reactprops.delayBeforeCoachmarkAnimation = <any>{};
reactprops.delayBeforeMouseOpen = <any>{};
reactprops.isCollapsed = <any>{};
reactprops.isPositionForced = <any>{};
reactprops.mouseProximityOffset = <any>{};
reactprops.target = <any>{};
reactprops.onAnimationOpenEnd = <any>onlyAureliaBound;
reactprops.onAnimationOpenStart = <any>onlyAureliaBound;
reactprops.onDismiss = <any>onlyAureliaBound;
reactprops.onMouseMove = <any>onlyAureliaBound;
reactprops.positioningContainerProps = <any>{};
reactprops.preventDismissOnLostFocus = <any>{};
reactprops.preventFocusOnMount = <any>{};

@inject(Element)
@customElement('mycoach')
export class mycoach extends mybase {

  container: HTMLElement | null;
  
  constructor(element) 
  {
    super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  public teachingBubbleElement: any = {};

  @bindable()
  public teachingBubbleContent: ITeachingBubbleProps;

  @bindable()
  hidden: boolean;

  attached() {

    
    this.renderReact2(reactprops);
  }

  public renderReact2( reactprops: any) {
    //ReactDom.unmountComponentAtNode(this.element);

    this.container = this.element.querySelector('.au-react-root');

    if (this.container == null) {
      this.container = document.createElement('span');
      this.container.setAttribute('class', 'au-react-root');
      this.element.appendChild(this.container);

    }
    //@ts-ignore
    this.teachingBubbleContent.aureliaHost = this;
    //@ts-ignore
    this.teachingBubbleContent.reactClass = TeachingBubbleContent

    //let reactTeachingBubbleElement = React.createElement(TeachingBubbleContent, this.teachingBubbleContent);
    
    // below works
    //let reactTeachingBubbleElement = React.createElement(mystate , this.teachingBubbleContent);
    let reactTeachingBubbleElement = React.createElement(ReactWrapper , this.teachingBubbleContent);
    
    var a = this.createState(reactprops);
    a.aureliaHost = this;
    a.reactClass = Coachmark


    // below works
    //const reactElement = React.createElement(mystatenochild, a, reactTeachingBubbleElement);
    const reactElement = React.createElement(ReactSimpleWrapper, a, reactTeachingBubbleElement);
    
    console.log("mycoach");
    this.reactComponent = ReactDom.render(reactElement, this.container);
  }
}

addProperties(mycoach, reactprops);