define('DuTest',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuTest = void 0;
    var DuTest = (function () {
        function DuTest() {
        }
        return DuTest;
    }());
    exports.DuTest = DuTest;
});
;
define('text!DuTest.html',[],function(){return "<template>Test Hello</template>";});;
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
define('__dot_dot__/src/elements/BasicInputs/DuActionButton',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Button", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Button_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuActionButton = void 0;
    var reactprops = {};
    reactprops.allowDisabledFocus = {};
    reactprops.ariaDescription = {};
    reactprops.ariaHidden = {};
    reactprops.ariaLabel = {};
    reactprops.keytipProps = {};
    reactprops.menuIconProps = {};
    reactprops.menuTriggerKeyCode = {};
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onMenuClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.persistMenu = {};
    reactprops.primaryDisabled = {};
    reactprops.splitButtonAriaLabel = {};
    reactprops.toggle = {};
    reactprops.href = {};
    reactprops.primary = {};
    reactprops.uniqueId = {};
    reactprops.disabled = {};
    reactprops.checked = {};
    reactprops.className = {};
    reactprops.text = {};
    reactprops.iconProps = {};
    reactprops.menuProps = {};
    reactprops.split = {};
    reactprops.onClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.secondaryText = {};
    var DuActionButton = (function (_super) {
        __extends(DuActionButton, _super);
        function DuActionButton(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuActionButton.prototype.attached = function () {
            this.renderReact(Button_1.ActionButton, this.createState(reactprops));
        };
        DuActionButton = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-action-button'),
            __metadata("design:paramtypes", [Object])
        ], DuActionButton);
        return DuActionButton;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuActionButton = DuActionButton;
    au_react_wrapper_1.addPropertiesState(DuActionButton, reactprops);
});
;
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
define('__dot_dot__/src/elements/BasicInputs/DuCheckbox',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Checkbox", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Checkbox_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuCheckbox = void 0;
    var reactprops = {};
    reactprops.disabled = {};
    reactprops.ariaLabel = {};
    reactprops.ariaLabelledBy = {};
    reactprops.ariaPositionInSet = {};
    reactprops.ariaSetSize = {};
    reactprops.checkmarkIconProps = {};
    reactprops.defaultChecked = {};
    reactprops.keytipProps = {};
    reactprops.disabled = {};
    reactprops.checked = {};
    reactprops.className = {};
    reactprops.label = {};
    reactprops.onChange = au_react_wrapper_1.onlyAureliaBound;
    reactprops.boxSide = {};
    reactprops.onClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.checked = {};
    var DuCheckbox = (function (_super) {
        __extends(DuCheckbox, _super);
        function DuCheckbox(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuCheckbox.prototype.attached = function () {
            this.renderReact(Checkbox_1.Checkbox, this.createState(reactprops));
        };
        DuCheckbox = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-checkbox'),
            __metadata("design:paramtypes", [Object])
        ], DuCheckbox);
        return DuCheckbox;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuCheckbox = DuCheckbox;
    au_react_wrapper_1.addPropertiesState(DuCheckbox, reactprops);
});
;
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
define('__dot_dot__/src/elements/BasicInputs/DuChoiceGroup',["require", "exports", "aurelia-framework", "@fluentui/react/lib/ChoiceGroup", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, ChoiceGroup_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuChoiceGroup = void 0;
    var reactprops = {};
    reactprops.ariaLabelledBy = {};
    reactprops.disabled = {};
    reactprops.checked = {};
    reactprops.className = {};
    reactprops.label = {};
    reactprops.onChange = function (that, _event, newValue) {
        that['value'] = newValue;
    };
    reactprops.options = {};
    reactprops.onClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.defaultSelectedKey = {};
    reactprops.selectedKey = {};
    reactprops.value = {};
    var DuChoiceGroup = (function (_super) {
        __extends(DuChoiceGroup, _super);
        function DuChoiceGroup(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuChoiceGroup.prototype.attached = function () {
            this.renderReact(ChoiceGroup_1.ChoiceGroup, this.createState(reactprops));
        };
        DuChoiceGroup = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-choice-group'),
            __metadata("design:paramtypes", [Object])
        ], DuChoiceGroup);
        return DuChoiceGroup;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuChoiceGroup = DuChoiceGroup;
    au_react_wrapper_1.addPropertiesState(DuChoiceGroup, reactprops);
});
;
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
define('__dot_dot__/src/elements/BasicInputs/DuComboBox',["require", "exports", "aurelia-framework", "@fluentui/react/lib/ComboBox", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, ComboBox_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuComboBox = void 0;
    var reactprops = {};
    reactprops.buttonIconProps = {};
    reactprops.caretDownButtonStyles = {};
    reactprops.comboBoxOptionStyles = {};
    reactprops.dropdownMaxWidth = {};
    reactprops.errorMessage = {};
    reactprops.keytipProps = {};
    reactprops.onItemClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.isButtonAriaHidden = {};
    reactprops.onPendingValueChanged = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onScrollToItem = au_react_wrapper_1.onlyAureliaBound;
    reactprops.disabled = {};
    reactprops.className = {};
    reactprops.label = {};
    reactprops.options = {};
    reactprops.onChange = au_react_wrapper_1.onlyAureliaBound;
    reactprops.defaultSelectedKey = {};
    reactprops.selectedKey = {};
    reactprops.selectedKeys = {};
    reactprops.onMenuOpen = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onMenuDismissed = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onResolveOptions = au_react_wrapper_1.onlyAureliaBound;
    reactprops.allowFreeform = {};
    reactprops.autoComplete = {};
    reactprops.text = {};
    reactprops.scrollSelectedToTop = {};
    reactprops.dropdownWidth = {};
    reactprops.useComboBoxAsMenuWidth = {};
    reactprops.multiSelect = {};
    reactprops.onFocus = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onBlur = au_react_wrapper_1.onlyAureliaBound;
    var DuComboBox = (function (_super) {
        __extends(DuComboBox, _super);
        function DuComboBox(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuComboBox.prototype.attached = function () {
            this.renderReact(ComboBox_1.ComboBox, this.createState(reactprops));
        };
        DuComboBox = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-combo-box'),
            __metadata("design:paramtypes", [Object])
        ], DuComboBox);
        return DuComboBox;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuComboBox = DuComboBox;
    au_react_wrapper_1.addPropertiesState(DuComboBox, reactprops);
});
;
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
define('__dot_dot__/src/elements/BasicInputs/DuCommandBarButton',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Button", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Button_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuCommandBarButton = void 0;
    var reactprops = {};
    reactprops.href = {};
    reactprops.primary = {};
    reactprops.uniqueId = {};
    reactprops.disabled = {};
    reactprops.checked = {};
    reactprops.className = {};
    reactprops.text = {};
    reactprops.iconProps = {};
    reactprops.menuProps = {};
    reactprops.split = {};
    reactprops.onClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.secondaryText = {};
    var DuCommandBarButton = (function (_super) {
        __extends(DuCommandBarButton, _super);
        function DuCommandBarButton(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuCommandBarButton.prototype.attached = function () {
            this.renderReact(Button_1.CommandBarButton, this.createState(reactprops));
        };
        DuCommandBarButton = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-command-bar-button'),
            __metadata("design:paramtypes", [Object])
        ], DuCommandBarButton);
        return DuCommandBarButton;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuCommandBarButton = DuCommandBarButton;
    au_react_wrapper_1.addPropertiesState(DuCommandBarButton, reactprops);
});
;
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
define('__dot_dot__/src/elements/BasicInputs/DuCompoundButton',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Button", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Button_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuCompoundButton = void 0;
    var reactprops = {};
    reactprops.allowDisabledFocus = {};
    reactprops.ariaDescription = {};
    reactprops.ariaHidden = {};
    reactprops.ariaLabel = {};
    reactprops.keytipProps = {};
    reactprops.menuIconProps = {};
    reactprops.menuTriggerKeyCode = {};
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onMenuClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.persistMenu = {};
    reactprops.primaryDisabled = {};
    reactprops.splitButtonAriaLabel = {};
    reactprops.toggle = {};
    reactprops.href = {};
    reactprops.primary = {};
    reactprops.uniqueId = {};
    reactprops.disabled = {};
    reactprops.checked = {};
    reactprops.className = {};
    reactprops.text = {};
    reactprops.iconProps = {};
    reactprops.menuProps = {};
    reactprops.split = {};
    reactprops.onClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.secondaryText = {};
    var DuCompoundButton = (function (_super) {
        __extends(DuCompoundButton, _super);
        function DuCompoundButton(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuCompoundButton.prototype.attached = function () {
            this.renderReact(Button_1.CompoundButton, this.createState(reactprops));
        };
        DuCompoundButton = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-compound-button'),
            __metadata("design:paramtypes", [Object])
        ], DuCompoundButton);
        return DuCompoundButton;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuCompoundButton = DuCompoundButton;
    au_react_wrapper_1.addPropertiesState(DuCompoundButton, reactprops);
});
;
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
define('__dot_dot__/src/elements/BasicInputs/DuContextualMenu',["require", "exports", "aurelia-framework", "@fluentui/react/lib/ContextualMenu", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, ContextualMenu_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuContextualMenu = void 0;
    var reactprops = {};
    reactprops.beakWidth = {};
    reactprops.bounds = {};
    reactprops.calloutProps = {};
    reactprops.className = {};
    reactprops.coverTarget = {};
    reactprops.gapSpace = {};
    reactprops.hidden = {};
    reactprops.isBeakVisible = {};
    reactprops.isSubMenu = {};
    reactprops.items = {};
    reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onItemClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onMenuDismissed = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onMenuOpened = au_react_wrapper_1.onlyAureliaBound;
    reactprops.alignTargetEdge = {};
    reactprops.ariaLabel = {};
    reactprops.delayUpdateFocusOnHover = {};
    reactprops.directionalHint = {};
    reactprops.directionalHintFixed = {};
    reactprops.directionalHintForRTL = {};
    reactprops.doNotLayer = {};
    reactprops.focusZoneProps = {};
    reactprops.gapSpace = {};
    reactprops.labelElementId = {};
    reactprops.shouldFocusOnContainer = {};
    reactprops.shouldFocusOnMount = {};
    reactprops.subMenuHoverDelay = {};
    reactprops.target = {};
    reactprops.useTargetAsMinWidth = {};
    reactprops.useTargetWidth = {};
    var DuContextualMenu = (function (_super) {
        __extends(DuContextualMenu, _super);
        function DuContextualMenu(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuContextualMenu.prototype.attached = function () {
            this.renderReact(ContextualMenu_1.ContextualMenu, this.createState(reactprops));
        };
        DuContextualMenu = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-contextual-menu'),
            __metadata("design:paramtypes", [Object])
        ], DuContextualMenu);
        return DuContextualMenu;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuContextualMenu = DuContextualMenu;
    au_react_wrapper_1.addPropertiesState(DuContextualMenu, reactprops);
});
;
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
define('__dot_dot__/src/elements/BasicInputs/DuDefaultButton',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Button", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Button_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuDefaultButton = void 0;
    var reactprops = {};
    reactprops.allowDisabledFocus = {};
    reactprops.ariaDescription = {};
    reactprops.ariaHidden = {};
    reactprops.ariaLabel = {};
    reactprops.keytipProps = {};
    reactprops.menuIconProps = {};
    reactprops.menuTriggerKeyCode = {};
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onMenuClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.persistMenu = {};
    reactprops.primaryDisabled = {};
    reactprops.splitButtonAriaLabel = {};
    reactprops.toggle = {};
    reactprops.href = {};
    reactprops.primary = {};
    reactprops.uniqueId = {};
    reactprops.disabled = {};
    reactprops.checked = {};
    reactprops.className = {};
    reactprops.text = {};
    reactprops.iconProps = {};
    reactprops.menuProps = {};
    reactprops.split = {};
    reactprops.onClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.secondaryText = {};
    var DuDefaultButton = (function (_super) {
        __extends(DuDefaultButton, _super);
        function DuDefaultButton(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuDefaultButton.prototype.attached = function () {
            this.renderReact(Button_1.DefaultButton, this.createState(reactprops));
        };
        DuDefaultButton = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-default-button'),
            __metadata("design:paramtypes", [Object])
        ], DuDefaultButton);
        return DuDefaultButton;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuDefaultButton = DuDefaultButton;
    au_react_wrapper_1.addPropertiesState(DuDefaultButton, reactprops);
});
;
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
define('__dot_dot__/src/elements/BasicInputs/DuDropdown',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Dropdown", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Dropdown_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuDropdown = void 0;
    var reactprops = {};
    reactprops.placeholder = {};
    reactprops.options = {};
    reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onFocus = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onBlur = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onChange = au_react_wrapper_1.onlyAureliaBound;
    reactprops.dropdownWidth = {};
    reactprops.responsiveMode = {};
    reactprops.multiSelect = {};
    reactprops.notifyOnReselect = {};
    reactprops.defaultSelectedKeys = {};
    reactprops.selectedKeys = {};
    reactprops.multiSelectDelimiter = {};
    reactprops.keytipProps = {};
    reactprops.disabled = {};
    reactprops.errorMessage = {};
    reactprops.required = {};
    reactprops.selectedKey = {};
    var DuDropdown = (function (_super) {
        __extends(DuDropdown, _super);
        function DuDropdown(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuDropdown.prototype.attached = function () {
            this.renderReact(Dropdown_1.Dropdown, this.createState(reactprops));
        };
        DuDropdown = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-dropdown'),
            __metadata("design:paramtypes", [Object])
        ], DuDropdown);
        return DuDropdown;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuDropdown = DuDropdown;
    au_react_wrapper_1.addPropertiesState(DuDropdown, reactprops);
});
;
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
define('__dot_dot__/src/elements/BasicInputs/DuIconButton',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Button", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Button_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuIconButton = void 0;
    var reactprops = {};
    reactprops.allowDisabledFocus = {};
    reactprops.ariaDescription = {};
    reactprops.ariaHidden = {};
    reactprops.ariaLabel = {};
    reactprops.keytipProps = {};
    reactprops.menuIconProps = {};
    reactprops.menuTriggerKeyCode = {};
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onMenuClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.persistMenu = {};
    reactprops.primaryDisabled = {};
    reactprops.splitButtonAriaLabel = {};
    reactprops.toggle = {};
    reactprops.href = {};
    reactprops.primary = {};
    reactprops.uniqueId = {};
    reactprops.disabled = {};
    reactprops.checked = {};
    reactprops.className = {};
    reactprops.text = {};
    reactprops.iconProps = {};
    reactprops.menuProps = {};
    reactprops.split = {};
    reactprops.onClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.secondaryText = {};
    var DuIconButton = (function (_super) {
        __extends(DuIconButton, _super);
        function DuIconButton(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuIconButton.prototype.attached = function () {
            this.renderReact(Button_1.IconButton, this.createState(reactprops));
        };
        DuIconButton = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-icon-button'),
            __metadata("design:paramtypes", [Object])
        ], DuIconButton);
        return DuIconButton;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuIconButton = DuIconButton;
    au_react_wrapper_1.addPropertiesState(DuIconButton, reactprops);
});
;
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
define('__dot_dot__/src/elements/BasicInputs/DuLabel',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Label", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Label_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuLabel = void 0;
    var reactprops = {};
    reactprops.disabled = {};
    reactprops.className = {};
    reactprops.required = {};
    reactprops.htmlFor = {};
    var DuLabel = (function (_super) {
        __extends(DuLabel, _super);
        function DuLabel(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuLabel.prototype.attached = function () {
            this.renderReact(Label_1.Label, this.createState(reactprops));
        };
        DuLabel = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-label'),
            __metadata("design:paramtypes", [Object])
        ], DuLabel);
        return DuLabel;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuLabel = DuLabel;
    au_react_wrapper_1.addPropertiesState(DuLabel, reactprops);
});
;
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
define('__dot_dot__/src/elements/BasicInputs/DuSlider',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Slider", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Slider_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuSlider = void 0;
    var reactprops = {};
    reactprops.value = {};
    reactprops.ariaLabel = {};
    reactprops.ariaValueText = au_react_wrapper_1.onlyAureliaBound;
    reactprops.className = {};
    reactprops.defaultValue = {};
    reactprops.disabled = {};
    reactprops.label = {};
    reactprops.max = {};
    reactprops.min = {};
    reactprops.onChange = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onChanged = au_react_wrapper_1.onlyAureliaBound;
    reactprops.showValue = {};
    reactprops.step = {};
    reactprops.value = {};
    reactprops.vertical = {};
    reactprops.valueFormat = au_react_wrapper_1.onlyAureliaBound;
    reactprops.vertical = {};
    var DuSlider = (function (_super) {
        __extends(DuSlider, _super);
        function DuSlider(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuSlider.prototype.attached = function () {
            this.renderReact(Slider_1.Slider, this.createState(reactprops));
        };
        DuSlider = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-slider'),
            __metadata("design:paramtypes", [Object])
        ], DuSlider);
        return DuSlider;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuSlider = DuSlider;
    au_react_wrapper_1.addPropertiesState(DuSlider, reactprops);
});
;
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
define('__dot_dot__/src/elements/BasicInputs/DuSpinButton',["require", "exports", "aurelia-framework", "@fluentui/react/lib/SpinButton", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, SpinButton_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuSpinButton = exports.Position = void 0;
    var Position;
    (function (Position) {
        Position[Position["top"] = 0] = "top";
        Position[Position["bottom"] = 1] = "bottom";
        Position[Position["start"] = 2] = "start";
        Position[Position["end"] = 3] = "end";
    })(Position = exports.Position || (exports.Position = {}));
    var reactprops = {};
    reactprops.focus = au_react_wrapper_1.onlyAureliaBound;
    reactprops.disabled = {};
    reactprops.className = {};
    reactprops.label = {};
    reactprops.value = {};
    reactprops.min = {};
    reactprops.defaultValue = {};
    reactprops.max = {};
    reactprops.title = {};
    reactprops.step = {};
    reactprops.iconProps = {};
    reactprops.labelPosition = {};
    reactprops.onValidate = au_react_wrapper_1.onlyAureliaBound;
    reactprops.ariaLabel = {};
    reactprops.ariaPositionInSet = {};
    reactprops.ariaSetSize = {};
    reactprops.ariaValueNow = {};
    reactprops.ariaValueText = {};
    reactprops.decrementButtonAriaLabel = {};
    reactprops.decrementButtonIcon = {};
    reactprops.downArrowButtonStyles = {};
    reactprops.iconProps = {};
    reactprops.incrementButtonAriaLabel = {};
    reactprops.incrementButtonIcon = {};
    reactprops.keytipProps = {};
    reactprops.onBlur = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onFocus = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onIncrement = function (_this, value) {
        var _value = parseFloat(_this['value']);
        if (_value + _this['step'] <= _this['max']) {
            _this['value'] = (_value + _this['step']).toFixed(typeof _this['precision'] == 'undefined' ? 0 : _this['precision']);
        }
    };
    reactprops.onDecrement = function (_this, value) {
        var _value = parseFloat(_this['value']);
        if (_value - _this['step'] >= _this['min']) {
            _this['value'] = (_value - _this['step']).toFixed(typeof _this['precision'] == 'undefined' ? 0 : _this['precision']);
        }
    };
    reactprops.precision = {};
    var DuSpinButton = (function (_super) {
        __extends(DuSpinButton, _super);
        function DuSpinButton(element) {
            var _this_1 = _super.call(this, element) || this;
            _this_1.hidden = false;
            _this_1.hiddenIsHidden = true;
            _this_1.hiddenName = 'hidden';
            return _this_1;
        }
        DuSpinButton.prototype.attached = function () {
            this.renderReact(SpinButton_1.SpinButton, this.createState(reactprops));
        };
        DuSpinButton = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-spin-button'),
            __metadata("design:paramtypes", [Object])
        ], DuSpinButton);
        return DuSpinButton;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuSpinButton = DuSpinButton;
    au_react_wrapper_1.addPropertiesState(DuSpinButton, reactprops);
});
;
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
define('__dot_dot__/src/elements/BasicInputs/DuTextField',["require", "exports", "aurelia-framework", "@fluentui/react/lib/TextField", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, TextField_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuTextField = void 0;
    var reactprops = {};
    reactprops.ariaLabel = {};
    reactprops.autoAdjustHeight = {};
    reactprops.autoComplete = {};
    reactprops.borderless = {};
    reactprops.className = {};
    reactprops.defaultValue = {};
    reactprops.deferredValidationTime = {};
    reactprops.description = {};
    reactprops.disabled = {};
    reactprops.errorMessage = {};
    reactprops.iconProps = {};
    reactprops.inputClassName = {};
    reactprops.label = {};
    reactprops.mask = {};
    reactprops.maskChar = {};
    reactprops.maskFormat = {};
    reactprops.multiline = {};
    reactprops.onChange = function (that, _event, newValue) {
        that['value'] = newValue;
    };
    reactprops.onNotifyValidationResult = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onGetErrorMessage = au_react_wrapper_1.onlyAureliaBound;
    reactprops.prefix = {};
    reactprops.suffix = {};
    reactprops.readOnly = {};
    reactprops.resizable = {};
    reactprops.underlined = {};
    reactprops.validateOnFocusIn = {};
    reactprops.validateOnFocusOut = {};
    reactprops.validateOnLoad = {};
    reactprops.value = {};
    reactprops.required = {};
    reactprops.placeholder = {};
    var DuTextField = (function (_super) {
        __extends(DuTextField, _super);
        function DuTextField(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuTextField.prototype.attached = function () {
            this.renderReact(TextField_1.TextField, this.createState(reactprops));
            if (this.autoAdjustHeight == true) {
                var elements = this.element.getElementsByTagName('textarea');
                if (elements.length > 0) {
                    var element = elements.item(0);
                    element.setAttribute('style', '');
                }
            }
        };
        DuTextField.prototype.blur = function () {
            this.reactComponent.blur();
        };
        DuTextField.prototype.focus = function () {
            this.reactComponent.focus();
        };
        DuTextField.prototype.select = function () {
            this.reactComponent.select();
        };
        DuTextField.prototype.selectionEnd = function () {
            return this.reactComponent.selectionEnd();
        };
        DuTextField.prototype.selectionStart = function () {
            return this.reactComponent.selectionStart();
        };
        DuTextField.prototype.setSelectionEnd = function (value) {
            this.reactComponent.setSelectionEnd(value);
        };
        DuTextField.prototype.setSelectionRange = function (start, end) {
            this.reactComponent.setSelectionRange(start, end);
        };
        DuTextField.prototype.setSelectionStart = function (value) {
            this.reactComponent.setSelectionStart(value);
        };
        DuTextField = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-text-field'),
            __metadata("design:paramtypes", [Object])
        ], DuTextField);
        return DuTextField;
    }(au_react_wrapper_1.AuReactStateWrapperNoChildren));
    exports.DuTextField = DuTextField;
    au_react_wrapper_1.addPropertiesState(DuTextField, reactprops);
});
;
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
define('__dot_dot__/src/elements/BasicInputs/DuToggle',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Toggle", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Toggle_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuToggle = void 0;
    var reactprops = {};
    reactprops.ariaLabel = {};
    reactprops.label = {};
    reactprops.onText = {};
    reactprops.offText = {};
    reactprops.checked = {};
    reactprops.defaultChecked = {};
    reactprops.disabled = {};
    reactprops.onChange = function (that, _event, newValue) {
        that['checked'] = newValue;
    };
    reactprops.className = {};
    reactprops.keytipProps = {};
    var DuToggle = (function (_super) {
        __extends(DuToggle, _super);
        function DuToggle(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuToggle.prototype.attached = function () {
            this.renderReact(Toggle_1.Toggle, this.createState(reactprops));
        };
        DuToggle = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-toggle'),
            __metadata("design:paramtypes", [Object])
        ], DuToggle);
        return DuToggle;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuToggle = DuToggle;
    au_react_wrapper_1.addPropertiesState(DuToggle, reactprops);
});
;
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
define('__dot_dot__/src/elements/Content/DuDetailsList',["require", "exports", "aurelia-framework", "@fluentui/react/lib/DetailsList", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, DetailsList_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuDetailsList = void 0;
    var reactprops = {};
    reactprops.checkButtonAriaLabel = {};
    reactprops.checkboxCellClassName = {};
    reactprops.checkboxVisibility = {};
    reactprops.className = {};
    reactprops.columnReorderOptions = {};
    reactprops.columns = {};
    reactprops.compact = {};
    reactprops.constrainMode = {};
    reactprops.disableSelectionZone = {};
    reactprops.groupProps = {};
    reactprops.groups = {};
    reactprops.indentWidth = {};
    reactprops.initialFocusedIndex = {};
    reactprops.isHeaderVisible = {};
    reactprops.layoutMode = {};
    reactprops.listProps = {};
    reactprops.minimumPixelsForDrag = {};
    reactprops.onActiveItemChanged = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onColumnHeaderClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onColumnHeaderContextMenu = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onColumnResize = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onDidUpdate = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onItemContextMenu = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onItemInvoked = au_react_wrapper_1.onlyAureliaBound;
    reactprops.selection = {};
    reactprops.selectionMode = {};
    reactprops.selectionPreservedOnEmptyClick = {};
    reactprops.items = {};
    var DuDetailsList = (function (_super) {
        __extends(DuDetailsList, _super);
        function DuDetailsList(element) {
            var _this = _super.call(this, element) || this;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuDetailsList.prototype.scrollToIndex = function (index) {
            this.reactComponent.forceUpdate(index);
        };
        DuDetailsList.prototype.forceUpdate = function () {
            this.reactComponent.forceUpdate();
        };
        DuDetailsList.prototype.focusIndex = function (index, forceIntoFirstElement, measureItem, scrollToMode) {
            this.reactComponent.focusIndex(index, forceIntoFirstElement, measureItem, scrollToMode);
        };
        DuDetailsList.prototype.attached = function () {
            this.renderReact(DetailsList_1.DetailsList, this.createState(reactprops));
        };
        DuDetailsList.prototype.getStartItemIndexInView = function () {
            return this.reactComponent.getStartItemIndexInView();
        };
        DuDetailsList = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-details-list'),
            __metadata("design:paramtypes", [Object])
        ], DuDetailsList);
        return DuDetailsList;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuDetailsList = DuDetailsList;
    au_react_wrapper_1.addPropertiesState(DuDetailsList, reactprops);
});
;
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
define('__dot_dot__/src/elements/Content/DuFacepile',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Facepile", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Facepile_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuFacepile = void 0;
    var reactprops = {};
    reactprops.personas = {};
    reactprops.addButtonProps = {};
    reactprops.className = {};
    reactprops.maxDisplayablePersonas = {};
    reactprops.overflowButtonProps = {};
    reactprops.overflowButtonType = {};
    reactprops.overflowPersonas = {};
    reactprops.personaSize = {};
    reactprops.showAddButton = {};
    var DuFacepile = (function (_super) {
        __extends(DuFacepile, _super);
        function DuFacepile(element) {
            var _this = _super.call(this, element) || this;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuFacepile.prototype.getPersonaProps = function (persona) {
            return this.reactComponent.getPersonaProps(persona);
        };
        DuFacepile.prototype.attached = function () {
            this.renderReact(Facepile_1.Facepile, this.createState(reactprops));
        };
        DuFacepile = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-facepile'),
            __metadata("design:paramtypes", [Object])
        ], DuFacepile);
        return DuFacepile;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuFacepile = DuFacepile;
    au_react_wrapper_1.addPropertiesState(DuFacepile, reactprops);
});
;
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
define('__dot_dot__/src/elements/Content/DuGroupedList',["require", "exports", "aurelia-framework", "@fluentui/react/lib/GroupedList", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, GroupedList_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuGroupedList = void 0;
    var reactprops = {};
    reactprops.items = {};
    reactprops.onRenderCell = au_react_wrapper_1.onlyAureliaBound;
    reactprops.className = {};
    reactprops.compact = {};
    reactprops.getGroupHeight = {};
    reactprops.groupProps = {};
    reactprops.groups = {};
    reactprops.listProps = {};
    reactprops.onGroupExpandStateChanged = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onShouldVirtualize = au_react_wrapper_1.onlyAureliaBound;
    reactprops.selection = {};
    reactprops.selectionMode = {};
    reactprops.usePageCache = {};
    reactprops.key = {};
    var DuGroupedList = (function (_super) {
        __extends(DuGroupedList, _super);
        function DuGroupedList(element) {
            var _this = _super.call(this, element) || this;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuGroupedList.prototype.toggleCollapseAll = function (allCollapsed) {
            return this.reactComponent.toggleCollapseAll(allCollapsed);
        };
        DuGroupedList.prototype.forceUpdate = function () {
            this.reactComponent.forceUpdate();
        };
        DuGroupedList.prototype.attached = function () {
            this.renderReact(GroupedList_1.GroupedList, this.createState(reactprops));
        };
        DuGroupedList = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-grouped-list'),
            __metadata("design:paramtypes", [Object])
        ], DuGroupedList);
        return DuGroupedList;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuGroupedList = DuGroupedList;
    au_react_wrapper_1.addPropertiesState(DuGroupedList, reactprops);
});
;
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
define('__dot_dot__/src/elements/Content/DuPersona',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Persona", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Persona_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuPersona = void 0;
    var reactprops = {};
    reactprops.allowPhoneInitials = {};
    reactprops.coinProps = {};
    reactprops.coinSize = {};
    reactprops.hidePersonaDetails = {};
    reactprops.imageAlt = {};
    reactprops.imageInitials = {};
    reactprops.imageShouldFadeIn = {};
    reactprops.imageShouldStartVisible = {};
    reactprops.imageUrl = {};
    reactprops.initialsColor = {};
    reactprops.onPhotoLoadingStateChange = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onRenderCoin = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onRenderInitials = au_react_wrapper_1.onlyAureliaBound;
    reactprops.optionalText = {};
    reactprops.presence = {};
    reactprops.secondaryText = {};
    reactprops.showInitialsUntilImageLoads = {};
    reactprops.showSecondaryText = {};
    reactprops.showUnknownPersonaCoin = {};
    reactprops.size = {};
    reactprops.tertiaryText = {};
    reactprops.text = {};
    reactprops.className = {};
    reactprops.onRenderOptionalText = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onRenderPrimaryText = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onRenderSecondaryText = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onRenderTertiaryText = au_react_wrapper_1.onlyAureliaBound;
    var DuPersona = (function (_super) {
        __extends(DuPersona, _super);
        function DuPersona(element) {
            var _this = _super.call(this, element) || this;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuPersona.prototype.attached = function () {
            this.renderReact(Persona_1.Persona, this.createState(reactprops));
        };
        DuPersona = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-persona'),
            __metadata("design:paramtypes", [Object])
        ], DuPersona);
        return DuPersona;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuPersona = DuPersona;
    au_react_wrapper_1.addPropertiesState(DuPersona, reactprops);
});
;
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
define('__dot_dot__/src/elements/Navigation/DuBreadcrumb',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Breadcrumb", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Breadcrumb_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuBreadcrumb = void 0;
    var reactprops = {};
    reactprops.items = {};
    reactprops.className = {};
    reactprops.dividerAs = {};
    reactprops.maxDisplayedItems = {};
    reactprops.onReduceData = au_react_wrapper_1.onlyAureliaBound;
    reactprops.overflowIndex = {};
    var DuBreadcrumb = (function (_super) {
        __extends(DuBreadcrumb, _super);
        function DuBreadcrumb(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuBreadcrumb.prototype.attached = function () {
            this.renderReact(Breadcrumb_1.Breadcrumb, this.createState(reactprops));
        };
        DuBreadcrumb = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-breadcrumb'),
            __metadata("design:paramtypes", [Object])
        ], DuBreadcrumb);
        return DuBreadcrumb;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuBreadcrumb = DuBreadcrumb;
    au_react_wrapper_1.addPropertiesState(DuBreadcrumb, reactprops);
});
;
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
define('__dot_dot__/src/elements/Navigation/DuCommandBar',["require", "exports", "aurelia-framework", "@fluentui/react/lib/CommandBar", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, CommandBar_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuCommandBar = void 0;
    var reactprops = {};
    reactprops.items = {};
    reactprops.overflowItems = {};
    reactprops.farItems = {};
    reactprops.overflowButtonProps = {};
    reactprops.className = {};
    var DuCommandBar = (function (_super) {
        __extends(DuCommandBar, _super);
        function DuCommandBar(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuCommandBar.prototype.attached = function () {
            this.renderReact(CommandBar_1.CommandBar, this.createState(reactprops));
        };
        DuCommandBar = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-command-bar'),
            __metadata("design:paramtypes", [Object])
        ], DuCommandBar);
        return DuCommandBar;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuCommandBar = DuCommandBar;
    au_react_wrapper_1.addPropertiesState(DuCommandBar, reactprops);
});
;
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
define('__dot_dot__/src/elements/Navigation/DuNav',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Nav", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Nav_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuNav = void 0;
    var reactprops = {};
    reactprops.groups = {};
    reactprops.initialSelectedKey = {};
    reactprops.isOnTop = {};
    reactprops.onLinkClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onLinkExpandClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.selectedKey = {};
    var DuNav = (function (_super) {
        __extends(DuNav, _super);
        function DuNav(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuNav.prototype.attached = function () {
            this.renderReact(Nav_1.Nav, this.createState(reactprops));
        };
        DuNav = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-nav'),
            __metadata("design:paramtypes", [Object])
        ], DuNav);
        return DuNav;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuNav = DuNav;
    au_react_wrapper_1.addPropertiesState(DuNav, reactprops);
});
;
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
define('__dot_dot__/src/elements/Navigation/DuPivot',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Pivot", "@dunite/au-react-wrapper", "react", "react-dom"], function (require, exports, aurelia_framework_1, Pivot_1, au_react_wrapper_1, React, ReactDom) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuPivot = void 0;
    var reactprops = {};
    reactprops.className = {};
    reactprops.defaultSelectedIndex = {};
    reactprops.defaultSelectedKey = {};
    reactprops.getTabId = au_react_wrapper_1.onlyAureliaBound;
    reactprops.headersOnly = {};
    reactprops.linkFormat = {};
    reactprops.linkSize = {};
    reactprops.onLinkClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.selectedKey = {};
    var DuPivot = (function (_super) {
        __extends(DuPivot, _super);
        function DuPivot(element) {
            var _this = _super.call(this, element) || this;
            _this.pivotChildren = [];
            return _this;
        }
        DuPivot.prototype.render = function () {
            this.renderReact(reactprops);
        };
        DuPivot.prototype.renderReact = function (reactprops) {
            this.container = this.element.querySelector('.au-react-root');
            if (this.container == null) {
                this.container = document.createElement('span');
                this.container.setAttribute('class', 'au-react-root');
                this.element.appendChild(this.container);
            }
            var a = this.createState(reactprops);
            for (var i = 0; i < this.items.length; i++) {
                if (typeof this.items[i].key == 'undefined') {
                    this.items[i].key = 'k' + i;
                }
                var t = React.createElement(Pivot_1.PivotItem, this.items[i], React.createElement('div', { className: 'du' + this.items[i].itemKey }));
                this.pivotChildren.push(t);
            }
            ;
            var reactElement = React.createElement(Pivot_1.Pivot, a, this.pivotChildren);
            this.reactComponent = ReactDom.render(reactElement, this.container);
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Array)
        ], DuPivot.prototype, "items", void 0);
        DuPivot = __decorate([
            aurelia_framework_1.noView(),
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-pivot'),
            __metadata("design:paramtypes", [Object])
        ], DuPivot);
        return DuPivot;
    }(au_react_wrapper_1.AuReactNoStateWrapper));
    exports.DuPivot = DuPivot;
    au_react_wrapper_1.addPropertiesNoState(DuPivot, reactprops);
});
;
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
define('__dot_dot__/src/elements/Navigation/DuSearchBox',["require", "exports", "aurelia-framework", "@fluentui/react/lib/SearchBox", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, SearchBox_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuSearchBox = void 0;
    var reactprops = {};
    reactprops.disabled = {};
    reactprops.className = {};
    reactprops.required = {};
    reactprops.placeholder = {};
    reactprops.onSearch = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onFocus = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onBlur = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onChange = function (that, _event, newValue) {
        that['value'] = newValue;
    };
    reactprops.disableAnimation = {};
    reactprops.onClear = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onEscape = au_react_wrapper_1.onlyAureliaBound;
    reactprops.value = {};
    reactprops.defaultValue = {};
    reactprops.clearButtonProps = {};
    reactprops.underlined = {};
    reactprops.iconProps = {};
    var DuSearchBox = (function (_super) {
        __extends(DuSearchBox, _super);
        function DuSearchBox(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuSearchBox.prototype.attached = function () {
            this.renderReact(SearchBox_1.SearchBox, this.createState(reactprops));
        };
        DuSearchBox = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-search-box'),
            __metadata("design:paramtypes", [Object])
        ], DuSearchBox);
        return DuSearchBox;
    }(au_react_wrapper_1.AuReactStateWrapperNoChildren));
    exports.DuSearchBox = DuSearchBox;
    au_react_wrapper_1.addPropertiesState(DuSearchBox, reactprops);
});
;
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
define('__dot_dot__/src/elements/Pickers/DuColorPicker',["require", "exports", "aurelia-framework", "@fluentui/react/lib/ColorPicker", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, ColorPicker_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuColorPicker = void 0;
    var reactprops = {};
    reactprops.alphaLabel = {};
    reactprops.alphaSliderHidden = {};
    reactprops.blueLabel = {};
    reactprops.color = {};
    reactprops.greenLabel = {};
    reactprops.hexLabel = {};
    reactprops.onChange = function (that, _event, newValue) {
        that['color'] = newValue.str;
    };
    reactprops.redLabel = {};
    var DuColorPicker = (function (_super) {
        __extends(DuColorPicker, _super);
        function DuColorPicker(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuColorPicker.prototype.attached = function () {
            this.renderReact(ColorPicker_1.ColorPicker, this.createState(reactprops));
        };
        DuColorPicker = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-color-picker'),
            __metadata("design:paramtypes", [Object])
        ], DuColorPicker);
        return DuColorPicker;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuColorPicker = DuColorPicker;
    au_react_wrapper_1.addPropertiesState(DuColorPicker, reactprops);
});
;
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
define('__dot_dot__/src/elements/Pickers/DuCompactPeoplePicker',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Pickers", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Pickers_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuCompactPeoplePicker = void 0;
    var reactprops = {};
    reactprops.items = {};
    reactprops.onResolveSuggestions = au_react_wrapper_1.onlyAureliaBound;
    reactprops.resolveDelay = {};
    reactprops.onEmptyInputFocus = au_react_wrapper_1.onlyAureliaBound;
    reactprops.defaultSelectedItems = {};
    reactprops.onChange = (function (_this, items) { _this['selectedItems'] = items; });
    reactprops.onFocus = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onBlur = au_react_wrapper_1.onlyAureliaBound;
    reactprops.getTextFromItem = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onGetMoreResults = au_react_wrapper_1.onlyAureliaBound;
    reactprops.className = {};
    reactprops.pickerSuggestionsProps = {};
    reactprops.pickerCalloutProps = {};
    reactprops.inputProps = {};
    reactprops.onRemoveSuggestion = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onValidateInput = au_react_wrapper_1.onlyAureliaBound;
    reactprops.searchingText = au_react_wrapper_1.onlyAureliaBound;
    reactprops.disabled = {};
    reactprops.itemLimit = {};
    reactprops.createGenericItem = au_react_wrapper_1.onlyAureliaBound;
    reactprops.removeButtonAriaLabel = {};
    reactprops.onItemSelected = au_react_wrapper_1.onlyAureliaBound;
    reactprops.selectedItems = {};
    reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.enableSelectedSuggestionAlert = {};
    var DuCompactPeoplePicker = (function (_super) {
        __extends(DuCompactPeoplePicker, _super);
        function DuCompactPeoplePicker(element) {
            var _this_1 = _super.call(this, element) || this;
            _this_1.hidden = false;
            _this_1.hiddenIsHidden = true;
            _this_1.hiddenName = 'hidden';
            return _this_1;
        }
        DuCompactPeoplePicker.prototype.attached = function () {
            this.renderReact(Pickers_1.CompactPeoplePicker, this.createState(reactprops));
        };
        DuCompactPeoplePicker = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-compact-people-picker'),
            __metadata("design:paramtypes", [Object])
        ], DuCompactPeoplePicker);
        return DuCompactPeoplePicker;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuCompactPeoplePicker = DuCompactPeoplePicker;
    au_react_wrapper_1.addPropertiesState(DuCompactPeoplePicker, reactprops);
});
;
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
define('__dot_dot__/src/elements/Pickers/DuDatePicker',["require", "exports", "aurelia-framework", "@fluentui/react/lib/DatePicker", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, DatePicker_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuDatePicker = void 0;
    var reactprops = {};
    reactprops.onSelectDate = au_react_wrapper_1.onlyAureliaBound;
    reactprops.label = {};
    reactprops.isRequired = {};
    reactprops.disabled = {};
    reactprops.isMonthPickerVisible = {};
    reactprops.showMonthPickerAsOverlay = {};
    reactprops.allowTextInput = {};
    reactprops.disableAutoFocus = {};
    reactprops.placeholder = {};
    reactprops.today = {};
    reactprops.value = {};
    reactprops.formatDate = {};
    reactprops.parseDateFromString = {};
    reactprops.firstDayOfWeek = {};
    reactprops.strings = {};
    reactprops.highlightCurrentMonth = {};
    reactprops.highlightSelectedMonth = {};
    reactprops.showWeekNumbers = {};
    reactprops.firstWeekOfYear = {};
    reactprops.borderless = {};
    reactprops.className = {};
    reactprops.dateTimeFormatter = {};
    reactprops.minDate = {};
    reactprops.maxDate = {};
    reactprops.initialPickerDate = {};
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    var DuDatePicker = (function (_super) {
        __extends(DuDatePicker, _super);
        function DuDatePicker(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuDatePicker.prototype.attached = function () {
            this.renderReact(DatePicker_1.DatePicker, this.createState(reactprops));
        };
        DuDatePicker = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-date-picker'),
            __metadata("design:paramtypes", [Object])
        ], DuDatePicker);
        return DuDatePicker;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuDatePicker = DuDatePicker;
    au_react_wrapper_1.addPropertiesState(DuDatePicker, reactprops);
});
;
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
define('__dot_dot__/src/elements/Pickers/DuListPeoplePicker',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Pickers", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Pickers_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuListPeoplePicker = void 0;
    var reactprops = {};
    reactprops.items = {};
    reactprops.onResolveSuggestions = au_react_wrapper_1.onlyAureliaBound;
    reactprops.resolveDelay = {};
    reactprops.onEmptyInputFocus = au_react_wrapper_1.onlyAureliaBound;
    reactprops.defaultSelectedItems = {};
    reactprops.onChange = (function (_this, items) { _this['selectedItems'] = items; });
    reactprops.onFocus = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onBlur = au_react_wrapper_1.onlyAureliaBound;
    reactprops.getTextFromItem = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onGetMoreResults = au_react_wrapper_1.onlyAureliaBound;
    reactprops.className = {};
    reactprops.pickerSuggestionsProps = {};
    reactprops.pickerCalloutProps = {};
    reactprops.inputProps = {};
    reactprops.onRemoveSuggestion = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onValidateInput = au_react_wrapper_1.onlyAureliaBound;
    reactprops.searchingText = au_react_wrapper_1.onlyAureliaBound;
    reactprops.disabled = {};
    reactprops.itemLimit = {};
    reactprops.createGenericItem = au_react_wrapper_1.onlyAureliaBound;
    reactprops.removeButtonAriaLabel = {};
    reactprops.onItemSelected = au_react_wrapper_1.onlyAureliaBound;
    reactprops.selectedItems = {};
    reactprops.onInputChange = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.enableSelectedSuggestionAlert = {};
    reactprops.selectedItems = {};
    var DuListPeoplePicker = (function (_super) {
        __extends(DuListPeoplePicker, _super);
        function DuListPeoplePicker(element) {
            var _this_1 = _super.call(this, element) || this;
            _this_1.hidden = false;
            _this_1.hiddenIsHidden = true;
            _this_1.hiddenName = 'hidden';
            return _this_1;
        }
        DuListPeoplePicker.prototype.attached = function () {
            this.renderReact(Pickers_1.ListPeoplePicker, this.createState(reactprops));
        };
        DuListPeoplePicker = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-list-people-picker'),
            __metadata("design:paramtypes", [Object])
        ], DuListPeoplePicker);
        return DuListPeoplePicker;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuListPeoplePicker = DuListPeoplePicker;
    au_react_wrapper_1.addPropertiesState(DuListPeoplePicker, reactprops);
});
;
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
define('__dot_dot__/src/elements/Pickers/DuNormalPeoplePicker',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Pickers", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Pickers_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuNormalPeoplePicker = void 0;
    var reactprops = {};
    reactprops.items = {};
    reactprops.onResolveSuggestions = au_react_wrapper_1.onlyAureliaBound;
    reactprops.resolveDelay = {};
    reactprops.onEmptyInputFocus = au_react_wrapper_1.onlyAureliaBound;
    reactprops.defaultSelectedItems = {};
    reactprops.onChange = function (_this, items) { _this['selectedItems'] = items; };
    reactprops.onFocus = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onBlur = au_react_wrapper_1.onlyAureliaBound;
    reactprops.getTextFromItem = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onGetMoreResults = au_react_wrapper_1.onlyAureliaBound;
    reactprops.className = {};
    reactprops.pickerSuggestionsProps = {};
    reactprops.pickerCalloutProps = {};
    reactprops.inputProps = {};
    reactprops.onRemoveSuggestion = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onValidateInput = au_react_wrapper_1.onlyAureliaBound;
    reactprops.searchingText = au_react_wrapper_1.onlyAureliaBound;
    reactprops.disabled = {};
    reactprops.itemLimit = {};
    reactprops.createGenericItem = au_react_wrapper_1.onlyAureliaBound;
    reactprops.removeButtonAriaLabel = {};
    reactprops.onItemSelected = au_react_wrapper_1.onlyAureliaBound;
    reactprops.selectedItems = {};
    reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.enableSelectedSuggestionAlert = {};
    reactprops.selectedItems = {};
    var DuNormalPeoplePicker = (function (_super) {
        __extends(DuNormalPeoplePicker, _super);
        function DuNormalPeoplePicker(element) {
            var _this_1 = _super.call(this, element) || this;
            _this_1.hidden = false;
            _this_1.hiddenIsHidden = true;
            _this_1.hiddenName = 'hidden';
            return _this_1;
        }
        DuNormalPeoplePicker.prototype.attached = function () {
            this.renderReact(Pickers_1.NormalPeoplePicker, this.createState(reactprops));
        };
        DuNormalPeoplePicker = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-normal-people-picker'),
            __metadata("design:paramtypes", [Object])
        ], DuNormalPeoplePicker);
        return DuNormalPeoplePicker;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuNormalPeoplePicker = DuNormalPeoplePicker;
    au_react_wrapper_1.addPropertiesState(DuNormalPeoplePicker, reactprops);
});
;
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
define('__dot_dot__/src/elements/Pickers/DuTagPicker',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Pickers", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Pickers_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuTagPicker = void 0;
    var reactprops = {};
    reactprops.onResolveSuggestions = au_react_wrapper_1.onlyAureliaBound;
    reactprops.resolveDelay = {};
    reactprops.onEmptyInputFocus = au_react_wrapper_1.onlyAureliaBound;
    reactprops.defaultSelectedItems = {};
    reactprops.onChange = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onFocus = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onBlur = au_react_wrapper_1.onlyAureliaBound;
    reactprops.getTextFromItem = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onGetMoreResults = au_react_wrapper_1.onlyAureliaBound;
    reactprops.className = {};
    reactprops.pickerSuggestionsProps = {};
    reactprops.pickerCalloutProps = {};
    reactprops.inputProps = {};
    reactprops.onRemoveSuggestion = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onValidateInput = au_react_wrapper_1.onlyAureliaBound;
    reactprops.searchingText = {};
    reactprops.disabled = {};
    reactprops.itemLimit = {};
    reactprops.createGenericItem = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onItemSelected = au_react_wrapper_1.onlyAureliaBound;
    reactprops.selectedItems = {};
    reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.enableSelectedSuggestionAlert = {};
    reactprops.items = {};
    reactprops.selectedItems = {};
    var DuTagPicker = (function (_super) {
        __extends(DuTagPicker, _super);
        function DuTagPicker(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuTagPicker.prototype.attached = function () {
            this.renderReact(Pickers_1.TagPicker, this.createState(reactprops));
        };
        DuTagPicker = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-tag-picker'),
            __metadata("design:paramtypes", [Object])
        ], DuTagPicker);
        return DuTagPicker;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuTagPicker = DuTagPicker;
    au_react_wrapper_1.addPropertiesState(DuTagPicker, reactprops);
});
;
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
define('__dot_dot__/src/elements/ProgressValidation/DuMessageBar',["require", "exports", "aurelia-framework", "@fluentui/react/lib/MessageBar", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, MessageBar_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuMessageBar = void 0;
    var reactprops = {};
    reactprops.className = {};
    reactprops.isMultiline = {};
    reactprops.messageBarType = {};
    reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.dismissButtonAriaLabel = {};
    reactprops.truncated = {};
    reactprops.overflowButtonAriaLabel = {};
    reactprops.actions = {};
    var DuMessageBar = (function (_super) {
        __extends(DuMessageBar, _super);
        function DuMessageBar(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuMessageBar.prototype.attached = function () {
            this.renderReact(MessageBar_1.MessageBar, this.createState(reactprops));
        };
        DuMessageBar = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-message-bar'),
            __metadata("design:paramtypes", [Object])
        ], DuMessageBar);
        return DuMessageBar;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuMessageBar = DuMessageBar;
    au_react_wrapper_1.addPropertiesState(DuMessageBar, reactprops);
});
;
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
define('__dot_dot__/src/elements/ProgressValidation/DuProgressIndicator',["require", "exports", "aurelia-framework", "@fluentui/react/lib/ProgressIndicator", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, ProgressIndicator_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuProgressIndicator = void 0;
    var reactprops = {};
    reactprops.className = {};
    reactprops.barHeight = {};
    reactprops.description = {};
    reactprops.label = {};
    reactprops.percentComplete = {};
    reactprops.progressHidden = {};
    var DuProgressIndicator = (function (_super) {
        __extends(DuProgressIndicator, _super);
        function DuProgressIndicator(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuProgressIndicator.prototype.attached = function () {
            this.renderReact(ProgressIndicator_1.ProgressIndicator, this.createState(reactprops));
        };
        DuProgressIndicator = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-progress-indicator'),
            __metadata("design:paramtypes", [Object])
        ], DuProgressIndicator);
        return DuProgressIndicator;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuProgressIndicator = DuProgressIndicator;
    au_react_wrapper_1.addPropertiesState(DuProgressIndicator, reactprops);
});
;
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
define('__dot_dot__/src/elements/ProgressValidation/DuSpinner',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Spinner", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Spinner_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuSpinner = void 0;
    var reactprops = {};
    reactprops.className = {};
    reactprops.size = {};
    reactprops.label = {};
    reactprops.labelPosition = {};
    var DuSpinner = (function (_super) {
        __extends(DuSpinner, _super);
        function DuSpinner(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuSpinner.prototype.attached = function () {
            this.renderReact(Spinner_1.Spinner, this.createState(reactprops));
        };
        DuSpinner = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-spinner'),
            __metadata("design:paramtypes", [Object])
        ], DuSpinner);
        return DuSpinner;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuSpinner = DuSpinner;
    au_react_wrapper_1.addPropertiesState(DuSpinner, reactprops);
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuCallout',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Callout", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Callout_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuCallout = void 0;
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
    reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onLayerMounted = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onPositioned = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onScroll = au_react_wrapper_1.onlyAureliaBound;
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
            this.renderReact(Callout_1.Callout, this.createState(reactprops));
        };
        DuCallout = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-callout'),
            __metadata("design:paramtypes", [Object])
        ], DuCallout);
        return DuCallout;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuCallout = DuCallout;
    au_react_wrapper_1.addPropertiesState(DuCallout, reactprops);
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuCoachmark',["require", "exports", "@fluentui/react/lib/Coachmark", "aurelia-framework", "@fluentui/react/lib/TeachingBubble", "react", "react-dom", "@dunite/au-react-wrapper"], function (require, exports, Coachmark_1, aurelia_framework_1, TeachingBubble_1, React, ReactDom, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuCoachmark = void 0;
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
            this.teachingBubbleContent.reactClass = TeachingBubble_1.TeachingBubbleContent;
            var reactTeachingBubbleElement = React.createElement(au_react_wrapper_1.ReactStateWrapper, this.teachingBubbleContent);
            var a = this.createState(reactprops);
            a.aureliaHost = this;
            a.reactClass = Coachmark_1.Coachmark;
            var reactElement = React.createElement(au_react_wrapper_1.ReactStateWrapperNoChildren, a, reactTeachingBubbleElement);
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
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-coachmark'),
            __metadata("design:paramtypes", [Object])
        ], DuCoachmark);
        return DuCoachmark;
    }(au_react_wrapper_1.AuReactStateWrapperNoChildren));
    exports.DuCoachmark = DuCoachmark;
    au_react_wrapper_1.addPropertiesState(DuCoachmark, reactprops);
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuDialog',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Dialog", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Dialog_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuDialog = void 0;
    var reactprops = {};
    reactprops.dialogContentProps = {};
    reactprops.hidden = {};
    reactprops.className = {};
    reactprops.modalProps = {};
    reactprops.onDismiss = {};
    var DuDialog = (function (_super) {
        __extends(DuDialog, _super);
        function DuDialog(element) {
            var _this = _super.call(this, element) || this;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuDialog.prototype.attached = function () {
            this.renderReact(Dialog_1.Dialog, this.createState(reactprops));
        };
        DuDialog = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-dialog'),
            __metadata("design:paramtypes", [Object])
        ], DuDialog);
        return DuDialog;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuDialog = DuDialog;
    au_react_wrapper_1.addPropertiesState(DuDialog, reactprops);
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuDialogFooter',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Dialog", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Dialog_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuDialogFooter = void 0;
    var reactprops = {};
    reactprops.className = {};
    var DuDialogFooter = (function (_super) {
        __extends(DuDialogFooter, _super);
        function DuDialogFooter(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuDialogFooter.prototype.attached = function () {
            this.renderReact(Dialog_1.DialogFooter, this.createState(reactprops));
        };
        DuDialogFooter = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-dialog-footer'),
            __metadata("design:paramtypes", [Object])
        ], DuDialogFooter);
        return DuDialogFooter;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuDialogFooter = DuDialogFooter;
    au_react_wrapper_1.addPropertiesState(DuDialogFooter, reactprops);
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuDocumentCard',["require", "exports", "aurelia-framework", "@fluentui/react/lib/DocumentCard", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, DocumentCard_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuDocumentCard = void 0;
    var reactprops = {};
    reactprops.className = {};
    reactprops.onClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onClickHref = {};
    reactprops.type = {};
    reactprops.role = {};
    var DuDocumentCard = (function (_super) {
        __extends(DuDocumentCard, _super);
        function DuDocumentCard(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuDocumentCard.prototype.attached = function () {
            this.renderReact(DocumentCard_1.DocumentCard, this.createState(reactprops));
        };
        DuDocumentCard = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-document-card'),
            __metadata("design:paramtypes", [Object])
        ], DuDocumentCard);
        return DuDocumentCard;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuDocumentCard = DuDocumentCard;
    au_react_wrapper_1.addPropertiesState(DuDocumentCard, reactprops);
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuDocumentCardActions',["require", "exports", "aurelia-framework", "@fluentui/react/lib/DocumentCard", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, DocumentCard_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuDocumentCardActions = void 0;
    var reactprops = {};
    reactprops.actions = {};
    reactprops.views = {};
    var DuDocumentCardActions = (function (_super) {
        __extends(DuDocumentCardActions, _super);
        function DuDocumentCardActions(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuDocumentCardActions.prototype.attached = function () {
            this.renderReact(DocumentCard_1.DocumentCardActions, this.createState(reactprops));
        };
        DuDocumentCardActions = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-document-card-actions'),
            __metadata("design:paramtypes", [Object])
        ], DuDocumentCardActions);
        return DuDocumentCardActions;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuDocumentCardActions = DuDocumentCardActions;
    au_react_wrapper_1.addPropertiesState(DuDocumentCardActions, reactprops);
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuDocumentCardActivity',["require", "exports", "aurelia-framework", "@fluentui/react/lib/DocumentCard", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, DocumentCard_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuDocumentCardActivity = void 0;
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
            this.renderReact(DocumentCard_1.DocumentCardActivity, this.createState(reactprops));
        };
        DuDocumentCardActivity = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-document-card-activity'),
            __metadata("design:paramtypes", [Object])
        ], DuDocumentCardActivity);
        return DuDocumentCardActivity;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuDocumentCardActivity = DuDocumentCardActivity;
    au_react_wrapper_1.addPropertiesState(DuDocumentCardActivity, reactprops);
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuDocumentCardLocation',["require", "exports", "aurelia-framework", "@fluentui/react/lib/DocumentCard", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, DocumentCard_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuDocumentCardLocation = void 0;
    var reactprops = {};
    reactprops.ariaLabel = {};
    reactprops.location = {};
    reactprops.locationHref = {};
    reactprops.onClick = au_react_wrapper_1.onlyAureliaBound;
    var DuDocumentCardLocation = (function (_super) {
        __extends(DuDocumentCardLocation, _super);
        function DuDocumentCardLocation(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuDocumentCardLocation.prototype.attached = function () {
            this.renderReact(DocumentCard_1.DocumentCardLocation, this.createState(reactprops));
        };
        DuDocumentCardLocation = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-document-card-location'),
            __metadata("design:paramtypes", [Object])
        ], DuDocumentCardLocation);
        return DuDocumentCardLocation;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuDocumentCardLocation = DuDocumentCardLocation;
    au_react_wrapper_1.addPropertiesState(DocumentCard_1.DocumentCardLocation, reactprops);
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuDocumentCardPreview',["require", "exports", "aurelia-framework", "@fluentui/react/lib/DocumentCard", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, DocumentCard_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuDocumentCardPreview = void 0;
    var reactprops = {};
    reactprops.getOverflowDocumentCountText = {};
    reactprops.previewImages = {};
    var DuDocumentCardPreview = (function (_super) {
        __extends(DuDocumentCardPreview, _super);
        function DuDocumentCardPreview(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuDocumentCardPreview.prototype.attached = function () {
            this.renderReact(DocumentCard_1.DocumentCardPreview, this.createState(reactprops));
        };
        DuDocumentCardPreview = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-document-card-preview'),
            __metadata("design:paramtypes", [Object])
        ], DuDocumentCardPreview);
        return DuDocumentCardPreview;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuDocumentCardPreview = DuDocumentCardPreview;
    au_react_wrapper_1.addPropertiesState(DuDocumentCardPreview, reactprops);
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuDocumentCardTitle',["require", "exports", "aurelia-framework", "@fluentui/react/lib/DocumentCard", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, DocumentCard_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuDocumentCardTitle = void 0;
    var reactprops = {};
    reactprops.shouldTruncate = {};
    reactprops.showAsSecondaryTitle = {};
    reactprops.title = {};
    var DuDocumentCardTitle = (function (_super) {
        __extends(DuDocumentCardTitle, _super);
        function DuDocumentCardTitle(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuDocumentCardTitle.prototype.attached = function () {
            this.renderReact(DocumentCard_1.DocumentCardTitle, this.createState(reactprops));
        };
        DuDocumentCardTitle = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-document-card-title'),
            __metadata("design:paramtypes", [Object])
        ], DuDocumentCardTitle);
        return DuDocumentCardTitle;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuDocumentCardTitle = DuDocumentCardTitle;
    au_react_wrapper_1.addPropertiesState(DuDocumentCardTitle, reactprops);
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuHoverCard',["require", "exports", "aurelia-framework", "@fluentui/react/lib/HoverCard", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, HoverCard_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuHoverCard = void 0;
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
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuPanel',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Panel", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Panel_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuPanel = void 0;
    var reactprops = {};
    reactprops.isOpen = {};
    reactprops.onDismiss = {};
    reactprops.headerText = {};
    reactprops.type = {};
    var DuPanel = (function (_super) {
        __extends(DuPanel, _super);
        function DuPanel(element) {
            var _this = _super.call(this, element) || this;
            _this.hiddenIsHidden = false;
            _this.hiddenName = 'isOpen';
            return _this;
        }
        DuPanel.prototype.attached = function () {
            this.renderReact(Panel_1.Panel, this.createState(reactprops));
        };
        DuPanel = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-panel'),
            __metadata("design:paramtypes", [Object])
        ], DuPanel);
        return DuPanel;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuPanel = DuPanel;
    au_react_wrapper_1.addPropertiesState(DuPanel, reactprops);
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuTeachingBubble',["require", "exports", "aurelia-framework", "@fluentui/react/lib/TeachingBubble", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, TeachingBubble_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuTeachingBubble = void 0;
    var reactprops = {};
    reactprops.calloutProps = {};
    reactprops.hasCloseIcon = {};
    reactprops.hasCondensedHeadline = {};
    reactprops.hasSmallHeadline = {};
    reactprops.headline = {};
    reactprops.isWide = {};
    reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
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
            this.renderReact(TeachingBubble_1.TeachingBubble, this.createState(reactprops));
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Boolean)
        ], DuTeachingBubble.prototype, "hidden", void 0);
        DuTeachingBubble = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-teaching-bubble'),
            __metadata("design:paramtypes", [Object])
        ], DuTeachingBubble);
        return DuTeachingBubble;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuTeachingBubble = DuTeachingBubble;
    au_react_wrapper_1.addPropertiesState(DuTeachingBubble, reactprops);
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuTeachingBubbleContent',["require", "exports", "aurelia-framework", "@fluentui/react/lib/TeachingBubble", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, TeachingBubble_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuTeachingBubbleContent = void 0;
    var reactprops = {};
    reactprops.calloutProps = {};
    reactprops.hasCloseIcon = {};
    reactprops.hasCondensedHeadline = {};
    reactprops.hasSmallHeadline = {};
    reactprops.headline = {};
    reactprops.isWide = {};
    reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.primaryButtonProps = {};
    reactprops.secondaryButtonProps = {};
    reactprops.targetElement = {};
    reactprops.illustrationImage = {};
    var DuTeachingBubbleContent = (function (_super) {
        __extends(DuTeachingBubbleContent, _super);
        function DuTeachingBubbleContent(element) {
            var _this = _super.call(this, element) || this;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuTeachingBubbleContent.prototype.attached = function () {
            this.renderReact(TeachingBubble_1.TeachingBubbleContent, this.createState(reactprops));
        };
        DuTeachingBubbleContent = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-teaching-bubble-content'),
            __metadata("design:paramtypes", [Object])
        ], DuTeachingBubbleContent);
        return DuTeachingBubbleContent;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuTeachingBubbleContent = DuTeachingBubbleContent;
    au_react_wrapper_1.addPropertiesState(DuTeachingBubbleContent, reactprops);
});
;
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
define('__dot_dot__/src/elements/Surfaces/DuToolTip',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Tooltip", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Tooltip_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuToolTip = void 0;
    var reactprops = {};
    reactprops.calloutProps = {};
    reactprops.content = {};
    reactprops.delay = {};
    reactprops.directionalHint = {};
    reactprops.maxWidth = {};
    reactprops.onRenderContent = au_react_wrapper_1.onlyAureliaBound;
    reactprops.targetElement = {};
    reactprops.hidden = {};
    var DuToolTip = (function (_super) {
        __extends(DuToolTip, _super);
        function DuToolTip(element) {
            var _this = _super.call(this, element) || this;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuToolTip.prototype.attached = function () {
            this.renderReact(Tooltip_1.Tooltip, this.createState(reactprops));
        };
        DuToolTip = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-tool-tip'),
            __metadata("design:paramtypes", [Object])
        ], DuToolTip);
        return DuToolTip;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuToolTip = DuToolTip;
    au_react_wrapper_1.addPropertiesState(DuToolTip, reactprops);
});
;
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
define('__dot_dot__/src/elements/Utilities/DuMarqueeSelection',["require", "exports", "aurelia-framework", "@fluentui/react/lib/MarqueeSelection", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, MarqueeSelection_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuMarqueeSelection = void 0;
    var reactprops = {};
    reactprops.hidden = {};
    var DuMarqueeSelection = (function (_super) {
        __extends(DuMarqueeSelection, _super);
        function DuMarqueeSelection(element) {
            var _this = _super.call(this, element) || this;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuMarqueeSelection.prototype.attached = function () {
            this.renderReact(MarqueeSelection_1.MarqueeSelection, this.createState(reactprops));
        };
        DuMarqueeSelection = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-marquee-selection'),
            __metadata("design:paramtypes", [Object])
        ], DuMarqueeSelection);
        return DuMarqueeSelection;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuMarqueeSelection = DuMarqueeSelection;
    au_react_wrapper_1.addPropertiesState(DuMarqueeSelection, reactprops);
});
;
define('__dot_dot__/src/elements/Utilities/configsettings',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.configsettings = void 0;
    var configsettings = (function () {
        function configsettings() {
        }
        return configsettings;
    }());
    exports.configsettings = configsettings;
});
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/hello-world',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HelloWorld = void 0;
    var HelloWorld = (function () {
        function HelloWorld() {
            this.message = '';
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], HelloWorld.prototype, "message", void 0);
        return HelloWorld;
    }());
    exports.HelloWorld = HelloWorld;
});
;
define('text!__dot_dot__/src/elements/hello-world.css',[],function(){return ".hello-world {\n  background-color: lightgreen;\n}";});;
define('text!__dot_dot__/src/elements/hello-world.html',[],function(){return "<template><require from=./hello-world.css></require><h3 class=hello-world>Hello world ${message}</h3></template>";});;
define('__dot_dot__/src/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.configure = void 0;
    function configure(config) {
        config.globalResources([]);
    }
    exports.configure = configure;
});
;
define('app',["require", "exports", "aurelia-framework", "@fluentui/react/lib/Icons"], function (require, exports, aurelia_framework_1, Icons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = void 0;
    Icons_1.initializeIcons();
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
            this.showBurgerMenu = true;
            this.groups = [
                {
                    links: [
                        {
                            name: 'About',
                            url: '#',
                            links: [
                                {
                                    name: 'Gettings started',
                                    url: '#gettingstarted',
                                    key: 'gettingstarted'
                                },
                                {
                                    name: 'Why',
                                    url: '#why',
                                    key: 'why'
                                },
                                {
                                    name: 'RequireJs',
                                    url: '#reqjs',
                                    key: 'reqjs'
                                }
                            ],
                            isExpanded: true
                        },
                        { name: 'Basic Inputs', key: 'key3',
                            links: [
                                {
                                    name: 'Button',
                                    url: '#buttons',
                                    key: 'buttons'
                                },
                                {
                                    name: 'Checkbox',
                                    url: '#checkbox',
                                    key: 'checkbox'
                                },
                                {
                                    name: 'Choicegroup',
                                    url: '#choicegroup',
                                    key: 'choicegroup'
                                },
                                {
                                    name: 'Combobox',
                                    url: '#combobox',
                                    key: 'combobox'
                                },
                                {
                                    name: 'Dropdown',
                                    url: '#dropdown',
                                    key: 'dropdown'
                                },
                                {
                                    name: 'Label',
                                    url: '#label',
                                    key: 'label'
                                },
                                {
                                    name: 'Slider',
                                    url: '#slider',
                                    key: 'slider'
                                },
                                {
                                    name: 'Spinbutton',
                                    url: '#spinbutton',
                                    key: 'spinbutton'
                                },
                                {
                                    name: 'Textfield',
                                    url: '#textfield',
                                    key: 'textfield'
                                },
                                {
                                    name: 'Toggle',
                                    url: '#toggle',
                                    key: 'toggle'
                                }
                            ],
                            isExpanded: false },
                        {
                            name: 'Content',
                            links: [
                                {
                                    name: 'DetailsList',
                                    url: '#detailslist',
                                    key: 'detailslist'
                                },
                                {
                                    name: 'Persona',
                                    url: '#persona',
                                    key: 'persona'
                                },
                                {
                                    name: 'Facepile',
                                    url: '#facepile',
                                    key: 'facepile'
                                }
                            ],
                            isExpanded: false
                        },
                        {
                            name: 'Navigation',
                            links: [
                                {
                                    name: 'Breadcrumb',
                                    url: '#breadcrumb',
                                    key: 'breadcrumb'
                                },
                                {
                                    name: 'CommandBar',
                                    url: '#commandbar',
                                    key: 'commandbar'
                                },
                                {
                                    name: 'Nav',
                                    url: '#nav',
                                    key: 'nav'
                                },
                                {
                                    name: 'Pivot',
                                    url: '#pivot',
                                    key: 'pivot'
                                },
                                {
                                    name: 'Search',
                                    url: '#search',
                                    key: 'search'
                                }
                            ],
                            isExpanded: false
                        },
                        {
                            name: 'Pickers',
                            links: [
                                {
                                    name: 'PeoplePickers',
                                    url: '#peoplepickers',
                                    key: 'peoplepickers'
                                }, {
                                    name: 'TagPicker',
                                    url: '#tagpicker',
                                    key: 'tagpicker'
                                },
                                {
                                    name: 'ColorPicker',
                                    url: '#colorpicker',
                                    key: 'colorpicker'
                                },
                                {
                                    name: 'DatePicker',
                                    url: '#datepicker',
                                    key: 'datepicker'
                                }
                            ],
                            isExpanded: false
                        },
                        {
                            name: 'Progress & Validation',
                            links: [
                                {
                                    name: 'MessageBar',
                                    url: '#messagebar',
                                    key: 'messagebar'
                                },
                                {
                                    name: 'ProgressIndicator',
                                    url: '#progressindicator',
                                    key: 'progressindicator'
                                },
                                {
                                    name: 'Spinner',
                                    url: '#spinner',
                                    key: 'spinner'
                                }
                            ],
                            isExpanded: false
                        },
                        {
                            name: 'Surfaces',
                            links: [
                                {
                                    name: 'Callout',
                                    url: '#callout',
                                    key: 'callout'
                                },
                                {
                                    name: 'Dialog',
                                    url: '#dialog',
                                    key: 'dialog'
                                },
                                {
                                    name: 'DocumentCard',
                                    url: '#documentcard',
                                    key: 'documentcard'
                                },
                                {
                                    name: 'ToolTip',
                                    url: '#tooltip',
                                    key: 'tooltip'
                                },
                                {
                                    name: 'TeachingBubble',
                                    url: '#teachingbubble',
                                    key: 'teachingbubble'
                                },
                                {
                                    name: 'Coachmark',
                                    url: '#coachmark',
                                    key: 'coachmark'
                                },
                                {
                                    name: 'Panel',
                                    url: '#panel',
                                    key: 'panel'
                                }
                            ],
                            isExpanded: false
                        }
                    ]
                }
            ];
            this.log = aurelia_framework_1.LogManager.getLogger('reacthost');
        }
        App.prototype.toggleMenu = function () {
            this.showBurgerMenu = !this.showBurgerMenu;
        };
        App.prototype.configureRouter = function (config, router) {
            config.title = 'au-fluent-ui';
            config.map([
                { route: ['', '/gettingstarted'], moduleId: aurelia_framework_1.PLATFORM.moduleName('./gettingstarted'), name: 'gettingstarted', nav: true, title: 'Getting started' },
                { route: '/why', moduleId: aurelia_framework_1.PLATFORM.moduleName('./why'), name: 'why', nav: true, title: 'Why' },
                { route: '/reqjs', moduleId: aurelia_framework_1.PLATFORM.moduleName('./reqjs'), name: 'reqjs', nav: true, title: 'Require' },
                { route: '/otherstuff', moduleId: aurelia_framework_1.PLATFORM.moduleName('./otherstuff'), name: 'otherstuff', nav: true, title: 'otherstuff' },
                { route: '/buttons', moduleId: aurelia_framework_1.PLATFORM.moduleName('./basicinputs/buttons'), name: 'buttons', nav: true, title: 'Buttons' },
                { route: '/checkbox', moduleId: aurelia_framework_1.PLATFORM.moduleName('./basicinputs/checkbox'), name: 'checkbox', nav: true, title: 'Checkbox' },
                { route: '/choicegroup', moduleId: aurelia_framework_1.PLATFORM.moduleName('./basicinputs/choicegroup'), name: 'choicegroup', nav: true, title: 'ChoiceGroup' },
                { route: '/combobox', moduleId: aurelia_framework_1.PLATFORM.moduleName('./basicinputs/combobox'), name: 'combobox', nav: true, title: 'Combobox' },
                { route: '/dropdown', moduleId: aurelia_framework_1.PLATFORM.moduleName('./basicinputs/dropdown'), name: 'dropdown', nav: true, title: 'Dropdown' },
                { route: '/label', moduleId: aurelia_framework_1.PLATFORM.moduleName('./basicinputs/label'), name: 'label', nav: true, title: 'Label' },
                { route: '/slider', moduleId: aurelia_framework_1.PLATFORM.moduleName('./basicinputs/slider'), name: 'slider', nav: true, title: 'Slider' },
                { route: '/spinbutton', moduleId: aurelia_framework_1.PLATFORM.moduleName('./basicinputs/spinbutton'), name: 'spinbutton', nav: true, title: 'Spinbutton' },
                { route: '/textfield', moduleId: aurelia_framework_1.PLATFORM.moduleName('./basicinputs/textfield'), name: 'textfield', nav: true, title: 'Textfield' },
                { route: '/toggle', moduleId: aurelia_framework_1.PLATFORM.moduleName('./basicinputs/toggle'), name: 'toggle', nav: true, title: 'Toggle' },
                { route: '/breadcrumb', moduleId: aurelia_framework_1.PLATFORM.moduleName('./navigation/breadcrumb'), name: 'breadcrumb', nav: true, title: 'Breadcrumb' },
                { route: '/commandbar', moduleId: aurelia_framework_1.PLATFORM.moduleName('./navigation/commandbar'), name: 'commandbar', nav: true, title: 'Commandbar' },
                { route: '/nav', moduleId: aurelia_framework_1.PLATFORM.moduleName('./navigation/nav'), name: 'nav', nav: true, title: 'Nav' },
                { route: '/pivot', moduleId: aurelia_framework_1.PLATFORM.moduleName('./navigation/pivot'), name: 'pivot', nav: true, title: 'Pivot' },
                { route: '/search', moduleId: aurelia_framework_1.PLATFORM.moduleName('./navigation/search'), name: 'search', nav: true, title: 'Search' },
                { route: '/detailslist', moduleId: aurelia_framework_1.PLATFORM.moduleName('./content/detailslist'), name: 'detailslist', nav: true, title: 'Detailslist' },
                { route: '/facepile', moduleId: aurelia_framework_1.PLATFORM.moduleName('./content/facepile'), name: 'facepile', nav: true, title: 'Facepile' },
                { route: '/persona', moduleId: aurelia_framework_1.PLATFORM.moduleName('./content/persona'), name: 'persona', nav: true, title: 'Persona' },
                { route: '/tagpicker', moduleId: aurelia_framework_1.PLATFORM.moduleName('./pickers/pickers'), name: 'tagpicker', nav: true, title: 'Tagpicker' },
                { route: '/colorpicker', moduleId: aurelia_framework_1.PLATFORM.moduleName('./pickers/colorpicker'), name: 'colorpicker', nav: true, title: 'Colorpicker' },
                { route: '/datepicker', moduleId: aurelia_framework_1.PLATFORM.moduleName('./pickers/datepicker'), name: 'datepicker', nav: true, title: 'Datepicker' },
                { route: '/peoplepickers', moduleId: aurelia_framework_1.PLATFORM.moduleName('./pickers/peoplepickers'), name: 'peoplepickers', nav: true, title: 'PeoplePickers' },
                { route: '/messagebar', moduleId: aurelia_framework_1.PLATFORM.moduleName('./progressvalidation/messagebar'), name: 'messagebar', nav: true, title: 'Messagebar' },
                { route: '/progressindicator', moduleId: aurelia_framework_1.PLATFORM.moduleName('./progressvalidation/progressindicator'), name: 'progressindicator', nav: true, title: 'Progress Indicator' },
                { route: '/spinner', moduleId: aurelia_framework_1.PLATFORM.moduleName('./progressvalidation/spinner'), name: 'spinner', nav: true, title: 'Spinner' },
                { route: '/callout', moduleId: aurelia_framework_1.PLATFORM.moduleName('./surfaces/callout'), name: 'callout', nav: true, title: 'Callout' },
                { route: '/documentcard', moduleId: aurelia_framework_1.PLATFORM.moduleName('./surfaces/documentcard'), name: 'documentcard', nav: true, title: 'Documentcard' },
                { route: '/dialog', moduleId: aurelia_framework_1.PLATFORM.moduleName('./surfaces/dialog'), name: 'dialog', nav: true, title: 'Dialog' },
                { route: '/panel', moduleId: aurelia_framework_1.PLATFORM.moduleName('./surfaces/panel'), name: 'panel', nav: true, title: 'Panel' },
                { route: '/tooltip', moduleId: aurelia_framework_1.PLATFORM.moduleName('./surfaces/tooltip'), name: 'tooltip', nav: true, title: 'ToolTip' },
                { route: '/teachingbubble', moduleId: aurelia_framework_1.PLATFORM.moduleName('./surfaces/teachingbubble'), name: 'teachingbubble', nav: true, title: 'TeachingBubble' },
                { route: '/coachmark', moduleId: aurelia_framework_1.PLATFORM.moduleName('./surfaces/coachmark'), name: 'coachmark', nav: true, title: 'CoachMark' },
                { route: '/hovercard', moduleId: aurelia_framework_1.PLATFORM.moduleName('./surfaces/hovercard'), name: 'hovercard', nav: true, title: 'HoverCard' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});
;
define('text!app.html',[],function(){return "<template><require from=./page.css></require><div class=ms-Fabric><div class=ms-Grid dir=ltr><div class=ms-Grid-row><div class=\"ms-Grid-col ms-sm12\"><du-icon-button icon-props.one-time=\"{ iconName: 'CollapseMenu' }\" title=Menu on-click.bind=toggleMenu></du-icon-button></div></div><div class=ms-Grid-row><div class=\"ms-Grid-col ms-sm12 ms-lg3\" show.bind=showBurgerMenu><du-nav show.bind=showBurgerMenu selected-key.to-view=router.currentInstruction.config.name groups.bind=groups></du-nav></div><div class=\"ms-Grid-col ${showBurgerMenu ? 'ms-sm12 ms-lg9' : 'ms-sm12'} \"><router-view></router-view></div></div></div></div></template>";});;
define('basicinputs/buttons',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.butttons = void 0;
    var butttons = (function () {
        function butttons() {
            this.actionicon = { iconName: "Mail" };
            this.commandMenu = {
                items: [
                    {
                        key: 'emailMessage',
                        text: 'Email message',
                        name: "Email message",
                        iconProps: { iconName: 'Mail' },
                        onClick: function () { return alert('mail click'); }
                    },
                    {
                        key: 'calendarEvent',
                        text: 'Calendar event',
                        "name": "Calendar event",
                        iconProps: { iconName: 'Calendar' },
                        onClick: function () { return alert('calender click'); }
                    }
                ]
            };
            this.commandbar1 = { iconName: 'Add' };
        }
        butttons.prototype.activate = function () {
        };
        return butttons;
    }());
    exports.butttons = butttons;
});
;
define('text!basicinputs/buttons.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Button</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default Button\"><div slot=example><div class=ms-font-m-plus>Standard</div><du-default-button text=\"Default Button\"></du-default-button><div class=ms-font-m-plus>Primary</div><du-default-button text=\"Primary Button\" primary=true></du-default-button></div></examplecard><examplecard title=\"Compound Button\"><div slot=example><div><div class=ms-font-m-plus>Standard</div><du-compound-button text=\"Compound Button\" secondary-text=\"You can create an account here.\"></du-compound-button></div><div class=ms-font-m-plus>Primary</div><du-compound-button text=\"Compound Button\" primary=true secondary-text=\"You can create an account here.\"></du-compound-button></div></examplecard><examplecard title=\"CommandBar Button\"><div slot=example><du-command-bar-button text=\"Create Account\" on-click.bind=(actionButtonClick) icon-props.one-time=\"{ iconName: 'Add' }\" menu-props.bind=commandMenu split.bind=true></du-command-bar-button></div></examplecard><examplecard title=\"Split Button\"><div slot=example><du-default-button text=\"Split Button\" menu-props.bind=commandMenu on-click.bind=(actionButtonClick) split.bind=true style=height:35px></du-default-button></div></examplecard><examplecard title=\"Icon Button\"><div slot=example><du-default-button text=\"Split Button\" menu-props.bind=commandMenu on-click.bind=(actionButtonClick) split.bind=true style=height:35px></du-default-button></div></examplecard><examplecard title=\"Action Button\"><div slot=example><du-action-button text=\"View code\" icon-props.bind=actionicon></du-action-button></div></examplecard></div></template>";});;
define('basicinputs/checkbox',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.checkbox = void 0;
    var checkbox = (function () {
        function checkbox() {
            this.checked = false;
        }
        checkbox.prototype.onCheckboxChange = function (event, isChecked) {
            console.log("The option has been changed to " + isChecked + ".");
        };
        checkbox.prototype.onControlledChange = function (event, isChecked) {
            this.checked = isChecked;
        };
        return checkbox;
    }());
    exports.checkbox = checkbox;
});
;
define('text!basicinputs/checkbox.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Checkbox</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default Checkbox\"><div slot=example><du-checkbox label=\"Standard checkbox\"></du-checkbox></div></examplecard><examplecard title=\"Implementation examples\"><div slot=example><du-checkbox label=\"Uncontrolled checkbox\" on-change.bind=onCheckboxChange></du-checkbox><du-checkbox label=\"Controlled checkbox\" checked.bind=checked on-change.bind=onControlledChange></du-checkbox><du-checkbox box-side=end label=\"Box on end\"></du-checkbox><du-checkbox disabled.one-time=true label=Disabled></du-checkbox></div></examplecard></div></template>";});;
define('basicinputs/choicegroup',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.choicegroup = void 0;
    var choicegroup = (function () {
        function choicegroup() {
            this.optionsBar = [
                {
                    key: 'bar',
                    imageSrc: "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-unselected.png",
                    imageAlt: 'Bar chart icon',
                    selectedImageSrc: "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-selected.png",
                    imageSize: { width: 32, height: 32 },
                    text: 'Clustered bar chart'
                },
                {
                    key: 'pie',
                    imageSrc: "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-unselected.png",
                    imageAlt: 'Bar chart icon',
                    selectedImageSrc: "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-selected.png",
                    imageSize: { width: 32, height: 32 },
                    text: 'Pie chart'
                }
            ];
            this.optionsIcon = [
                {
                    key: 'day',
                    iconProps: { iconName: 'CalendarDay' },
                    text: 'Day'
                },
                {
                    key: 'week',
                    iconProps: { iconName: 'CalendarWeek' },
                    text: 'Week'
                },
                {
                    key: 'month',
                    iconProps: { iconName: 'Calendar' },
                    text: 'Month',
                    disabled: true
                }
            ];
        }
        choicegroup.prototype.onChange = function (event, option) {
            console.log("Event");
            console.log(event);
            console.log("Option");
            console.log(option);
        };
        return choicegroup;
    }());
    exports.choicegroup = choicegroup;
});
;
define('text!basicinputs/choicegroup.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>ChoiceGroup</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"ChoiceGroups bound with default onchange event\"><div slot=example>Key:${myvalue.key}<br>Value:${myvalue.text}<br><du-choice-group defaultselectedkey=B value.bind=myvalue options.one-time=\"[\n                      {\n                        key: 'A',\n                        text: 'Option A',\n                        'data-automation-id': 'auto1'\n                      },\n                      {\n                        key: 'B',\n                        text: 'Option B'\n                      },\n                      {\n                        key: 'C',\n                        text: 'Option C',\n                        disabled: true\n                      },\n                      {\n                        key: 'D',\n                        text: 'Option D',\n                        disabled: true\n                      }\n                    ]\" label=\"Pick one\"></du-choice-group></div></examplecard><examplecard title=\"ChoiceGroups with images\"><div slot=example><du-choice-group default-selected-key=bar options.one-time=optionsBar on-change.bind=onChange label=\"Pick one\"></du-choice-group></div></examplecard><examplecard title=\"ChoiceGroups with icons\"><div slot=example><du-choice-group default-selected-key=week value.bind=myvalue options.one-time=optionsIcon on-change.bind=onChange label=\"Pick one\"></du-choice-group></div></examplecard></div></template>";});;
define('basicinputs/combobox',["require", "exports", "@fluentui/react/lib/ComboBox"], function (require, exports, ComboBox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.combobox = void 0;
    var combobox = (function () {
        function combobox() {
            var _this = this;
            this.selectedItems = [];
            this.fruits = [
                { key: 'Header2', text: 'Fruits', itemType: ComboBox_1.SelectableOptionMenuItemType.Header },
                { key: 'Apple', text: 'apple' },
                { key: 'Banana', text: 'banana' },
                { key: 'Orange', text: 'orange', disabled: true },
                { key: 'Grape', text: 'grape', disabled: true },
                { key: 'divider_1', text: '-', itemType: ComboBox_1.SelectableOptionMenuItemType.Divider },
                { key: 'Header3', text: 'Lanuages', itemType: ComboBox_1.SelectableOptionMenuItemType.Header },
                { key: 'English', text: 'english' },
                { key: 'French', text: 'french' },
                { key: 'Germany', text: 'germany' }
            ];
            this.onChange = function (event, option, index) {
                console.log("The option has been changed to Object:");
                console.log(option);
                console.log(index);
                if (option.key != 'English') {
                    _this.errorMessage = "An error, only English is valid";
                }
                else {
                    _this.errorMessage = "";
                }
                if (option.key != 'Banana') {
                    _this.selectedItem = option.key;
                    _this.selectedItems.push(option.key);
                }
                else {
                    _this.selectedItem = "undefined";
                }
            };
            this.onMultiChange = function (event, option, index) {
                console.log("The option has been changed to Object:");
                console.log(option);
                console.log(index);
                if (option.selected) {
                    _this.selectedItems.push(option.key);
                    _this.selectedItems = _this.selectedItems.reverse();
                }
                else {
                    _this.selectedItems.splice(_this.selectedItems.indexOf(option.key), 1);
                }
            };
        }
        combobox.prototype.setApple = function () {
            this.selectedItem = "Apple";
        };
        combobox.prototype.onFocus = function () {
            console.log("onfocus log");
        };
        combobox.prototype.onBlur = function () {
            console.log("onblur log");
        };
        combobox.prototype.menuOpen = function () {
            console.log("menuopen log");
        };
        combobox.prototype.dismissed = function () {
            console.log("dismissed log");
        };
        return combobox;
    }());
    exports.combobox = combobox;
});
;
define('text!basicinputs/combobox.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Combobox</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Combobox controlled, single select\"><div slot=example><du-combo-box placeholder=\"Select an Option\" selected-key.bind=selectedItem label=\"Dropdown, controlled no-banana, with error message for anything but English\" id=dropDefaultKey options.one-time=fruits on-change.bind=onChange on-blur.bind=onBlur on-focus.bind=onFocus error-message.bind=errorMessage></du-combo-box><div>SelectedItem: ${selectedItem}</div><du-default-button click.trigger=setApple()>Set Apple</du-default-button></div></examplecard><examplecard title=\"Combobox multi select\"><div slot=example><du-combo-box placeholder=\"Select an Option\" selected-keys.bind=selectedItems label=\"Dropdown, controlled (allowFreeform: true, AutoComplete: on)\" id=dropDefaultKey options.one-time=fruits on-change.bind=onMultiChange on-blur.bind=onBlur on-focus.bind=onFocus error-message.bind=errorMessage multi-select=true allow-freeform=true></du-combo-box><div>Multi selected items:</div><div><div repeat.for=\"item of selectedItems\">${item}</div></div></div></examplecard></div></template>";});;
define('basicinputs/dropdown',["require", "exports", "@fluentui/react/lib/Dropdown"], function (require, exports, Dropdown_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dropdown = void 0;
    var dropdown = (function () {
        function dropdown() {
            this.simpleOptions = [
                { key: 'Header', text: 'Actions', itemType: Dropdown_1.DropdownMenuItemType.Header },
                { key: 'A', text: 'Option a', title: 'I am option a.' },
                { key: 'B', text: 'Option b' },
                { key: 'C', text: 'Option c', disabled: true },
                { key: 'D', text: 'Option d' },
                { key: 'E', text: 'Option e' },
                { key: 'divider_2', text: '-', itemType: Dropdown_1.DropdownMenuItemType.Divider },
                { key: 'Header2', text: 'People', itemType: Dropdown_1.DropdownMenuItemType.Header },
                { key: 'F', text: 'Option f' },
                { key: 'G', text: 'Option g' },
                { key: 'H', text: 'Option h' },
                { key: 'I', text: 'Option i' },
                { key: 'J', text: 'Option j' }
            ];
            this.fruits = [
                { key: 'Header2', text: 'Fruits', itemType: Dropdown_1.DropdownMenuItemType.Header },
                { key: 'Apple', text: 'apple' },
                { key: 'Banana', text: 'banana' },
                { key: 'Orange', text: 'orange', disabled: true },
                { key: 'Grape', text: 'grape', disabled: true },
                { key: 'divider_1', text: '-', itemType: Dropdown_1.DropdownMenuItemType.Divider },
                { key: 'Header3', text: 'Lanuages', itemType: Dropdown_1.DropdownMenuItemType.Header },
                { key: 'English', text: 'english' },
                { key: 'French', text: 'french' },
                { key: 'Germany', text: 'germany' }
            ];
        }
        dropdown.prototype.onChange = function (event, option, index) {
            console.log("The option has been changed to Object:");
            console.log(option);
            console.log(index);
            if (option.key != 'English') {
                this.errorMessage = "An error";
            }
            else {
                this.errorMessage = "";
            }
            if (option.key != 'Banana') {
                this.selectedItem = option.key;
            }
            else {
                this.selectedItem = "undefined";
            }
        };
        dropdown.prototype.onBlur = function () {
            console.log("The onBlur event");
        };
        dropdown.prototype.onFocus = function () {
            console.log("The onFocus event");
        };
        return dropdown;
    }());
    exports.dropdown = dropdown;
});
;
define('text!basicinputs/dropdown.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Dropdown</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=Dropdown><div slot=example><du-dropdown placeholder=\"Select an Option\" label=\"Basic uncontrolled example\" id=Basicdrop1 options.one-time=simpleOptions></du-dropdown></div></examplecard><examplecard title=\"Dropdown, disabled, default selected\"><div slot=example><du-dropdown placeholder=\"Select an Option\" default-selected-key=D label=\"Disabled uncontrolled example with defaultSelectedKey:\" id=dropDefaultKey options.one-time=\"[\n                        { key: 'Header', text: 'Actions', itemType: DropdownMenuItemType.Header },\n                        { key: 'A', text: 'Option a', title: 'I am option a.' },\n                        { key: 'B', text: 'Option b' },\n                        { key: 'C', text: 'Option c', disabled: true },\n                        { key: 'D', text: 'Option d' },\n                        { key: 'E', text: 'Option e' }\n                      ]\" disabled.one-time=true></du-dropdown></div></examplecard><examplecard title=\"Multi-Select uncontrolled example, required\"><div slot=example><du-dropdown placeholder=\"Select options\" label=\"Multi-Select uncontrolled example:\" default-selected-keys.one-time=\"['Apple', 'Banana', 'Orange']\" multi-select.one-time=true options.bind=fruits required.one-time=true></du-dropdown></div></examplecard><examplecard title=\"Dropdown, controlled no-banana, with error message for anything but English\"><div slot=example><du-dropdown placeholder=\"Select an Option\" selected-key.bind=selectedItem label=\"Dropdown, controlled no-banana, with error message for anything but English\" id=dropDefaultKey options.one-time=fruits on-change.bind=onChange on-blur.bind=onBlur on-focus.bind=onFocus error-message.bind=errorMessage></du-dropdown></div></examplecard></div></template>";});;
define('basicinputs/label',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.label = void 0;
    var label = (function () {
        function label() {
        }
        return label;
    }());
    exports.label = label;
});
;
define('text!basicinputs/label.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Label</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default Checkbox\"><div slot=example><du-label><span>I'm a Label with</span><span>inner content</span></du-label><du-label required.one-time=true>I'm a required Label</du-label><du-label html-for=anInput>A Label for An Input</du-label><du-text-field id=anInput></du-text-field><du-label disabled.one-time=true>I'm a disabled Label</du-label></div></examplecard></div></template>";});;
define('basicinputs/slider',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.slider = void 0;
    var slider = (function () {
        function slider() {
            this.min = -5;
            this.sliderValue = 25;
        }
        slider.prototype.onchange = function (value) {
            this.sliderValue = value;
        };
        return slider;
    }());
    exports.slider = slider;
});
;
define('text!basicinputs/slider.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Slider</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=Slider><div slot=example><du-slider label=\"Basic example:\" max=100 step.one-time=5 value.bind=sliderValue show-value.one-time=true on-change.bind=onchange></du-slider>sliderValue:${sliderValue} <du-slider label=\"Min max example:\" min.bind=-10 max=50 step.one-time=1 , default-value=2 show-value.one-time=true></du-slider><du-slider label=\"Disabled example:\" min.bind=50 max=500 step.one-time=50 , default-value=300 show-value.one-time=true disabled.one-time=true></du-slider></div></examplecard></div></template>";});;
define('basicinputs/spinbutton',["require", "exports", "elements/BasicInputs/DuSpinButton"], function (require, exports, DuSpinButton_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.spinbutton = void 0;
    var spinbutton = (function () {
        function spinbutton() {
            var _this = this;
            this.spinvalue1 = 4;
            this.spinvalue2 = 4;
            this.spinvalue3 = "4 cm";
            this.labelPosition = DuSpinButton_1.Position.end;
            this.suffix = " cm";
            this.onIncrement = function (value) {
                console.log(value);
                var newValue = _this._removeSuffix(value, _this.suffix);
                _this.spinvalue3 = String(+newValue + 2) + _this.suffix;
            };
            this.onValidate = function (value) {
                var newValue = _this._removeSuffix(value, _this.suffix);
                if (newValue.trim().length === 0 || isNaN(+newValue)) {
                    return '0' + _this.suffix;
                }
                _this.spinvalue3 = String(newValue) + _this.suffix;
            };
            this.onDecrement = function (value) {
                var newValue = _this._removeSuffix(value, _this.suffix);
                _this.spinvalue3 = String(+newValue - 2) + _this.suffix;
            };
        }
        spinbutton.prototype._hasSuffix = function (value, suffix) {
            console.log(value);
            var subString = value.substr(value.length - suffix.length);
            return subString === suffix;
        };
        spinbutton.prototype._removeSuffix = function (value, suffix) {
            if (!this._hasSuffix(value, suffix)) {
                return value;
            }
            return value.substr(0, value.length - suffix.length);
        };
        return spinbutton;
    }());
    exports.spinbutton = spinbutton;
});
;
define('text!basicinputs/spinbutton.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Spinbutton</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Basic Spinbutton\"><div slot=example><du-spin-button min=0 max=100 precision=0 value.bind=spinvalue1 step.bind=1 label=\"Basic Spinbutton:\"></du-spin-button><du-spin-button min=0 max=11 precision=1 value.bind=spinvalue2 step.bind=0.4 label=\"Decimal Spinbutton:\" icon-props.one-time=\"{ iconName: 'IncreaseIndentLegacy' }\"></du-spin-button></div></examplecard><examplecard title=\"Disabled Spinbutton\"><div slot=example><du-spin-button disabled.one-time=true min=0 max=100 precision=0 step.bind=1 label=\"Disabled Spinbutton:\"></du-spin-button></div></examplecard><examplecard title=\"Statefull Spinbutton\"><div slot=example><du-spin-button min=0 max=100 precision=0 on-increment.bind=onIncrement on-decrement.bind=onDecrement on-validate.bind=onValidate value.bind=spinvalue3 step.bind=1 label=\"Custom handler Spinbutton:\"></du-spin-button></div></examplecard><examplecard title=\"Label position Spinbutton\"><div slot=example><du-spin-button min=0 max=100 label-position.bind=labelPosition precision=0 on-increment.bind=onIncrement icon-props.one-time=\"{ iconName: 'Light' }\" on-decrement.bind=onDecrement on-validate.bind=onValidate value.bind=spinvalue3 step.bind=1 label=\"Icon position Spinbutton:\"></du-spin-button></div></examplecard></div></template>";});;
define('basicinputs/textfield',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.textfield = void 0;
    var textfield = (function () {
        function textfield() {
            var _this = this;
            this.onGetErrorMessage = function (value) {
                console.log('onGetErrorMessage');
                console.log(value);
                return value.length < 3 ? '' : "Input value length must be less than 3. Actual length is " + value.length + ".";
            };
            this.onGetErrorMessagePromise = function (value) {
                return new Promise(function (resolve) {
                    setTimeout(function () { return resolve(_this.onGetErrorMessage(value)); }, 5000);
                });
            };
        }
        textfield.prototype.onchange = function (event, newValue) {
            console.log(event);
            console.log(newValue);
            this.myvalue = newValue;
        };
        return textfield;
    }());
    exports.textfield = textfield;
});
;
define('text!basicinputs/textfield.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Textfield</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Implementation examples\"><div slot=example>name: ${name} <br><input value.bind=myvalue><du-text-field value.bind=myvalue validate.bind=onchange label=\"Standard bound to ${myvalue}\"></du-text-field><du-text-field label=Disabled disabled.one-time=true></du-text-field><du-text-field label=\"Read Only\" read-only.one-time=true></du-text-field><du-text-field label=Required required.one-time=true></du-text-field><du-text-field label=\"With error message\" error-message=\"Error message\"></du-text-field><du-text-field label=\"With placeholder message\" placeholder=\"I am a placeholder.\"></du-text-field><du-text-field label=\"Multiline resizable\" multiline=true rows=4 resizable.bind=true></du-text-field><du-text-field label=\"Multiline auto adjust\" multiline=true auto-adjust-height.bind=true rows=4></du-text-field><du-text-field label=\"Multiline non resizable\" multiline=true rows=4 resizable.bind=false></du-text-field><du-text-field label=Underlined underlined=true></du-text-field><du-text-field label=Borderless borderless=true></du-text-field><du-text-field label=AutoComplete auto-complete=true></du-text-field><du-text-field label=Prefix prefix=https:// ></du-text-field><du-text-field label=Suffix suffix=.com></du-text-field><du-text-field label=\"With icon\" icon-props.one-time=\"{ iconName: 'Calendar' }\"></du-text-field><du-text-field label=\"With description\" description=\"A description\"></du-text-field><du-text-field label=\"TextField with a string-based validator.\" on-get-error-message.bind=onGetErrorMessage></du-text-field><du-text-field on-before-change.bind=onchange on-changed.bind=onchange validate.bind=onchange label=\"TextField with a Promise-based validator.\" on-get-error-message.bind=onGetErrorMessagePromise></du-text-field></div></examplecard></div></template>";});;
define('basicinputs/toggle',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toggle = void 0;
    var toggle = (function () {
        function toggle() {
            this.checked = false;
        }
        toggle.prototype.onChange = function (event, checked) {
            console.log("onChange");
            console.log(checked);
            this.checked = checked;
        };
        ;
        return toggle;
    }());
    exports.toggle = toggle;
});
;
define('text!basicinputs/toggle.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Toggle</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Implementation examples\"><div slot=example>checked:${checked} <du-toggle off-text=MyOffText on-text=MyOnText checked.bind=checked></du-toggle><du-toggle disabled.one-time=true off-text=MyOffText on-text=MyOnText></du-toggle></div></examplecard></div></template>";});;
define('content/detailslist',["require", "exports", "@fluentui/react/lib/DetailsList"], function (require, exports, DetailsList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.detailslist = void 0;
    var detailslist = (function () {
        function detailslist() {
            var _this = this;
            this.onItemInvoked = function (item) {
                alert("Item invoked: " + item.name);
            };
            this._allItems = [];
            for (var i = 0; i < 200; i++) {
                this._allItems.push({
                    key: i,
                    name: "Item " + i,
                    value: i
                });
            }
            this._columns = [
                {
                    key: "column1",
                    name: "Name",
                    fieldName: "name",
                    minWidth: 100,
                    maxWidth: 200,
                    isResizable: true
                },
                {
                    key: "column2",
                    name: "Value",
                    fieldName: "value",
                    minWidth: 100,
                    maxWidth: 200,
                    isResizable: true
                }
            ];
            this._selection = new DetailsList_1.Selection({
                onSelectionChanged: function () {
                    console.log(_this);
                }
            });
            this._selection.setItems(this._allItems);
        }
        detailslist.prototype.selectionDetails = function () {
            var selectionCount = this._selection.getSelectedCount();
            switch (selectionCount) {
                case 0:
                    return "No items selected";
                case 1:
                    return ("1 item selected: " + this._selection.getSelection()[0].name);
                default:
                    return selectionCount + " items selected";
            }
        };
        return detailslist;
    }());
    exports.detailslist = detailslist;
});
;
define('text!content/detailslist.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>DetailsList</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default DetailsList\"><div slot=example><du-marquee-selection selection.bind=_selection hidden.one-time=false><du-details-list items.bind=_allItems election.bind=_selection on-item-invoked.bind=onItemInvoked selection-details.bind=selectionDetails columns.bind=_columns></du-details-list></du-marquee-selection></div></examplecard></div></template>";});;
define('content/facepile',["require", "exports", "@fluentui/react/lib/Persona", "./facepileexampledata", "@fluentui/react/lib/Facepile"], function (require, exports, Persona_1, facepileexampledata_1, Facepile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.facepile = void 0;
    var facepile = (function () {
        function facepile() {
            this.numberOfFaces = 5;
            this.personaSize = Persona_1.PersonaSize.large;
            this.personas = facepileexampledata_1.facepilePersonas.slice(0, this.numberOfFaces);
            this.overflowPersonas = facepileexampledata_1.facepilePersonas.slice(this.numberOfFaces);
            this.overflowButtonType = Facepile_1.OverflowButtonType.more;
            this.overflowButtonProps = {
                ariaLabel: 'More users',
                onClick: function (ev) { return alert('overflow icon clicked'); }
            };
        }
        return facepile;
    }());
    exports.facepile = facepile;
});
;
define('text!content/facepile.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Facepile</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default Facepile\"><div slot=example><du-facepile number-of-face.bind=numberOfFaces images-fade-in.one-time=true persona-size.bind=personaSize personas.bind=personas overflow-button-type.bind=overflowButtonType overflow-button-props.bind=overflowButtonProps overflow-personas.bind=overflowPersonas></du-facepile></div></examplecard></div></template>";});;
define('content/facepileexampledata',["require", "exports", "@fluentui/react/lib/Persona", "../testimages"], function (require, exports, Persona_1, testimages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.facepilePersonas = void 0;
    exports.facepilePersonas = [
        {
            imageUrl: testimages_1.TestImages.personaFemale,
            personaName: 'Annie Lindqvist',
            data: '50%'
        },
        {
            imageUrl: testimages_1.TestImages.personaFemale,
            personaName: 'Aaron Reid',
            data: '$1,000'
        },
        {
            personaName: 'Alex Lundberg',
            data: '75%',
            onClick: function (ev, persona) {
                return alert('You clicked on ' + persona.personaName + '. Extra data: ' + persona.data);
            }
        },
        {
            personaName: 'Roko Kolar',
            data: '4 hrs'
        },
        {
            imageInitials: 'CB',
            personaName: 'Christian Bergqvist',
            initialsColor: Persona_1.PersonaInitialsColor.green,
            data: '25%'
        },
        {
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'VL',
            personaName: 'Valentina Lovric',
            initialsColor: Persona_1.PersonaInitialsColor.lightBlue,
            data: 'Emp1234',
            onClick: function (ev, persona) {
                return alert('You clicked on ' + persona.personaName + '. Extra data: ' + persona.data);
            }
        },
        {
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'MS',
            personaName: 'Maor Sharett',
            initialsColor: Persona_1.PersonaInitialsColor.lightGreen
        },
        {
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'PV',
            personaName: 'Annie Lindqvist2',
            initialsColor: Persona_1.PersonaInitialsColor.lightPink
        },
        {
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'AR',
            personaName: 'Aaron Reid2',
            initialsColor: Persona_1.PersonaInitialsColor.magenta,
            data: 'Emp1234',
            onClick: function (ev, persona) {
                return alert('You clicked on ' + persona.personaName + '. Extra data: ' + persona.data);
            }
        },
        {
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'AL',
            personaName: 'Alex Lundberg2',
            initialsColor: Persona_1.PersonaInitialsColor.orange
        },
        {
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'RK',
            personaName: 'Roko Kolar2',
            initialsColor: Persona_1.PersonaInitialsColor.pink
        },
        {
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'CB',
            personaName: 'Christian Bergqvist2',
            initialsColor: Persona_1.PersonaInitialsColor.purple
        },
        {
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'VL',
            personaName: 'Valentina Lovric2',
            initialsColor: Persona_1.PersonaInitialsColor.red
        },
        {
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'MS',
            personaName: 'Maor Sharett2',
            initialsColor: Persona_1.PersonaInitialsColor.teal
        },
        {
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'VL',
            personaName: 'Another A Name',
            initialsColor: Persona_1.PersonaInitialsColor.blue
        },
        {
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'MS',
            personaName: 'Another A Name (So Many A names!)',
            initialsColor: Persona_1.PersonaInitialsColor.darkBlue
        },
        {
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'VL',
            personaName: 'Another Anecdotal A Name',
            initialsColor: Persona_1.PersonaInitialsColor.darkGreen
        },
        {
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'MS',
            personaName: 'Anerobic A Name',
            initialsColor: Persona_1.PersonaInitialsColor.darkRed
        },
        {
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'VL',
            personaName: 'Aerobic A Name',
            initialsColor: Persona_1.PersonaInitialsColor.green
        },
        {
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'MS',
            personaName: 'Maor Sharett2',
            initialsColor: Persona_1.PersonaInitialsColor.lightBlue
        },
        {
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'VL',
            personaName: 'Valentina Lovric2',
            initialsColor: Persona_1.PersonaInitialsColor.lightGreen
        },
        {
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'MS',
            personaName: 'Maor Sharett2',
            initialsColor: Persona_1.PersonaInitialsColor.lightPink
        },
        {
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'VL',
            personaName: 'Valentina Lovric2',
            initialsColor: Persona_1.PersonaInitialsColor.magenta
        },
        {
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'MS',
            personaName: 'Maor Sharett2',
            initialsColor: Persona_1.PersonaInitialsColor.orange
        }
    ];
});
;
define('content/persona',["require", "exports", "@fluentui/react/lib/Persona", "../testimages"], function (require, exports, Persona_1, testimages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.persona = void 0;
    var persona = (function () {
        function persona() {
            this.personaSize = Persona_1.PersonaSize.large;
            this.imageUrl = testimages_1.TestImages.personaMale;
            this.personaPresence = Persona_1.PersonaPresence.busy;
        }
        return persona;
    }());
    exports.persona = persona;
});
;
define('text!content/persona.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Persona</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default Persona\"><div slot=example><du-persona image-initials=AL text=\"Annie Lindqvist\" secondary-text=\"Software Engineer\" tertiary-text=\"In a meeting\" optional-text=\"Available at 4:00pm\" size.bind=personaSize image-url.bind=imageUrl presence.bind=personaPresence></du-persona></div></examplecard></div></template>";});;
define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});
;
define('gettingstarted',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.gettingstarted = void 0;
    var gettingstarted = (function () {
        function gettingstarted() {
        }
        gettingstarted.prototype.attached = function () {
            document.querySelectorAll('pre code').forEach(function (block) {
                hljs.highlightBlock(block);
            });
        };
        return gettingstarted;
    }());
    exports.gettingstarted = gettingstarted;
});
;
define('text!gettingstarted.html',[],function(){return "<template><require from=./page.css></require><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Getting started</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><h2 class=ms-font-xxl>Get started with Fluent UI for Aurelia</h2><ol class=steps><li><p>Create your project the way you are used to. We have tested with Webpack and RequireJS only but any other loader should just work. If you are using RequireJS, follow specific instructions.</p></li><li><p>Add the npm package @dunite/au-fluent-ui with below command. We have tested with npm and yarn, if you are using anything else please give feedback if it does not work for you.</p><pre><code class=shell>\nnpm install @dunite/au-fluent-ui --save\n            </code></pre></li><li><p>In your main.ts file add the following to register the plugin. Line 7 is required.</p><pre><code class=javascript>\nexport function configure(aurelia: Aurelia) {\naurelia.use\n    .standardConfiguration()\n    .feature(PLATFORM.moduleName('resources/index'))\n    // below is the new line you need\n    .plugin(PLATFORM.moduleName(\"@dunite/au-fluent-ui\"));\n\n    aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');\n\n    if (environment.testing) {\n        aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));\n    }\n    \n    return aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));\n}\n</code></pre></li><li><p>No elements are registred by the plugin. That means you need to require them with the &lt;require&gt;&lt;/require&gt; or preload them with a call to globalResources(). This will bring down bundle sizes. Below line will register one component and then it will be ready to use on any page.</p><pre><code class=javascript>\naurelia.use\n.standardConfiguration()\n.plugin(PLATFORM.moduleName(\"@dunite/au-fluent-ui\"))\n.globalResources(\n    [ // Registrera alla komponenter som denna webpart använder här\n    PLATFORM.moduleName('@dunite/au-fluent-ui/elements/BasicInputs/DuActionButton')\n    ]);\n        </code></pre><p>Check out all elements in the navigation to the left and read the specific documentation for each element.</p><p>All elements use du- prefix. That means that the colorpicker element is used with the html below.</p><pre><code class=html>\n    &#x3C;du-color-picker  alpha-slider-hidden=&#x22;true&#x22; color.bind=&#x22;thecolor&#x22; \n    on-color-changed.bind=&#x22;colorChanged&#x22;  &#x3E;&#x3C;/du-color-picker&#x3E;\n            </code></pre><p>As always we use kebab-casing for the elements and the properties. If you read the documentation on the React Fluent UI site about the property onColorChanged it is used with on-color-changed.</p></li><li><p>Regarding binding, it is Aurelia easy. In most cases you can set the value of the property directly in HTML like the alpha-slider-hidden property above. Sometimes though the React component does not parse the value correctly so you have to add .bind even if it is a simple number or boolean. It never seems to be an issue with strings though.</p><p>It is also possible to bind to literal objects as showed below with icon-props.</p><pre><code class=html>\n    &#x3C;du-command-bar-button text=&#x22;Create Account&#x22;\n    on-click.bind=&#x22;actionButtonClick&#x22;\n    icon-props.one-time=&#x22;{ iconName: &#x27;Add&#x27; }&#x22;\n    menu-props.bind=&#x22;commandMenu&#x22;\n    split.bind=&#x22;true&#x22;&#x3E;&#x3C;/du-command-bar-button&#x3E;\n            </code></pre><p>Note that you need to use .one-time since Aurelia can not update the literal object.</p><p>If you add bindings to any event always use .bind with the function name, see on-click.bind example above.</p><p>Also note that the 'this' keyword always points the current view model as you would expect.</p></li></ol></div></template>";});;
define('home',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.home = void 0;
    var home = (function () {
        function home() {
            this.magicstring = "hej";
        }
        return home;
    }());
    exports.home = home;
});
;
define('text!home.html',[],function(){return "<template>Home Binding to html value<du-label required>I'm a required Label</du-label>Binding to literal object<du-command-bar-button icon-props.one-time=\"{ iconName: 'Add' }\"></du-command-bar-button>Binding to object on parent<du-command-bar items.one-time=items></du-command-bar>Binding to object on parent<du-command-bar items.bind=items></du-command-bar>Binding to return value of function<du-command-bar items.one-time=getItems()></du-command-bar>For event onLinkClick = (reactEvent:any,item:INavLink) => { console.log('Clicked on ' + item.name + ' with key ' + item.key); };</template>";});;
define('main',["require", "exports", "aurelia-framework", "./environment"], function (require, exports, aurelia_framework_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.configure = void 0;
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./resources/elements/examplecard'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/hello-world'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuActionButton'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuCommandBarButton'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuCheckbox'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuChoiceGroup'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuComboBox'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuCompoundButton'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuContextualMenu'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuDefaultButton'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuDropdown'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuIconButton'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuLabel'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuSlider'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuSpinButton'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuTextField'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/BasicInputs/DuToggle'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Content/DuDetailsList'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Content/DuFacepile'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Content/DuGroupedList'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Content/DuPersona'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Navigation/DuBreadcrumb'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Navigation/DuCommandBar'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Navigation/DuNav'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Navigation/DuPivot'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Navigation/DuSearchBox'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Pickers/DuColorPicker'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Pickers/DuCompactPeoplePicker'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Pickers/DuDatePicker'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Pickers/DuListPeoplePicker'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Pickers/DuNormalPeoplePicker'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Pickers/DuTagPicker'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/ProgressValidation/DuMessageBar'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/ProgressValidation/DuProgressIndicator'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/ProgressValidation/DuSpinner'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuCallout'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuCoachmark'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuDocumentCard'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardActions'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardActivity'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardLocation'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardPreview'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardTitle'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuHoverCard'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuDialog'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuDialogFooter'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuPanel'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuTeachingBubble'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuTeachingBubbleContent'),
            aurelia_framework_1.PLATFORM.moduleName('./elements/Surfaces/DuToolTip')
        ]);
        aurelia.use.developmentLogging(environment_1.default.debug ? 'debug' : 'warn');
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});
;
define('navigation/breadcrumb',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.breadcrumb = void 0;
    var breadcrumb = (function () {
        function breadcrumb() {
            this.items = [
                { text: 'Files', key: 'Files', onClick: this.onBreadcrumbItemClicked },
                { text: 'This is folder 1', key: 'f1', onClick: this.onBreadcrumbItemClicked },
                { text: 'This is folder 2', key: 'f2', onClick: this.onBreadcrumbItemClicked },
                { text: 'This is folder 3', key: 'f3', onClick: this.onBreadcrumbItemClicked },
                { text: 'This is folder 4', key: 'f4', onClick: this.onBreadcrumbItemClicked },
                { text: 'This is folder 5', key: 'f5', onClick: this.onBreadcrumbItemClicked, isCurrentItem: true }
            ];
            this.items2 = [
                { text: 'Files', key: 'Files', href: '#/examples/breadcrumb', onClick: this.onBreadcrumbItemClicked },
                {
                    text: 'This is link 1',
                    key: 'l1',
                    href: '#/examples/breadcrumb',
                    onClick: this.onBreadcrumbItemClicked
                },
                {
                    text: 'This is link 2',
                    key: 'l2',
                    href: '#/examples/breadcrumb',
                    onClick: this.onBreadcrumbItemClicked
                },
                {
                    text: 'This is link 3 with a long name',
                    key: 'l3',
                    href: '#/examples/breadcrumb',
                    onClick: this.onBreadcrumbItemClicked
                },
                {
                    text: 'This is link 4',
                    key: 'l4',
                    href: '#/examples/breadcrumb',
                    onClick: this.onBreadcrumbItemClicked
                },
                {
                    text: 'This is link 5',
                    key: 'l5',
                    href: '#/examples/breadcrumb',
                    onClick: this.onBreadcrumbItemClicked,
                    isCurrentItem: true
                }
            ];
        }
        breadcrumb.prototype.returnUndefined = function () {
            return undefined;
        };
        breadcrumb.prototype.onBreadcrumbItemClicked = function (reactEvent, item) {
            console.log("Breadcrumb item with key \"" + item.key + "\" has been clicked.");
        };
        return breadcrumb;
    }());
    exports.breadcrumb = breadcrumb;
});
;
define('text!navigation/breadcrumb.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Breadcrumb</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default Breadcrumb with no maxDisplayedItems\"><div slot=example><du-breadcrumb items.one-time=items></du-breadcrumb></div></examplecard><examplecard title=\"Default Breadcrumb with max items and href\"><div slot=example><du-breadcrumb items.one-time=items2 max-displayed-items=3></du-breadcrumb></div></examplecard><examplecard title=\"Default Breadcrumb with max items 2 and overflow index 1\"><div slot=example><du-breadcrumb items.one-time=items overflow-index=1 max-displayed-items=3></du-breadcrumb></div></examplecard><examplecard title=\"Breadcrumb with static width\"><div slot=example><du-breadcrumb items.one-time=items on-reduce-data.bind=returnUndefined max-displayed-items=3></du-breadcrumb></div></examplecard></div></template>";});;
define('navigation/commandbar',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.commandbar = void 0;
    var commandbar = (function () {
        function commandbar() {
            this.getItems = function () {
                var _a, _b;
                return [
                    {
                        key: 'newItem',
                        name: 'New',
                        cacheKey: 'myCacheKey',
                        iconProps: {
                            iconName: 'Add'
                        },
                        ariaLabel: 'New. Use left and right arrow keys to navigate',
                        subMenuProps: {
                            items: [
                                (_a = {
                                        key: 'emailMessage',
                                        name: 'Email message',
                                        iconProps: {
                                            iconName: 'Mail'
                                        }
                                    },
                                    _a['data-automation-id'] = 'newEmailButton',
                                    _a),
                                {
                                    key: 'calendarEvent',
                                    name: 'Calendar event',
                                    iconProps: {
                                        iconName: 'Calendar'
                                    }
                                }
                            ]
                        }
                    },
                    (_b = {
                            key: 'upload',
                            name: 'Upload',
                            iconProps: {
                                iconName: 'Upload'
                            },
                            href: 'https://dev.office.com/fabric'
                        },
                        _b['data-automation-id'] = 'uploadButton',
                        _b),
                    {
                        key: 'share',
                        name: 'Share',
                        iconProps: {
                            iconName: 'Share'
                        },
                        onClick: function () { return console.log('Share'); }
                    },
                    {
                        key: 'download',
                        name: 'Download',
                        iconProps: {
                            iconName: 'Download'
                        },
                        onClick: function () { return console.log('Download'); }
                    }
                ];
            };
            this.getOverflowItems = function () {
                return [
                    {
                        key: 'move',
                        name: 'Move to...',
                        onClick: function () { return console.log('Move to'); },
                        iconProps: {
                            iconName: 'MoveToFolder'
                        }
                    },
                    {
                        key: 'copy',
                        name: 'Copy to...',
                        onClick: function () { return console.log('Copy to'); },
                        iconProps: {
                            iconName: 'Copy'
                        }
                    },
                    {
                        key: 'rename',
                        name: 'Rename...',
                        onClick: function () { return console.log('Rename'); },
                        iconProps: {
                            iconName: 'Edit'
                        }
                    }
                ];
            };
            this.getFarItems = function () {
                return [
                    {
                        key: 'sort',
                        name: 'Sort',
                        iconProps: {
                            iconName: 'SortLines'
                        },
                        onClick: function () { return console.log('Sort'); }
                    },
                    {
                        key: 'tile',
                        name: 'Grid view',
                        iconProps: {
                            iconName: 'Tiles'
                        },
                        iconOnly: true,
                        onClick: function () { return console.log('Tiles'); }
                    },
                    {
                        key: 'info',
                        name: 'Info',
                        iconProps: {
                            iconName: 'Info'
                        },
                        iconOnly: true,
                        onClick: function () { return console.log('Info'); }
                    }
                ];
            };
        }
        return commandbar;
    }());
    exports.commandbar = commandbar;
});
;
define('text!navigation/commandbar.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>CommandBar</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"CommandBar with overflowing menu items\"><div slot=example><du-command-bar items.one-time=getItems() overflow-items.one-time=getOverflowItems() far-items.one-time=getFarItems()></du-command-bar></div></examplecard></div></template>";});;
define('navigation/nav',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.nav = void 0;
    var nav = (function () {
        function nav() {
            this.onLinkClick = function (reactEvent, item) {
                console.log('Clicked on ' + item.name + ' with key ' + item.key);
            };
            this.navgroups = [
                {
                    links: [
                        {
                            name: 'Home',
                            links: [
                                {
                                    name: 'Activity',
                                    key: 'key1'
                                },
                                {
                                    name: 'MSN',
                                    key: 'key2'
                                }
                            ],
                            isExpanded: true
                        },
                        { name: 'Documents', url: 'http://example.com', key: 'key3', isExpanded: true },
                        { name: 'Pages', url: 'http://msn.com', key: 'key4' },
                        { name: 'Notebook', url: 'http://msn.com', key: 'key5' },
                        { name: 'Long Name Test for ellipse', url: 'http://msn.com', key: 'key6' },
                        {
                            name: 'News',
                            url: 'http://www.dunite.se',
                            icon: 'News',
                            key: 'key8'
                        }
                    ]
                }
            ];
        }
        return nav;
    }());
    exports.nav = nav;
});
;
define('text!navigation/nav.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Nav</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default Nav\"><div slot=example><du-nav groups.bind=navgroups on-link-click.bind=onLinkClick expanded-state-text=expanded collapsed-state-text=collapsed selected-key=key3></du-nav></div></examplecard></div></template>";});;
define('navigation/pivot',["require", "exports", "@fluentui/react/lib/Pivot"], function (require, exports, Pivot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pivot = void 0;
    var pivot = (function () {
        function pivot() {
            var _this = this;
            this.items = [
                { headerText: 'My files', itemKey: 'k1' },
                { headerText: 'Recent', itemKey: 'k2' },
                { headerText: 'Shared with me', itemKey: 'k3' }
            ];
            this.items2 = [
                { headerText: 'My files', itemKey: 'k1', itemCount: 42, itemIcon: "Emoji2" },
                { headerText: 'Recent', itemKey: 'k2', itemCount: 23, itemIcon: "Globe" },
                { headerText: 'Shared with me', itemKey: 'k3', itemIcon: "Ringer", itemCount: 1 }
            ];
            this.pivotLinkSize = Pivot_1.PivotLinkSize.large;
            this.pivotTabFormat = Pivot_1.PivotLinkFormat.tabs;
            this.selectedTab = "k1";
            this.onLinkClick = function (item, ev) {
                _this.selectedTab = item.props.itemKey;
            };
        }
        return pivot;
    }());
    exports.pivot = pivot;
});
;
define('text!navigation/pivot.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Pivot</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default Pivot\"><div slot=example><du-pivot items.bind=items></du-pivot></div></examplecard><examplecard title=\"Count and Icon Pivot\"><div slot=example><du-pivot items.bind=items2></du-pivot></div></examplecard><examplecard title=\"Large Link size\"><div slot=example><du-pivot link-size.bind=pivotLinkSize items.bind=items></du-pivot></div></examplecard><examplecard title=\"Tab format\"><div slot=example><du-pivot link-format.bind=pivotTabFormat items.bind=items></du-pivot></div></examplecard><examplecard title=\"Trigger onchange event\"><div slot=example><du-pivot on-link-click.bind=onLinkClick link-format.bind=pivotTabFormat items.bind=items></du-pivot><div show.bind=\"selectedTab=='k1'\">Content for tab with itemKey k1</div><div show.bind=\"selectedTab=='k2'\">Content for tab with itemKey k2</div><div show.bind=\"selectedTab=='k3'\">Content for tab with itemKey k3</div></div></examplecard></div></template>";});;
define('navigation/search',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.search = void 0;
    var search = (function () {
        function search() {
            var _this = this;
            this.searchText = "example";
            this.onSearch = function (searchCommandValue) {
                console.log('searchCommandValue = ' + searchCommandValue);
            };
            this.onChange2 = function (event, newValue) {
                _this.searchText = newValue;
            };
        }
        search.prototype.onBlur = function () {
            console.log("onBlur");
        };
        search.prototype.onChange = function (event, newValue) {
            console.log('onChange new value = ' + newValue);
        };
        search.prototype.onFocus = function () {
            console.log("onfocus");
        };
        return search;
    }());
    exports.search = search;
});
;
define('text!navigation/search.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Search</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default Search\"><div slot=example><du-search-box placeholder=Search on-search.bind=onSearch on-focus.bind=onFocus on-blur.bind=onBlur on-change.bind=onChange></du-search-box></div></examplecard><examplecard title=\"Underlined Search\"><div slot=example><du-search-box placeholder=Search underlined=true value.bind=searchText on-change.bind=onChange2></du-search-box>searchText:'${searchText}'</div></examplecard><examplecard title=\"Disabled Search\"><div slot=example><du-search-box placeholder=Search on-search.bind=onSearch disabled.one-time=true></du-search-box></div></examplecard></div></template>";});;
define('otherstuff',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.otherstuff = void 0;
    var otherstuff = (function () {
        function otherstuff() {
            var _this = this;
            this.onGetErrorMessage = function (value) {
                console.log('onGetErrorMessage');
                console.log(value);
                return value.length < 3 ? '' : "Input value length must be less than 3. Actual length is " + value.length + ".";
            };
            this.onGetErrorMessagePromise = function (value) {
                return new Promise(function (resolve) {
                    setTimeout(function () { return resolve(_this.onGetErrorMessage(value)); }, 5000);
                });
            };
        }
        otherstuff.prototype.onchange = function (event, newValue) {
            console.log(event);
            console.log(newValue);
            this.myvalue = newValue;
        };
        return otherstuff;
    }());
    exports.otherstuff = otherstuff;
});
;
define('text!otherstuff.html',[],function(){return "<template>'${myvalue}' hej<mytext value.bind=myvalue on-get-error-message.bind=onGetErrorMessagePromise label=\"Standard bound to\"></mytext>hej <input value.bind=myvalue></template>";});;
define('text!page.css',[],function(){return ".PageSection {\n  padding: 50px;\n  max-width: 1023px;\n}\n\n.content {\n  padding: 0 16px 0 16px;\n  margin-bottom: 2px;\n  min-width: 800px;\n}\n\n.pageTitle {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  color: #f8f8f8;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 48px;\n  font-weight: 100;\n  line-height: 1;\n  padding: 40px 0;\n  -webkit-transition: font-size 0.167s cubic-bezier(0.1, 0.9, 0.2, 1);\n  transition: font-size 0.167s cubic-bezier(0.1, 0.9, 0.2, 1);\n}\n\n.steps {\n  counter-reset: li;\n  max-width: 50em;\n  margin: 60px auto;\n}\n\nol, ul {\n  padding: 0;\n  list-style: none;\n}\n\n.steps li::before {\n  color: #038387;\n  content: counter(li);\n  counter-increment: li;\n  font-size: 48px;\n  font-weight: 100;\n  line-height: 38px;\n  position: absolute;\n  top: 0;\n}\n\n.steps li {\n  list-style: none;\n  position: relative;\n  padding-bottom: 24px;\n  padding-top: 56px;\n}\n\n.ms-Fabric {\n  font-family: \"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n/*\nfont-family: \"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\n*/";});;
define('pickers/colorpicker',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.colorpicker = void 0;
    var colorpicker = (function () {
        function colorpicker() {
            this.thecolor = "#ffffff";
        }
        colorpicker.prototype.colorChanged = function (ev, colorObj) {
            this.thecolor = colorObj.str;
        };
        return colorpicker;
    }());
    exports.colorpicker = colorpicker;
});
;
define('text!pickers/colorpicker.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>ColorPicker</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default ColorPicker\"><div slot=example><du-text-field value.bind=thecolor label=Standard></du-text-field><du-color-picker alpha-slider-hidden=true color.bind=thecolor></du-color-picker></div></examplecard></div></template>";});;
define('pickers/datepicker',["require", "exports", "@fluentui/date-time-utilities"], function (require, exports, date_time_utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.datepicker = void 0;
    var datepicker = (function () {
        function datepicker() {
            this.onFormatDate = function (date) {
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear() % 100);
            };
            this.today = new Date(Date.now());
            this.minDate = date_time_utilities_1.addMonths(this.today, -1);
            this.maxDate = date_time_utilities_1.addYears(this.today, 1);
        }
        datepicker.prototype.selected = function (date) {
            this.mydate = date;
        };
        return datepicker;
    }());
    exports.datepicker = datepicker;
});
;
define('text!pickers/datepicker.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>DatePicker</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default DatePicker\"><div slot=example><du-date-picker on-select-date.bind=selected value.bind=mydate placeholder=\"Select a date\" show-week-numbers=true></du-date-picker>!${mydate}!</div></examplecard><examplecard title=\"No month picker in DatePicker\"><div slot=example><du-date-picker is-month-picker-visible.one-time=false></du-date-picker></div></examplecard><examplecard title=\"Required DatePicker\"><div slot=example><du-date-picker is-required.one-time=true></du-date-picker></div></examplecard><examplecard title=\"DatePicker allows dates to be formatted\"><div slot=example><du-date-picker format-date.bind=onFormatDate></du-date-picker></div></examplecard><examplecard title=\"DatePicker with date boundary (minDate, maxDate)\"><div slot=example><du-date-picker min-date.bind=minDate max-date.bind=maxDate></du-date-picker></div></examplecard></div></template>";});;
define('pickers/peoplepickerexampledata',["require", "exports", "@fluentui/react/lib/Persona", "../testimages"], function (require, exports, Persona_1, testimages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mru = exports.people = void 0;
    exports.people = [
        {
            key: 1,
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'PV',
            text: 'Annie Lindqvist',
            secondaryText: 'Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.online
        },
        {
            key: 2,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'AR',
            text: 'Aaron Reid',
            secondaryText: 'Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.busy
        },
        {
            key: 3,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'AL',
            text: 'Alex Lundberg',
            secondaryText: 'Software Developer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.dnd
        },
        {
            key: 4,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'RK',
            text: 'Roko Kolar',
            secondaryText: 'Financial Analyst',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.offline
        },
        {
            key: 5,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'CB',
            text: 'Christian Bergqvist',
            secondaryText: 'Sr. Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.online
        },
        {
            key: 6,
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'VL',
            text: 'Valentina Lovric',
            secondaryText: 'Design Developer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.online
        },
        {
            key: 7,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'MS',
            text: 'Maor Sharett',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.away
        },
        {
            key: 8,
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'PV',
            text: 'Anny Lindqvist',
            secondaryText: 'Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.busy
        },
        {
            key: 9,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'AR',
            text: 'Aron Reid',
            secondaryText: 'Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.dnd
        },
        {
            key: 10,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'AL',
            text: 'Alix Lundberg',
            secondaryText: 'Software Developer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.offline
        },
        {
            key: 11,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'RK',
            text: 'Roko Kular',
            secondaryText: 'Financial Analyst',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.none
        },
        {
            key: 12,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'CB',
            text: 'Christian Bergqvest',
            secondaryText: 'Sr. Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.busy
        },
        {
            key: 13,
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'VL',
            text: 'Valintina Lovric',
            secondaryText: 'Design Developer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.busy
        },
        {
            key: 14,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'MS',
            text: 'Maor Sharet',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.blocked
        },
        {
            key: 15,
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'VL',
            text: 'Anny Lindqvest',
            secondaryText: 'SDE',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.blocked
        },
        {
            key: 16,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'MS',
            text: 'Alix Lunberg',
            secondaryText: 'SE',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.away
        },
        {
            key: 17,
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'VL',
            text: 'Annie Lindqvest',
            secondaryText: 'SDET',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.online
        },
        {
            key: 18,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'MS',
            text: 'Alixander Lundberg',
            secondaryText: 'Senior Manager of SDET',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.offline
        },
        {
            key: 19,
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'VL',
            text: 'Anny Lundqvist',
            secondaryText: 'Junior Manager of Software',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.away
        },
        {
            key: 20,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'MS',
            text: 'Maor Shorett',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.blocked
        },
        {
            key: 21,
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'VL',
            text: 'Valentina Lovrics',
            secondaryText: 'Design Developer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.online
        },
        {
            key: 22,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'MS',
            text: 'Maor Sharet',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.online
        },
        {
            key: 23,
            imageUrl: testimages_1.TestImages.personaFemale,
            imageInitials: 'VL',
            text: 'Valentina Lovrecs',
            secondaryText: 'Design Developer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.blocked
        },
        {
            key: 24,
            imageUrl: testimages_1.TestImages.personaMale,
            imageInitials: 'MS',
            text: 'Maor Sharitt',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.offline
        },
        {
            key: 25,
            imageUrl: './images/persona-male.png',
            imageInitials: 'MS',
            text: 'Maor Shariett',
            secondaryText: 'Design Developer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 3:00pm',
            presence: Persona_1.PersonaPresence.online
        },
        {
            key: 26,
            imageUrl: './images/persona-female.png',
            imageInitials: 'AL',
            text: 'Alix Lundburg',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 3:00pm',
            presence: Persona_1.PersonaPresence.away
        },
        {
            key: 27,
            imageUrl: './images/persona-female.png',
            imageInitials: 'VL',
            text: 'Valantena Lovric',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.busy
        },
        {
            key: 28,
            imageUrl: './images/persona-female.png',
            imageInitials: 'VL',
            text: 'Velatine Lourvric',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.online
        },
        {
            key: 29,
            imageUrl: './images/persona-female.png',
            imageInitials: 'VL',
            text: 'Valentyna Lovrique',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.busy
        },
        {
            key: 30,
            imageUrl: './images/persona-female.png',
            imageInitials: 'AL',
            text: 'Annie Lindquest',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.dnd
        },
        {
            key: 31,
            imageUrl: './images/persona-female.png',
            imageInitials: 'AL',
            text: 'Anne Lindquist',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.blocked
        },
        {
            key: 32,
            imageUrl: './images/persona-female.png',
            imageInitials: 'AL',
            text: 'Ann Lindqiest',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.online
        },
        {
            key: 33,
            imageUrl: './images/persona-male.png',
            imageInitials: 'AR',
            text: 'Aron Reid',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.away
        },
        {
            key: 34,
            imageUrl: './images/persona-male.png',
            imageInitials: 'AR',
            text: 'Aaron Reed',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.offline
        },
        {
            key: 35,
            imageUrl: './images/persona-female.png',
            imageInitials: 'AL',
            text: 'Alix Lindberg',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.busy
        },
        {
            key: 36,
            imageUrl: './images/persona-male.png',
            imageInitials: 'AL',
            text: 'Alan Lindberg',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.busy
        },
        {
            key: 37,
            imageUrl: './images/persona-male.png',
            imageInitials: 'MS',
            text: 'Maor Sharit',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.offline
        },
        {
            key: 38,
            imageUrl: './images/persona-male.png',
            imageInitials: 'MS',
            text: 'Maorr Sherit',
            secondaryText: 'UX Designer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.online
        },
        {
            key: 39,
            imageUrl: './images/persona-male.png',
            imageInitials: 'AL',
            text: 'Alex Lindbirg',
            secondaryText: 'Software Developer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.dnd
        },
        {
            key: 40,
            imageUrl: './images/persona-male.png',
            imageInitials: 'AL',
            text: 'Alex Lindbarg',
            secondaryText: 'Software Developer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
            presence: Persona_1.PersonaPresence.online
        }
    ];
    exports.mru = exports.people.slice(0, 5);
});
;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define('pickers/peoplepickers',["require", "exports", "./peoplepickerexampledata", "@fluentui/react/lib/Pickers", "@fluentui/react/lib/Utilities"], function (require, exports, peoplepickerexampledata_1, Pickers_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.peoplepickers = void 0;
    var peoplepickers = (function () {
        function peoplepickers() {
            this.selectedItemsNormal = [];
            this.selectedItemsCompact = [];
            this.selectedItemsList = [];
            this.selectedItemsLimited = [];
            this.suggestionProps = {
                suggestionsHeaderText: 'Suggested People',
                mostRecentlyUsedHeaderText: 'Suggested Contacts',
                noResultsFoundText: 'No results found',
                loadingText: 'Loading',
                showRemoveButtons: true,
                suggestionsAvailableAlertText: 'People Picker Suggestions available',
                suggestionsContainerAriaLabel: 'Suggested contacts'
            };
            this.limitedSearchSuggestionProps = Utilities_1.assign({
                searchForMoreText: 'Load all Results',
                resultsMaximumNumber: 10,
                searchingText: 'Searching...'
            }, this.suggestionProps);
            this.inputProps = {
                onBlur: function (ev) { return console.log('onBlur called'); },
                onFocus: function (ev) { return console.log('onFocus called'); },
                'aria-label': 'People Picker'
            };
            this.state = {
                delayResults: false,
                peopleList: peoplepickerexampledata_1.people,
                mostRecentlyUsed: peoplepickerexampledata_1.mru
            };
            this.selectedItemsCompact = peoplepickerexampledata_1.people.splice(0, 3);
        }
        peoplepickers.prototype.onChangeNormal = function (items) {
            this.selectedItemsNormal = items;
        };
        peoplepickers.prototype.onChangeCompact = function (items) {
            this.selectedItemsCompact = items;
        };
        peoplepickers.prototype.onChangeList = function (items) {
            this.selectedItemsList = items;
        };
        peoplepickers.prototype.onChangeLimited = function (items) {
            this.selectedItemsLimited = items;
        };
        peoplepickers.prototype.onItemSelected = function (item) {
            var processedItem = __assign({}, item);
            processedItem.text = item.text + " (selected)";
            return new Promise(function (resolve, reject) { return setTimeout(function () { return resolve(processedItem); }, 250); });
            ;
        };
        peoplepickers.prototype._returnMostRecentlyUsed = function (currentPersonas) {
            var mostRecentlyUsed = this.state.mostRecentlyUsed;
            mostRecentlyUsed = this._removeDuplicates(mostRecentlyUsed, currentPersonas);
            return this._filterPromise(mostRecentlyUsed);
        };
        peoplepickers.prototype._returnMostRecentlyUsedWithLimit = function (currentPersonas) {
            console.log("_returnMostRecentlyUsedWithLimit");
            var mostRecentlyUsed = this.state.mostRecentlyUsed;
            mostRecentlyUsed = this._removeDuplicates(mostRecentlyUsed, currentPersonas);
            mostRecentlyUsed = mostRecentlyUsed.splice(0, 3);
            return this._filterPromise(mostRecentlyUsed);
        };
        ;
        peoplepickers.prototype._removeDuplicates = function (personas, possibleDupes) {
            var _this = this;
            return personas.filter(function (persona) { return !_this._listContainsPersona(persona, possibleDupes); });
        };
        peoplepickers.prototype._filterPromise = function (personasToReturn) {
            if (this.state.delayResults) {
                return this._convertResultsToPromise(personasToReturn);
            }
            else {
                return personasToReturn;
            }
        };
        peoplepickers.prototype._listContainsPersona = function (persona, personas) {
            if (!personas || !personas.length || personas.length === 0) {
                return false;
            }
            return personas.filter(function (item) { return item.text === persona.text; }).length > 0;
        };
        peoplepickers.prototype._convertResultsToPromise = function (results) {
            return new Promise(function (resolve, reject) { return setTimeout(function () { return resolve(results); }, 2000); });
        };
        peoplepickers.prototype._onRemoveSuggestion = function (item) {
            console.log("_onRemoveSuggestion");
            console.log(this);
            var _a = this.state, peopleList = _a.peopleList, mruState = _a.mostRecentlyUsed;
            var indexPeopleList = peopleList.indexOf(item);
            var indexMostRecentlyUsed = mruState.indexOf(item);
            if (indexPeopleList >= 0) {
                var newPeople = peopleList.slice(0, indexPeopleList).concat(peopleList.slice(indexPeopleList + 1));
                this.state.peopleList = newPeople;
            }
            if (indexMostRecentlyUsed >= 0) {
                var newSuggestedPeople = mruState
                    .slice(0, indexMostRecentlyUsed)
                    .concat(mruState.slice(indexMostRecentlyUsed + 1));
                this.state.mostRecentlyUsed = newSuggestedPeople;
            }
        };
        ;
        peoplepickers.prototype._validateInput = function (input) {
            console.log("_validateInput");
            if (input.indexOf('@') !== -1) {
                return Pickers_1.ValidationState.valid;
            }
            else if (input.length > 1) {
                return Pickers_1.ValidationState.warning;
            }
            else {
                return Pickers_1.ValidationState.invalid;
            }
        };
        ;
        peoplepickers.prototype._onFilterChangedWithLimit = function (filterText, currentPersonas, limitResults) {
            console.log(limitResults);
            limitResults = 3;
            if (filterText) {
                var filteredPersonas = this._filterPersonasByText(filterText);
                filteredPersonas = this._removeDuplicates(filteredPersonas, currentPersonas);
                filteredPersonas = filteredPersonas.splice(0, limitResults);
                return this._filterPromise(filteredPersonas);
            }
            else {
                return [];
            }
        };
        ;
        peoplepickers.prototype._onFilterChanged = function (filterText, currentPersonas, limitResults) {
            if (filterText) {
                var filteredPersonas = this._filterPersonasByText(filterText);
                filteredPersonas = this._removeDuplicates(filteredPersonas, currentPersonas);
                filteredPersonas = limitResults ? filteredPersonas.splice(0, limitResults) : filteredPersonas;
                return this._filterPromise(filteredPersonas);
            }
            else {
                return [];
            }
        };
        ;
        peoplepickers.prototype._filterPersonasByText = function (filterText) {
            var _this = this;
            return this.state.peopleList.filter(function (item) { return _this._doesTextStartWith(item.text, filterText); });
        };
        peoplepickers.prototype._doesTextStartWith = function (text, filterText) {
            return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
        };
        peoplepickers.prototype._getTextFromItem = function (persona) {
            return persona.text;
        };
        return peoplepickers;
    }());
    exports.peoplepickers = peoplepickers;
});
;
define('text!pickers/peoplepickers.html',[],function(){return "<template><require from=./pickers.css></require><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>People Pickers</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Controlled Processed List People Picker\"><div slot=example><du-list-people-picker on-change.bind=onChangeList items.bind=selectedItemsList on-item-selected.bind=onItemSelected on-resolve-suggestions.bind=_onFilterChanged get-text-from-item.bind=_getTextFromItem input-props.bind=inputProps on-empty-input-focus.bind=_returnMostRecentlyUsed class-name=ms-PeoplePicker picker-suggestions-props.bind=suggestionProps key=list on-remove-suggestion.bind=_onRemoveSuggestion on-validate-input.bind=_validateInput resolve-delay.one-time=300></du-list-people-picker><du-label>Below list is bound to aurelia property on view model</du-label><ul><li style=list-style-type:none repeat.for=\"item of selectedItemsList\">${item.text}</li></ul></div></examplecard><examplecard title=\"Controlled Processed Compact People Picker, with preselect\"><div slot=example><du-compact-people-picker on-change.bind=onChangeCompact items.bind=selectedItemsCompact default-selected-items.one-time=\"state.peopleList.splice(0, 3)\" on-item-selected.bind=onItemSelected on-resolve-suggestions.bind=_onFilterChanged get-text-from-item.bind=_getTextFromItem input-props.bind=inputProps on-empty-input-focus.bind=_returnMostRecentlyUsed class-name=ms-PeoplePicker picker-suggestions-props.bind=suggestionProps key=compact on-remove-suggestion.bind=_onRemoveSuggestion on-validate-input.bind=_validateInput resolve-delay.one-time=300></du-compact-people-picker><du-label>Below list is bound to aurelia property on view model</du-label><ul><li style=list-style-type:none repeat.for=\"item of selectedItemsCompact\">${item.text}</li></ul></div></examplecard><examplecard title=\"Controlled Processed Normal People Picker\"><div slot=example><du-normal-people-picker on-change.bind=onChangeNormal items.bind=selectedItemsNormal on-item-selected.bind=onItemSelected on-resolve-suggestions.bind=_onFilterChanged get-text-from-item.bind=_getTextFromItem input-props.bind=inputProps on-empty-input-focus.bind=_returnMostRecentlyUsed class-name=ms-PeoplePicker picker-suggestions-props.bind=suggestionProps key=normal on-remove-suggestion.bind=_onRemoveSuggestion on-validate-input.bind=_validateInput resolve-delay.one-time=300></du-normal-people-picker><du-label>Below list is bound to aurelia property on view model</du-label><ul><li style=list-style-type:none repeat.for=\"item of selectedItemsNormal\">${item.text}</li></ul></div></examplecard><examplecard title=\"Controlled Processed Limited to 3 Compact People Picker\"><div slot=example><du-compact-people-picker on-change.bind=onChangeLimited items.bind=selectedItemsLimited on-item-selected.bind=onItemSelected on-resolve-suggestions.bind=_onFilterChangedWithLimit get-text-from-item.bind=_getTextFromItem input-props.bind=inputProps on-empty-input-focus.bind=_returnMostRecentlyUsedWithLimit class-name=ms-PeoplePicker picker-suggestions-props.bind=limitedSearchSuggestionProps key=compact on-remove-suggestion.bind=_onRemoveSuggestion on-validate-input.bind=_validateInput resolve-delay.one-time=300 on-get-more-results.bind=_onFilterChanged></du-compact-people-picker><du-label>Below list is bound to aurelia property on view model</du-label><ul><li style=list-style-type:none repeat.for=\"item of selectedItemsLimited\">${item.text}</li></ul></div></examplecard></div></template>";});;
define('pickers/pickers',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pickers = void 0;
    var _testTags = [
        'black',
        'blue',
        'brown',
        'cyan',
        'green',
        'magenta',
        'mauve',
        'orange',
        'pink',
        'purple',
        'red',
        'rose',
        'violet',
        'white',
        'yellow'
    ].map(function (item) { return ({ key: item, name: item }); });
    var pickers = (function () {
        function pickers() {
            this.selectedItems = [];
            this.inputProps = {
                onBlur: function (ev) { return console.log('onBlur called'); },
                onFocus: function (ev) { return console.log('onFocus called'); },
                'aria-label': 'Tag Picker'
            };
        }
        pickers.prototype.onFilterChanged = function (filterText, tagList) {
            var _this = this;
            var retValue = filterText
                ? _testTags
                    .filter(function (tag) { return tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0; })
                    .filter(function (tag) { return !_this.listContainsDocument(tag, tagList); })
                : [];
            return retValue;
        };
        pickers.prototype.onChange = function (items) {
            this.selectedItems = items;
            console.log(this.selectedItems);
        };
        pickers.prototype.listContainsDocument = function (tag, tagList) {
            if (!tagList || !tagList.length || tagList.length === 0) {
                return false;
            }
            return tagList.filter(function (compareTag) { return compareTag.key === tag.key; }).length > 0;
        };
        pickers.prototype.onItemSelected = function (item) {
            if (item.key == "blue") {
                return null;
            }
            return item;
        };
        return pickers;
    }());
    exports.pickers = pickers;
});
;
define('text!pickers/pickers.css',[],function(){return "du-tag-picker .ms-TagItem {\n  display: inline-block;\n}";});;
define('text!pickers/pickers.html',[],function(){return "<template><require from=./pickers.css></require><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Pickers</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Controlled Tag Picker, anything but blue.\"><div slot=code></div><div slot=example><du-tag-picker on-resolve-suggestions.bind=onFilterChanged on-item-selected.bind=onItemSelected get-text-from-item.bind=getTextFromItem picker-suggestions-props.one-time=\"{\n              suggestionsHeaderText: 'Suggested Tags',\n              noResultsFoundText: 'No Color Tags Found'\n            }\" item-limit=8 input-props.bind=inputProps></du-tag-picker></div></examplecard><examplecard title=\"Controlled and items bound Tag Picker, anything but blue.\"><div slot=example><du-tag-picker items.bind=selectedItems on-resolve-suggestions.bind=onFilterChanged on-change.bind=onChange on-item-selected.bind=onItemSelected get-text-from-item.bind=getTextFromItem picker-suggestions-props.one-time=\"{\n            suggestionsHeaderText: 'Suggested Tags',\n            noResultsFoundText: 'No Color Tags Found'\n          }\" item-limit=8 input-props.bind=inputProps selected-items.bind=selectedItems></du-tag-picker><ul><li repeat.for=\"item of selectedItems\">${item.key}</li></ul></div></examplecard></div></template>";});;
define('progressvalidation/messagebar',["require", "exports", "@fluentui/react/lib/MessageBar"], function (require, exports, MessageBar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.messagebar = void 0;
    var messagebar = (function () {
        function messagebar() {
            this.errorType = MessageBar_1.MessageBarType.error;
            this.blockedType = MessageBar_1.MessageBarType.blocked;
            this.infoType = MessageBar_1.MessageBarType.info;
            this.severeWarningType = MessageBar_1.MessageBarType.severeWarning;
            this.successType = MessageBar_1.MessageBarType.success;
            this.warningType = MessageBar_1.MessageBarType.warning;
        }
        messagebar.prototype.onDismiss = function () {
            console.log('dismiss clicked');
        };
        return messagebar;
    }());
    exports.messagebar = messagebar;
});
;
define('text!progressvalidation/messagebar.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>MessageBar</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default MessageBar infoType with dismiss event\"><div slot=example><du-message-bar on-dismiss.bind=onDismiss>Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.</du-message-bar></div></examplecard><examplecard title=\"Error MessageBar multiline element array\"><div slot=example><du-message-bar is-multiline.bind=true message-bar-type.bind=errorType><span>Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.</span><span>Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.</span></du-message-bar></div></examplecard><examplecard title=\"blockedType MessageBar truncated not multiline\"><div slot=example><du-message-bar is-multiline.bind=false truncated.bind=true message-bar-type.bind=blockedType>Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit. Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit. Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.</du-message-bar></div></examplecard><examplecard title=\"severeWarningType MessageBar\"><div slot=example><du-message-bar message-bar-type.bind=severeWarningType>Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.</du-message-bar></div></examplecard><examplecard title=\"successType MessageBar\"><div slot=example><du-message-bar message-bar-type.bind=successType>Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.</du-message-bar></div></examplecard><examplecard title=\"warningType MessageBar\"><div slot=example><du-message-bar message-bar-type.bind=warningType>Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.</du-message-bar></div></examplecard></div></template>";});;
define('progressvalidation/progressindicator',["require", "exports", "timers"], function (require, exports, timers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.progressindicator = void 0;
    var INTERVAL_DELAY = 100;
    var INTERVAL_INCREMENT = 0.01;
    var progressindicator = (function () {
        function progressindicator() {
            this.percentComplete = 50;
        }
        progressindicator.prototype.attached = function () {
            var _this = this;
            timers_1.setInterval(function () {
                _this.percentComplete += INTERVAL_INCREMENT;
                if (_this.percentComplete >= 1) {
                    _this.percentComplete = 0;
                }
            }, INTERVAL_DELAY);
        };
        return progressindicator;
    }());
    exports.progressindicator = progressindicator;
});
;
define('text!progressvalidation/progressindicator.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>MessageBar</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default ProgressIndicator\"><div slot=example><du-progress-indicator percent-complete.bind=percentComplete label=\"Example title\" description=\"Example description\"></du-progress-indicator></div></examplecard><examplecard title=\"Indeterminate ProgressIndicator\"><div slot=example><du-progress-indicator label=\"Example title\" description=\"Example description\"></du-progress-indicator></div></examplecard></div></template>";});;
define('progressvalidation/spinner',["require", "exports", "@fluentui/react/lib/Spinner"], function (require, exports, Spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.spinner = void 0;
    var spinner = (function () {
        function spinner() {
            this.spinnerSize = Spinner_1.SpinnerSize.medium;
        }
        return spinner;
    }());
    exports.spinner = spinner;
});
;
define('text!progressvalidation/spinner.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Spinner</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Basic Spinner\"><div slot=example><du-label>Medium Spinner</du-label><du-spinner label=\"I am definitely loading...\" size.bind=spinnerSize></du-spinner></div></examplecard></div></template>";});;
define('reqjs',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reqjs = void 0;
    var reqjs = (function () {
        function reqjs() {
        }
        reqjs.prototype.attached = function () {
            document.querySelectorAll('pre code').forEach(function (block) {
                hljs.highlightBlock(block);
            });
        };
        return reqjs;
    }());
    exports.reqjs = reqjs;
});
;
define('text!reqjs.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Getting started</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><h2 class=ms-font-xxl>Get started with Fluent UI for Aurelia</h2><ol class=steps><li><p>Create your project the way you are used to, then follow below instructions if you are using RequireJS.</p></li><li><p>Add the npm package @dunite/au-fluent-ui with below command. We have tested with npm and yarn, if you are using anything else please give feedback if it does not work for you.</p><p>If you have issues with building refering to \"text\", then remove the developer dependency to requirejs/text and add that again with below command</p><pre><code class=shell>\n    npm install @dunite/au-fluent-ui --save\n    npm install babel-eslint eslint @types/react @types/react-dom --save-dev\n    npm install requirejs/text --save-dev\n                </code></pre></li><li><p>Add a file called nodeprocess.js at the root of your project. Same level as the node_modules folder.</p><p>Insert below content:</p><pre><code class=javascript>\n    var process = {} || process;\n    process.browser = true;\n    process.env =\n    {\n    NODE_ENV : 'production'\n    }\n                </code></pre><p>Then add below to your aurelia.json file. It is just the line refering to nodeprocess.js you need to add.</p><pre><code class=json>\n    \"name\": \"vendor-bundle.js\",\n    \"prepend\": [\n    \"nodeprocess.js\",\n    \"node_modules/requirejs/require.js\"\n    ],\n                </code></pre></li><li><p>In your main.ts file add the following to register the plugin. Line 7 is required.</p><pre><code class=javascript>\n    export function configure(aurelia: Aurelia) {\n    aurelia.use\n    .standardConfiguration()\n    .feature(PLATFORM.moduleName('resources/index'))\n    // below is the new line you need\n    .plugin(PLATFORM.moduleName(\"@dunite/au-fluent-ui\"));\n\n    aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');\n\n    if (environment.testing) {\n    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));\n    }\n\n    return aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));\n    }\n                </code></pre></li><li><p>No elements are registred by the plugin. That means you need to require them with the &lt;require&gt;&lt;/require&gt; or preload them with a call to globalResources(). This will bring down bundle sizes. Below line will register one component and then it will be ready to use on any page.</p><pre><code class=javascript>\n    aurelia.use\n    .standardConfiguration()\n    .plugin(PLATFORM.moduleName(\"@dunite/au-fluent-ui\"))\n    .globalResources(\n    [ // Registrera alla komponenter som denna webpart använder här\n    PLATFORM.moduleName('@dunite/au-fluent-ui/elements/BasicInputs/DuActionButton')\n    ]);\n                </code></pre><p>Check out all elements in the navigation to the left and read the specific documentation for each element.</p><p>All elements use du- prefix. That means that the colorpicker element is used with the html below.</p><pre><code class=html>\n    &#x3C;du-color-picker alpha-slider-hidden=&#x22;true&#x22; color.bind=&#x22;thecolor&#x22;\n    on-color-changed.bind=&#x22;colorChanged&#x22; &#x3E;&#x3C;/du-color-picker&#x3E;\n                </code></pre><p>As always we use kebab-casing for the elements and the properties. If you read the documentation on the React Fluent UI site about the property onColorChanged it is used with on-color-changed.</p></li><li><p>Regarding binding, it is Aurelia easy. In most cases you can set the value of the property directly in HTML like the alpha-slider-hidden property above. Sometimes though the React component does not parse the value correctly so you have to add .bind even if it is a simple number or boolean. It never seems to be an issue with strings though.</p><p>It is also possible to bind to literal objects as showed below with icon-props.</p><pre><code class=html>\n    &#x3C;du-command-bar-button text=&#x22;Create Account&#x22;\n    on-click.bind=&#x22;actionButtonClick&#x22;\n    icon-props.one-time=&#x22;{ iconName: &#x27;Add&#x27; }&#x22;\n    menu-props.bind=&#x22;commandMenu&#x22;\n    split.bind=&#x22;true&#x22;&#x3E;&#x3C;/du-command-bar-button&#x3E;\n                </code></pre><p>Note that you need to use .one-time since Aurelia can not update the literal object.</p><p>If you add bindings to any event always use .bind with the function name, see on-click.bind example above.</p><p>The 'this' keyword always points the current view model as you would expect. This is a breaking change from previous version where the 'this' keyword refered to the au-component.</p></li></ol></div></template>";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/au-hljs',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuHljs = void 0;
    var AuHljs = (function () {
        function AuHljs() {
            this.id = "hljsCodeTag" + AuHljs_1.idCounter++;
            this.contentTypeMap = {
                "application/x-sql": "sql",
                "text/x-java-source": "java",
                "text/css": "css",
                "application/x-sh": "bash"
            };
        }
        AuHljs_1 = AuHljs;
        AuHljs.prototype.attached = function () {
            hljs.debugMode();
            if (!this.hasInclude()) {
                this.effectiveLanguage = this.language;
                this.highlightToDom();
            }
            else {
                alert("heloo");
                this.includeChanged();
            }
        };
        AuHljs.prototype.includeChanged = function () {
        };
        AuHljs.prototype.extractLanguageFromContentType = function (contentType) {
            if (!this.language && contentType != null) {
                var extracted = contentType.split(";")[0].trim();
                if (extracted != null && this.contentTypeMap[extracted] != null) {
                    this.effectiveLanguage = this.contentTypeMap[extracted];
                }
                else if (this.language) {
                    this.effectiveLanguage = this.language;
                }
                else {
                    this.effectiveLanguage = undefined;
                }
            }
        };
        AuHljs.prototype.highlightToDom = function (data) {
            if (data == null) {
                data = document.getElementById(this.id).textContent;
            }
            var result = this.highlight(data);
            this.effectiveLanguage = result.language;
            console.log(result);
            this.fixMarkupAndAppendToDom(result.value);
        };
        AuHljs.prototype.highlight = function (data) {
            return this.effectiveLanguage ?
                hljs.highlight(this.effectiveLanguage, data, true)
                : hljs.highlightAuto(data);
        };
        AuHljs.prototype.fixMarkupAndAppendToDom = function (value) {
            value = this.lineGenerator(value);
            document.querySelector("#" + this.id).innerHTML = value;
        };
        AuHljs.prototype.lineGenerator = function (data) {
            var codeLineArray = data.split('\n');
            var codeLineString = '';
            for (var i = 0; i < codeLineArray.length; i++) {
                if (this.linenumbers) {
                    codeLineString += '<span class="line-number">' + (i + 1) + '</span>' + codeLineArray[i];
                }
                else {
                    codeLineString += '<span> </span>' + codeLineArray[i];
                }
                if (i != codeLineArray.length - 1) {
                    codeLineString = codeLineString + '\n';
                }
            }
            return codeLineString;
        };
        AuHljs.prototype.hasInclude = function () {
            return this.include != null;
        };
        AuHljs.prototype.linenumbersChanged = function () {
            if (document.getElementById(this.id) != null) {
                var data = document.getElementById(this.id).innerText;
                if (!this.linenumbers) {
                    data = data.split("\n").map(function (line, index) {
                        return line.substring(("" + (index + 1)).length);
                    }).reduce(function (a, b) {
                        return a + "\n" + b;
                    });
                }
                else {
                    data = data.split("\n").map(function (line, index) {
                        return line.substring(1);
                    }).reduce(function (a, b) {
                        return a + "\n" + b;
                    });
                }
                this.highlightToDom(data);
            }
        };
        AuHljs.prototype.themeChanged = function () {
            if (this.theme == null) {
                this.theme = "default";
            }
            this.loadTheme();
        };
        AuHljs.prototype.loadTheme = function () {
        };
        var AuHljs_1;
        AuHljs.idCounter = 0;
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], AuHljs.prototype, "language", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], AuHljs.prototype, "theme", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], AuHljs.prototype, "include", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], AuHljs.prototype, "linenumbers", void 0);
        AuHljs = AuHljs_1 = __decorate([
            aurelia_framework_1.customElement('au-hljs'),
            aurelia_framework_1.containerless,
            __metadata("design:paramtypes", [])
        ], AuHljs);
        return AuHljs;
    }());
    exports.AuHljs = AuHljs;
});
;
define('text!resources/elements/au-hljs.html',[],function(){return "<template><pre><code id.bind=id class=\"hljs ${language}\"><slot></slot></code></pre></template>";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/examplecard',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.examplecard = void 0;
    var examplecard = (function () {
        function examplecard() {
            this.showCode = false;
        }
        examplecard.prototype.toggleCode = function () {
            window.open("https://github.com/magnusdanielson/au-fluent-ui/tree/master/dev-app");
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", String)
        ], examplecard.prototype, "title", void 0);
        return examplecard;
    }());
    exports.examplecard = examplecard;
});
;
define('text!resources/elements/examplecard.css',[],function(){return ".ExampleCard {\n  margin: 20px 0;\n}\n\n.ExampleCard-header {\n  border-bottom: 1px solid #a6a6a6;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  position: relative;\n}\n\n.ExampleCard-title {\n  font-size: 17px;\n  font-weight: 300;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n\n.ExampleCard-toggleButtons {\n  font-size: 17px;\n  font-weight: 300;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  float: right;\n}\n\n/* .ExampleCard-code {\n    background-color: #212121;\n    overflow: hidden;\n} */\n.ExampleCard-example.is-scrollable {\n  -webkit-overflow-scrolling: touch;\n  max-height: 80vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 20px 4px;\n  position: relative;\n}";});;
define('text!resources/elements/examplecard.html',[],function(){return "<template><require from=./examplecard.css></require><div class=ExampleCard><div class=ExampleCard-header><span class=ms-font-l>${title}</span><div class=ExampleCard-toggleButtons><du-action-button text=\"View code\" icon-props.bind=actionicon on-click.bind=toggleCode></du-action-button></div></div><div class=ExampleCard-code show.bind=showCode><slot name=code></slot></div><div class=\"ExampleCard is-scrollable\"><slot name=example></slot></div></div></template>";});;
define('resources/index',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.configure = void 0;
    function configure(config) {
        config.globalResources([aurelia_framework_1.PLATFORM.moduleName('./elements/examplecard')]);
    }
    exports.configure = configure;
});
;
define('surfaces/callout',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.callout = void 0;
    var callout = (function () {
        function callout() {
            this.isCalloutHidden = true;
            this.isCalloutHidden2 = true;
            this.getItems = function () {
                var _a, _b;
                return [
                    {
                        key: 'newItem',
                        name: 'New',
                        cacheKey: 'myCacheKey',
                        iconProps: {
                            iconName: 'Add'
                        },
                        ariaLabel: 'New. Use left and right arrow keys to navigate',
                        subMenuProps: {
                            items: [
                                (_a = {
                                        key: 'emailMessage',
                                        name: 'Email message',
                                        iconProps: {
                                            iconName: 'Mail'
                                        }
                                    },
                                    _a['data-automation-id'] = 'newEmailButton',
                                    _a),
                                {
                                    key: 'calendarEvent',
                                    name: 'Calendar event',
                                    iconProps: {
                                        iconName: 'Calendar'
                                    }
                                }
                            ]
                        }
                    },
                    (_b = {
                            key: 'upload',
                            name: 'Upload',
                            iconProps: {
                                iconName: 'Upload'
                            },
                            href: 'https://dev.office.com/fabric'
                        },
                        _b['data-automation-id'] = 'uploadButton',
                        _b),
                    {
                        key: 'share',
                        name: 'Share',
                        iconProps: {
                            iconName: 'Share'
                        },
                        onClick: function () { return console.log('Share'); }
                    },
                    {
                        key: 'download',
                        name: 'Download',
                        iconProps: {
                            iconName: 'Download'
                        },
                        onClick: function () { return console.log('Download'); }
                    }
                ];
            };
            this.getOverflowItems = function () {
                return [
                    {
                        key: 'move',
                        name: 'Move to...',
                        onClick: function () { return console.log('Move to'); },
                        iconProps: {
                            iconName: 'MoveToFolder'
                        }
                    },
                    {
                        key: 'copy',
                        name: 'Copy to...',
                        onClick: function () { return console.log('Copy to'); },
                        iconProps: {
                            iconName: 'Copy'
                        }
                    },
                    {
                        key: 'rename',
                        name: 'Rename...',
                        onClick: function () { return console.log('Rename'); },
                        iconProps: {
                            iconName: 'Edit'
                        }
                    }
                ];
            };
            this.getFarItems = function () {
                return [
                    {
                        key: 'sort',
                        name: 'Sort',
                        iconProps: {
                            iconName: 'SortLines'
                        },
                        onClick: function () { return console.log('Sort'); }
                    },
                    {
                        key: 'tile',
                        name: 'Grid view',
                        iconProps: {
                            iconName: 'Tiles'
                        },
                        iconOnly: true,
                        onClick: function () { return console.log('Tiles'); }
                    },
                    {
                        key: 'info',
                        name: 'Info',
                        iconProps: {
                            iconName: 'Info'
                        },
                        iconOnly: true,
                        onClick: function () { return console.log('Info'); }
                    }
                ];
            };
        }
        callout.prototype._onShowMenuClicked = function () {
            this.isCalloutHidden = !this.isCalloutHidden;
        };
        callout.prototype._onShowMenuClicked2 = function () {
            this.isCalloutHidden2 = !this.isCalloutHidden2;
        };
        callout.prototype._onCalloutDismiss = function () {
            console.log("_onCalloutDismiss");
            this.isCalloutHidden = false;
        };
        callout.prototype._onCalloutDismiss2 = function () {
            console.log("_onCalloutDismiss2");
            this.isCalloutHidden2 = false;
        };
        callout.prototype.attached = function () {
            console.log("attached");
            this.menuButtonElement = document.getElementById('menuButtonElement');
            this.menuButtonElement2 = document.getElementById('menuButtonElement2');
        };
        callout.prototype.activate = function () {
            console.log("activate");
        };
        return callout;
    }());
    exports.callout = callout;
});
;
define('text!surfaces/callout.css',[],function(){return ".ms-CalloutExample-title {\n  font-size: 32px;\n}\n\n.ms-CalloutExample-cmdBarHost {\n  width: 350px;\n  padding: 10px;\n}\n\n.ms-CalloutExample-inner {\n  height: 100%;\n  padding: 0 24px 20px;\n}\n\n.ms-CalloutExample-header {\n  padding: 18px 24px 12px;\n}\n\n.ms-CalloutExample-title {\n  margin: 0;\n  font-size: 32px;\n  color: black;\n  font-weight: 500;\n}\n\n.ms-CalloutExample-subText {\n  margin: 0;\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n}\n\n.ms-CalloutExample-link {\n  font-size: 24px;\n  color: black;\n}\n\n.ms-CalloutExample-actions {\n  position: relative;\n  margin-top: 20px;\n  width: 100%;\n  white-space: nowrap;\n}\n\n.calloutExampleButton {\n  width: 100%;\n}";});;
define('text!surfaces/callout.html',[],function(){return "<template><require from=./callout.css></require><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Callout</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default Callout\"><div slot=example><div class=buttonArea id=menuButtonElement style=vertical-align:top;display:inline-block;text-align:center><du-default-button id=toggleCallout on-click.bind=_onShowMenuClicked text=\"${isCalloutHidden ? 'Show callout' : 'Hide callout'}\"></div><du-callout class-name=ms-CalloutExample-callout role=alertdialog gap-space.one-time=0 target.bind=menuButtonElement on-dismiss=_onCalloutDismiss set-initial-focus.one-time=true hidden.bind=isCalloutHidden><div class=du-Callout><div class=ms-CalloutExample-header><p class=ms-CalloutExample-title id=callout-label-1>All of your favorite people</p></div><div class=ms-CalloutExample-inner><div class=ms-CalloutExample-content><p class=ms-CalloutExample-subText id=callout-description-1>Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.</p></div><div class=ms-CalloutExample-actions><a class=ms-CalloutExample-link href=http://microsoft.com>Go to microsoft</a></div></div></div></du-callout></div></examplecard><examplecard title=\"Nested Callout... Callout with a commandbar with a sub menu\"><div slot=example><div class=buttonArea id=menuButtonElement2 style=vertical-align:top;display:inline-block;text-align:center><du-default-button id=toggleCallout2 on-click.bind=_onShowMenuClicked2 text=\"${isCalloutHidden2 ? 'Show callout' : 'Hide callout'}\"></div><du-callout style=z-index:100 class-name=ms-CalloutExample-callout role=alertdialog gap-space.one-time=0 target.bind=menuButtonElement2 on-dismiss=_onCalloutDismiss2 set-initial-focus.one-time=true hidden.bind=isCalloutHidden2><div class=du-Callout><div class=ms-CalloutExample-header><p class=ms-CalloutExample-title id=callout-label-2>All of your favorite people</p></div><div class=ms-CalloutExample-inner><div class=ms-CalloutExample-content><p class=ms-CalloutExample-subText id=callout-description-2>Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.</p></div><div></div></div></div><du-command-bar items.one-time=getItems()></du-command-bar></du-callout></div></examplecard></div></template>";});;
define('surfaces/coachmark',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.coachmark = void 0;
    var coachmark = (function () {
        function coachmark() {
            var _this = this;
            this.hideCoachmark = true;
            this.teachingBubble = {};
            this.teachingBubble = {
                headline: 'Example Title',
                hasCloseIcon: true,
                closeButtonAriaLabel: 'Close',
                primaryButtonProps: {
                    text: 'Try it'
                },
                secondaryButtonProps: {
                    text: 'Try it again'
                },
                onDismiss: function () { console.log(_this); _this.hideCoachmark = true; },
            };
        }
        coachmark.prototype.showMark = function () {
            this.hideCoachmark = !this.hideCoachmark;
        };
        return coachmark;
    }());
    exports.coachmark = coachmark;
});
;
define('text!surfaces/coachmark.html',[],function(){return "<template><require from=./mycoach></require><require from=./mytext></require><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Coachmark</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default Coachmark\"><div slot=example><du-coachmark hidden.bind=hideCoachmark positioning-container-props.one-time=\"{\n                  directionalHint: 1,\n                  doNotLayer: false\n                }\" teaching-bubble-content.bind=teachingBubble target.bind=mybutton><span>Welcome to the land of Coachmarks!!</span></du-coachmark><du-default-button click.delegate=showMark() ref=mybutton text=Show></du-default-button></div></examplecard></div></template>";});;
define('surfaces/dialog',["require", "exports", "@fluentui/react/lib/Dialog"], function (require, exports, Dialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dialog = void 0;
    var dialog = (function () {
        function dialog() {
            var _this = this;
            this.hidden = true;
            this.dialogprops = {
                dialogContentProps: {
                    type: Dialog_1.DialogType.normal,
                    title: 'A Title!',
                    subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
                },
                modalProps: {
                    titleAriaId: 'myLabelId',
                    subtitleAriaId: 'mySubTextId',
                    isBlocking: false,
                    containerClassName: 'ms-dialogMainOverride',
                    className: "magnus"
                },
                onDismiss: function () {
                    _this.dialogprops.dialogContentProps.title += "!";
                    _this.hidden = true;
                },
                hidden: this.hidden
            };
        }
        dialog.prototype.actionButtonClick = function () {
            this.hidden = !this.hidden;
        };
        return dialog;
    }());
    exports.dialog = dialog;
});
;
define('text!surfaces/dialog.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Dialog</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default Dialog\"><div slot=example><du-dialog on-dismiss.bind=dialogprops.onDismiss modal-props.bind=dialogprops.modalProps dialog-content-props.bind=dialogprops.dialogContentProps hidden.bind=hidden><du-default-button primary=true on-click.bind=dialogprops.onDismiss text=Save></du-default-button></du-dialog><du-default-button text=\"Show Dialog\" on-click.bind=actionButtonClick></du-default-button></div></examplecard></div></template>";});;
define('surfaces/documentcard',["require", "exports", "@fluentui/react/lib/DocumentCard", "../testimages", "@fluentui/react/lib/Image"], function (require, exports, DocumentCard_1, testimages_1, Image_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.documentcard = void 0;
    var documentcard = (function () {
        function documentcard() {
            this.previewImages = [
                {
                    name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
                    linkProps: {
                        href: 'http://google.com'
                    },
                    previewImageSrc: testimages_1.TestImages.documentPreview,
                    iconSrc: testimages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196
                }
            ];
            this.people = [{ name: 'Annie Lindqvist', profileImageSrc: testimages_1.TestImages.personaFemale }];
            this.previewImages2 = [
                {
                    name: '2016 Conference Presentation',
                    linkProps: {
                        href: 'http://bing.com'
                    },
                    previewImageSrc: testimages_1.TestImages.documentPreview,
                    iconSrc: testimages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196
                },
                {
                    name: 'New Contoso Collaboration for Conference Presentation Draft',
                    linkProps: {
                        href: 'http://bing.com'
                    },
                    previewImageSrc: testimages_1.TestImages.documentPreviewTwo,
                    iconSrc: testimages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196
                },
                {
                    name: 'Spec Sheet for design',
                    linkProps: {
                        href: 'http://bing.com'
                    },
                    previewImageSrc: testimages_1.TestImages.documentPreviewThree,
                    iconSrc: testimages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196
                },
                {
                    name: 'Contoso Marketing Presentation',
                    linkProps: {
                        href: 'http://bing.com'
                    },
                    previewImageSrc: testimages_1.TestImages.documentPreview,
                    iconSrc: testimages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196
                },
                {
                    name: 'Notes from Ignite conference',
                    linkProps: {
                        href: 'http://bing.com'
                    },
                    previewImageSrc: testimages_1.TestImages.documentPreviewTwo,
                    iconSrc: testimages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196
                },
                {
                    name: 'FY17 Cost Projections',
                    linkProps: {
                        href: 'http://bing.com'
                    },
                    previewImageSrc: testimages_1.TestImages.documentPreviewThree,
                    iconSrc: testimages_1.TestImages.iconPpt,
                    imageFit: Image_1.ImageFit.cover,
                    width: 318,
                    height: 196
                }
            ];
            this.people2 = [
                { name: 'Annie Lindqvist', profileImageSrc: testimages_1.TestImages.personaFemale },
                { name: 'Roko Kolar', profileImageSrc: '', initials: 'JH' },
                { name: 'Greta Lundberg', profileImageSrc: testimages_1.TestImages.personaFemale }
            ];
            this.actions2 = [
                {
                    iconProps: { iconName: 'Share' },
                    onClick: function (ev) {
                        console.log('You clicked the share action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    },
                    ariaLabel: 'share action'
                },
                {
                    iconProps: { iconName: 'Pin' },
                    onClick: function (ev) {
                        console.log('You clicked the pin action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    },
                    ariaLabel: 'pin action'
                },
                {
                    iconProps: { iconName: 'Ringer' },
                    onClick: function (ev) {
                        console.log('You clicked the ringer action.');
                        ev.preventDefault();
                        ev.stopPropagation();
                    },
                    ariaLabel: 'ringer action'
                }
            ];
            this.previewImages3 = [
                {
                    name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
                    linkProps: {
                        href: 'http://bing.com'
                    },
                    previewImageSrc: testimages_1.TestImages.documentPreview,
                    iconSrc: testimages_1.TestImages.iconPpt,
                    width: 144
                },
                {
                    name: 'New Contoso Collaboration for Conference Presentation Draft',
                    linkProps: {
                        href: 'http://bing.com'
                    },
                    previewImageSrc: testimages_1.TestImages.documentPreviewTwo,
                    iconSrc: testimages_1.TestImages.iconPpt,
                    width: 144
                },
                {
                    name: 'Spec Sheet for design',
                    linkProps: {
                        href: 'http://bing.com'
                    },
                    previewImageSrc: testimages_1.TestImages.documentPreviewThree,
                    iconSrc: testimages_1.TestImages.iconPpt,
                    width: 144
                },
                {
                    name: 'Contoso Marketing Presentation',
                    linkProps: {
                        href: 'http://bing.com'
                    },
                    previewImageSrc: testimages_1.TestImages.documentPreview,
                    iconSrc: testimages_1.TestImages.iconPpt,
                    width: 144
                }
            ];
            this.previewImages4 = [
                {
                    previewIconProps: { iconName: 'OpenFile', styles: { root: { fontSize: 42, color: '#ffffff' } } },
                    width: 144
                }
            ];
            this.previewImages5 = [
                {
                    previewIconProps: { iconName: 'OutlookLogo', styles: { root: { fontSize: 42, color: '#0078d7' } } },
                    previewIconContainerClass: 'ms-DocumentCardPreview-iconContainer2',
                    width: 144
                }
            ];
            this.people3 = [{ name: 'Kat Larrson', profileImageSrc: testimages_1.TestImages.personaFemale }];
            this.compact = DocumentCard_1.DocumentCardType.compact;
        }
        documentcard.prototype.getOverflowDocumentCountText = function (overflowCount) {
            return "+" + overflowCount + " more";
        };
        ;
        documentcard.prototype._onClick2 = function () {
            console.log('You clicked the card.');
        };
        return documentcard;
    }());
    exports.documentcard = documentcard;
});
;
define('text!surfaces/documentcard.css',[],function(){return ".ms-DocumentCard-details {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: space-between;\n  overflow: hidden;\n}";});;
define('text!surfaces/documentcard.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>DocumentCard</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default DocumentCard\"><div slot=example><du-document-card on-click-href=http://bing.com><du-document-card-preview preview-images.one-time=previewImages></du-document-card-preview><du-document-card-title title=Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_it_needs_truncating.pptx should-truncate.one-time=true></du-document-card-title><du-document-card-activity activity=\"Created a few minutes ago\" people.one-time=people></du-document-card-activity></du-document-card></div></examplecard><examplecard title=\"DocumentCard with multiple items, commands, and views\"><div slot=example><du-document-card on-click.bind=_onClick2><du-document-card-preview preview-images.one-time=previewImages2 get-overflow-document-count-text.bind=getOverflowDocumentCountText></du-document-card-preview><du-document-card-location location=\"Marketing Documents\" location-href=http://microsoft.com aria-label=\"Location, Marketing Documents\"></du-document-card-location><du-document-card-title title=\"6 files were uploaded\"></du-document-card-title><du-document-card-activity activity=\"Created Feb 23, 2016\" people.one-time=people2></du-document-card-activity><du-document-card-actions actions.one-time=actions2 views.one-time=243></du-document-card-actions></du-document-card></div></examplecard></div></template>";});;
define('surfaces/hovercard',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hovercard = void 0;
    var hovercard = (function () {
        function hovercard() {
            this.hidden = true;
        }
        hovercard.prototype.actionButtonClick = function () {
            this.hidden = !this.hidden;
        };
        return hovercard;
    }());
    exports.hovercard = hovercard;
});
;
define('text!surfaces/hovercard.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Dialog</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default HoverCard\"><div slot=example><du-hover-card expanding-card-props.bind=expandingCardProps instant-open-on-click.bind=true hidden.bind=hidden><du-default-button primary=true on-click.bind=dialogprops.onDismiss text=Save></du-default-button></du-hover-card><du-default-button text=\"Show Dialog\" on-click.bind=actionButtonClick></du-default-button></div></examplecard></div></template>";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('surfaces/mybase',["require", "exports", "react", "react-dom", "aurelia-framework", "./mystate"], function (require, exports, React, ReactDom, aurelia_framework_1, mystate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mybase = void 0;
    var mybase = (function () {
        function mybase(element) {
            this.element = element;
            this.log = aurelia_framework_1.LogManager.getLogger('DuReactWrapperBaseClass');
            this.inneridAurelia = 'du' + Math.round(Math.random() * 10000000000000000);
            console.log(element);
            console.log(this.inneridAurelia);
        }
        mybase.prototype.createState = function (reactprops) {
            var reactpropNames = Object.getOwnPropertyNames(reactprops);
            var a = {};
            var _loop_1 = function (i) {
                var renderPropName = reactpropNames[i];
                if (typeof reactprops[renderPropName] === 'function') {
                    this_1.log.debug("React template: typeof reactprops[" + renderPropName + "] is function");
                    this_1.log.debug("Aurelia object: typeof this[" + renderPropName + "] is " + typeof this_1[renderPropName]);
                    if (typeof this_1[renderPropName] === 'function') {
                        this_1.log.debug('bound function, go aurelia');
                        a[renderPropName] = this_1[renderPropName].bind(this_1.parent);
                    }
                    else {
                        this_1.log.debug('function is not bound, check for default implementation on React template');
                        var funcNames = ['defaultOnChangeEvent', 'defaultActionEvent', 'onlyAureliaBound'];
                        if (!funcNames.includes(reactprops[renderPropName].name)) {
                            this_1.log.debug('run func from React template');
                            that = this_1;
                            a[renderPropName] = function () {
                                var argLength = arguments.length;
                                reactprops[renderPropName](that, argLength >= 1 ? arguments[0] : undefined, argLength >= 2 ? arguments[1] : undefined, argLength >= 3 ? arguments[2] : undefined, argLength >= 4 ? arguments[3] : undefined);
                            };
                        }
                        else {
                            this_1.log.debug('React template has empty implementatio, do nothing.');
                        }
                    }
                }
                else {
                    this_1.log.debug("React template: typeof reactprops[" + renderPropName + "] is NOT function");
                    if (typeof this_1[renderPropName] !== 'undefined') {
                        this_1.log.debug('Aurelia object property ' + renderPropName + ' has value ' + this_1[renderPropName]);
                        a[renderPropName] = this_1[renderPropName];
                    }
                    else {
                        this_1.log.debug('Aurelia object property ' + renderPropName + ' has NO value ');
                    }
                }
            };
            var this_1 = this, that;
            for (var i = 0; i < reactpropNames.length; i++) {
                _loop_1(i);
            }
            return a;
        };
        mybase.prototype.isHidden = function () {
            return this.hiddenIsHidden ? this[this.hiddenName] : !this[this.hiddenName];
        };
        mybase.prototype.bind = function (bindingContext) {
            if (bindingContext !== null) {
                this.parent = bindingContext;
            }
        };
        mybase.prototype.unbind = function () {
            ReactDom.unmountComponentAtNode(this.element);
        };
        mybase.prototype.propertyChanged = function (name, newValue) {
            this.log.debug('propertyChanged');
            this.log.debug(name);
            this.log.debug(newValue);
            console.log(this);
            var obj = {};
            obj[name] = newValue;
            if (name == this.hiddenName) {
                if (this.hiddenIsHidden ? newValue : !newValue) {
                    this.moveBack();
                }
            }
            this.reactComponent.setState(obj);
            this[name] = newValue;
        };
        mybase.prototype.moveBack = function () {
            var auelement = document.getElementById(this.inneridAurelia);
            var oldParent = document.getElementById(this.reactComponent.inneridReact);
            if (oldParent == null || auelement == null) {
                return;
            }
            while (oldParent.childNodes.length > 0) {
                auelement.appendChild(oldParent.childNodes[0]);
            }
        };
        mybase.prototype.reactComponentWillUnmount = function () {
        };
        mybase.prototype.reactComponentDidMount = function () {
        };
        mybase.prototype.renderReact = function (reactClass, a) {
            ReactDom.unmountComponentAtNode(this.element);
            this.container = this.element.querySelector('.au-react-root');
            if (this.container != null) {
                this.container.remove();
            }
            this.container = document.createElement('span');
            this.container.setAttribute('class', 'au-react-root');
            this.element.appendChild(this.container);
            a.aureliaHost = this;
            a.reactClass = reactClass;
            var reactElement = React.createElement(mystate_1.mystate, a);
            var reactComponent = ReactDom.render(reactElement, this.container);
            this.reactComponent = reactComponent;
        };
        mybase = __decorate([
            aurelia_framework_1.inlineView('<template><div id.bind="inneridAurelia" show.bind="!hidden"><slot></slot></div></template>'),
            __metadata("design:paramtypes", [Object])
        ], mybase);
        return mybase;
    }());
    exports.mybase = mybase;
});
;
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
define('surfaces/mybasenochild',["require", "exports", "react", "react-dom", "./mybase", "./mystatenochild"], function (require, exports, React, ReactDom, mybase_1, mystatenochild_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mybasenochild = void 0;
    var mybasenochild = (function (_super) {
        __extends(mybasenochild, _super);
        function mybasenochild(element) {
            return _super.call(this, element) || this;
        }
        mybasenochild.prototype.renderReact = function (reactClass, a) {
            ReactDom.unmountComponentAtNode(this.element);
            this.container = this.element.querySelector('.au-react-root');
            if (this.container != null) {
                this.container.remove();
            }
            this.container = document.createElement('span');
            this.container.setAttribute('class', 'au-react-root');
            this.element.appendChild(this.container);
            a.aureliaHost = this;
            a.reactClass = reactClass;
            var reactElement = React.createElement(mystatenochild_1.mystatenochild, a);
            var reactComponent = ReactDom.render(reactElement, this.container);
            this.reactComponent = reactComponent;
        };
        return mybasenochild;
    }(mybase_1.mybase));
    exports.mybasenochild = mybasenochild;
});
;
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
define('surfaces/mycoach',["require", "exports", "@fluentui/react/lib/Coachmark", "aurelia-framework", "./myutils", "@fluentui/react/lib/TeachingBubble", "react", "react-dom", "./mybase", "./mystate", "./mystatenochild"], function (require, exports, Coachmark_1, aurelia_framework_1, myutils_1, TeachingBubble_1, React, ReactDom, mybase_1, mystate_1, mystatenochild_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mycoach = void 0;
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
    reactprops.onAnimationOpenEnd = myutils_1.onlyAureliaBound;
    reactprops.onAnimationOpenStart = myutils_1.onlyAureliaBound;
    reactprops.onDismiss = myutils_1.onlyAureliaBound;
    reactprops.onMouseMove = myutils_1.onlyAureliaBound;
    reactprops.positioningContainerProps = {};
    reactprops.preventDismissOnLostFocus = {};
    reactprops.preventFocusOnMount = {};
    var mycoach = (function (_super) {
        __extends(mycoach, _super);
        function mycoach(element) {
            var _this = _super.call(this, element) || this;
            _this.teachingBubbleElement = {};
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        mycoach.prototype.attached = function () {
            this.renderReact2(reactprops);
        };
        mycoach.prototype.renderReact2 = function (reactprops) {
            ReactDom.unmountComponentAtNode(this.element);
            this.container = this.element.querySelector('.au-react-root');
            if (this.container != null) {
                this.container.remove();
            }
            this.container = document.createElement('span');
            this.container.setAttribute('class', 'au-react-root');
            this.element.appendChild(this.container);
            this.teachingBubbleContent.aureliaHost = this;
            this.teachingBubbleContent.reactClass = TeachingBubble_1.TeachingBubbleContent;
            var reactTeachingBubbleElement = React.createElement(mystate_1.mystate, this.teachingBubbleContent);
            var a = this.createState(reactprops);
            a.aureliaHost = this;
            a.reactClass = Coachmark_1.Coachmark;
            var reactElement = React.createElement(mystatenochild_1.mystatenochild, a, reactTeachingBubbleElement);
            console.log("mycoach");
            this.reactComponent = ReactDom.render(reactElement, this.container);
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], mycoach.prototype, "teachingBubbleContent", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Boolean)
        ], mycoach.prototype, "hidden", void 0);
        mycoach = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('mycoach'),
            __metadata("design:paramtypes", [Object])
        ], mycoach);
        return mycoach;
    }(mybase_1.mybase));
    exports.mycoach = mycoach;
    myutils_1.addProperties(mycoach, reactprops);
});
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('surfaces/myelement',["require", "exports", "aurelia-framework", "aurelia-framework"], function (require, exports, aurelia_framework_1, aurelia_framework_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.myelement = void 0;
    var myelement = (function () {
        function myelement(element) {
            this.ho = true;
            this.props = "";
            this.hidden = true;
            console.log("myelement constructor");
            this.element = element;
            this.container = this.element.querySelector('.au-react-root');
            if (this.container != null) {
                this.container.remove();
            }
            this.container = document.createElement('span');
            this.container.setAttribute('class', 'au-react-root');
            this.element.appendChild(this.container);
            this.innerid = Date.now().toString();
        }
        myelement.prototype.detached = function () {
            console.log("myelement detached");
        };
        myelement.prototype.attached = function () {
            console.log('myelement attached ' + this.innerid);
            var auelement = this.element.getElementsByTagName("au-content")[0];
            var newParent = document.getElementById(this.innerid.toString());
            if (newParent == null) {
                return;
            }
            while (auelement.childNodes.length > 0) {
                newParent.appendChild(auelement.childNodes[0]);
            }
        };
        myelement.prototype.myhandler = function (newValue, previousValue) {
            console.log("myhandler");
            console.log(newValue);
            console.log(previousValue);
        };
        myelement.prototype.setHidden = function (newValue, previousValue) {
            console.log("setHidden");
            console.log(newValue);
            console.log(previousValue);
        };
        myelement.prototype.bind = function (bindingContext) {
            console.log('myelement bind');
            if (bindingContext !== null) {
                this.parent = bindingContext;
            }
        };
        __decorate([
            aurelia_framework_2.bindable({ defaultBindingMode: aurelia_framework_2.bindingMode.twoWay, name: "props",
                attribute: "props", changeHandler: 'myhandler',
            }),
            __metadata("design:type", String)
        ], myelement.prototype, "props", void 0);
        __decorate([
            aurelia_framework_2.bindable({ defaultBindingMode: aurelia_framework_2.bindingMode.twoWay, name: "hidden",
                attribute: "hidden", changeHandler: 'setHidden',
            }),
            __metadata("design:type", Boolean)
        ], myelement.prototype, "hidden", void 0);
        myelement = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('myelement'),
            __metadata("design:paramtypes", [Object])
        ], myelement);
        return myelement;
    }());
    exports.myelement = myelement;
});
;
define('text!surfaces/myelement.html',[],function(){return "<template><div id.bind=innerid show.bind=ho><slot></slot></div></template>";});;
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define('surfaces/mystate',["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mystate = void 0;
    var mystate = (function (_super) {
        __extends(mystate, _super);
        function mystate(props) {
            var _this = _super.call(this, props) || this;
            _this.state = __assign({}, props);
            _this.inneridReact = Date.now();
            _this.aureliaHost = props.aureliaHost;
            _this.reactClass = props.reactClass;
            return _this;
        }
        mystate.prototype.componentWillUnmount = function () {
            if (typeof this.aureliaHost.reactComponentWillUnmount === 'function') {
                this.aureliaHost.reactComponentWillUnmount();
            }
        };
        mystate.prototype.componentDidMount = function () {
            if (typeof this.aureliaHost.reactComponentDidMount === 'function') {
                this.aureliaHost.reactComponentDidMount();
            }
        };
        mystate.prototype.render = function () {
            var _this = this;
            if (this.aureliaHost.isHidden()) {
                return null;
            }
            var com = React.createElement(this.reactClass, this.state, React.createElement('span', {
                id: this.inneridReact,
                ref: function (newParent) {
                    console.log('test');
                    if (newParent == null) {
                        console.log("1");
                        newParent = document.getElementById(_this.inneridReact.toString());
                        if (newParent == null) {
                            console.log("2");
                            return;
                        }
                    }
                    console.log("3");
                    if (_this.aureliaHost.isHidden()) {
                        console.log("4");
                        return;
                    }
                    console.log("5");
                    console.log(_this.aureliaHost.inneridAurelia);
                    var auelement = document.getElementById(_this.aureliaHost.inneridAurelia);
                    if (auelement == null) {
                        console.log("6");
                        return;
                    }
                    console.log("7");
                    while (auelement.childNodes.length > 0) {
                        newParent.appendChild(auelement.childNodes[0]);
                    }
                }
            }));
            return com;
        };
        return mystate;
    }(React.Component));
    exports.mystate = mystate;
});
;
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
define('surfaces/mystatenochild',["require", "exports", "react", "./mystate"], function (require, exports, React, mystate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mystatenochild = void 0;
    var mystatenochild = (function (_super) {
        __extends(mystatenochild, _super);
        function mystatenochild() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        mystatenochild.prototype.render = function () {
            if (this.aureliaHost.isHidden()) {
                return null;
            }
            var com = React.createElement(this.reactClass, this.state);
            return com;
        };
        return mystatenochild;
    }(mystate_1.mystate));
    exports.mystatenochild = mystatenochild;
});
;
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
define('surfaces/mytext',["require", "exports", "aurelia-framework", "@fluentui/react/lib/TextField", "./myutils", "./mybasenochild"], function (require, exports, aurelia_framework_1, TextField_1, myutils_1, mybasenochild_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mytext = void 0;
    var reactprops = {};
    reactprops.ariaLabel = {};
    reactprops.validateOnFocusIn = {};
    reactprops.validateOnFocusOut = {};
    reactprops.validateOnLoad = {};
    reactprops.disabled = {};
    reactprops.multiline = {};
    reactprops.className = {};
    reactprops.label = {};
    reactprops.resizable = {};
    reactprops.onChange = function (that, event, newValue) {
        that['value'] = newValue;
    };
    reactprops.autoAdjustHeight = {};
    reactprops.underlined = {};
    reactprops.onNotifyValidationResult = myutils_1.onlyAureliaBound;
    reactprops.onGetErrorMessage = myutils_1.onlyAureliaBound;
    reactprops.borderless = {};
    reactprops.autoComplete = {};
    reactprops.value = {};
    reactprops.description = {};
    reactprops.prefix = {};
    reactprops.suffix = {};
    reactprops.defaultValue = {};
    reactprops.readOnly = {};
    reactprops.errorMessage = {};
    reactprops.deferredValidationTime = {};
    reactprops.inputClassName = {};
    reactprops.mask = {};
    reactprops.maskChar = {};
    reactprops.maskFormat = {};
    reactprops.required = {};
    reactprops.placeholder = {};
    reactprops.iconProps = {};
    var mytext = (function (_super) {
        __extends(mytext, _super);
        function mytext(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        mytext.prototype.attached = function () {
            console.log('Attached Textfield');
            this.renderReact(TextField_1.TextField, this.createState(reactprops));
            if (this.autoAdjustHeight == true) {
                var elements = this.element.getElementsByTagName('textarea');
                if (elements.length > 0) {
                    var element = elements.item(0);
                    element.setAttribute('style', '');
                }
            }
        };
        mytext = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('mytext'),
            __metadata("design:paramtypes", [Object])
        ], mytext);
        return mytext;
    }(mybasenochild_1.mybasenochild));
    exports.mytext = mytext;
    myutils_1.addProperties(mytext, reactprops);
});
;
define('surfaces/myutils',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onlyAureliaBound = exports.addProperties = exports.camelToKebab = void 0;
    function camelToKebab(str) {
        return str.replace(/([a-zA-Z])([A-Z][a-z])/g, function (match, before, after) {
            return before.toLowerCase() + "-" + after.toLowerCase();
        }).toLowerCase();
    }
    exports.camelToKebab = camelToKebab;
    function addProperties(aureliaClass, reactprops) {
        var reactpropNames = Object.getOwnPropertyNames(reactprops);
        for (var i = 0; i < reactpropNames.length; i++) {
            var renderPropName = reactpropNames[i];
            aurelia_framework_1.bindable({
                name: renderPropName,
                attribute: camelToKebab(renderPropName),
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay
            })(aureliaClass);
        }
    }
    exports.addProperties = addProperties;
    function onlyAureliaBound() { }
    exports.onlyAureliaBound = onlyAureliaBound;
});
;
define('surfaces/panel',["require", "exports", "@fluentui/react/lib/Panel"], function (require, exports, Panel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.panel = void 0;
    var panel = (function () {
        function panel() {
            var _this = this;
            this.isOpen = false;
            this.type = Panel_1.PanelType.smallFixedFar;
            this.headerText = "Panel - Small, right-aligned, fixed, with footer";
            this.onDismiss = function () {
                _this.isOpen = false;
            };
            this.isOpenSwap = function () {
                _this.isOpen = !_this.isOpen;
            };
        }
        return panel;
    }());
    exports.panel = panel;
});
;
define('text!surfaces/panel.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Dialog</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Panel - Small Panel, Anchored Right, Fixed Width\"><div slot=example><du-panel hidden.bind=!isOpen is-open.bind=isOpen on-dismiss.bind=onDismiss type.bind=type header-text.bind=headerText><du-choice-group defaultselectedkey=B options.one-time=\"[\n                        {\n                          key: 'A',\n                          text: 'Option A',\n                          'data-automation-id': 'auto1'\n                        },\n                        {\n                          key: 'B',\n                          text: 'Option B'\n                        },\n                        {\n                          key: 'C',\n                          text: 'Option C',\n                          disabled: true\n                        },\n                        {\n                          key: 'D',\n                          text: 'Option D',\n                          disabled: true\n                        }\n                      ]\" label=\"Pick one\"></du-choice-group></du-panel><du-default-button text=\"Show Panel\" on-click.bind=isOpenSwap></du-default-button></div></examplecard></div></template>";});;
define('surfaces/teachingbubble',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.teachingbubble = void 0;
    var teachingbubble = (function () {
        function teachingbubble() {
            this.bubble1 = true;
        }
        teachingbubble.prototype.showBubble = function () {
            this.bubble1 = !this.bubble1;
        };
        return teachingbubble;
    }());
    exports.teachingbubble = teachingbubble;
});
;
define('text!surfaces/teachingbubble.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>TeachingBubble</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default TeachingBubble\"><div slot=example><du-teaching-bubble primary-button-props.one-time=\"{\n                  children: 'Try it out'\n                }\" secondary-button-props.one-time=\"{\n                  children: 'Maybe later',\n                  onClick: this._onDismiss\n                }\" on-dismiss.bind=onDismiss headline=\"Discover what’s trending around you\" target-element.bind=mybutton hidden.bind=bubble1></du-teaching-bubble><du-default-button click.delegate=showBubble() ref=mybutton text=Show></du-default-button></div></examplecard></div></template>";});;
define('surfaces/test3',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.test3 = void 0;
    var test3 = (function () {
        function test3() {
            this.message = "hej";
            this.myval = "";
            this.movefrom = "move1";
            this.moveto = "move2";
            console.log("test3 constructor");
        }
        test3.prototype.attached = function () {
            console.log("test3 attached");
        };
        test3.prototype.detached = function () {
            console.log("test3 detached");
        };
        test3.prototype.unbind = function () {
            console.log("test3 unbind");
        };
        test3.prototype.move = function () {
            var movefromEl = document.getElementById(this.movefrom);
            var movetoEl = document.getElementById(this.moveto);
            while (movefromEl.childNodes.length > 0) {
                movetoEl.appendChild(movefromEl.childNodes[0]);
            }
        };
        test3.prototype.bind = function (bindingContext) {
            console.log("test3 bind");
        };
        return test3;
    }());
    exports.test3 = test3;
});
;
define('text!surfaces/test3.html',[],function(){return "<template>My message ${message} <input type=text value.bind=myval>myval= ${myval} <button click.delegate=move()>move</button><br><br>movefrom:<input id=movefrom value.bind=movefrom><br><br>moveto:<input id=moveto value.bind=moveto><br><br></template>";});;
define('surfaces/test4',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.test4 = void 0;
    var test4 = (function () {
        function test4() {
        }
        test4.prototype.onChange = function (args) {
            console.log("onChange");
        };
        return test4;
    }());
    exports.test4 = test4;
});
;
define('text!surfaces/test4.html',[],function(){return "<template><require from=./mytext></require>Ho<br><mytext value.bind=thecolor label=Standard></mytext> ${thecolor} <input value.bind=thecolor>Ho<br></template>";});;
define('surfaces/tooltip',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tooltip = void 0;
    var tooltip = (function () {
        function tooltip() {
            this.tooltip1 = true;
            this.tooltip2 = true;
            this.calloutProps = {};
            this.calloutProps.gapSpace = 50;
            this.calloutProps.isBeakVisible = false;
            this.calloutProps.directionalHint = 12;
        }
        tooltip.prototype.onMouseOver = function () {
            this.tooltip1 = false;
        };
        tooltip.prototype.onMouseOut = function () {
            this.tooltip1 = true;
        };
        tooltip.prototype.onMouseOver2 = function () {
            this.tooltip2 = false;
        };
        tooltip.prototype.onMouseOut2 = function () {
            this.tooltip2 = true;
        };
        return tooltip;
    }());
    exports.tooltip = tooltip;
});
;
define('text!surfaces/tooltip.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>ToolTip</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><examplecard title=\"Default ToolTip\"><div slot=example><du-tool-tip content=Texten target-element.bind=mybutton hidden.bind=tooltip1></du-tool-tip><du-default-button mouseover.trigger=onMouseOver() mouseout.trigger=onMouseOut() ref=mybutton text=Save></du-default-button></div></examplecard><examplecard title=\"ToolTip with properties\"><div slot=example><du-tool-tip hidden.bind=tooltip2 content=Texten target-element.bind=mybutton2 callout-props.one-time=calloutProps delay.one-time=2000></du-tool-tip><du-default-button mouseover.trigger=onMouseOver2() mouseout.trigger=onMouseOut2() ref=mybutton2 text=Save></du-default-button></div></examplecard></div></template>";});;
define('testimages',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TestImages = void 0;
    var baseProductionCdnUrl = 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/';
    exports.TestImages = {
        choiceGroupBarUnselected: baseProductionCdnUrl + 'choicegroup-bar-unselected.png',
        choiceGroupBarSelected: baseProductionCdnUrl + 'choicegroup-bar-selected.png',
        choiceGroupPieUnselected: baseProductionCdnUrl + 'choicegroup-pie-unselected.png',
        choiceGroupPieSelected: baseProductionCdnUrl + 'choicegroup-pie-selected.png',
        documentPreview: baseProductionCdnUrl + 'document-preview.png',
        documentPreviewTwo: baseProductionCdnUrl + 'document-preview2.png',
        documentPreviewThree: baseProductionCdnUrl + 'document-preview3.png',
        iconOne: baseProductionCdnUrl + 'icon-one.png',
        iconPpt: baseProductionCdnUrl + 'icon-ppt.png',
        personaFemale: baseProductionCdnUrl + 'persona-female.png',
        personaMale: baseProductionCdnUrl + 'persona-male.png'
    };
});
;
define('why',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.howto = void 0;
    var howto = (function () {
        function howto() {
        }
        howto.prototype.attached = function () {
            document.querySelectorAll('pre code').forEach(function (block) {
                hljs.highlightBlock(block);
            });
        };
        return howto;
    }());
    exports.howto = howto;
});
;
define('text!why.html',[],function(){return "<template><div class=content style=bottom:unset;top:0;background-color:#038387><h1 class=pageTitle>Why</h1><div role=presentation class=ms-FocusZone></div></div><div class=PageSection><h2 class=ms-font-xxl>Why use Fluent UI for Aurelia</h2><p>Every application needs a consistent UI, so does yours. There are several alternatives out there for your Aurelia application. The great about Fluent UI is that is what Microsoft use for Office 365, Visual Studio Online and basically all their online prescence. That means that is does not matter if you are building add-ins for Office 365 or your next great award winning public application, Office UI Fabric gives you a consistent look and feel.</p><p>The problem is that Fluent UI is built with React. This npm package wraps many of the React components and expose them as easy to use Aurelia components.</p><p>If you ever needed a color picker, below is all the code you need.</p><pre><code class=html>\n      &#x3C;du-color-picker alpha-slider-hidden=&#x22;true&#x22; color.bind=&#x22;thecolor&#x22;\n      on-color-changed.bind=&#x22;colorChanged&#x22; &#x3E;&#x3C;/du-color-picker&#x3E;\n    </code></pre><p>The npm package&nbsp;<a href=https://www.npmjs.com/package/@dunite/au-fluent-ui>@dunite/au-fluent-ui</a>&nbsp;is built by&nbsp;<a href=https://twitter.com/MagnusDanielson>https://twitter.com/MagnusDanielson</a>&nbsp;at&nbsp;<a href=https://www.dunite.se>https://www.dunite.se</a></p></div></template>";});;
define('resources',['resources/index'],function(m){return m;});
//# sourceMappingURL=app-bundle.js.map