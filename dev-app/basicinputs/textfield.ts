import { ITextFieldProps } from "@fluentui/react/lib/TextField"
import { DuTextField } from "elements/BasicInputs/DuTextField";

export class textfield {

  private controlledText: DuTextField;
  public myvalue: string;
  public onchange(event: any, newValue?: string) {
    console.log(this)
    console.log(newValue);

    // line below is necessery to update the viewmodel
    this.controlledText.ignoreReactUpdate = true;
    this.myvalue = newValue;

    // line below is necessery to update the React viewmodel
    this.controlledText.reactComponent.setState({ "value": newValue || '' });




  }

  public onGetErrorMessage = (value: string) => {
    console.log('onGetErrorMessage');
    console.log(value);
    return value.length < 3 ? '' : `Input value length must be less than 3. Actual length is ${value.length}.`;
  };


  private onGetErrorMessagePromise = (value: string): Promise<string> => {
    return new Promise(resolve => {
      // resolve the promise after 3 second.
      setTimeout(() => resolve(this.onGetErrorMessage(value)), 5000);
    });
  };

}