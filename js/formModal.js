const adForm = document.querySelector('.ad-form');
const fieldset = adForm.children;
const mapFilters = document.querySelector('.map__filters');
const mapFiltersDisabled = mapFilters.children;

const onFormActivity = function() {
  adForm.classList.add('ad-form--disabled');
  for (let i=0; i<fieldset.length; i++) {
    fieldset[i].setAttribute('disabled', 'disabled');
  }
};
const onMapActivity = function() {
  mapFilters.classList.add('map__filters--disabled');
  for (let i=0; i<mapFiltersDisabled.length; i++) {
    mapFiltersDisabled[i].setAttribute('disabled', 'disabled');
  }
};
export{onFormActivity, onMapActivity};
