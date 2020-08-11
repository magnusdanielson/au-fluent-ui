import { IDocumentCardPreviewProps, DocumentCardType } from '@fluentui/react/lib/DocumentCard';
import { TestImages } from '../testimages';
import { ImageFit } from '@fluentui/react/lib/Image';


export class documentcard
{
    // Default
    public previewImages = [
          {
            name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
            linkProps: {
                href: 'http://google.com'
              },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196
          }
        ];

    public people = [{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }];

    //Multiple
    public getOverflowDocumentCountText(overflowCount: number)
    {
        return `+${overflowCount} more`
    };

    public previewImages2= [
        {
          name: '2016 Conference Presentation',
          linkProps: {
            href: 'http://bing.com'
          },
          previewImageSrc: TestImages.documentPreview,
          iconSrc: TestImages.iconPpt,
          imageFit: ImageFit.cover,
          width: 318,
          height: 196
        },
        {
          name: 'New Contoso Collaboration for Conference Presentation Draft',
          linkProps: {
            href: 'http://bing.com'
          },
          previewImageSrc: TestImages.documentPreviewTwo,
          iconSrc: TestImages.iconPpt,
          imageFit: ImageFit.cover,
          width: 318,
          height: 196
        },
        {
          name: 'Spec Sheet for design',
          linkProps: {
            href: 'http://bing.com'
          },
          previewImageSrc: TestImages.documentPreviewThree,
          iconSrc: TestImages.iconPpt,
          imageFit: ImageFit.cover,
          width: 318,
          height: 196
        },
        {
          name: 'Contoso Marketing Presentation',
          linkProps: {
            href: 'http://bing.com'
          },
          previewImageSrc: TestImages.documentPreview,
          iconSrc: TestImages.iconPpt,
          imageFit: ImageFit.cover,
          width: 318,
          height: 196
        },
        {
          name: 'Notes from Ignite conference',
          linkProps: {
            href: 'http://bing.com'
          },
          previewImageSrc: TestImages.documentPreviewTwo,
          iconSrc: TestImages.iconPpt,
          imageFit: ImageFit.cover,
          width: 318,
          height: 196
        },
        {
          name: 'FY17 Cost Projections',
          linkProps: {
            href: 'http://bing.com'
          },
          previewImageSrc: TestImages.documentPreviewThree,
          iconSrc: TestImages.iconPpt,
          imageFit: ImageFit.cover,
          width: 318,
          height: 196
        }
      ]
    
      public people2 = [
        { name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale },
        { name: 'Roko Kolar', profileImageSrc: '', initials: 'JH' },
        { name: 'Greta Lundberg', profileImageSrc: TestImages.personaFemale }
      ];

      public actions2 = [
        {
          iconProps: { iconName: 'Share' },
          onClick: (ev: any) => {
            console.log('You clicked the share action.');
            ev.preventDefault();
            ev.stopPropagation();
          },
          ariaLabel: 'share action'
        },
        {
          iconProps: { iconName: 'Pin' },
          onClick: (ev: any) => {
            console.log('You clicked the pin action.');
            ev.preventDefault();
            ev.stopPropagation();
          },
          ariaLabel: 'pin action'
        },
        {
          iconProps: { iconName: 'Ringer' },
          onClick: (ev: any) => {
            console.log('You clicked the ringer action.');
            ev.preventDefault();
            ev.stopPropagation();
          },
          ariaLabel: 'ringer action'
        }
      ];

      private _onClick2(): void {
        console.log('You clicked the card.');
      }

      // Example3
      public previewImages3 =  [
        {
          name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
          linkProps: {
            href: 'http://bing.com'
          },
          previewImageSrc: TestImages.documentPreview,
          iconSrc: TestImages.iconPpt,
          width: 144
        },
        {
          name: 'New Contoso Collaboration for Conference Presentation Draft',
          linkProps: {
            href: 'http://bing.com'
          },
          previewImageSrc: TestImages.documentPreviewTwo,
          iconSrc: TestImages.iconPpt,
          width: 144
        },
        {
          name: 'Spec Sheet for design',
          linkProps: {
            href: 'http://bing.com'
          },
          previewImageSrc: TestImages.documentPreviewThree,
          iconSrc: TestImages.iconPpt,
          width: 144
        },
        {
          name: 'Contoso Marketing Presentation',
          linkProps: {
            href: 'http://bing.com'
          },
          previewImageSrc: TestImages.documentPreview,
          iconSrc: TestImages.iconPpt,
          width: 144
        }
      ];

      
        previewImages4 =  [
          {
            previewIconProps: { iconName: 'OpenFile', styles: { root: { fontSize: 42, color: '#ffffff' } } },
            width: 144
          }
        ];
  
      
        previewImages5 =[
          {
            previewIconProps: { iconName: 'OutlookLogo', styles: { root: { fontSize: 42, color: '#0078d7' } } },
            previewIconContainerClass: 'ms-DocumentCardPreview-iconContainer2',
            width: 144
          }
        ];


        people3 = [{ name: 'Kat Larrson', profileImageSrc: TestImages.personaFemale }];

        compact = DocumentCardType.compact;
}