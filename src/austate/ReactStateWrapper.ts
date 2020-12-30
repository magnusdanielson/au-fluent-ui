import * as React from 'react';
import { ReactSimpleWrapper } from './ReactSimpleWrapper';

export class ReactStateWrapper extends ReactSimpleWrapper {
    inneridReact: string;

    constructor(props: any) {
        super(props);
        this.state = {...props};
        this.inneridReact = 'du' + Math.round( Math.random() * 10000000000000000);
    }

    render() {
        console.log("ReactStateWrapper: render");
        if (this.aureliaHost.isHidden()) {
            return null;
        }

        var innerReactComponent = React.createElement(
            this.reactClass,
            this.state,
            React.createElement('span', {
                id: this.inneridReact,
                ref: (newParent: HTMLElement | null) => {
                    if (newParent == null) 
                    {
                      newParent = document.getElementById(this.inneridReact.toString());
                      if (newParent == null)
                      {
                        return;
                      }
                    }

                    if (this.aureliaHost.isHidden()) {
                        return;
                    }

                    let auelement = document.getElementById(
                        this.aureliaHost.inneridAurelia
                    );

                    if (auelement == null) {
                        return;
                    }

                    while (auelement.childNodes.length > 0) {
                        newParent.appendChild(auelement.childNodes[0]);
                    }
                }
            })
        );
        return innerReactComponent;
    }
}
