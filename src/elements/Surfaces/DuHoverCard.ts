import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { HoverCard, IHoverCardProps } from '@fluentui/react/lib/HoverCard';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IHoverCardProps = <IHoverCardProps>{};
reactprops.cardDismissDelay = <any>{};
reactprops.hidden = <any>{};
reactprops.className = <any>{};
reactprops.cardOpenDelay = <any>{};
reactprops.expandedCardOpenDelay = <any>{};
reactprops.expandingCardProps = <any>{};
reactprops.instantOpenOnClick = <any>{};
reactprops.onCardExpand = onlyAureliaBound;
reactprops.onCardHide = onlyAureliaBound;
reactprops.onCardVisible = onlyAureliaBound;
reactprops.openHotKey = <any>{};
reactprops.plainCardProps = <any>{};
reactprops.setAriaDescribedBy = <any>{};
reactprops.setInitialFocus = <any>{};
reactprops.sticky = <any>{};
reactprops.target = <any>{};
reactprops.trapFocus = <any>{};
reactprops.type = <any>{};


@inject(Element, TaskQueue)
@customElement('du-hover-card')
export class DuHoverCard extends AuReactWrapper implements IHoverCardProps
{
  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean;

  attached()
  {
    this.renderReact(HoverCard, this.createState(reactprops));
  }
}


addPropertiesState(DuHoverCard, reactprops);