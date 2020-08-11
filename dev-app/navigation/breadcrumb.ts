import { IBreadcrumbItem } from '@fluentui/react/lib/Breadcrumb';

export class breadcrumb
{
    
    items = [
        { text: 'Files', key: 'Files',  onClick: this.onBreadcrumbItemClicked },
        { text: 'This is folder 1', key: 'f1', onClick: this.onBreadcrumbItemClicked },
        { text: 'This is folder 2', key: 'f2', onClick: this.onBreadcrumbItemClicked },
        { text: 'This is folder 3', key: 'f3', onClick: this.onBreadcrumbItemClicked },
        { text: 'This is folder 4', key: 'f4', onClick: this.onBreadcrumbItemClicked },
        { text: 'This is folder 5', key: 'f5', onClick: this.onBreadcrumbItemClicked, isCurrentItem: true }
      ];
    
      items2 = [
        { text: 'Files', key: 'Files', href: '#/examples/breadcrumb', onClick: this.onBreadcrumbItemClicked },
        {
          text: 'This is link 1',
          key: 'l1',
          href: '#/examples/breadcrumb',
          onClick: this.onBreadcrumbItemClicked
        },
        {
          text: 'This is link 2',
          key: 'l2',
          href: '#/examples/breadcrumb',
          onClick: this.onBreadcrumbItemClicked
        },
        {
          text: 'This is link 3 with a long name',
          key: 'l3',
          href: '#/examples/breadcrumb',
          onClick: this.onBreadcrumbItemClicked
        },
        {
          text: 'This is link 4',
          key: 'l4',
          href: '#/examples/breadcrumb',
          onClick: this.onBreadcrumbItemClicked
        },
        {
          text: 'This is link 5',
          key: 'l5',
          href: '#/examples/breadcrumb',
          onClick: this.onBreadcrumbItemClicked,
          isCurrentItem: true
        }
      ]

      returnUndefined(): undefined {
        return undefined;
      }

      //@ts-ignore
      onBreadcrumbItemClicked(reactEvent:any, item:IBreadcrumbItem)
      {
        console.log(`Breadcrumb item with key "${item.key}" has been clicked.`);
      }
}
