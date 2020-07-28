import { customElement, inject } from 'aurelia-framework';
import { Nav, INavProps } from '@fluentui/react/lib/Nav';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: INavProps = <INavProps>{};
reactprops.groups = <any>{};
reactprops.initialSelectedKey = <any>{};
reactprops.isOnTop = <any>{};
reactprops.onLinkClick = onlyAureliaBound;
reactprops.onLinkExpandClick = onlyAureliaBound;
reactprops.selectedKey = <any>{};



@inject(Element)
@customElement('du-nav')
export class DuNav extends  AuReactStateWrapper {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(Nav, this.createState(reactprops));
  }
}

addPropertiesState(DuNav, reactprops);