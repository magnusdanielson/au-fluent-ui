export class butttons
{
    public actionicon = { iconName: "Mail" };

    public commandMenu = {
        items:[
            {
              key: 'emailMessage',
              text: 'Email message',
              name:"Email message",
              iconProps: { iconName: 'Mail' },
              onClick: () => alert('mail click')
            },
            {
              key: 'calendarEvent',
              text: 'Calendar event',
              "name": "Calendar event",
              iconProps: { iconName: 'Calendar' },
              onClick: () => alert('calender click')
            }
          ]
    };

      public commandbar1 = { iconName: 'Add' };

  

    activate()
    {
        // console.log("hej");
        // //var mycodelement = document.getElementById("mycode");
        // console.log(hljs.listLanguages());
        // hljs.initHighlighting();
    }
}