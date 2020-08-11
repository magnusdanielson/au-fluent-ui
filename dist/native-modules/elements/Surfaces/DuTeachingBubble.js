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
import { customElement, inject, bindable } from 'aurelia-framework';
import { TeachingBubble } from '@fluentui/react/lib/TeachingBubble';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.calloutProps = {};
reactprops.hasCloseIcon = {};
reactprops.hasCondensedHeadline = {};
reactprops.hasSmallHeadline = {};
reactprops.headline = {};
reactprops.isWide = {};
reactprops.onDismiss = onlyAureliaBound;
reactprops.primaryButtonProps = {};
reactprops.secondaryButtonProps = {};
reactprops.targetElement = {};
reactprops.illustrationImage = {};
var DuTeachingBubble = (function (_super) {
    __extends(DuTeachingBubble, _super);
    function DuTeachingBubble(element) {
        var _this = _super.call(this, element) || this;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuTeachingBubble.prototype.attached = function () {
        this.renderReact(TeachingBubble, this.createState(reactprops));
    };
    __decorate([
        bindable(),
        __metadata("design:type", Boolean)
    ], DuTeachingBubble.prototype, "hidden", void 0);
    DuTeachingBubble = __decorate([
        inject(Element),
        customElement('du-teaching-bubble'),
        __metadata("design:paramtypes", [Object])
    ], DuTeachingBubble);
    return DuTeachingBubble;
}(AuReactStateWrapper));
export { DuTeachingBubble };
addPropertiesState(DuTeachingBubble, reactprops);

//# sourceMappingURL=DuTeachingBubble.js.map
