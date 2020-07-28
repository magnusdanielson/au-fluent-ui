import { bindable } from "aurelia-framework";

export class examplecard
{
    public showCode:boolean = false;
    @bindable()
    public title:string;

    toggleCode()
    {
        console.log("toggle");
        this.showCode = ! this.showCode; 
    }
}