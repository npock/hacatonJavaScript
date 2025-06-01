import { Module } from '../core/module'

export class ClicksModule extends Module {

    trigger() {
        this.$button = document.querySelector('[data-type="click-counter"]');
        this.$menu = document.querySelector('ul');
        if (this.$button) {
            this.$button.addEventListener('click', () => {
                this.clear();
                this.startClicks();
            });
        }
    }

    clear() {
        if (this.$resultCounter) {
            this.$resultCounter.remove();
        }
    }

    startClicks() {
        // this.$button.remove();  не понимаю как реализовать закрытие меню после нажатия на кнопку
        this.counter = 0;
        let sec = 3;

        this.clicks = () => {
            this.counter += 1;
            this.showClick(this.counter)
        }

        document.body.addEventListener('click', this.clicks);
        this.timer = setInterval(() => {
            sec--;
            if (sec === 0) {
                clearInterval(this.timer)
                this.showResult(this.counter);
                if (this.clicks) {
                    document.body.removeEventListener('click', this.clicks);
                }
            }
        }, 1000);
    }

    showResult(counter) {
        this.$resultCounter = document.createElement('div');
        this.$resultCounter.className = 'result_clicks';
        this.$buttonClear = document.createElement('button');
        this.$buttonClear.className = 'button_clear';
        this.$buttonClear.textContent = 'Очистить экран';

        if (counter === 1) {
            this.$resultCounter.textContent = `За три секунды вы сделали ${counter} клик!`
        } else if (counter <= 4) {
            this.$resultCounter.textContent = `За три секунды вы сделали ${counter} клика!`
        } else {
            this.$resultCounter.textContent = `За три секунды вы сделали ${counter} кликов!`;
        }

        document.body.appendChild(this.$resultCounter);
        this.$resultCounter.appendChild(this.$buttonClear);

        this.$buttonClear.addEventListener('click', () => {
            this.$resultCounter.remove();
        })
    }
}