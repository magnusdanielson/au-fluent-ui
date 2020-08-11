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
      PLATFORM.moduleName('./resources/elements/au-hljs')]);

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
