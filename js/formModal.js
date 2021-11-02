const adForm = document.querySelector('.ad-form');
const fieldset = adForm.children;
const mapFilters = document.querySelector('.map__filters');
const mapFiltersDisabled = mapFilters.children;

const disableForms = function() {
  adForm.classList.add('ad-form--disabled');
  for (let i=0; i<fieldset.length; i++) {
    fieldset[i].setAttribute('disabled', 'disabled');
  }
  mapFilters.classList.add('map__filters--disabled');
  for (let j=0; j<mapFiltersDisabled.length; j++) {
    mapFiltersDisabled[j].setAttribute('disabled', 'disabled');
  }
};
const enableForms = function() {
  adForm.classList.remove('ad-form--disabled');
  for (let i=0; i<fieldset.length; i++) {
    fieldset[i].removeAttribute('disabled');
  }
  mapFilters.classList.remove('map__filters--disabled');
  for (let j=0; j<mapFiltersDisabled.length; j++) {
    mapFiltersDisabled[j].removeAttribute('disabled');
  }
};
export{enableForms, disableForms};
