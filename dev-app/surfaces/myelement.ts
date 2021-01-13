import { customElement, TaskQueue, inject, noView, inlineView} from 'aurelia-framework';
import { IDialogProps } from '@fluentui/react/lib/Dialog';
import { bindable, bindingMode } from 'aurelia-framework';

//@noView()
//@inlineView('<template><div if.bind="ho"><slot></slot></div></template>')
@inject(Element, TaskQueue)
@customElement('myelement')
export class myelement
{
    public element: HTMLElement;
    public container: HTMLElement;
    parent:any;
    innerid:string;
    ho:boolean = true;

  constructor(element) 
  {
    console.log("myelement constructor");
    this.element = element;
    //this.innerid = Date.now().toString();

    this.container = this.element.querySelector('.au-react-root');
  
    if(this.container != null)
    {
      this.container.remove();
    }

    this.container = document.createElement('span');
    this.container.setAttribute('class', 'au-react-root');
    this.element.appendChild(this.container);

    this.innerid = Date.now().toString();

    
    
  }

  detached()
  {
      console.log("myelement detached");
  }

  attached()
  {
    console.log('myelement attached ' + this.innerid);
    let auelement = this.element.getElementsByTagName("au-content")[0];
    var newParent = document.getElementById(this.innerid.toString());

    if(newParent == null)
    {
        return;
    }
    while (auelement.childNodes.length > 0) {
        newParent.appendChild(auelement.childNodes[0]);
    }
  }

  myhandler(newValue:any,previousValue:any)
  {

    console.log("myhandler");
    console.log(newValue);
    console.log(previousValue);
  }

  setHidden(newValue:any,previousValue:any)
  {
    console.log("setHidden");
    console.log(newValue);
    console.log(previousValue);

    // let auelement = this.element.getElementsByTagName("au-content")[0];

    // if(newValue)
    // {
      
    //   var oldParent = document.getElementById(this.innerid.toString());
        
    //   if(oldParent == null)
    //   {
    //     return;
    //   }

    //   while (oldParent.childNodes.length > 0) {
    //     auelement.appendChild(oldParent.childNodes[0]);
    //   }
    // }
    // this.hidden = newValue;
  }

  @bindable(
    { defaultBindingMode: bindingMode.twoWay  ,name:"props" 
        ,attribute: "props" ,changeHandler: 'myhandler',
    }) 
  public props:string = "";

  @bindable(
    { defaultBindingMode: bindingMode.twoWay  ,name:"hidden" 
        ,attribute: "hidden" ,changeHandler: 'setHidden',
    })
  public hidden:boolean = true;

  public bind(bindingContext)
  {
    console.log('myelement bind');
    if ( bindingContext !== null)
    {
        this.parent = bindingContext;
    }
  }
}

