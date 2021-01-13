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
import { ComboBox } from '@fluentui/react/lib/ComboBox';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.buttonIconProps = {};
reactprops.caretDownButtonStyles = {};
reactprops.comboBoxOptionStyles = {};
reactprops.dropdownMaxWidth = {};
reactprops.errorMessage = {};
reactprops.keytipProps = {};
reactprops.onItemClick = onlyAureliaBound;
reactprops.isButtonAriaHidden = {};
reactprops.onPendingValueChanged = onlyAureliaBound;
reactprops.onScrollToItem = onlyAureliaBound;
reactprops.disabled = {};
reactprops.className = {};
reactprops.label = {};
reactprops.options = {};
reactprops.onChange = onlyAureliaBound;
reactprops.defaultSelectedKey = {};
reactprops.selectedKey = {};
reactprops.selectedKeys = {};
reactprops.onMenuOpen = onlyAureliaBound;
reactprops.onMenuDismissed = onlyAureliaBound;
reactprops.onResolveOptions = onlyAureliaBound;
reactprops.allowFreeform = {};
reactprops.autoComplete = {};
reactprops.text = {};
reactprops.scrollSelectedToTop = {};
reactprops.dropdownWidth = {};
reactprops.useComboBoxAsMenuWidth = {};
reactprops.multiSelect = {};
reactprops.onFocus = onlyAureliaBound;
reactprops.onBlur = onlyAureliaBound;
var DuComboBox = (function (_super) {
    __extends(DuComboBox, _super);
    function DuComboBox(element, tq) {
        var _this = _super.call(this, element, tq) || this;
        _this.tq = tq;
        _this.hidden = false;
        return _this;
    }
    DuComboBox.prototype.attached = function () {
        this.renderReact(ComboBox, this.createState(reactprops));
    };
    DuComboBox = __decorate([
        inject(Element, TaskQueue),
        customElement('du-combo-box'),
        __metadata("design:paramtypes", [Object, TaskQueue])
    ], DuComboBox);
    return DuComboBox;
}(AuReactWrapper));
export { DuComboBox };
addPropertiesState(DuComboBox, reactprops);

//# sourceMappingURL=DuComboBox.js.map
