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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuSearchBox = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var SearchBox_1 = require("@fluentui/react/lib/SearchBox");
var au_react_wrapper_1 = require("@dunite/au-react-wrapper");
var reactprops = {};
reactprops.disabled = {};
reactprops.className = {};
reactprops.required = {};
reactprops.placeholder = {};
reactprops.onSearch = au_react_wrapper_1.onlyAureliaBound;
reactprops.onFocus = au_react_wrapper_1.onlyAureliaBound;
reactprops.onBlur = au_react_wrapper_1.onlyAureliaBound;
reactprops.onChange = function (that, _event, newValue) {
    that['value'] = newValue;
};
reactprops.disableAnimation = {};
reactprops.onClear = au_react_wrapper_1.onlyAureliaBound;
reactprops.onEscape = au_react_wrapper_1.onlyAureliaBound;
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
        _this.reactClass = SearchBox_1.SearchBox;
        _this.hidden = false;
        return _this;
    }
    DuSearchBox = __decorate([
        aurelia_framework_1.inject(Element, aurelia_framework_1.TaskQueue),
        aurelia_framework_1.customElement('du-search-box')
    ], DuSearchBox);
    return DuSearchBox;
}(au_react_wrapper_1.AuReactWrapperNoChildren));
exports.DuSearchBox = DuSearchBox;
au_react_wrapper_1.addPropertiesState(DuSearchBox, reactprops);

//# sourceMappingURL=DuSearchBox.js.map
