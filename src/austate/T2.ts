import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';

export class T2 extends React.Component {

  constructor(props: any) {
    

    super(props);
    console.log("T2:ctor");
    // props is a (object) sent to React.createElement(T2,a,null)
    //console.log(props);


    // this.state == "undefined"
    //console.log(this.state);
    
    this.state = {...props};

    //this.state is now a
    //console.log(this.state);

}
  render() {
    console.log("T2:render");
    console.log(this);
    return React.createElement(TextField, this.state, null);
  }

  
}