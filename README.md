# `au-fluent-ui`
An Aurelia plugin that wraps React components from Microsoft Fluent UI.

## How to use
Install with
`au install @dunite/au-fluent-ui`

It is necessery to calling the .plugin method. All components must also be manually loaded with a call to .globalResources() or by adding a `<require from="@dunite/au-fluent-ui/elements/Surfaces/DuPanel"></require>` tag to your html view.

```
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@dunite/au-fluent-ui')) //Add this line
    .feature('resources')
    .globalResources(
      [ // Registrer all components here
        PLATFORM.moduleName('@dunite/au-fluent-ui/elements/BasicInputs/DuActionButton'),
        PLATFORM.moduleName('@dunite/au-fluent-ui/elements/BasicInputs/DuCheckbox')
      ]);
    

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
```

Then just use it as below
```
<du-default-button checked="true" text.bind="mytextbutton"  primary class-name="lisa"  on-click.bind="buttonclick"  ></du-default-button>
```

## Demo site
[Examples of most controls in action.](https://magnusdanielson.github.io/au-fluent-ui/)
