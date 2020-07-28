import { MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';

export class messagebar
{
    errorType = MessageBarType.error;
    blockedType = MessageBarType.blocked;
    infoType = MessageBarType.info;
    severeWarningType = MessageBarType.severeWarning;
    successType = MessageBarType.success;
    warningType = MessageBarType.warning;

    onDismiss()
    { 
        console.log('dismiss clicked');
    }
}
