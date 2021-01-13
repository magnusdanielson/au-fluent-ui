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
exports.DuCompactPeoplePicker = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var Pickers_1 = require("@fluentui/react/lib/Pickers");
var au_react_wrapper_1 = require("@dunite/au-react-wrapper");
var reactprops = {};
reactprops.items = {};
reactprops.onResolveSuggestions = au_react_wrapper_1.onlyAureliaBound;
reactprops.resolveDelay = {};
reactprops.onEmptyInputFocus = au_react_wrapper_1.onlyAureliaBound;
reactprops.defaultSelectedItems = {};
reactprops.onChange = (function (_this, items) { _this['selectedItems'] = items; });
reactprops.onFocus = au_react_wrapper_1.onlyAureliaBound;
reactprops.onBlur = au_react_wrapper_1.onlyAureliaBound;
reactprops.getTextFromItem = au_react_wrapper_1.onlyAureliaBound;
reactprops.onGetMoreResults = au_react_wrapper_1.onlyAureliaBound;
reactprops.className = {};
reactprops.pickerSuggestionsProps = {};
reactprops.pickerCalloutProps = {};
reactprops.inputProps = {};
reactprops.onRemoveSuggestion = au_react_wrapper_1.onlyAureliaBound;
reactprops.onValidateInput = au_react_wrapper_1.onlyAureliaBound;
reactprops.searchingText = au_react_wrapper_1.onlyAureliaBound;
reactprops.disabled = {};
reactprops.itemLimit = {};
reactprops.createGenericItem = au_react_wrapper_1.onlyAureliaBound;
reactprops.removeButtonAriaLabel = {};
reactprops.onItemSelected = au_react_wrapper_1.onlyAureliaBound;
reactprops.selectedItems = {};
reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
reactprops.enableSelectedSuggestionAlert = {};
var DuCompactPeoplePicker = (function (_super) {
    __extends(DuCompactPeoplePicker, _super);
    function DuCompactPeoplePicker(element, tq) {
        var _this_1 = _super.call(this, element, tq) || this;
        _this_1.tq = tq;
        _this_1.hidden = false;
        return _this_1;
    }
    DuCompactPeoplePicker.prototype.attached = function () {
        this.renderReact(Pickers_1.CompactPeoplePicker, this.createState(reactprops));
    };
    DuCompactPeoplePicker = __decorate([
        aurelia_framework_1.inject(Element, aurelia_framework_1.TaskQueue),
        aurelia_framework_1.customElement('du-compact-people-picker'),
        __metadata("design:paramtypes", [Object, aurelia_framework_1.TaskQueue])
    ], DuCompactPeoplePicker);
    return DuCompactPeoplePicker;
}(au_react_wrapper_1.AuReactWrapper));
exports.DuCompactPeoplePicker = DuCompactPeoplePicker;
au_react_wrapper_1.addPropertiesState(DuCompactPeoplePicker, reactprops);

//# sourceMappingURL=DuCompactPeoplePicker.js.map
