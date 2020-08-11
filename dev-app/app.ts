import {PLATFORM, LogManager} from "aurelia-framework";
import { Logger } from "aurelia-logging";
import {Router, RouterConfiguration} from 'aurelia-router';
import { initializeIcons } from "@fluentui/react/lib/Icons";

initializeIcons(/* optional base url */);

export class App {
  public log:Logger;
  public router: Router;
  message = 'Hello World!';
  showBurgerMenu = true;

  toggleMenu()
  {
    this.showBurgerMenu = ! this.showBurgerMenu;
  }



  public groups = [
    {
      links: [
        {
          name: 'About',
          url: '#',
          links: [
            {
              name: 'Gettings started',
              url: '#gettingstarted',
              key: 'gettingstarted'
            },
            {
              name: 'Why',
              url: '#why',
              key: 'why'
            },
            {
              name: 'RequireJs',
              url: '#reqjs',
              key: 'reqjs'
            }
          ],
          isExpanded: true
        },
        { name: 'Basic Inputs', key: 'key3',
        links: [
          {
            name: 'Button',
            url: '#buttons',
            key: 'buttons'
          },
          {
            name: 'Checkbox',
            url: '#checkbox',
            key: 'checkbox'
          },
          {
            name: 'Choicegroup',
            url: '#choicegroup',
            key: 'choicegroup'
          }
          ,
          {
            name: 'Combobox',
            url: '#combobox',
            key: 'combobox'
          }
          ,
          {
            name: 'Dropdown',
            url: '#dropdown',
            key: 'dropdown'
          },
          {
            name: 'Label',
            url: '#label',
            key: 'label'
          },
          {
            name: 'Slider',
            url: '#slider',
            key: 'slider'
          },
          {
            name: 'Spinbutton',
            url: '#spinbutton',
            key: 'spinbutton'
          },
          {
            name: 'Textfield',
            url: '#textfield',
            key: 'textfield'
          },
          {
            name: 'Toggle',
            url: '#toggle',
            key: 'toggle'
          }
        ],
        isExpanded: false },
        {
          name: 'Content',
          links: [
            {
              name: 'DetailsList',
              url: '#detailslist',
              key: 'detailslist'
            },
            {
              name: 'Persona',
              url: '#persona',
              key: 'persona'
            },
            {
              name: 'Facepile',
              url: '#facepile',
              key: 'facepile'
            }
          ],
          isExpanded: false
        },
        {
          name: 'Navigation',
          links: [
            {
              name: 'Breadcrumb',
              url: '#breadcrumb',
              key: 'breadcrumb'
            },
            {
              name: 'CommandBar',
              url: '#commandbar',
              key: 'commandbar'
            },
            {
              name: 'Nav',
              url: '#nav',
              key: 'nav'
            },
            {
              name: 'Pivot',
              url: '#pivot',
              key: 'pivot'
            }
            ,
            {
              name: 'Search',
              url: '#search',
              key: 'search'
            }
          ],
          isExpanded: false
        },
        {
          name: 'Pickers',
          links: [
            {
              name: 'PeoplePickers',
              url: '#peoplepickers',
              key: 'peoplepickers'
            },{
              name: 'TagPicker',
              url: '#tagpicker',
              key: 'tagpicker'
            },
            {
              name: 'ColorPicker',
              url: '#colorpicker',
              key: 'colorpicker'
            },
            {
              name: 'DatePicker',
              url: '#datepicker',
              key: 'datepicker'
            }
          ],
          isExpanded: false
        },
        {
          name: 'Progress & Validation',
          links: [
            {
              name: 'MessageBar',
              url: '#messagebar',
              key: 'messagebar'
            },
            {
              name: 'ProgressIndicator',
              url: '#progressindicator',
              key: 'progressindicator'
            },
            {
              name: 'Spinner',
              url: '#spinner',
              key: 'spinner'
            }
          ],
          isExpanded: false
        }
        ,
        {
          name: 'Surfaces',
          links: [
            {
              name: 'Callout',
              url: '#callout',
              key: 'callout'
            },
            {
              name: 'Dialog',
              url: '#dialog',
              key: 'dialog'
            },
            {
              name: 'DocumentCard',
              url: '#documentcard',
              key: 'documentcard'
            },
            {
              name: 'ToolTip',
              url: '#tooltip',
              key: 'tooltip'
            },
            {
              name: 'TeachingBubble',
              url: '#teachingbubble',
              key: 'teachingbubble'
            },
            {
              name: 'Coachmark',
              url: '#coachmark',
              key: 'coachmark'
            },
            {
              name: 'Panel',
              url: '#panel',
              key: 'panel'
            }
          ],
          isExpanded: false
        }
      ]
    }
  ];

  constructor() {
    this.log = LogManager.getLogger('reacthost');
  }

