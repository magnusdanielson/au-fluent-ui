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
import { customElement, inject } from 'aurelia-framework';
import { Callout } from '@fluentui/react/lib/Callout';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.backgroundColor = {};
reactprops.beakWidth = {};
reactprops.className = {};
reactprops.bounds = {};
reactprops.calloutMaxHeight = {};
reactprops.calloutMaxWidth = {};
reactprops.calloutWidth = {};
reactprops.coverTarget = {};
reactprops.directionalHint = {};
reactprops.directionalHintFixed = {};
reactprops.doNotLayer = {};
reactprops.finalHeight = {};
reactprops.gapSpace = {};
reactprops.hideOverflow = {};
reactprops.hidden = {};
reactprops.isBeakVisible = {};
reactprops.layerProps = {};
reactprops.minPagePadding = {};
reactprops.onDismiss = onlyAureliaBound;
reactprops.onLayerMounted = onlyAureliaBound;
reactprops.onPositioned = onlyAureliaBound;
reactprops.onScroll = onlyAureliaBound;
reactprops.preventDismissOnLostFocus = {};
reactprops.preventDismissOnScroll = {};
reactprops.setInitialFocus = {};
reactprops.target = {};
var DuCallout = (function (_super) {
    __extends(DuCallout, _super);
    function DuCallout(element) {
        var _this = _super.call(this, element) || this;
        _this.hidden = false;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuCallout.prototype.attached = function () {
        this.renderReact(Callout, this.createState(reactprops));
    };
    DuCallout = __decorate([
        inject(Element),
        customElement('du-callout'),
        __metadata("design:paramtypes", [Object])
    ], DuCallout);
    return DuCallout;
}(AuReactStateWrapper));
export { DuCallout };
addPropertiesState(DuCallout, reactprops);

//# sourceMappingURL=DuCallout.js.map
