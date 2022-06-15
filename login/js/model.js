export default class Model {
    constructor() {
        this.isAuthorized = false;
    }

    logIn({ email, password }) {
        const user = JSON.parse(localStorage.getItem('DiaryUser'));
        this.isAuthorized = user?.email === email && user?.password === password;
    }
}