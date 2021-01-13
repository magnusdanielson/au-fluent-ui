import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { Nav, INavProps } from '@fluentui/react/lib/Nav';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: INavProps = <INavProps>{};
reactprops.groups = <any>{};
reactprops.initialSelectedKey = <any>{};
reactprops.isOnTop = <any>{};
reactprops.onLinkClick = onlyAureliaBound;
reactprops.onLinkExpandClick = onlyAureliaBound;
reactprops.selectedKey = <any>{};



@inject(Element, TaskQueue)
@customElement('du-nav')
export class DuNav extends AuReactWrapper  {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(Nav, this.createState(reactprops));
  }
}

addPropertiesState(DuNav, reactprops);