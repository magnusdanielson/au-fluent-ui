import { Position } from 'office-ui-fabric-react/lib/utilities/positioning/positioning.types';

export class spinbutton
{
    public spinvalue1:number = 4;
    public spinvalue2:number = 4;
    public spinvalue3:string = "4 cm";

    public labelPosition = Position.end;

    private suffix = " cm";
    onIncrement=(value: string) => {


        console.log(value);
        let newValue = this._removeSuffix(value, this.suffix);
        this.spinvalue3 =  String(+newValue + 2) + this.suffix;
      }

    onValidate=(value: string) => {

        let newValue = this._removeSuffix(value, this.suffix);
        if (newValue.trim().length === 0 || isNaN(+newValue)) {
          return '0' + this.suffix;
        }

        this.spinvalue3 =  String(newValue) + this.suffix;
      }
      
    onDecrement=(value: string) => {
        let newValue = this._removeSuffix(value, this.suffix);
        this.spinvalue3 =  String(+newValue - 2) + this.suffix;
    }

      

    private _hasSuffix(value: string, suffix: string): Boolean {
        console.log(value);
        const subString = value.substr(value.length - suffix.length);
        return subString === suffix;
    }

    private _removeSuffix(value: string, suffix: string): string 
    {
        if (!this._hasSuffix(value, suffix)) {
        return value;
        }

        return value.substr(0, value.length - suffix.length);
    }
}