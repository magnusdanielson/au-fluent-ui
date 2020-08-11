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
import { Coachmark } from '@fluentui/react/lib/Coachmark';
import { customElement, inject, bindable } from 'aurelia-framework';
import { TeachingBubbleContent } from '@fluentui/react/lib/TeachingBubble';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { AuReactStateWrapperNoChildren, addPropertiesState, onlyAureliaBound, ReactStateWrapper, ReactStateWrapperNoChildren } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.beaconColorOne = {};
reactprops.beaconColorTwo = {};
reactprops.className = {};
reactprops.color = {};
reactprops.delayBeforeCoachmarkAnimation = {};
reactprops.delayBeforeMouseOpen = {};
reactprops.isCollapsed = {};
reactprops.isPositionForced = {};
reactprops.mouseProximityOffset = {};
reactprops.target = {};
reactprops.onAnimationOpenEnd = onlyAureliaBound;
reactprops.onAnimationOpenStart = onlyAureliaBound;
reactprops.onDismiss = onlyAureliaBound;
reactprops.onMouseMove = onlyAureliaBound;
reactprops.positioningContainerProps = {};
reactprops.preventDismissOnLostFocus = {};
reactprops.preventFocusOnMount = {};
var DuCoachmark = (function (_super) {
    __extends(DuCoachmark, _super);
    function DuCoachmark(element) {
        var _this = _super.call(this, element) || this;
        _this.teachingBubbleElement = {};
        _this.hidden = false;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuCoachmark.prototype.attached = function () {
        this.renderReact2(reactprops);
    };
    DuCoachmark.prototype.renderReact2 = function (reactprops) {
        ReactDom.unmountComponentAtNode(this.element);
        this.container = this.element.querySelector('.au-react-root');
        if (this.container != null) {
            this.container.remove();
        }
        this.container = document.createElement('span');
        this.container.setAttribute('class', 'au-react-root');
        this.element.appendChild(this.container);
        this.teachingBubbleContent.aureliaHost = this;
        this.teachingBubbleContent.reactClass = TeachingBubbleContent;
        var reactTeachingBubbleElement = React.createElement(ReactStateWrapper, this.teachingBubbleContent);
        var a = this.createState(reactprops);
        a.aureliaHost = this;
        a.reactClass = Coachmark;
        var reactElement = React.createElement(ReactStateWrapperNoChildren, a, reactTeachingBubbleElement);
        this.reactComponent = ReactDom.render(reactElement, this.container);
    };
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], DuCoachmark.prototype, "teachingBubbleContent", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Boolean)
    ], DuCoachmark.prototype, "hidden", void 0);
    DuCoachmark = __decorate([
        inject(Element),
        customElement('du-coachmark'),
        __metadata("design:paramtypes", [Object])
    ], DuCoachmark);
    return DuCoachmark;
}(AuReactStateWrapperNoChildren));
export { DuCoachmark };
addPropertiesState(DuCoachmark, reactprops);

//# sourceMappingURL=DuCoachmark.js.map
