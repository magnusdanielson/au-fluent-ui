import * as React from 'react';
import { mystate } from './mystate';

export class mystatenochild extends mystate {
    render() {
        if (this.aureliaHost.isHidden()) {
            return null;
        }

        let com = React.createElement(
            this.reactClass,
            this.state);
        return com;
    }
}
