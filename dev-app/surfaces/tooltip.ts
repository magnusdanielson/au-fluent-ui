import { ICalloutProps } from '@fluentui/react/lib/Callout';

export class tooltip
{
    tooltip1: boolean = true;

    onMouseOver()
    {
      this.tooltip1 = false;
    }

    onMouseOut()
    {
      this.tooltip1 = true;
    }

    tooltip2: boolean = true;

    onMouseOver2()
    {
      this.tooltip2 = false;
    }

    onMouseOut2()
    {
      this.tooltip2 = true;
    }
    constructor()
    {
      this.calloutProps = {};
      this.calloutProps.gapSpace = 50;
      this.calloutProps.isBeakVisible = false;
      this.calloutProps.directionalHint = 12;

    }

  calloutProps:ICalloutProps;

}
