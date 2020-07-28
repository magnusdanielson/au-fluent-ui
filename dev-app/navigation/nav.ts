import { INavLink } from 'office-ui-fabric-react/lib/Nav';
export class nav
{
    
    onLinkClick = (reactEvent:any,item:INavLink) => {
        console.log('Clicked on ' + item.name + ' with key ' + item.key);
      };

      navgroups = [
        {
          links: [
            {
              name: 'Home',
              links: [
                {
                  name: 'Activity',
                  key: 'key1'
                },
                {
                  name: 'MSN',
                  key: 'key2'
                }
              ],
              isExpanded: true
            },
            { name: 'Documents', url: 'http://example.com', key: 'key3', isExpanded: true },
            { name: 'Pages', url: 'http://msn.com', key: 'key4' },
            { name: 'Notebook', url: 'http://msn.com', key: 'key5' },
            { name: 'Long Name Test for ellipse', url: 'http://msn.com', key: 'key6' },
            {
              name: 'News',
              url: 'http://www.dunite.se',
              icon: 'News',
              key: 'key8'
            }
          ]
        }
      ]
}
