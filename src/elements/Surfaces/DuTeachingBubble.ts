import { customElement, TaskQueue, inject, bindable } from 'aurelia-framework';
import { TeachingBubble, ITeachingBubbleProps } from '@fluentui/react/lib/TeachingBubble';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: ITeachingBubbleProps = <ITeachingBubbleProps>{};

reactprops.calloutProps = <any>{};
reactprops.hasCloseIcon = <any>{};
reactprops.hasCondensedHeadline = <any>{};
reactprops.hasSmallHeadline = <any>{};
reactprops.headline = <any>{};
reactprops.isWide = <any>{};
reactprops.onDismiss = <any>onlyAureliaBound;
reactprops.primaryButtonProps = <any>{};
reactprops.secondaryButtonProps = <any>{};
reactprops.targetElement = <any>{};
reactprops.illustrationImage = <any>{};


@inject(Element, TaskQueue)
@customElement('du-teaching-bubble')
export class DuTeachingBubble  extends AuReactWrapper implements ITeachingBubbleProps
{
  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  @bindable()
  hidden: boolean;
  
  isWide: boolean;

  attached()
  {
    this.renderReact(TeachingBubble, this.createState(reactprops));
  }
}


addPropertiesState(DuTeachingBubble, reactprops);