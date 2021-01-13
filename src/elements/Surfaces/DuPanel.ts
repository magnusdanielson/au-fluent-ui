import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { Panel, IPanel, IPanelProps } from '@fluentui/react/lib/Panel';
import { onlyAureliaBound, AuReactWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

var reactprops: IPanelProps & IPanel = <any>{};
reactprops.isOpen = <any>{};
reactprops.onDismiss = <any>onlyAureliaBound;
reactprops.onDismissed = <any>onlyAureliaBound;
reactprops.onOpen = <any>onlyAureliaBound;
reactprops.onOpened = <any>onlyAureliaBound;
reactprops.onOuterClick = <any>onlyAureliaBound;
reactprops.headerText = <any>{};
reactprops.type = <any>{};
reactprops.isBlocking = <any>{};
reactprops.hasCloseButton = <any>{};
reactprops.isHiddenOnDismiss = <any>{};
reactprops.customWidth = <any>{};
reactprops.open = <any>onlyAureliaBound;
reactprops.dismiss = <any>onlyAureliaBound;

@inject(Element, TaskQueue)
@customElement('du-panel')
export class DuPanel extends AuReactWrapper implements IPanelProps
{
  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    this.hiddenIsHidden = false;
    this.hiddenName = 'isOpen';
  }

  isOpen: boolean;

  attached()
  {
    this.renderReact(Panel, this.createState(reactprops));
  }

//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"isOpen" 
//   ,attribute: "is-open" 
// }) 
//   public isOpen:boolean = false;

//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"type" 
//   ,attribute: "type" 
// }) 
//   public type:PanelType;

//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"onDismiss" 
//   ,attribute: "on-dismiss" 
// }) 
//   public onDismiss:any;


//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"headerText" 
//   ,attribute: "header-text" 
// }) 
//   public headerText:string;
}

addPropertiesState(DuPanel, reactprops);
