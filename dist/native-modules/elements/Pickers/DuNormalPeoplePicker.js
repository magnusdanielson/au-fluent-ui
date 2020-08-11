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
import { customElement, inject } from 'aurelia-framework';
import { NormalPeoplePicker } from '@fluentui/react/lib/Pickers';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.items = {};
reactprops.onResolveSuggestions = onlyAureliaBound;
reactprops.resolveDelay = {};
reactprops.onEmptyInputFocus = onlyAureliaBound;
reactprops.defaultSelectedItems = {};
reactprops.onChange = function (_this, items) { _this['selectedItems'] = items; };
reactprops.onFocus = onlyAureliaBound;
reactprops.onBlur = onlyAureliaBound;
reactprops.getTextFromItem = onlyAureliaBound;
reactprops.onGetMoreResults = onlyAureliaBound;
reactprops.className = {};
reactprops.pickerSuggestionsProps = {};
reactprops.pickerCalloutProps = {};
reactprops.inputProps = {};
reactprops.onRemoveSuggestion = onlyAureliaBound;
reactprops.onValidateInput = onlyAureliaBound;
reactprops.searchingText = onlyAureliaBound;
reactprops.disabled = {};
reactprops.itemLimit = {};
reactprops.createGenericItem = onlyAureliaBound;
reactprops.removeButtonAriaLabel = {};
reactprops.onItemSelected = onlyAureliaBound;
reactprops.selectedItems = {};
reactprops.onDismiss = onlyAureliaBound;
reactprops.enableSelectedSuggestionAlert = {};
reactprops.selectedItems = {};
var DuNormalPeoplePicker = (function (_super) {
    __extends(DuNormalPeoplePicker, _super);
    function DuNormalPeoplePicker(element) {
        var _this_1 = _super.call(this, element) || this;
        _this_1.hidden = false;
        _this_1.hiddenIsHidden = true;
        _this_1.hiddenName = 'hidden';
        return _this_1;
    }
    DuNormalPeoplePicker.prototype.attached = function () {
        this.renderReact(NormalPeoplePicker, this.createState(reactprops));
    };
    DuNormalPeoplePicker = __decorate([
        inject(Element),
        customElement('du-normal-people-picker'),
        __metadata("design:paramtypes", [Object])
    ], DuNormalPeoplePicker);
    return DuNormalPeoplePicker;
}(AuReactStateWrapper));
export { DuNormalPeoplePicker };
addPropertiesState(DuNormalPeoplePicker, reactprops);

//# sourceMappingURL=DuNormalPeoplePicker.js.map
