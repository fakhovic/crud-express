'use strict';

const linkDeleteEls = document.querySelectorAll('.link-delete');
const formDeleteEl = document.getElementById('formDelete');
for (let i = 0; i < linkDeleteEls.length; i++) {
    linkDeleteEls[i].addEventListener('click', function () {
        const linkHref = this.getAttribute('data-replace-action');
        formDeleteEl.setAttribute('action', linkHref);
    });
}

const linkEditEls = document.querySelectorAll('.link-edit');
const formEditEl = document.getElementById('formEdit');
for (let i = 0; i < linkEditEls.length; i++) {
    linkEditEls[i].addEventListener('click', function () {
        const linkHref = this.getAttribute('data-replace-action');
        formEditEl.setAttribute('action', linkHref);
        document.getElementById(`editName`).setAttribute('placeholder', this.getAttribute(`data-form-name`));
        document.getElementById(`editJob`).setAttribute('placeholder', this.getAttribute(`data-form-job`));
        document.querySelector(`#editTheme option[value='${this.getAttribute(`data-form-theme`)}']`).setAttribute('selected', 'selected');
    });
}