import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { DocumentCard, IDocumentCardProps } from '@fluentui/react/lib/DocumentCard';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
let reactprops: IDocumentCardProps = <IDocumentCardProps>{};
reactprops.className = <any>{};
reactprops.onClick = onlyAureliaBound;
reactprops.onClickHref = <any>{};
reactprops.type = <any>{};
reactprops.role = <any>{};


@inject(Element, TaskQueue)
@customElement('du-document-card')
export class DuDocumentCard extends AuReactWrapper  {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(DocumentCard, this.createState(reactprops));
  }
}

addPropertiesState(DuDocumentCard, reactprops);