  public configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'au-fluent-ui';
    config.map([
      { route: ['','/gettingstarted'],  moduleId: PLATFORM.moduleName('./gettingstarted'), name:'gettingstarted', nav: true,   title: 'Getting started' },
      { route: '/why',  moduleId: PLATFORM.moduleName('./why'), name:'why', nav: true,   title: 'Why' },
      { route: '/reqjs',  moduleId: PLATFORM.moduleName('./reqjs'), name:'reqjs', nav: true,   title: 'Require' },
      { route: '/otherstuff',  moduleId: PLATFORM.moduleName('./otherstuff'), name:'otherstuff', nav: true,   title: 'otherstuff' },

      // Basic Inputs
      { route: '/buttons',  moduleId: PLATFORM.moduleName('./basicinputs/buttons'), name:'buttons', nav: true,   title: 'Buttons' },
      { route: '/checkbox',  moduleId: PLATFORM.moduleName('./basicinputs/checkbox'), name:'checkbox', nav: true,   title: 'Checkbox' },
      { route: '/choicegroup',  moduleId: PLATFORM.moduleName('./basicinputs/choicegroup'), name:'choicegroup', nav: true,   title: 'ChoiceGroup' },
      { route: '/combobox',  moduleId: PLATFORM.moduleName('./basicinputs/combobox'), name:'combobox', nav: true,   title: 'Combobox' },
      { route: '/dropdown',  moduleId: PLATFORM.moduleName('./basicinputs/dropdown'), name:'dropdown', nav: true,   title: 'Dropdown' },
      { route: '/label',  moduleId: PLATFORM.moduleName('./basicinputs/label'), name:'label', nav: true,   title: 'Label' },
      { route: '/slider',  moduleId: PLATFORM.moduleName('./basicinputs/slider'), name:'slider', nav: true,   title: 'Slider' },
      { route: '/spinbutton',  moduleId: PLATFORM.moduleName('./basicinputs/spinbutton'), name:'spinbutton', nav: true,   title: 'Spinbutton' },
      { route: '/textfield',  moduleId: PLATFORM.moduleName('./basicinputs/textfield'), name:'textfield', nav: true,   title: 'Textfield' },
      { route: '/toggle',  moduleId: PLATFORM.moduleName('./basicinputs/toggle'), name:'toggle', nav: true,   title: 'Toggle' },

      // Navigation
      { route: '/breadcrumb',  moduleId: PLATFORM.moduleName('./navigation/breadcrumb'), name:'breadcrumb', nav: true,   title: 'Breadcrumb' },
      { route: '/commandbar',  moduleId: PLATFORM.moduleName('./navigation/commandbar'), name:'commandbar', nav: true,   title: 'Commandbar' },
      { route: '/nav',  moduleId: PLATFORM.moduleName('./navigation/nav'), name:'nav', nav: true,   title: 'Nav' },
      { route: '/pivot',  moduleId: PLATFORM.moduleName('./navigation/pivot'), name:'pivot', nav: true,   title: 'Pivot' },
      { route: '/search',  moduleId: PLATFORM.moduleName('./navigation/search'), name:'search', nav: true,   title: 'Search' },

      // Content
      { route: '/detailslist',  moduleId: PLATFORM.moduleName('./content/detailslist'), name:'detailslist', nav: true,   title: 'Detailslist' },
      { route: '/facepile',  moduleId: PLATFORM.moduleName('./content/facepile'), name:'facepile', nav: true,   title: 'Facepile' },
      { route: '/persona',  moduleId: PLATFORM.moduleName('./content/persona'), name:'persona', nav: true,   title: 'Persona' },

      // Pickers
      { route: '/tagpicker',  moduleId: PLATFORM.moduleName('./pickers/pickers'), name:'tagpicker', nav: true,   title: 'Tagpicker' },
      { route: '/colorpicker',  moduleId: PLATFORM.moduleName('./pickers/colorpicker'), name:'colorpicker', nav: true,   title: 'Colorpicker' },
      { route: '/datepicker',  moduleId: PLATFORM.moduleName('./pickers/datepicker'), name:'datepicker', nav: true,   title: 'Datepicker' },
      { route: '/peoplepickers',  moduleId: PLATFORM.moduleName('./pickers/peoplepickers'), name:'peoplepickers', nav: true,   title: 'PeoplePickers' },

      // Progress & Validation
      { route: '/messagebar',  moduleId: PLATFORM.moduleName('./progressvalidation/messagebar'), name:'messagebar', nav: true,   title: 'Messagebar' },
      { route: '/progressindicator',  moduleId: PLATFORM.moduleName('./progressvalidation/progressindicator'), name:'progressindicator', nav: true,   title: 'Progress Indicator' },
      { route: '/spinner',  moduleId: PLATFORM.moduleName('./progressvalidation/spinner'), name:'spinner', nav: true,   title: 'Spinner' },


      // Surfaces
      { route: '/callout',  moduleId: PLATFORM.moduleName('./surfaces/callout'), name:'callout', nav: true,   title: 'Callout' },
      { route: '/documentcard',  moduleId: PLATFORM.moduleName('./surfaces/documentcard'), name:'documentcard', nav: true,   title: 'Documentcard' },
      { route: '/dialog',  moduleId: PLATFORM.moduleName('./surfaces/dialog'), name:'dialog', nav: true,   title: 'Dialog' },
      { route: '/panel',  moduleId: PLATFORM.moduleName('./surfaces/panel'), name:'panel', nav: true,   title: 'Panel' },
      { route: '/tooltip',  moduleId: PLATFORM.moduleName('./surfaces/tooltip'), name:'tooltip', nav: true,   title: 'ToolTip' },
      { route: '/teachingbubble',  moduleId: PLATFORM.moduleName('./surfaces/teachingbubble'), name:'teachingbubble', nav: true,   title: 'TeachingBubble' },
      { route: '/coachmark',  moduleId: PLATFORM.moduleName('./surfaces/coachmark'), name:'coachmark', nav: true,   title: 'CoachMark' },
      { route: '/hovercard',  moduleId: PLATFORM.moduleName('./surfaces/hovercard'), name:'hovercard', nav: true,   title: 'HoverCard' }


      ]);

    this.router = router;
    //console.log(router);
  }

}
