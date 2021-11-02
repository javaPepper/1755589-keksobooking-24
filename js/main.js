import {createAdObject} from './data.js';
import {renderCards} from './card.js';
import {onFormActivity} from './formModal.js';

let firstObject = createAdObject();
firstObject = firstObject[0];

renderCards(firstObject);
onFormActivity();
