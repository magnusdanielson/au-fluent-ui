import { TaskQueue, customElement, inject } from 'aurelia-framework';
import { DocumentCardLocation, IDocumentCardLocationProps } from '@fluentui/react/lib/DocumentCard';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
let reactprops: IDocumentCardLocationProps = <IDocumentCardLocationProps>{};
reactprops.ariaLabel = <any>{};
reactprops.location = <any>{};
reactprops.locationHref = <any>{};
reactprops.onClick = onlyAureliaBound;


@inject(Element, TaskQueue)
@customElement('du-document-card-location')
export class DuDocumentCardLocation extends AuReactWrapper  {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(DocumentCardLocation, this.createState(reactprops));
  }
}

addPropertiesState(DocumentCardLocation, reactprops);