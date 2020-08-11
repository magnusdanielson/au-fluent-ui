import { PivotLinkSize, PivotLinkFormat, PivotItem } from '@fluentui/react/lib/Pivot'

export class pivot
{
    items = [
        { headerText : 'My files', itemKey:'k1' }
        ,{ headerText : 'Recent', itemKey:'k2' }
        ,{ headerText : 'Shared with me', itemKey:'k3' }

    ];

    items2 = [
        { headerText : 'My files', itemKey:'k1', itemCount: 42, itemIcon : "Emoji2" }
        ,{ headerText : 'Recent', itemKey:'k2', itemCount : 23, itemIcon: "Globe" }
        ,{ headerText : 'Shared with me', itemKey:'k3', itemIcon:"Ringer", itemCount:1 }

    ];

    pivotLinkSize = PivotLinkSize.large;
    pivotTabFormat = PivotLinkFormat.tabs;
    public selectedTab = "k1";

    onLinkClick = (item?: PivotItem, ev?: any)=>
    {
        //@ts-ignore
        this.selectedTab = item.props.itemKey;       
    }
}
