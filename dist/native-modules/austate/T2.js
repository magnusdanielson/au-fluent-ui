var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
var T2 = (function (_super) {
    __extends(T2, _super);
    function T2(props) {
        var _this = _super.call(this, props) || this;
        console.log("T2:ctor");
        _this.state = __assign({}, props);
        return _this;
    }
    T2.prototype.render = function () {
        console.log("T2:render");
        console.log(this);
        return React.createElement(TextField, this.state, null);
    };
    return T2;
}(React.Component));
export { T2 };

//# sourceMappingURL=T2.js.map
