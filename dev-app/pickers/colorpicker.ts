//import { IColor } from '@fluentui/react/lib/utilities';

export class colorpicker
{
    public thecolor:string = "#ffffff";

    colorChanged( ev:any, colorObj: any /* IColor */)
    {
        this.thecolor= colorObj.str;
    }
}
