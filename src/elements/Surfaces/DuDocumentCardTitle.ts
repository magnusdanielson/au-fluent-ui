import { TaskQueue, customElement, inject } from 'aurelia-framework';
import { DocumentCardTitle, IDocumentCardTitleProps } from '@fluentui/react/lib/DocumentCard';
import { AuReactWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
let reactprops: IDocumentCardTitleProps = <IDocumentCardTitleProps>{};
reactprops.shouldTruncate = <any>{};
reactprops.showAsSecondaryTitle = <any>{};
reactprops.title = <any>{};


@inject(Element, TaskQueue)
@customElement('du-document-card-title')
export class DuDocumentCardTitle extends AuReactWrapper  implements IDocumentCardTitleProps {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;
  title: string;

  attached() {
    this.renderReact(DocumentCardTitle, this.createState(reactprops));
  }
}

addPropertiesState(DuDocumentCardTitle, reactprops);