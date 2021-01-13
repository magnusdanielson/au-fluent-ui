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
import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { IconButton } from '@fluentui/react/lib/Button';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.allowDisabledFocus = {};
reactprops.ariaDescription = {};
reactprops.ariaHidden = {};
reactprops.ariaLabel = {};
reactprops.keytipProps = {};
reactprops.menuIconProps = {};
reactprops.menuTriggerKeyCode = {};
reactprops.onAfterMenuDismiss = onlyAureliaBound;
reactprops.onMenuClick = onlyAureliaBound;
reactprops.onAfterMenuDismiss = onlyAureliaBound;
reactprops.onAfterMenuDismiss = onlyAureliaBound;
reactprops.onAfterMenuDismiss = onlyAureliaBound;
reactprops.onAfterMenuDismiss = onlyAureliaBound;
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
reactprops.onClick = onlyAureliaBound;
reactprops.secondaryText = {};
var DuIconButton = (function (_super) {
    __extends(DuIconButton, _super);
    function DuIconButton(element, tq) {
        var _this = _super.call(this, element, tq) || this;
        _this.tq = tq;
        _this.hidden = false;
        return _this;
    }
    DuIconButton.prototype.attached = function () {
        this.renderReact(IconButton, this.createState(reactprops));
    };
    DuIconButton = __decorate([
        inject(Element, TaskQueue),
        customElement('du-icon-button'),
        __metadata("design:paramtypes", [Object, TaskQueue])
    ], DuIconButton);
    return DuIconButton;
}(AuReactWrapper));
export { DuIconButton };
addPropertiesState(DuIconButton, reactprops);

//# sourceMappingURL=DuIconButton.js.map
