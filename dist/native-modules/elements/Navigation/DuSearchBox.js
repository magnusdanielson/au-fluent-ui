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
import { TaskQueue, customElement, inject } from 'aurelia-framework';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { AuReactWrapperNoChildren, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.disabled = {};
reactprops.className = {};
reactprops.required = {};
reactprops.placeholder = {};
reactprops.onSearch = onlyAureliaBound;
reactprops.onFocus = onlyAureliaBound;
reactprops.onBlur = onlyAureliaBound;
reactprops.onChange = function (that, _event, newValue) {
    that['value'] = newValue;
};
reactprops.disableAnimation = {};
reactprops.onClear = onlyAureliaBound;
reactprops.onEscape = onlyAureliaBound;
reactprops.value = {};
reactprops.defaultValue = {};
reactprops.clearButtonProps = {};
reactprops.underlined = {};
reactprops.iconProps = {};
var DuSearchBox = (function (_super) {
    __extends(DuSearchBox, _super);
    function DuSearchBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.orignalProp = reactprops;
        _this.reactClass = SearchBox;
        _this.hidden = false;
        return _this;
    }
    DuSearchBox = __decorate([
        inject(Element, TaskQueue),
        customElement('du-search-box')
    ], DuSearchBox);
    return DuSearchBox;
}(AuReactWrapperNoChildren));
export { DuSearchBox };
addPropertiesState(DuSearchBox, reactprops);

//# sourceMappingURL=DuSearchBox.js.map
