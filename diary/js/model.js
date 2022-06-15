import {DayModel} from "./DayModel.js";

export default class Model {
    constructor() {
        this.isAuthorized = false;
        this.days = [];
        this.loadDay();
    }

    loadDay() {
        const user = JSON.parse(localStorage.getItem('DiaryUser'));
        this.days = user.days || [];
    }

    addDay(day) {
        if(day.date && day.about) {
            const item = new DayModel(day.date, day.about, day.task);
            const user = JSON.parse(localStorage.getItem('DiaryUser'));
            this.days.push(item);

            localStorage.setItem('DiaryUser', JSON.stringify({...user, days: this.days}));
        }
    }

    removeDay(id) {
       const idx = this.days.findIndex(el => el.id === id);
       const user = JSON.parse(localStorage.getItem('DiaryUser'));
       this.days.splice(idx, 1);

       localStorage.setItem('DiaryUser', JSON.stringify({...user, days: this.days}));
    }
}