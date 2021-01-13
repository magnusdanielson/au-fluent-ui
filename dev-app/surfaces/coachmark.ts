import { ITeachingBubbleProps } from '@fluentui/react/lib/TeachingBubble';
import { DirectionalHint } from '@fluentui/react/lib/Callout';

export class coachmark
{
  hideCoachmark: boolean = true;
  //hideCoachmark2: boolean = true;
  teachingBubble:ITeachingBubbleProps = <ITeachingBubbleProps>{};
    showMark()
    {
      this.hideCoachmark = ! this.hideCoachmark;
    }

    // showMark2()
    // {
    //   this.hideCoachmark2 = ! this.hideCoachmark2;
    // }
    
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
