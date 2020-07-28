export class toggle
{
    public checked:boolean = false;

    onChange(event: any, checked?: boolean)
    {
        console.log("onChange");
        console.log(checked); 
        this.checked = checked; 
    };

}