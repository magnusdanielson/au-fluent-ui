import { Coachmark, ICoachmarkProps } from '@fluentui/react/lib/Coachmark';
import {  TaskQueue, customElement, inject, bindable } from 'aurelia-framework';
import { ITeachingBubbleProps, TeachingBubbleContent } from '@fluentui/react/lib/TeachingBubble';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound, ReactWrapper, ReactSimpleWrapper, AuReactWrapperNoChildren } from '@dunite/au-react-wrapper';

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

@inject(Element, TaskQueue)
@customElement('du-coachmark')
export class DuCoachmark extends AuReactWrapper {

  container: HTMLElement | null;
  
  constructor(element, protected tq: TaskQueue) {
    super(element, tq);
  }

  public teachingBubbleElement: any = {};

  @bindable()
  public teachingBubbleContent: ITeachingBubbleProps;

  @bindable()
  hidden: boolean = true;

  attached() {
    this.renderReact2(this.createState(reactprops));
  }

  public renderReact2( a: any) {

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
    let reactTeachingBubbleElement = React.createElement(ReactWrapper , this.teachingBubbleContent);
    
    a.aureliaHost = this;
    a.reactClass = Coachmark
    const reactElement = React.createElement(ReactSimpleWrapper, a, reactTeachingBubbleElement);
    this.reactComponent = ReactDom.render(reactElement, this.container );
  }
}

addPropertiesState(DuCoachmark, reactprops);