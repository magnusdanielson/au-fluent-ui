"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
var aurelia_pal_1 = require("aurelia-pal");
function configure(config) {
    config.globalResources([
        aurelia_pal_1.PLATFORM.moduleName('./elements/hello-world'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuActionButton'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuCommandBarButton'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuCheckbox'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuChoiceGroup'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuComboBox'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuCompoundButton'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuContextualMenu'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuDefaultButton'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuDropdown'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuIconButton'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuLabel'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuSlider'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuSpinButton'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuTextField'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/BasicInputs/DuToggle'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Content/DuDetailsList'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Content/DuFacepile'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Content/DuGroupedList'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Content/DuPersona'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Navigation/DuBreadcrumb'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Navigation/DuCommandBar'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Navigation/DuNav'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Navigation/DuPivot'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Navigation/DuSearchBox'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Pickers/DuColorPicker'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Pickers/DuCompactPeoplePicker'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Pickers/DuDatePicker'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Pickers/DuListPeoplePicker'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Pickers/DuNormalPeoplePicker'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Pickers/DuTagPicker'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/ProgressValidation/DuMessageBar'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/ProgressValidation/DuProgressIndicator'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/ProgressValidation/DuSpinner'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuCallout'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuCoachmark'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuDocumentCard'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardActions'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardActivity'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardLocation'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardPreview'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardTitle'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuHoverCard'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuDialog'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuDialogFooter'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuPanel'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuTeachingBubble'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuTeachingBubbleContent'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/Surfaces/DuToolTip')
    ]);
}
exports.configure = configure;

//# sourceMappingURL=index.js.map
