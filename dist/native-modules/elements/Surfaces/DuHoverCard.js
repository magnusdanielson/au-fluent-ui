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
import { HoverCard } from '@fluentui/react/lib/HoverCard';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.cardDismissDelay = {};
reactprops.hidden = {};
reactprops.className = {};
reactprops.cardOpenDelay = {};
reactprops.expandedCardOpenDelay = {};
reactprops.expandingCardProps = {};
reactprops.instantOpenOnClick = {};
reactprops.onCardExpand = onlyAureliaBound;
reactprops.onCardHide = onlyAureliaBound;
reactprops.onCardVisible = onlyAureliaBound;
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
    function DuHoverCard(element, tq) {
        var _this = _super.call(this, element, tq) || this;
        _this.tq = tq;
        return _this;
    }
    DuHoverCard.prototype.attached = function () {
        this.renderReact(HoverCard, this.createState(reactprops));
    };
    DuHoverCard = __decorate([
        inject(Element, TaskQueue),
        customElement('du-hover-card'),
        __metadata("design:paramtypes", [Object, TaskQueue])
    ], DuHoverCard);
    return DuHoverCard;
}(AuReactWrapper));
export { DuHoverCard };
addPropertiesState(DuHoverCard, reactprops);

//# sourceMappingURL=DuHoverCard.js.map
