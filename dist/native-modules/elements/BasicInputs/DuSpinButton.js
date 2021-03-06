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
import { SpinButton } from '@fluentui/react/lib/SpinButton';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
export var Position;
(function (Position) {
    Position[Position["top"] = 0] = "top";
    Position[Position["bottom"] = 1] = "bottom";
    Position[Position["start"] = 2] = "start";
    Position[Position["end"] = 3] = "end";
})(Position || (Position = {}));
var reactprops = {};
reactprops.focus = onlyAureliaBound;
reactprops.disabled = {};
reactprops.className = {};
reactprops.label = {};
reactprops.value = {};
reactprops.min = {};
reactprops.defaultValue = {};
reactprops.max = {};
reactprops.title = {};
reactprops.step = {};
reactprops.iconProps = {};
reactprops.labelPosition = {};
reactprops.onValidate = onlyAureliaBound;
reactprops.ariaLabel = {};
reactprops.ariaPositionInSet = {};
reactprops.ariaSetSize = {};
reactprops.ariaValueNow = {};
reactprops.ariaValueText = {};
reactprops.decrementButtonAriaLabel = {};
reactprops.decrementButtonIcon = {};
reactprops.downArrowButtonStyles = {};
reactprops.iconProps = {};
reactprops.incrementButtonAriaLabel = {};
reactprops.incrementButtonIcon = {};
reactprops.keytipProps = {};
reactprops.onBlur = onlyAureliaBound;
reactprops.onFocus = onlyAureliaBound;
reactprops.onIncrement = function (_this, value) {
    var _value = parseFloat(_this['value']);
    if (_value + _this['step'] <= _this['max']) {
        _this['value'] = (_value + _this['step']).toFixed(typeof _this['precision'] == 'undefined' ? 0 : _this['precision']);
    }
};
reactprops.onDecrement = function (_this, value) {
    var _value = parseFloat(_this['value']);
    if (_value - _this['step'] >= _this['min']) {
        _this['value'] = (_value - _this['step']).toFixed(typeof _this['precision'] == 'undefined' ? 0 : _this['precision']);
    }
};
reactprops.precision = {};
var DuSpinButton = (function (_super) {
    __extends(DuSpinButton, _super);
    function DuSpinButton(element, tq) {
        var _this_1 = _super.call(this, element, tq) || this;
        _this_1.tq = tq;
        _this_1.hidden = false;
        return _this_1;
    }
    DuSpinButton.prototype.attached = function () {
        this.renderReact(SpinButton, this.createState(reactprops));
    };
    DuSpinButton = __decorate([
        inject(Element, TaskQueue),
        customElement('du-spin-button'),
        __metadata("design:paramtypes", [Object, TaskQueue])
    ], DuSpinButton);
    return DuSpinButton;
}(AuReactWrapper));
export { DuSpinButton };
addPropertiesState(DuSpinButton, reactprops);

//# sourceMappingURL=DuSpinButton.js.map
