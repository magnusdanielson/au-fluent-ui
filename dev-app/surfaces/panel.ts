import { IPanelProps,PanelType } from 'office-ui-fabric-react/lib/Panel';

export class panel {

  isOpen:boolean = false;
  type :PanelType = PanelType.smallFixedFar;
  headerText:string = "Panel - Small, right-aligned, fixed, with footer";
  onDismiss = ()=>
  {
    this.isOpen = false;
  }
  isOpenSwap = () =>
  {
    this.isOpen = ! this.isOpen;
  }
}
