import { IColor } from 'office-ui-fabric-react/lib/utilities/color/interfaces';

export class colorpicker
{
    public thecolor:string = "#ffffff";

    colorChanged( ev:any, colorObj: IColor)
    {
        this.thecolor= colorObj.str;
    }
}
