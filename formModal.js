const adForm = document.querySelector('.ad-form');
const adFormHeader = adForm.querySelector('.ad-form-header');
const adFormElement = adForm.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElement = mapFilters.querySelectorAll('.map__filter');

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
export{enableForms, disableForms};
