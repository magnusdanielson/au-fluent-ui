import {Aurelia, PLATFORM} from 'aurelia-framework';
import environment from './environment';

export function configure(aurelia: Aurelia) {

  aurelia.use
    .standardConfiguration()
    // load the plugin ../src
    // The "resources" is mapped to "../src" in aurelia.json "paths"
    .feature('resources')
    .globalResources([
      PLATFORM.moduleName('./resources/elements/examplecard'),
      PLATFORM.moduleName('./elements/hello-world'),
      PLATFORM.moduleName('./elements/BasicInputs/DuActionButton'),
      PLATFORM.moduleName('./elements/BasicInputs/DuCommandBarButton'),
      PLATFORM.moduleName('./elements/BasicInputs/DuCheckbox'),
      PLATFORM.moduleName('./elements/BasicInputs/DuChoiceGroup'),
      PLATFORM.moduleName('./elements/BasicInputs/DuComboBox'),
      PLATFORM.moduleName('./elements/BasicInputs/DuCompoundButton'),
      PLATFORM.moduleName('./elements/BasicInputs/DuContextualMenu'),
      PLATFORM.moduleName('./elements/BasicInputs/DuDefaultButton'),
      PLATFORM.moduleName('./elements/BasicInputs/DuDropdown'),
      PLATFORM.moduleName('./elements/BasicInputs/DuIconButton'),
      PLATFORM.moduleName('./elements/BasicInputs/DuLabel'),
      PLATFORM.moduleName('./elements/BasicInputs/DuSlider'),
      PLATFORM.moduleName('./elements/BasicInputs/DuSpinButton'),
      PLATFORM.moduleName('./elements/BasicInputs/DuTextField'),
      PLATFORM.moduleName('./elements/BasicInputs/DuToggle'),
      PLATFORM.moduleName('./elements/Content/DuDetailsList'),
      PLATFORM.moduleName('./elements/Content/DuFacepile'),
      PLATFORM.moduleName('./elements/Content/DuGroupedList'),
      PLATFORM.moduleName('./elements/Content/DuPersona'),
      PLATFORM.moduleName('./elements/Navigation/DuBreadcrumb'),
      PLATFORM.moduleName('./elements/Navigation/DuCommandBar'),
      PLATFORM.moduleName('./elements/Navigation/DuNav'),
      PLATFORM.moduleName('./elements/Navigation/DuPivot'),
      PLATFORM.moduleName('./elements/Navigation/DuSearchBox'),
      PLATFORM.moduleName('./elements/Pickers/DuColorPicker'),
      PLATFORM.moduleName('./elements/Pickers/DuCompactPeoplePicker'),
      PLATFORM.moduleName('./elements/Pickers/DuDatePicker'),
      PLATFORM.moduleName('./elements/Pickers/DuListPeoplePicker'),
      PLATFORM.moduleName('./elements/Pickers/DuNormalPeoplePicker'),
      PLATFORM.moduleName('./elements/Pickers/DuTagPicker'),
      PLATFORM.moduleName('./elements/ProgressValidation/DuMessageBar'),
      PLATFORM.moduleName('./elements/ProgressValidation/DuProgressIndicator'),
      PLATFORM.moduleName('./elements/ProgressValidation/DuSpinner'),
      PLATFORM.moduleName('./elements/Surfaces/DuCallout'),
      PLATFORM.moduleName('./elements/Surfaces/DuCoachmark'),
      PLATFORM.moduleName('./elements/Surfaces/DuDocumentCard'),
      PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardActions'),
      PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardActivity'),
      PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardLocation'),
      PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardPreview'),
      PLATFORM.moduleName('./elements/Surfaces/DuDocumentCardTitle'),
      PLATFORM.moduleName('./elements/Surfaces/DuHoverCard'),
      PLATFORM.moduleName('./elements/Surfaces/DuDialog'),
      PLATFORM.moduleName('./elements/Surfaces/DuDialogFooter'),
      PLATFORM.moduleName('./elements/Surfaces/DuPanel'),
      PLATFORM.moduleName('./elements/Surfaces/DuTeachingBubble'),
      PLATFORM.moduleName('./elements/Surfaces/DuTeachingBubbleContent'),
      PLATFORM.moduleName('./elements/Surfaces/DuToolTip') ]);

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
