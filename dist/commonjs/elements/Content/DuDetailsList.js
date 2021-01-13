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
exports.DuDetailsList = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var DetailsList_1 = require("@fluentui/react/lib/DetailsList");
var au_react_wrapper_1 = require("@dunite/au-react-wrapper");
var reactprops = {};
reactprops.checkButtonAriaLabel = {};
reactprops.checkboxCellClassName = {};
reactprops.checkboxVisibility = {};
reactprops.className = {};
reactprops.columnReorderOptions = {};
reactprops.columns = {};
reactprops.compact = {};
reactprops.constrainMode = {};
reactprops.disableSelectionZone = {};
reactprops.groupProps = {};
reactprops.groups = {};
reactprops.indentWidth = {};
reactprops.initialFocusedIndex = {};
reactprops.isHeaderVisible = {};
reactprops.layoutMode = {};
reactprops.listProps = {};
reactprops.minimumPixelsForDrag = {};
reactprops.onActiveItemChanged = au_react_wrapper_1.onlyAureliaBound;
reactprops.onColumnHeaderClick = au_react_wrapper_1.onlyAureliaBound;
reactprops.onColumnHeaderContextMenu = au_react_wrapper_1.onlyAureliaBound;
reactprops.onColumnResize = au_react_wrapper_1.onlyAureliaBound;
reactprops.onDidUpdate = au_react_wrapper_1.onlyAureliaBound;
reactprops.onItemContextMenu = au_react_wrapper_1.onlyAureliaBound;
reactprops.onItemInvoked = au_react_wrapper_1.onlyAureliaBound;
reactprops.selection = {};
reactprops.selectionMode = {};
reactprops.selectionPreservedOnEmptyClick = {};
reactprops.items = {};
var DuDetailsList = (function (_super) {
    __extends(DuDetailsList, _super);
    function DuDetailsList(element, tq) {
        var _this = _super.call(this, element, tq) || this;
        _this.tq = tq;
        return _this;
    }
    DuDetailsList.prototype.scrollToIndex = function (index) {
        this.reactComponent.forceUpdate(index);
    };
    DuDetailsList.prototype.forceUpdate = function () {
        this.reactComponent.forceUpdate();
    };
    DuDetailsList.prototype.focusIndex = function (index, forceIntoFirstElement, measureItem, scrollToMode) {
        this.reactComponent.focusIndex(index, forceIntoFirstElement, measureItem, scrollToMode);
    };
    DuDetailsList.prototype.attached = function () {
        this.renderReact(DetailsList_1.DetailsList, this.createState(reactprops));
    };
    DuDetailsList.prototype.getStartItemIndexInView = function () {
        return this.reactComponent.getStartItemIndexInView();
    };
    DuDetailsList = __decorate([
        aurelia_framework_1.inject(Element, aurelia_framework_1.TaskQueue),
        aurelia_framework_1.customElement('du-details-list'),
        __metadata("design:paramtypes", [Object, aurelia_framework_1.TaskQueue])
    ], DuDetailsList);
    return DuDetailsList;
}(au_react_wrapper_1.AuReactWrapper));
exports.DuDetailsList = DuDetailsList;
au_react_wrapper_1.addPropertiesState(DuDetailsList, reactprops);

//# sourceMappingURL=DuDetailsList.js.map
