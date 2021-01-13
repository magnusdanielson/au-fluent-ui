import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { CommandBar, ICommandBarProps  } from '@fluentui/react/lib/CommandBar';
import { AuReactWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops: ICommandBarProps = <ICommandBarProps>{};
reactprops.items = <any>{};
reactprops.overflowItems = <any>{};
reactprops.farItems = <any>{};
reactprops.overflowButtonProps = <any>{};
reactprops.className = <any>{};


@inject(Element, TaskQueue)
@customElement('du-command-bar')
export class DuCommandBar extends AuReactWrapper  {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(CommandBar, this.createState(reactprops));
  }
}

addPropertiesState(DuCommandBar, reactprops);