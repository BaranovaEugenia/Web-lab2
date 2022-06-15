export class DayModel {
    constructor(date, about, task) {
        this.date = date || '';
        this.about = about || '';
        this.task = task || '';
    }
}