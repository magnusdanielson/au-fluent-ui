import { bindable, bindingMode } from 'aurelia-framework';
import { camelToKebab } from './camelToKebab';

export function addPropertiesNoState(aureliaClass: any, reactprops: any) {
    var reactpropNames = Object.getOwnPropertyNames(reactprops);

    for (let i = 0; i < reactpropNames.length; i++) {
        let renderPropName = reactpropNames[i];
        bindable({
            name: renderPropName,
            attribute: camelToKebab(renderPropName),
            changeHandler: 'render',
            defaultBindingMode: bindingMode.twoWay
        })(aureliaClass);
    }
}