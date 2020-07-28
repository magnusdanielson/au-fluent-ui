import { Selection, IColumn, IObjectWithKey } from "office-ui-fabric-react/lib/DetailsList";

interface IRow extends IObjectWithKey {
  name: string;
  value: number;
}

export class detailslist {
  private _selection: Selection;
  private _allItems: IRow[];
  private _columns: IColumn[];

  constructor() {
    // Populate with items for demos.
    this._allItems = [];
    for (let i = 0; i < 200; i++) {
      this._allItems.push({
        key: i,
        name: "Item " + i,
        value: i
      });
    }

    this._columns = [
      {
        key: "column1",
        name: "Name",
        fieldName: "name",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      },
      {
        key: "column2",
        name: "Value",
        fieldName: "value",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      }
    ];

    this._selection = new Selection({
      onSelectionChanged: () => {
        console.log(this);
        // if (this._isMounted) {
        //   this.forceUpdate();
        // }
      }
    });

    this._selection.setItems(this._allItems);
  }

  private onItemInvoked = (item: any): void => {
    alert(`Item invoked: ${item.name}`);
  };

  private selectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return "No items selected";
      case 1:
        return (
          "1 item selected: " + (this._selection.getSelection()[0] as any).name
        );
      default:
        return `${selectionCount} items selected`;
    }
  }
}
