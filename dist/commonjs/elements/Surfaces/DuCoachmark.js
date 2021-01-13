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
exports.DuCoachmark = void 0;
var Coachmark_1 = require("@fluentui/react/lib/Coachmark");
var aurelia_framework_1 = require("aurelia-framework");
var TeachingBubble_1 = require("@fluentui/react/lib/TeachingBubble");
var React = require("react");
var ReactDom = require("react-dom");
var au_react_wrapper_1 = require("@dunite/au-react-wrapper");
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
reactprops.onAnimationOpenEnd = au_react_wrapper_1.onlyAureliaBound;
reactprops.onAnimationOpenStart = au_react_wrapper_1.onlyAureliaBound;
reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
reactprops.onMouseMove = au_react_wrapper_1.onlyAureliaBound;
reactprops.positioningContainerProps = {};
reactprops.preventDismissOnLostFocus = {};
reactprops.preventFocusOnMount = {};
var DuCoachmark = (function (_super) {
    __extends(DuCoachmark, _super);
    function DuCoachmark(element, tq) {
        var _this = _super.call(this, element, tq) || this;
        _this.tq = tq;
        _this.teachingBubbleElement = {};
        _this.hidden = true;
        return _this;
    }
    DuCoachmark.prototype.attached = function () {
        this.renderReact2(this.createState(reactprops));
    };
    DuCoachmark.prototype.renderReact2 = function (a) {
        this.container = this.element.querySelector('.au-react-root');
        if (this.container == null) {
            this.container = document.createElement('span');
            this.container.setAttribute('class', 'au-react-root');
            this.element.appendChild(this.container);
        }
        this.teachingBubbleContent.aureliaHost = this;
        this.teachingBubbleContent.reactClass = TeachingBubble_1.TeachingBubbleContent;
        var reactTeachingBubbleElement = React.createElement(au_react_wrapper_1.ReactWrapper, this.teachingBubbleContent);
        a.aureliaHost = this;
        a.reactClass = Coachmark_1.Coachmark;
        var reactElement = React.createElement(au_react_wrapper_1.ReactSimpleWrapper, a, reactTeachingBubbleElement);
        this.reactComponent = ReactDom.render(reactElement, this.container);
    };
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], DuCoachmark.prototype, "teachingBubbleContent", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Boolean)
    ], DuCoachmark.prototype, "hidden", void 0);
    DuCoachmark = __decorate([
        aurelia_framework_1.inject(Element, aurelia_framework_1.TaskQueue),
        aurelia_framework_1.customElement('du-coachmark'),
        __metadata("design:paramtypes", [Object, aurelia_framework_1.TaskQueue])
    ], DuCoachmark);
    return DuCoachmark;
}(au_react_wrapper_1.AuReactWrapper));
exports.DuCoachmark = DuCoachmark;
au_react_wrapper_1.addPropertiesState(DuCoachmark, reactprops);

//# sourceMappingURL=DuCoachmark.js.map
