import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { Tooltip, ITooltipProps } from '@fluentui/react/lib/Tooltip';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: ITooltipProps = <ITooltipProps>{};

reactprops.calloutProps = <any>{};
reactprops.content = <any>{};
reactprops.delay = <any>{};
reactprops.directionalHint = <any>{};
reactprops.maxWidth = <any>{};
reactprops.onRenderContent = <any>onlyAureliaBound;
reactprops.targetElement = <any>{};
reactprops.hidden = <any>{};


@inject(Element, TaskQueue)
@customElement('du-tool-tip')
export class DuToolTip  extends AuReactWrapper implements ITooltipProps
{
  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean;

  attached()
  {
    this.renderReact(Tooltip, this.createState(reactprops));
  }
}


addPropertiesState(DuToolTip, reactprops);