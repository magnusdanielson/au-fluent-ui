import { ISliderProps } from 'office-ui-fabric-react/lib/Slider';

export class slider
{
    public min = -5;

    sliderValue = 25;
    public onchange( value:any)
    {
        this.sliderValue = value;
    }
}
