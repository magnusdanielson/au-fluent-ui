"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuPivot = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var Pivot_1 = require("@fluentui/react/lib/Pivot");
var au_react_wrapper_1 = require("@dunite/au-react-wrapper");
var React = require("react");
var ReactDom = require("react-dom");
var reactprops = {};
reactprops.className = {};
reactprops.defaultSelectedIndex = {};
reactprops.defaultSelectedKey = {};
reactprops.getTabId = au_react_wrapper_1.onlyAureliaBound;
reactprops.headersOnly = {};
reactprops.linkFormat = {};
reactprops.linkSize = {};
reactprops.onLinkClick = au_react_wrapper_1.onlyAureliaBound;
reactprops.selectedKey = {};
var DuPivot = (function (_super) {
    __extends(DuPivot, _super);
    function DuPivot(element) {
        var _this = _super.call(this, element) || this;
        _this.pivotChildren = [];
        return _this;
    }
    DuPivot.prototype.render = function () {
        this.renderReact(reactprops);
    };
    DuPivot.prototype.renderReact = function (reactprops) {
        this.container = this.element.querySelector('.au-react-root');
        if (this.container == null) {
            this.container = document.createElement('span');
            this.container.setAttribute('class', 'au-react-root');
            this.element.appendChild(this.container);
        }
        var a = this.createState(reactprops);
        for (var i = 0; i < this.items.length; i++) {
            if (typeof this.items[i].key == 'undefined') {
                this.items[i].key = 'k' + i;
            }
            var t = React.createElement(Pivot_1.PivotItem, this.items[i], React.createElement('div', { className: 'du' + this.items[i].itemKey }));
            this.pivotChildren.push(t);
        }
        ;
        var reactElement = React.createElement(Pivot_1.Pivot, a, this.pivotChildren);
        this.reactComponent = ReactDom.render(reactElement, this.container);
    };
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Array)
    ], DuPivot.prototype, "items", void 0);
    DuPivot = __decorate([
        aurelia_framework_1.noView(),
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-pivot'),
        __metadata("design:paramtypes", [Object])
    ], DuPivot);
    return DuPivot;
}(au_react_wrapper_1.AuReactNoStateWrapper));
exports.DuPivot = DuPivot;
au_react_wrapper_1.addPropertiesNoState(DuPivot, reactprops);

//# sourceMappingURL=DuPivot.js.map
