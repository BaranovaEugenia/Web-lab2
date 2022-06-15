export default class View {
    constructor(model) {
        this.model = model;
        this.user = this.model.userInfo;
        this.Name = null;
        this.email = null;
        this.sex = null;
        this.Date = null;
        this.initView();
    }

    initView() {
        this.initElements();
        this.showUserInfo();
    }

    initElements() {
        this.Name = document.querySelector('#Name');
        this.email = document.querySelector('#email');
        this.sex = document.querySelector('#sex');
        this.Date = document.querySelector('#Date');
    }

    showUserInfo() {
        this.Name.innerText = this.user.Name || '';
        this.email.innerText = this.user.email || '';
        this.sex.innerText = this.user.sex || '';
        this.Date.innerText = this.user.Date || '';
    }
}