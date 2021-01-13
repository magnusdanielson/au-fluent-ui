import { TaskQueue, customElement, inject } from 'aurelia-framework';
import { MessageBar, IMessageBarProps } from '@fluentui/react/lib/MessageBar';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IMessageBarProps = <IMessageBarProps>{};
reactprops.className = <any>{};
reactprops.isMultiline = <any>{};
reactprops.messageBarType = <any>{};
reactprops.onDismiss = onlyAureliaBound;
reactprops.dismissButtonAriaLabel = <any>{};
reactprops.truncated = <any>{};
reactprops.overflowButtonAriaLabel = <any>{};
reactprops.actions = <any>{};

@inject(Element, TaskQueue)
@customElement('du-message-bar')
export class DuMessageBar extends AuReactWrapper  {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {

    this.renderReact(MessageBar, this.createState(reactprops));
  }
}

addPropertiesState(DuMessageBar, reactprops);