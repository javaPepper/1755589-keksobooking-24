import{showErrorMessage, showSuccessMessage, removeErrorMessage, removeSuccessMessage} from './util.js';
import './map.js';
import {setMainMarker} from './map.js';
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
const type = adForm.querySelector('#type');
const timein = adForm.querySelector('#timein');
const timeout = adForm.querySelector('#timeout');
const address = adForm.querySelector('#address');
const formButton = adForm.querySelector('.ad-form__submit');
const description = adForm.querySelector('#description');

const formArray = [title, address, description, price];

const resetForm = function () {
  type.value = 'flat';
  price.placeholder = '5000';
  timein.value = '12:00';
  timeout.value = '12:00';
  rooms.value = '1';
  capacity.value = '3';
  for (let i=0; i<formArray.length; i++) {
    formArray[i].value = '';
  }
};
setMainMarker();
const getFormValue = function() {
  formButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    capacity.value = '1';
    const formData = new FormData(adForm);
    fetch(
      'https://24.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          const success = showSuccessMessage();
          resetForm();
          const mainPin = document.querySelector('.leaflet-marker-draggable');
          mainPin.remove();
          setMainMarker();
          const marker = document.querySelector('.leaflet-popup-pane');
          marker.remove();
          window.addEventListener('click', () => {
            removeSuccessMessage(success);
          });
        }
        else if (response.ok === false) {
          if (title.value === '') {
            const error = showErrorMessage('Поле заголовка не может быть пустым');
            removeErrorMessage(error);
          }
          else if (address.value === '') {
            const error = showErrorMessage('Укажите расположение вашего объекта, передвинув красную метку');
            removeErrorMessage(error);
          }
          else if (price.value === '') {
            const error = showErrorMessage('Поле цены не может быть пустым');
            removeErrorMessage(error);
          }
        }
      });

  });
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
  type.addEventListener('change', (evt) => {
    if (evt.target.value === 'bungalow') {
      price.min >= 0;
      price.placeholder = '0';
    }
    if (evt.target.value === 'flat') {
      price.min >= 1000;
      price.placeholder = '1000';
    }
    if (evt.target.value === 'hotel') {
      price.min >= 3000;
      price.placeholder = '3000';
    }
    if (evt.target.value === 'house') {
      price.min >= 5000;
      price.placeholder = '5000';
    }
    if (evt.target.value === 'palace') {
      price.min >= 10000;
      price.placeholder = '10000';
    }
  });
  timein.addEventListener('change', (evt) =>{
    timeout.value = evt.target.value;
  });
  timeout.addEventListener('change', (evt) => {
    timein.value = evt.target.value;
  });
  address.readOnly = true;
};
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

export {getFormValue, disableForms, enableForms};
