import * as React from 'react';

export class ReactSimpleWrapper extends React.Component {
    state: any;
    reactClass: any;
    innerReactComponent:any;

    constructor(props: any) {
        super(props);
        this.state = {...props};
        this.reactClass = props.reactClass;
    }

    render() {
        console.log("ReactStateWrapper: render");

        this.innerReactComponent = React.createElement(
            this.reactClass,
            this.state
        );
        return this.innerReactComponent;
    }
}
