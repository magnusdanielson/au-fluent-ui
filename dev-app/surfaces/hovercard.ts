

export class hovercard
{
    hidden:boolean = true;

    // expandingCardProps: IExpandingCardProps = {
    //     onRenderCompactCard: this._onRenderCompactCard,
    //     onRenderExpandedCard: this._onRenderExpandedCard,
    //     renderData: item
    //   };

    actionButtonClick()
    {
        this.hidden = ! this.hidden;
    }

}