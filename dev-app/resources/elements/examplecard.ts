import { bindable } from "aurelia-framework";

export class examplecard
{
    public showCode:boolean = false;
    @bindable()
    public title:string;

    toggleCode()
    {
        window.open("https://github.com/magnusdanielson/au-fluent-ui/tree/master/dev-app");
    }
}