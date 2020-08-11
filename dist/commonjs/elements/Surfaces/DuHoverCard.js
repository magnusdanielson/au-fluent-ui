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
exports.DuHoverCard = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var HoverCard_1 = require("@fluentui/react/lib/HoverCard");
var au_react_wrapper_1 = require("@dunite/au-react-wrapper");
var reactprops = {};
reactprops.cardDismissDelay = {};
reactprops.hidden = {};
reactprops.className = {};
reactprops.cardOpenDelay = {};
reactprops.expandedCardOpenDelay = {};
reactprops.expandingCardProps = {};
reactprops.instantOpenOnClick = {};
reactprops.onCardExpand = au_react_wrapper_1.onlyAureliaBound;
reactprops.onCardHide = au_react_wrapper_1.onlyAureliaBound;
reactprops.onCardVisible = au_react_wrapper_1.onlyAureliaBound;
reactprops.openHotKey = {};
reactprops.plainCardProps = {};
reactprops.setAriaDescribedBy = {};
reactprops.setInitialFocus = {};
reactprops.sticky = {};
reactprops.target = {};
reactprops.trapFocus = {};
reactprops.type = {};
var DuHoverCard = (function (_super) {
    __extends(DuHoverCard, _super);
    function DuHoverCard(element) {
        var _this = _super.call(this, element) || this;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuHoverCard.prototype.attached = function () {
        this.renderReact(HoverCard_1.HoverCard, this.createState(reactprops));
    };
    DuHoverCard = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-hover-card'),
        __metadata("design:paramtypes", [Object])
    ], DuHoverCard);
    return DuHoverCard;
}(au_react_wrapper_1.AuReactStateWrapper));
exports.DuHoverCard = DuHoverCard;
au_react_wrapper_1.addPropertiesState(DuHoverCard, reactprops);

//# sourceMappingURL=DuHoverCard.js.map
