import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { Breadcrumb, IBreadcrumbProps  } from '@fluentui/react/lib/Breadcrumb';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IBreadcrumbProps = <IBreadcrumbProps>{};
reactprops.items = <any>{};
reactprops.className = <any>{};
reactprops.dividerAs = <any>{};
reactprops.maxDisplayedItems = <any>{};
reactprops.onReduceData = <any>onlyAureliaBound;
reactprops.overflowIndex = <any>{};



@inject(Element, TaskQueue)
@customElement('du-breadcrumb')
export class DuBreadcrumb extends AuReactWrapper  {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(Breadcrumb, this.createState(reactprops));
  }
}

addPropertiesState(DuBreadcrumb, reactprops);