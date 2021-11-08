import {createAdObject} from './data.js';
import {renderCards} from './card.js';
import {enableForms, disableForms, setDisableOptions, setEnableOptions} from './formModal.js';

let firstObject = createAdObject();
firstObject = firstObject[0];

renderCards(firstObject);
disableForms();
enableForms();
setDisableOptions();
setEnableOptions();


