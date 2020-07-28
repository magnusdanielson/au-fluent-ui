import { setInterval } from "timers";

const INTERVAL_DELAY = 100;
const INTERVAL_INCREMENT = 0.01;

export class progressindicator
{
    attached()
    {
        setInterval(()=>
        {
            this.percentComplete += INTERVAL_INCREMENT;
            if(this.percentComplete >= 1)
            {
                this.percentComplete = 0;
            }
        },INTERVAL_DELAY);
    }

    

    percentComplete:number = 50;
}
