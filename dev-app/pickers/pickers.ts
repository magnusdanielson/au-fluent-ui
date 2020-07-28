import { ITag } from 'office-ui-fabric-react/lib/Pickers';


const _testTags: ITag[] = [
    'black',
    'blue',
    'brown',
    'cyan',
    'green',
    'magenta',
    'mauve',
    'orange',
    'pink',
    'purple',
    'red',
    'rose',
    'violet',
    'white',
    'yellow'
  ].map(item => ({ key: item, name: item }));
  
export class pickers
{

    public selectedItems: any[] = [];

    public inputProps = {
        onBlur: (ev: any) => console.log('onBlur called'),
        onFocus: (ev: any) => console.log('onFocus called'),
        'aria-label': 'Tag Picker'
      };

    public onFilterChanged( filterText: string, tagList: ITag[]): ITag[] 
    {

        let retValue =  filterText
            ? _testTags
                .filter(tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0)
                .filter(tag => !this.listContainsDocument(tag, tagList))
            : [];

        return retValue;
    }

    public onChange( items:any[])
    {
        this.selectedItems = items;
        console.log(this.selectedItems);
    }

    private listContainsDocument(tag: ITag, tagList?: ITag[]) 
    {
        if (!tagList || !tagList.length || tagList.length === 0) 
        {
            return false;
        }
        return tagList.filter(compareTag => compareTag.key === tag.key).length > 0;
    }



    private onItemSelected(item: ITag): ITag | null
    {

        if(item.key == "blue")
        {
            return null;
        }
        return item;
    }
    
}
