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
import { Nav } from '@fluentui/react/lib/Nav';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.groups = {};
reactprops.initialSelectedKey = {};
reactprops.isOnTop = {};
reactprops.onLinkClick = onlyAureliaBound;
reactprops.onLinkExpandClick = onlyAureliaBound;
reactprops.selectedKey = {};
var DuNav = (function (_super) {
    __extends(DuNav, _super);
    function DuNav(element, tq) {
        var _this = _super.call(this, element, tq) || this;
        _this.tq = tq;
        _this.hidden = false;
        return _this;
    }
    DuNav.prototype.attached = function () {
        this.renderReact(Nav, this.createState(reactprops));
    };
    DuNav = __decorate([
        inject(Element, TaskQueue),
        customElement('du-nav'),
        __metadata("design:paramtypes", [Object, TaskQueue])
    ], DuNav);
    return DuNav;
}(AuReactWrapper));
export { DuNav };
addPropertiesState(DuNav, reactprops);

//# sourceMappingURL=DuNav.js.map
