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
exports.DuActionButton = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var Button_1 = require("@fluentui/react/lib/Button");
var au_react_wrapper_1 = require("@dunite/au-react-wrapper");
var reactprops = {};
reactprops.allowDisabledFocus = {};
reactprops.ariaDescription = {};
reactprops.ariaHidden = {};
reactprops.ariaLabel = {};
reactprops.keytipProps = {};
reactprops.menuIconProps = {};
reactprops.menuTriggerKeyCode = {};
reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
reactprops.onMenuClick = au_react_wrapper_1.onlyAureliaBound;
reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
reactprops.persistMenu = {};
reactprops.primaryDisabled = {};
reactprops.splitButtonAriaLabel = {};
reactprops.toggle = {};
reactprops.href = {};
reactprops.primary = {};
reactprops.uniqueId = {};
reactprops.disabled = {};
reactprops.checked = {};
reactprops.className = {};
reactprops.text = {};
reactprops.iconProps = {};
reactprops.menuProps = {};
reactprops.split = {};
reactprops.onClick = au_react_wrapper_1.onlyAureliaBound;
reactprops.secondaryText = {};
var DuActionButton = (function (_super) {
    __extends(DuActionButton, _super);
    function DuActionButton(element) {
        var _this = _super.call(this, element) || this;
        _this.hidden = false;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuActionButton.prototype.attached = function () {
        this.renderReact(Button_1.ActionButton, this.createState(reactprops));
    };
    DuActionButton = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-action-button'),
        __metadata("design:paramtypes", [Object])
    ], DuActionButton);
    return DuActionButton;
}(au_react_wrapper_1.AuReactStateWrapper));
exports.DuActionButton = DuActionButton;
au_react_wrapper_1.addPropertiesState(DuActionButton, reactprops);

//# sourceMappingURL=DuActionButton.js.map
