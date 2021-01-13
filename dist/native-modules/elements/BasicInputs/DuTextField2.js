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
import { TaskQueue, noView, customElement, inject } from 'aurelia-framework';
import { TextField } from '@fluentui/react/lib/TextField';
import { addPropertiesState, AuReactWrapperNoChildren, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.ariaLabel = {};
reactprops.autoAdjustHeight = {};
reactprops.autoComplete = {};
reactprops.borderless = {};
reactprops.className = {};
reactprops.defaultValue = {};
reactprops.deferredValidationTime = {};
reactprops.description = {};
reactprops.disabled = {};
reactprops.errorMessage = {};
reactprops.iconProps = {};
reactprops.inputClassName = {};
reactprops.label = {};
reactprops.mask = {};
reactprops.maskChar = {};
reactprops.maskFormat = {};
reactprops.multiline = {};
reactprops.onChange = (function (that, event, newValue) {
    that.ignoreReactUpdate = true;
    that.value = newValue;
    that.reactComponent.setState({ "value": newValue || '' });
});
reactprops.onNotifyValidationResult = onlyAureliaBound;
reactprops.onGetErrorMessage = onlyAureliaBound;
reactprops.prefix = {};
reactprops.suffix = {};
reactprops.readOnly = {};
reactprops.resizable = {};
reactprops.underlined = {};
reactprops.validateOnFocusIn = {};
reactprops.validateOnFocusOut = {};
reactprops.validateOnLoad = {};
reactprops.value = {};
reactprops.required = {};
reactprops.placeholder = {};
var DuTextField2 = (function (_super) {
    __extends(DuTextField2, _super);
    function DuTextField2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.orignalProp = reactprops;
        _this.reactClass = TextField;
        return _this;
    }
    DuTextField2 = __decorate([
        customElement('du-text-field2'),
        noView(),
        inject(Element, TaskQueue)
    ], DuTextField2);
    return DuTextField2;
}(AuReactWrapperNoChildren));
export { DuTextField2 };
addPropertiesState(DuTextField2, reactprops);

//# sourceMappingURL=DuTextField2.js.map
