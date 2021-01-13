import { IComboBoxOption, SelectableOptionMenuItemType } from '@fluentui/react/lib/ComboBox';
import { DuComboBox } from 'elements/BasicInputs/DuComboBox';
import { threadId } from 'worker_threads';

export class combobox {

  selectedItems: string[] = [];
  selectedItem: string;
  errorMessage: string;

  cbx:DuComboBox;

  public fruits: any = [
    { key: 'Header2', text: 'Fruits', itemType: SelectableOptionMenuItemType.Header },
    { key: 'Apple', text: 'apple' },
    { key: 'Banana', text: 'banana' },
    { key: 'Orange', text: 'orange', disabled: true },
    { key: 'Grape', text: 'grape', disabled: true },
    { key: 'divider_1', text: '-', itemType: SelectableOptionMenuItemType.Divider },
    { key: 'Header3', text: 'Lanuages', itemType: SelectableOptionMenuItemType.Header },
    { key: 'English', text: 'english' },
    { key: 'French', text: 'french' },
    { key: 'Germany', text: 'germany' }
  ];

  setApple() {
    this.selectedItem = "Apple";
  }

  public onChange = (event: any, option?: IComboBoxOption, index?: number) => {
    console.log("The option has been changed to Object:");
    console.log(option);
    console.log(index);
    if (option.key != 'English') {
      this.errorMessage = "An error, only English is valid";
    }
    else {
      this.errorMessage = "";
    }
    if (option.key != 'Banana') {
      this.selectedItem = <string>option.key;
    }
    else {
      this.selectedItem = "undefined"; // Yes, a string
    }
  };

  public onMultiChange = (event: any, option?: IComboBoxOption, index?: number) => {
    console.log("The option has been changed to Object:");
    console.log(option);
    console.log(index);
    // line below is necessery to update the viewmodel
  // this.cbx.ignoreReactUpdate = true;
  // this.value = newValue;

  // // line below is necessery to update the React viewmodel
  // this.cbx.reactComponent.setState( {"value":newValue || ''});
  //   if (option.selected) {
  //     this.selectedItems.push(<string>option.key);
  //     this.selectedItems = this.selectedItems.reverse();

  //   }
  //   else {
  //     this.selectedItems.splice(this.selectedItems.indexOf(<string>option.key), 1);
  //   }

  };
  

  public onFocus() {
    console.log("onfocus log");
  }
  public onBlur() {
    console.log("onblur log");
  }
  public menuOpen() {
    console.log("menuopen log");
  }
  public dismissed() {
    console.log("dismissed log");
  }

}