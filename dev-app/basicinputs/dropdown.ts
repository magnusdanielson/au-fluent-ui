import {DropdownMenuItemType, IDropdownProps, IDropdownOption} from 'office-ui-fabric-react/lib/Dropdown'

export class dropdown
{
    

  selectedItem:string;
  errorMessage:string;
  me:any;

    public simpleOptions:any =
    [
      { key: 'Header', text: 'Actions', itemType: DropdownMenuItemType.Header },
      { key: 'A', text: 'Option a', title: 'I am option a.' },
      { key: 'B', text: 'Option b' },
      { key: 'C', text: 'Option c', disabled: true },
      { key: 'D', text: 'Option d' },
      { key: 'E', text: 'Option e' },
      { key: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
      { key: 'Header2', text: 'People', itemType: DropdownMenuItemType.Header },
      { key: 'F', text: 'Option f' },
      { key: 'G', text: 'Option g' },
      { key: 'H', text: 'Option h' },
      { key: 'I', text: 'Option i' },
      { key: 'J', text: 'Option j' }
    ];

      

      public fruits:any = [
        { key: 'Header2', text: 'Fruits', itemType: DropdownMenuItemType.Header },
        { key: 'Apple', text: 'apple' },
        { key: 'Banana', text: 'banana' },
        { key: 'Orange', text: 'orange', disabled: true },
        { key: 'Grape', text: 'grape', disabled: true },
        { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
        { key: 'Header3', text: 'Lanuages', itemType: DropdownMenuItemType.Header },
        { key: 'English', text: 'english' },
        { key: 'French', text: 'french' },
        { key: 'Germany', text: 'germany' }
      ];


      public onChange(event: any, option?: IDropdownOption, index?: number):void
      {
        console.log("The option has been changed to Object:");
        console.log(option);
        console.log(index);
        if(option.key != 'English')
        {
          this.errorMessage = "An error";
        }
        else
        {
          this.errorMessage = "";
        }
        if(option.key != 'Banana')
        {
          this.selectedItem = <string> option.key;
        }
        else
        {
          this.selectedItem = "undefined"; // Yes, a string
        }

      }

      public onBlur():void
      {
        console.log("The onBlur event");

      }

      public onFocus():void
      {
        console.log("The onFocus event");
      }
}