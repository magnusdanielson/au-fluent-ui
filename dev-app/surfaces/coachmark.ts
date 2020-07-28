import { ITeachingBubbleProps } from 'office-ui-fabric-react/lib/TeachingBubble';
import { DirectionalHint } from 'office-ui-fabric-react/lib/Callout';

export class coachmark
{
  hideCoachmark: boolean = true;
  teachingBubble:ITeachingBubbleProps = <ITeachingBubbleProps>{};
    showMark()
    {
      this.hideCoachmark = ! this.hideCoachmark;
    }

    
    constructor()
    {
      this.teachingBubble = {
        headline: 'Example Title',
        hasCloseIcon: true,
        closeButtonAriaLabel: 'Close',
        primaryButtonProps : {
          text: 'Try it' 
        },
        secondaryButtonProps:
        {
          text: 'Try it again'
        },
        onDismiss: () => { console.log(this); this.hideCoachmark = true; },
      };
    }


}
