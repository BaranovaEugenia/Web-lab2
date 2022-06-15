
export default class View {
    constructor(model) {
        this.model = model;
        this.form = null;
        this.Name = null;
        this.email = null;
        this.password = null;
        this.sex = null;
        this.Date = null;
        this.initView();
    }

    initView() {
        this.initElements();
        this.initListeners();
    }

    initElements() {
        this.form = document.querySelector('form');
        this.Name = document.querySelector('#Name');
        this.email = document.querySelector('#email');
        this.password = document.querySelector('#password');
        this.sex = document.querySelector('#sex');
        this.Date = document.querySelector('#Date');
        this.redirectLink = document.querySelector('#redirect_link');
    }

    initControllers(controller) {
        this.formController = controller;
    }

    initListeners() {
        this.form.addEventListener( 'submit', (e) => {
            e.preventDefault();
            if(this.model.isAuthorized) {
                this.redirectLink.click();
            }
        });
    }

    signUp() {
        this.formController({
            Name: this.Name.value,
            email: this.email.value,
            password: this.password.value,
            sex: this.sex.value,
            Date: this.Date.value,
        });
    }
}