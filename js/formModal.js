const MIN_TITLE_VALUE_LENGTH = 30;
const MAX_TITLE_VALUE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;
const adForm = document.querySelector('.ad-form');
const adFormHeader = adForm.querySelector('.ad-form-header');
const adFormElement = adForm.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElement = mapFilters.querySelectorAll('.map__filter');
const title = adForm.querySelector('#title');
const price = adForm.querySelector('#price');
const rooms = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('select[name="capacity"]');

const disableForms = function() {
  adForm.classList.add('ad-form--disabled');
  for (let i=0; i<adFormElement.length; i++) {
    adFormElement[i].disabled = true;
  }
  adFormHeader.disabled = true;
  mapFilters.classList.add('map__filters--disabled');
  for (let j=0; j<mapFiltersElement.length; j++) {
    mapFiltersElement[j].disabled = true;
  }
};
const enableForms = function() {
  adForm.classList.remove('ad-form--disabled');
  for (let i=0; i<adFormElement.length; i++) {
    adFormElement[i].disabled = false;
  }
  adFormHeader.disabled = false;
  mapFilters.classList.remove('map__filters--disabled');
  for (let j=0; j<mapFiltersElement.length; j++) {
    mapFiltersElement[j].disabled = false;
  }
};
title.addEventListener('input',  () => {
  const valueLength = title.value.length;
  if (valueLength<MIN_TITLE_VALUE_LENGTH) {
    title.setCustomValidity(`Добавьте еще ${  MIN_TITLE_VALUE_LENGTH - valueLength}   симв.`);
  }
  else if (valueLength>MAX_TITLE_VALUE_LENGTH) {
    title.setCustomValidity(`Уберите ${  valueLength - MAX_TITLE_VALUE_LENGTH  } симв.`);
  }
  else {
    title.setCustomValidity('');
  }
  title.reportValidity();
});
price.addEventListener('input', () => {
  const valueLength = price.value;
  if (valueLength>MAX_PRICE_VALUE) {
    price.setCustomValidity(`Задайте цену ниже на ${  valueLength - MAX_PRICE_VALUE} руб.`);
  }
  else {
    price.setCustomValidity('');
  }
  price.reportValidity();
});
const setEnableOptions = function (index) {
  for (let i = 0; i<index.length; i++) {
    index[i].disabled = false;
  }
};
const setDisableOptions = function (index) {
  for (let i = 0; i<index.length; i++) {
    index[i].disabled = true;
  }
};
rooms.addEventListener('change', setRoomGuestIdentity);
function setRoomGuestIdentity(evt) {
  capacity.value = evt.target.value;
  if (evt.target.value === '100') {
    capacity.value = '0';
    setDisableOptions(capacity);
  }
  if (evt.target.value === '3') {
    setEnableOptions(capacity);
    capacity[3].disabled = true;
  }
  if (evt.target.value === '2') {
    setDisableOptions(capacity);
    capacity[2].disabled = false;
    capacity[1].disabled = false;
  }
  if (evt.target.value === '1') {
    setDisableOptions(capacity);
  }
}

export{enableForms, disableForms, setDisableOptions, setEnableOptions};
