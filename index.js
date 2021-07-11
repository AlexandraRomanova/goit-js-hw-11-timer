class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.interval = null;

        this.updateDate()
    }

    getRefs() {
        return {
            days: document.querySelector(`${this.selector} [data-value="days"]`),
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            mins: document.querySelector(`${this.selector} [data-value="mins"]`),
            secs: document.querySelector(`${this.selector} [data-value="secs"]`),
        }
    }

    updateDate() {
        this.interval = setInterval(() => {
            const { days, hours, mins, secs } = this.getRefs();
            const time = this.targetDate - Date.now();

            if (time < 0) {
                clearInterval(this.interval)
                return
            }

            days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
            hours.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            mins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            secs.textContent = Math.floor((time % (1000 * 60)) / 1000);
        }, 1000)
    }

};



const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 26, 2024'),
});