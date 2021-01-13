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
import { DocumentCard } from '@fluentui/react/lib/DocumentCard';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.className = {};
reactprops.onClick = onlyAureliaBound;
reactprops.onClickHref = {};
reactprops.type = {};
reactprops.role = {};
var DuDocumentCard = (function (_super) {
    __extends(DuDocumentCard, _super);
    function DuDocumentCard(element, tq) {
        var _this = _super.call(this, element, tq) || this;
        _this.tq = tq;
        _this.hidden = false;
        return _this;
    }
    DuDocumentCard.prototype.attached = function () {
        this.renderReact(DocumentCard, this.createState(reactprops));
    };
    DuDocumentCard = __decorate([
        inject(Element, TaskQueue),
        customElement('du-document-card'),
        __metadata("design:paramtypes", [Object, TaskQueue])
    ], DuDocumentCard);
    return DuDocumentCard;
}(AuReactWrapper));
export { DuDocumentCard };
addPropertiesState(DuDocumentCard, reactprops);

//# sourceMappingURL=DuDocumentCard.js.map
