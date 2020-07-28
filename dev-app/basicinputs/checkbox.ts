export class checkbox
{
    public checked:boolean = false;

    onCheckboxChange(event:any, isChecked: boolean)
    {
        console.log(`The option has been changed to ${isChecked}.`);
    }

    onControlledChange(event:any, isChecked: boolean)
    {
        this.checked = isChecked;
    }
}