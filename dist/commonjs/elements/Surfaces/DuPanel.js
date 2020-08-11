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
exports.DuPanel = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var Panel_1 = require("@fluentui/react/lib/Panel");
var au_react_wrapper_1 = require("@dunite/au-react-wrapper");
var reactprops = {};
reactprops.isOpen = {};
reactprops.onDismiss = {};
reactprops.headerText = {};
reactprops.type = {};
var DuPanel = (function (_super) {
    __extends(DuPanel, _super);
    function DuPanel(element) {
        var _this = _super.call(this, element) || this;
        _this.hiddenIsHidden = false;
        _this.hiddenName = 'isOpen';
        return _this;
    }
    DuPanel.prototype.attached = function () {
        this.renderReact(Panel_1.Panel, this.createState(reactprops));
    };
    DuPanel = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-panel'),
        __metadata("design:paramtypes", [Object])
    ], DuPanel);
    return DuPanel;
}(au_react_wrapper_1.AuReactStateWrapper));
exports.DuPanel = DuPanel;
au_react_wrapper_1.addPropertiesState(DuPanel, reactprops);

//# sourceMappingURL=DuPanel.js.map
