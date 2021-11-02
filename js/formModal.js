const adForm = document.querySelector('.ad-form');
const fieldset = adForm.children;

const onFormActivity = function() {
  for (let i=0; i<fieldset.length; i++) {
    fieldset[i].setAttribute('disabled', 'disabled');
  }
};

export{onFormActivity};
