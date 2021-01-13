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
import { Panel } from '@fluentui/react/lib/Panel';
import { onlyAureliaBound, AuReactWrapper, addPropertiesState } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.isOpen = {};
reactprops.onDismiss = onlyAureliaBound;
reactprops.onDismissed = onlyAureliaBound;
reactprops.onOpen = onlyAureliaBound;
reactprops.onOpened = onlyAureliaBound;
reactprops.onOuterClick = onlyAureliaBound;
reactprops.headerText = {};
reactprops.type = {};
reactprops.isBlocking = {};
reactprops.hasCloseButton = {};
reactprops.isHiddenOnDismiss = {};
reactprops.customWidth = {};
reactprops.open = onlyAureliaBound;
reactprops.dismiss = onlyAureliaBound;
var DuPanel = (function (_super) {
    __extends(DuPanel, _super);
    function DuPanel(element, tq) {
        var _this = _super.call(this, element, tq) || this;
        _this.tq = tq;
        _this.hiddenIsHidden = false;
        _this.hiddenName = 'isOpen';
        return _this;
    }
    DuPanel.prototype.attached = function () {
        this.renderReact(Panel, this.createState(reactprops));
    };
    DuPanel = __decorate([
        inject(Element, TaskQueue),
        customElement('du-panel'),
        __metadata("design:paramtypes", [Object, TaskQueue])
    ], DuPanel);
    return DuPanel;
}(AuReactWrapper));
export { DuPanel };
addPropertiesState(DuPanel, reactprops);

//# sourceMappingURL=DuPanel.js.map
