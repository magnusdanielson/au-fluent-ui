import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { DetailsList, IDetailsListProps } from '@fluentui/react/lib/DetailsList';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
import { ScrollToMode } from '@fluentui/react/lib/List';

let reactprops: IDetailsListProps = <IDetailsListProps>{};

reactprops.checkButtonAriaLabel = <any>{};
reactprops.checkboxCellClassName = <any>{};
reactprops.checkboxVisibility = <any>{};
reactprops.className = <any>{};
reactprops.columnReorderOptions = <any>{};
reactprops.columns = <any>{};
reactprops.compact = <any>{};
reactprops.constrainMode = <any>{};
reactprops.disableSelectionZone = <any>{};
//reactprops.enterModalSelectionOnTouch = <any>{};
reactprops.groupProps = <any>{};
reactprops.groups = <any>{};
reactprops.indentWidth = <any>{};
reactprops.initialFocusedIndex = <any>{};
reactprops.isHeaderVisible = <any>{};
reactprops.layoutMode = <any>{};
reactprops.listProps = <any>{};
reactprops.minimumPixelsForDrag = <any>{};

reactprops.onActiveItemChanged = <any>onlyAureliaBound;
reactprops.onColumnHeaderClick = <any>onlyAureliaBound;
reactprops.onColumnHeaderContextMenu = <any>onlyAureliaBound;
reactprops.onColumnResize = <any>onlyAureliaBound;
reactprops.onDidUpdate = <any>onlyAureliaBound;
reactprops.onItemContextMenu = <any>onlyAureliaBound;
reactprops.onItemInvoked = <any>onlyAureliaBound;

reactprops.selection = <any>{};
reactprops.selectionMode = <any>{};
reactprops.selectionPreservedOnEmptyClick = <any>{};

reactprops.items = <any>{};

@inject(Element, TaskQueue)
@customElement('du-details-list')
export class DuDetailsList  extends AuReactWrapper implements IDetailsListProps
{
  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean;
  items: any[];
  scrollToIndex(index: number)
  {
    this.reactComponent.forceUpdate(index);
  }

  forceUpdate()
  {
    this.reactComponent.forceUpdate();
  }

  focusIndex(index: number, forceIntoFirstElement?: boolean, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode)
  {
    this.reactComponent.focusIndex(index, forceIntoFirstElement, measureItem, scrollToMode);
  }
  attached()
  {
    this.renderReact(DetailsList, this.createState(reactprops));
  }

  getStartItemIndexInView()
  {
    return this.reactComponent.getStartItemIndexInView();
  }
}


addPropertiesState(DuDetailsList, reactprops);