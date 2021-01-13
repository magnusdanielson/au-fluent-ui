import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { CommandBarButton, IButtonProps  } from '@fluentui/react/lib/Button';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IButtonProps = <IButtonProps>{};
reactprops.href = <any>{};
reactprops.primary = <any>{};
reactprops.uniqueId = <any>{};
reactprops.disabled = <any>{};
reactprops.checked = <any>{};
reactprops.className = <any>{};
reactprops.text = <any>{};
reactprops.iconProps = <any>{};
reactprops.menuProps = <any>{};
reactprops.split = <any>{};
reactprops.onClick = onlyAureliaBound;
reactprops.secondaryText = <any>{};


@inject(Element, TaskQueue)
@customElement('du-command-bar-button')
export class DuCommandBarButton extends AuReactWrapper  implements IButtonProps {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(CommandBarButton, this.createState(reactprops));
  }
}

addPropertiesState(DuCommandBarButton, reactprops);