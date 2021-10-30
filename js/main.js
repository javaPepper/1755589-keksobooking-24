import {createAdObject} from './data.js';
import {renderCards} from './card.js';

let firstObject = createAdObject();
firstObject = firstObject[0];

renderCards(firstObject);

