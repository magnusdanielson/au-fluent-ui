import { IComboBoxOption, SelectableOptionMenuItemType } from '@fluentui/react/lib/ComboBox';
import { DuComboBox } from 'elements/BasicInputs/DuComboBox';

export class combobox
{

  private mycombo:DuComboBox;

    private testOptions = [
      { key: 'Header', text: 'Theme Fonts', itemType: SelectableOptionMenuItemType.Header },
      { key: 'A', text: 'Arial Black' },
      { key: 'B', text: 'Times New Roman' },
      { key: 'C', text: 'Comic Sans MS', selected: true },
      { key: 'divider_2', text: '-', itemType: SelectableOptionMenuItemType.Divider },
      { key: 'Header1', text: 'Other Options', itemType: SelectableOptionMenuItemType.Header },
      { key: 'D', text: 'Option d' },
      { key: 'E', text: 'Option e', selected: true },
      { key: 'F', text: 'Option f' },
      { key: 'G', text: 'Option g' },
      { key: 'H', text: 'Option h' },
      { key: 'I', text: 'Option i' },
      { key: 'J', text: 'Option j', disabled: true }
    ];

    public onChange = (event: any, option?: IComboBoxOption, index?: number)=>{
      console.log(event);
      console.log(option);
      console.log(index);
    };


    public onFocus()
    {
      console.log("onfocus log");
    }
    public onBlur()
    {
      console.log("onblur log");
    }
    public menuOpen()
    {
      console.log("menuopen log");
    }
    public dismissed()
    {
      console.log("dismissed log");
    }    

}