import { TaskQueue, customElement, inject } from 'aurelia-framework';
import { DocumentCardActivity, IDocumentCardActivityProps } from '@fluentui/react/lib/DocumentCard';
import { AuReactWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
let reactprops: IDocumentCardActivityProps = <IDocumentCardActivityProps>{};
reactprops.activity = <any>{};
reactprops.people = <any>{};


@inject(Element, TaskQueue)
@customElement('du-document-card-activity')
export class DuDocumentCardActivity extends AuReactWrapper  {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(DocumentCardActivity, this.createState(reactprops));
  }
}

addPropertiesState(DuDocumentCardActivity, reactprops);