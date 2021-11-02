import {createAdObject} from './data.js';
import {renderCards} from './card.js';
import {onFormActivity, onMapActivity} from './formModal.js';

let firstObject = createAdObject();
firstObject = firstObject[0];

renderCards(firstObject);
onFormActivity();
onMapActivity();
