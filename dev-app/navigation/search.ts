export class search
{
    searchText:string = "example";

    onSearch= (searchCommandValue: any) =>
    {
        console.log(  'searchCommandValue = ' +  searchCommandValue);
    }

    onChange2= (event:any, newValue?: string) =>
    {
        this.searchText = newValue;
    }

    onBlur()
    {
        console.log("onBlur");
    }

    onChange (event:any, newValue?: string)
    {
        console.log( 'onChange new value = ' + newValue);
    }

    onFocus()
    {
        console.log("onfocus");
    }
}
