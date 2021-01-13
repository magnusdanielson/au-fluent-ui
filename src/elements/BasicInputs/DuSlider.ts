import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { Slider, ISliderProps } from '@fluentui/react/lib/Slider';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: ISliderProps = {} as ISliderProps;
reactprops.value = <any>{};
reactprops.ariaLabel = <any>{};
reactprops.ariaValueText = <any>onlyAureliaBound;
reactprops.className = <any>{};
reactprops.defaultValue = <any>{};
reactprops.disabled = <any>{};
reactprops.label = <any>{};
reactprops.max = <any>{};
reactprops.min = <any>{};
reactprops.onChange = <any>onlyAureliaBound;
reactprops.onChanged = <any>onlyAureliaBound;
reactprops.showValue = <any>{};
reactprops.step = <any>{};
reactprops.value = <any>{};
reactprops.vertical = <any>{};
reactprops.valueFormat = <any>onlyAureliaBound;
reactprops.vertical  = <any>{};

@inject(Element, TaskQueue)
@customElement('du-slider')
export class DuSlider extends AuReactWrapper  implements ISliderProps {

  constructor(element, protected tq: TaskQueue) 
  {
    super(element, tq);
    
  }

  hidden: boolean = false;
  className: string;

  attached() {
    this.renderReact(Slider, this.createState(reactprops));
  }
}

addPropertiesState(DuSlider, reactprops);