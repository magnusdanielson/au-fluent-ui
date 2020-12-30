import * as React from 'react';

export class ReactSimpleWrapper extends React.Component {
    
    reactClass: any;
    aureliaHost: any;

    constructor(props: any) {
        super(props);
        this.state = {...props};
        this.reactClass = props.reactClass;
        this.aureliaHost = props.aureliaHost;
    }

    componentWillUnmount() {
        if (typeof this.aureliaHost.reactComponentWillUnmount === 'function') {
            this.aureliaHost.reactComponentWillUnmount();
        }
    }

    componentDidMount() {
        if (typeof this.aureliaHost.reactComponentDidMount === 'function') {
            this.aureliaHost.reactComponentDidMount();
        }
    }
    
    render() {
        return React.createElement(
            this.reactClass,
            this.state
        );
    }
}
