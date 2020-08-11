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
exports.DuGroupedList = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var GroupedList_1 = require("@fluentui/react/lib/GroupedList");
var au_react_wrapper_1 = require("@dunite/au-react-wrapper");
var reactprops = {};
reactprops.items = {};
reactprops.onRenderCell = au_react_wrapper_1.onlyAureliaBound;
reactprops.className = {};
reactprops.compact = {};
reactprops.getGroupHeight = {};
reactprops.groupProps = {};
reactprops.groups = {};
reactprops.listProps = {};
reactprops.onGroupExpandStateChanged = au_react_wrapper_1.onlyAureliaBound;
reactprops.onShouldVirtualize = au_react_wrapper_1.onlyAureliaBound;
reactprops.selection = {};
reactprops.selectionMode = {};
reactprops.usePageCache = {};
reactprops.key = {};
var DuGroupedList = (function (_super) {
    __extends(DuGroupedList, _super);
    function DuGroupedList(element) {
        var _this = _super.call(this, element) || this;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuGroupedList.prototype.toggleCollapseAll = function (allCollapsed) {
        return this.reactComponent.toggleCollapseAll(allCollapsed);
    };
    DuGroupedList.prototype.forceUpdate = function () {
        this.reactComponent.forceUpdate();
    };
    DuGroupedList.prototype.attached = function () {
        this.renderReact(GroupedList_1.GroupedList, this.createState(reactprops));
    };
    DuGroupedList = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-grouped-list'),
        __metadata("design:paramtypes", [Object])
    ], DuGroupedList);
    return DuGroupedList;
}(au_react_wrapper_1.AuReactStateWrapper));
exports.DuGroupedList = DuGroupedList;
au_react_wrapper_1.addPropertiesState(DuGroupedList, reactprops);

//# sourceMappingURL=DuGroupedList.js.map
