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
import { DocumentCardActivity } from '@fluentui/react/lib/DocumentCard';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.activity = {};
reactprops.people = {};
var DuDocumentCardActivity = (function (_super) {
    __extends(DuDocumentCardActivity, _super);
    function DuDocumentCardActivity(element) {
        var _this = _super.call(this, element) || this;
        _this.hidden = false;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuDocumentCardActivity.prototype.attached = function () {
        this.renderReact(DocumentCardActivity, this.createState(reactprops));
    };
    DuDocumentCardActivity = __decorate([
        inject(Element),
        customElement('du-document-card-activity'),
        __metadata("design:paramtypes", [Object])
    ], DuDocumentCardActivity);
    return DuDocumentCardActivity;
}(AuReactStateWrapper));
export { DuDocumentCardActivity };
addPropertiesState(DuDocumentCardActivity, reactprops);

//# sourceMappingURL=DuDocumentCardActivity.js.map
