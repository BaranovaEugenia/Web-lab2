export default class View {
    constructor(model) {
        this.model = model;
        this.form = null;
        this.daysContainer = null;
        this.addDayController = null;
        this.removeDayController = null;
        this.dateInput = null;
        this.aboutInput = null;
        this.taskInput = null;
        this.initView();
    }

    initView() {
        this.initElements();
        this.initListeners();
        this.renderDay();
    }

    initElements() {
        this.form = document.querySelector('form');
        this.daysContainer = document.querySelector('#days_container');
        this.dateInput = document.querySelector('#date');
        this.aboutInput = document.querySelector('#about');
        this.taskInput = document.querySelector('#task');
        this.addDayBtn = document.querySelector('#add_day_btn');
        this.saveDayBtn = document.querySelector('#add_day')
    }

    initListeners() {
        this.form.addEventListener('submit', e => e.preventDefault());
        this.addDayBtn.addEventListener('click', () => {
            this.saveDayBtn.setAttribute('data-event-type', 'save-day');
        });
    }

    initControllers(controller) {
        this.addDayController = controller.addDay;
        this.removeDayController = controller.removeDay;
    }

    onAddDay() {
        this.addDayController({
            date: this.dateInput.value,
            about: this.aboutInput.value,
            task: this.taskInput.value,
        });

        this.dateInput.value = '';
        this.aboutInput.value = '';
        this.taskInput.value = '';

        this.renderDay();
    }
    onRemoveDay(id) {
        this.removeDayController(+id);
        this.renderDay();
    }

    renderDay() {
        this.daysContainer.innerHTML = '';


        this.model.days.forEach(day => {
            const currContainer = this.daysContainer;
            currContainer.insertAdjacentHTML(
                    'beforeend',
                    this.getDayHtml(day.id, day.about, day.date, day.task)
            );
        });

        document.querySelectorAll('.remove-day-btn').forEach(btn => {
            btn.addEventListener('click', () => this.onRemoveDay(btn.getAttribute('data-day-id')));
        });
    }

    getDayHtml(id, date, about, task) {
        return ` 
          <div class="card">
            <div class="card-body">
              <h3 class="card-title day-date">${about}</h3>
              <p class="card-text day-about">${date}</p>
              <h4>Plans for tomorrow</h4>
              <p class="card-text day-task">${task}</p>
              <div class="edit">
                <button type="button" class="btn-edit remove-day-btn" data-day-id="${id}">
                  Delete
                </button>
              </div>
            </div>
          </div>
        `
    }

}