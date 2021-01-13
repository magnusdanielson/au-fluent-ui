import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { Dialog, IDialogProps } from '@fluentui/react/lib/Dialog';
import { AuReactWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops: IDialogProps = <IDialogProps>{};
reactprops.dialogContentProps = <any>{};
reactprops.hidden = <any>{};
reactprops.className = <any>{};
reactprops.modalProps = <any>{};
reactprops.onDismiss = <any>{};

@inject(Element, TaskQueue)
@customElement('du-dialog')
export class DuDialog  extends AuReactWrapper implements IDialogProps
{
  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean;

  attached()
  {
    this.renderReact(Dialog, this.createState(reactprops));
  }
}


addPropertiesState(DuDialog, reactprops);