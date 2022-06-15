export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.view.initControllers({
            addDay: this.addDay,
            removeDay: this.removeDay,
        });
        this.init();
    }

    init() {
        this.initElements();
        this.initListeners();
    }

    initElements() {
        this.addDayBtn = document.querySelector('#add_day');
    }

    initListeners() {
        this.addDayBtn.addEventListener( 'click', () => {
            const buttonEventAttr = this.addDayBtn.getAttribute('data-event-type');
            if(buttonEventAttr === 'save-day') {
                this.view.onAddDay();
            }
        });
    }

    addDay(day) {
        this.model.addDay(day);
    }

    removeDay(id) {
        this.model.removeDay(id);
    }
}