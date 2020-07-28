export class otherstuff
{
    public myvalue:string;
    public onchange(event: any, newValue?: string)
    {
        console.log(event)
        console.log(newValue);
        this.myvalue = newValue;

    }

    public onGetErrorMessage =(value: string) => {
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