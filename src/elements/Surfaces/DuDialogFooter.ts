import { TaskQueue, customElement, inject } from 'aurelia-framework';
import { DialogFooter, IDialogFooterProps } from '@fluentui/react/lib/Dialog';
import { AuReactWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
let reactprops: IDialogFooterProps = <IDialogFooterProps>{};
reactprops.className = <any>{};


@inject(Element, TaskQueue)
@customElement('du-dialog-footer')
export class DuDialogFooter extends AuReactWrapper {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(DialogFooter, this.createState(reactprops));
  }
}

addPropertiesState(DuDialogFooter, reactprops);